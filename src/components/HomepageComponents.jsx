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
}) {
  return (
    <div
      className={clsx(
        'homepage-section',
        hasSubSections && 'has-sub-sections',
        className
      )}
    >
      {title && <HeadingTag id={id ?? paramCase(title)}>{title}</HeadingTag>}
      {description && <p className="section-description">{description}</p>}
      <div className="section-content">{children}</div>
    </div>
  );
}

export function HomepageCard({ id, icon, svgFile, title, description, to }) {
  return (
    <Link to={to} className="homepage-card">
      {svgFile
        ?  <div className="icon"><img src={svgFile}/></div>
        :  icon && <div className="icon">{icon}</div>
      }
      <div className="card-content">
        <div className="title" id={id && paramCase(title)}>
          {title}
        </div>
        <div className="description">{description}</div>
      </div>
    </Link>
  );
}
