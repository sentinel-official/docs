import React from 'react';
import { useHistory } from '@docusaurus/router';
import clsx from 'clsx';
import VersionDropdown from '@theme/NavbarItem/DocsVersionDropdownNavbarItem';
import useGlobalData from '@docusaurus/useGlobalData';

import SectionsMenu from '../SectionsMenu';
import useSectionMenu from '../../lib/useSectionMenu';
import styles from './styles.module.css';

export default function SidebarMenu() {
  const router = useHistory();
  const { id, sections, isMultiSection } = useSectionMenu();
  const globalData = useGlobalData();
  const allDocs = globalData['docusaurus-plugin-content-docs'];

  if (!sections) return null;

  const handleSectionChange = (selectedSection) => {
    if (selectedSection !== id) {
      const { pathname, hash } = router.location;
      const page = `/${selectedSection}/` + pathname.split('/').slice(2).join('/');

      const selectedSectionDocs = allDocs[selectedSection].versions[0].docs;

      if (selectedSectionDocs.find((doc) => doc.path === page)) {
        const path = page + (hash && hash.length > 0 ? '#' + hash : '')
        router.push(path);
      } else {
        router.push(selectedSectionDocs[0].path)
      }
    }
  };

  if (!isMultiSection) {
    return (
      <div className={styles.container}>
        <SectionsMenu
          defaultValue={id}
          values={sections}
          onValueChange={handleSectionChange}
          className={styles.sectionsMenu}
        />
        <VersionDropdown docsPluginId={id} dropdownItemsBefore={[]} dropdownItemsAfter={[]} />
      </div>
    );
  }

  const { currentSection, data } = sections;
  const activeSectionData = data[currentSection];

  if (!activeSectionData) {
    // Handle the case where the active section data is not found.
    return null;
  }

  const { name, items } = activeSectionData;

  const navigateToFirstSection = () => handleSectionChange(items[0].id);

  return (
    <div className={styles.multiSectionContainer}>
      <div
        className={clsx(styles.section, styles.sectionActive)}
        onClick={navigateToFirstSection}
        onKeyDown={(e) => {
          if (e.code === 'Space' || e.code === 'Enter') {
            navigateToFirstSection();
          }
        }}
        tabIndex={0}
      >
        <div>{name}</div>
        <div className={styles.row}>
          <SectionsMenu
            defaultValue={id}
            values={items}
            onValueChange={handleSectionChange}
            className={styles.sectionsMenu}
          />
        </div>
      </div>
    </div>
  );
}
