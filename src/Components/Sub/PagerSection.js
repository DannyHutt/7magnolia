"use client";

import React from 'react';
import PagerButton from '../PagerButton';
import './PagerSection.css';

/**
 * PagerSection
 * Renders a left and right pager button aligned to the edges of the content
 * - leftRoute, rightRoute: optional routes to navigate to when buttons are clicked
 * - leftLabel, rightLabel: button labels
 * - className: extra classes
 */
export default function PagerSection({
  leftRoute = '',
  rightRoute = '',
  leftLabel = 'Previous',
  rightLabel = 'Next',
  className = '',
}) {
  return (
    <section className={`pager-section ${className}`}>
      <div className="pager-section__container">
        <div className="pager-row">
          <div className="pager-row__left">
            <PagerButton direction="previous" route={leftRoute}>{leftLabel}</PagerButton>
          </div>

          <div className="pager-row__right">
            <PagerButton direction="next" route={rightRoute}>{rightLabel}</PagerButton>
          </div>
        </div>
      </div>
    </section>
  );
}
