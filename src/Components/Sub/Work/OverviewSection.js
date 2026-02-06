"use client";


import './OverviewSection.css';
import DEFAULT_HERO from '../../../images/Work/broadfutures/work-hero-bf.jpg';

/**
 * OverviewSection
 * Props:
 * - eyebrow: short uppercase label (default: 'OVERVIEW')
 * - title: not used in design — section shows paragraph content
 * - body: paragraph content
 * - roles: array of strings
 * - heroSrc: hero image url
 * - bg: CSS variable name (eg. '--Background-App') or color string
 * - className: additional class names
 */
export default function OverviewSection({
  eyebrow = 'OVERVIEW',
  body = `BroadFutures partnered with us to reimagine their brand with inclusivity and neurodivergent experiences at its core. Together, we developed a comprehensive style guide defining inclusive visual and content practices to support consistent, accessible communication. We also designed and built a responsive, WCAG-compliant website that prioritizes reduced cognitive load, intuitive wayfinding and navigation, clear, direct language, and thoughtful guidance that helps set expectations at every step of the experience. To align on strategy and generate creative momentum, we facilitated a series of collaborative design workshops that informed the brand strategy, explored concept directions, and clarified BroadFutures’ overall vision.`,
  roles = ['Inclusive Strategy & Design', 'UX/UI', 'Development'],
  heroSrc = DEFAULT_HERO.src,
  bg = '--Background-App',
  className = '',
}) {
  const style = {};
  if (bg) {
    if (typeof bg === 'string' && bg.trim().startsWith('--')) {
      style.backgroundColor = `var(${bg})`;
    } else {
      style.backgroundColor = bg;
    }
  }

  return (
    <section className={`overview-section ${className}`} style={style}>
      <div className="overview-section__hero">
        <div className="overview-hero__frame">
          <img src={heroSrc} alt="Work hero" className="overview-hero__img" />
        </div>
      </div>

      <div className="overview-section__content">
        <div className="overview-left">
          <p className="overview-eyebrow">{eyebrow}</p>

          <span className="overview-body">{body}</span>
        </div>

        <aside className="overview-right">
          <p className="overview-roles-eyebrow">ROLES</p>

          <div className="overview-roles-list">
            {roles.map((r, i) => (
              <p key={i} className="overview-role-item">{r}</p>
            ))}
          </div>
        </aside>
      </div>
    </section>
  );
}
