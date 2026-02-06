"use client";


import './SectionC.css';
import Image1 from '../../../../images/Work/broadfutures/bf-8.png';
import Image2 from '../../../../images/Work/broadfutures/bf-9.png';
import Image3 from '../../../../images/Work/broadfutures/bf-10.png';

export default function SectionC() {
  const title = 'Inclusion & Accessibility as the Brand Foundation';
  const intro = `Inclusion and accessibility were central to the direction of the new brand. Colors were selected and tested to meet at least AA contrast standards, with guidance on appropriate usage for large and small text. Content guidelines were developed to encourage plain language, strength-based communication and identify terminology to avoid or replace. Best practices for creating accessible content—including digital and interactive media—were also established. A font specifically designed to support readability, particularly for dyslexic readers, was chosen, and photography direction focused on authentically representing the neurodivergent community to foster a sense of belonging.`;

  return (
    <section className="sectionc">
      <div className="sectionc__container">
        <div className="sectionc__intro">
          <h3 className="sectionc__title">{title}</h3>
          <p className="sectionc__body">{intro}</p>
        </div>

        <div className="sectionc__block">
          <h4 className="sectionc__h4">Color Contrast</h4>
          <p className="sectionc__small">All colors meet minimum AA accessibility color contrast requirements. Any limitations were noted.</p>
          <div className="sectionc__image-contrast">
            <img src={Image1.src} alt="Color contrast swatches" className="sectionc__img" />
          </div>
        </div>

        <div className="sectionc__block">
          <h4 className="sectionc__h4">Neuro-Inclusive Content Guidelines and Accessibility Best Practices</h4>
          <div className="sectionc__image-guides">
            <div className="sectionc__guide">
              <img src={Image2.src} alt="Guide page 1" className="sectionc__img" />
            </div>
            <div className="sectionc__guide">
              <img src={Image3.src} alt="Guide page 2" className="sectionc__img" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
