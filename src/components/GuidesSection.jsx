import React from 'react';
import {
  HomepageCard as Card,
  HomepageSection as Section,
} from './HomepageComponents';

export default function GuidesSection({ title, className }) {
  return (
    <Section title={title} className={className}>
      <Card
        title="placeholder"
        description="placeholder"
        to="/guides/placeholder"
      />
    </Section>
  );
}
