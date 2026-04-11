import React from 'react';
import { paramCase } from 'param-case';
import Link from '@docusaurus/Link';
import clsx from 'clsx';

export function HomepageSection({
  id,
  title,
  children,
  description,
  className,
  hasSubSections = false,
  HeadingTag = 'h3',
  accentColor,
}) {
  const headingId = id ?? (title ? paramCase(title) : undefined);

  return (
    <section
      className={clsx(
        'homepage-section',
        hasSubSections && 'has-sub-sections',
        className
      )}
      aria-labelledby={headingId}
      style={accentColor ? { '--section-accent': accentColor } : undefined}
    >
      {title && (
        <div className="section-header">
          <div>
            <HeadingTag id={headingId}>{title}</HeadingTag>
            {description && (
              <p className="section-description">{description}</p>
            )}
          </div>
        </div>
      )}
      {!title && description && (
        <p className="section-description">{description}</p>
      )}
      <div className="section-content">{children}</div>
    </section>
  );
}

const ChevronRight = () => (
  <svg
    className="card-arrow"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M6 3l5 5-5 5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export function HomepageCard({ id, icon, svgFile, title, description, to, badge }) {
  return (
    <Link to={to} className="homepage-card">
      <div className="card-icon-wrapper" aria-hidden="true">
        {svgFile ? <img src={svgFile} alt="" /> : icon}
      </div>
      <div className="card-content">
        {badge && <span className="card-badge">{badge}</span>}
        <div className="card-title" id={id && paramCase(title)}>
          <span>{title}</span>
          <ChevronRight />
        </div>
        <div className="card-description">{description}</div>
      </div>
    </Link>
  );
}
