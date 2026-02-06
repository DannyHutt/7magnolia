import React from 'react';
import PrimaryButton from './PrimaryButton';
import './SectionSkillsCloud.css';

const SKILLS = [
  ['Research & Testing', 'Usability Studies', 'Participatory Design', 'Branding','Product Design', 'Design Systems', 'Web Design', 'Component Libraries','Content Strategy', 'Journey Mapping', 'Application Development', 'Mobile Apps','Experience Design', 'Prototyping', 'UI Kits', 'UI/UX'],
];

/**
 * SectionSkillsCloud (CSS-driven)
 * - Uses CSS classes and `:root` variables from `src/index.css` for theming,
 *   matching the approach used by `SectionSteps`.
 * - Removes runtime Figma JSON resolution; visual tokens are provided
 *   by the global CSS variables.
 */
export default function SectionSkillsCloud() {
  return (
    <section className="section-skills-cloud">
      <div className="section-skills-cloud__container">
        <div className="section-skills-cloud__inner">
          <h2 className="section-skills-cloud__title">From concept to launch,<br/>we have you covered.</h2>

          <p className="section-skills-cloud__lead">
            Whether you need a proof-of-concept or full end-to-end product launch, we can assemble the right team with the
            right skills.
          </p>

          <div className="skills-cloud">
            {SKILLS.map((row, ri) => (
              <div className="skills-cloud__row" key={ri}>
                {row.map((skill, si) => {
                  const isAccent = ['Research & Testing', 'Design Systems', 'Application Development'].includes(skill);
                  return (
                    <div key={si} className={`skill-pill ${isAccent ? 'skill-pill--accent' : ''}`}>
                      {skill}
                    </div>
                  );
                })}
              </div>
            ))}
          </div>

          <div className="section-skills-cloud__cta">
            <PrimaryButton onClick={'/contact'} size="large">Let’s Talk!</PrimaryButton>
          </div>
        </div>
      </div>
    </section>
  );
}
