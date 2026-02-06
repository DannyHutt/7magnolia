"use client";

import TertiaryButton from '../../TertiaryButton';
import './CaseStudyPreview.css';

import DefaultImage from '../../../images/Work/atlas.jpg';

/**
 * CaseStudyPreview
 * Props:
 * - title: string
 * - intro: short intro / subtitle
 * - body: long paragraph
 * - buttonLabel: CTA text
 * - imageSrc: image URL (placeholder used by default)
 * - bg: CSS variable name (eg. '--Background-App') or color string
 * - imagePosition: 'left' | 'right'
 * - className: additional class names
 *
 * Matches project token system and theming (TitleCase CSS variables in `src/index.css`).
 */
export default function CaseStudyPreview({
  title = 'Atlas Design System',
  intro = 'A multifaceted project including a scalable design system built with responsiveness and theming at its core.',
  body = 'Atlas includes a component-based UI kit, a token system that translates directly to CSS variables, and centralized documentation—ensuring consistency and streamlining collaboration across design and development teams.',
  buttonLabel = 'View case study',
  buttonOnClick,
  imageSrc = DefaultImage.src,
  bg = '--Background-App-Inset',
  imagePosition = 'right',
  className = '',
}) {
  const containerStyle = {};
  if (bg) {
    if (typeof bg === 'string' && bg.trim().startsWith('--')) {
      containerStyle.backgroundColor = `var(${bg})`;
    } else {
      containerStyle.backgroundColor = bg;
    }
  }

  const rowClass = imagePosition === 'left' ? 'case-study-row image-left' : 'case-study-row';

  return (
    <section className={`case-study-preview ${className}`} style={containerStyle}>
      <div className="case-study-preview__container">
        <div className={rowClass}>
          <div className="case-study-text">
            <h3 className="case-study-title">{title}</h3>

            {intro && <p className="case-study-intro">{intro}</p>}

            {body && <p className="case-study-body">{body}</p>}

            <div className="case-study-cta">
              <TertiaryButton onClick={buttonOnClick} size="small">{buttonLabel}</TertiaryButton>
            </div>
          </div>

          <div className="case-study-visual">
            <div className="case-study-visual__frame">
              <img src={imageSrc} alt="Case study" className="case-study-visual__img" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
