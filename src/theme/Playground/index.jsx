import React, { useEffect } from 'react';
import clsx from 'clsx';
import useIsBrowser from '@docusaurus/useIsBrowser';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import Translate from '@docusaurus/Translate';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import BrowserOnly from '@docusaurus/BrowserOnly';
import { usePrismTheme } from '@docusaurus/theme-common';
import styles from './styles.module.css';
import { DyteProvider, useDyteClient } from '@dytesdk/react-web-core';

function Header({ children }) {
  return <div className={clsx(styles.playgroundHeader)}>{children}</div>;
}

function LivePreviewLoader() {
  // Is it worth improving/translating?
  return <div>Loading...</div>;
}

function ResultWithHeader() {
  return (
    <>
      <Header>
        <Translate
          id="theme.Playground.result"
          description="The result label of the live codeblocks"
        >
          Result
        </Translate>
      </Header>
      {/* https://github.com/facebook/docusaurus/issues/5747 */}
      <div className={styles.playgroundPreview}>
        <BrowserOnly fallback={<LivePreviewLoader />}>
          {() => (
            <>
              <LivePreview />
              <LiveError />
            </>
          )}
        </BrowserOnly>
      </div>
    </>
  );
}

function ThemedLiveEditor() {
  const isBrowser = useIsBrowser();
  return (
    <LiveEditor
      // We force remount the editor on hydration,
      // otherwise dark prism theme is not applied
      key={String(isBrowser)}
      className={styles.playgroundEditor}
    />
  );
}
function EditorWithHeader() {
  return (
    <>
      <Header>
        <Translate
          id="theme.Playground.liveEditor"
          description="The live editor label of the live codeblocks"
        >
          Live Editor
        </Translate>
      </Header>
      <ThemedLiveEditor />
    </>
  );
}

export default function Playground({ children, transformCode, ...props }) {
  const {
    siteConfig: { themeConfig },
  } = useDocusaurusContext();

  const {
    liveCodeBlock: { playgroundPosition },
  } = themeConfig;

  const prismTheme = usePrismTheme();

  const [client, initClient] = useDyteClient();

  // TODO: Uncomment following block of code after adding mock web-core package
  useEffect(() => {
    initClient({
      roomName: '',
      authToken: '',
      defaults: {
        audio: false,
        video: false,
      },
    }).then((meeting) => {
      meeting.meta.meetingStartedTimestamp = new Date();
      meeting.participants.mockAddParticipants(5, 5);
      meeting.recording.recordingState = 'RECORDING';
    });
  }, []);

  if (typeof window !== 'undefined') {
    window.meeting = client || {};
  }

  return (
    <div className={styles.playgroundContainer}>
      <DyteProvider value={client}>
        {/* @ts-expect-error: type incompatibility with refs */}
        <LiveProvider
          code={children.replace(/\n$/, '')}
          transformCode={transformCode ?? ((code) => `${code};`)}
          theme={prismTheme}
          {...props}
        >
          {playgroundPosition === 'top' ? (
            <>
              <ResultWithHeader />
              <EditorWithHeader />
            </>
          ) : (
            <>
              <EditorWithHeader />
              <ResultWithHeader />
            </>
          )}
        </LiveProvider>
      </DyteProvider>
    </div>
  );
}
