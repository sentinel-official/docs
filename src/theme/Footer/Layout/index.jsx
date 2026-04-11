import React from 'react';
import clsx from 'clsx';

export default function FooterLayout({ style, links, logo, copyright }) {
  // Tally Popup
  // useEffect(() => {
  //   const script = document.createElement('script');
  //   script.src = 'https://tally.so/widgets/embed.js';
  //   script.async = true;
  //   document.body.appendChild(script);

  //   window.TallyConfig = {
  //     formId: 'write-your-form-id',
  //     popup: {
  //       width: 900,
  //       emoji: {
  //         text: '👋',
  //         animation: 'wave'
  //       },
  //       layout: 'modal',
  //       showOnce: true,
  //       autoClose: 0
  //     }
  //   };
  // }, []);

  return (
    <footer
      className={clsx('footer', {
        'footer--dark': style === 'dark',
      })}
    >
      <div className="container container-fluid">
        <div className="footer__row">
          <div className="footer__data">
            {logo && <div className="footer__logo-wrap">{logo}</div>}
            <p className="footer__tagline">
              Decentralized bandwidth for a free internet
            </p>
          </div>
          <div className="links">{links}</div>
        </div>
        {copyright && (
          <div className="footer__bottom text--center">{copyright}</div>
        )}
      </div>
    </footer>
  );
}
