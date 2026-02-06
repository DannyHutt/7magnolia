"use client";


import './AdsSolution.css';
import Image1 from '../../../../images/Work/atlas/ads-2.png';

export default function AdsSolution() {
  const title = 'The solution';
  const body = `We created Atlas, a governance-focused design system that unifies the digital experience across platforms. Atlas provides a shared foundation through a robust UI kit, a token-based system that translates directly to CSS variables, and centralized documentation that serves as a single source of truth—streamlining workflows, accelerating both design and engineering, and ensuring consistency as the product evolves.`;

  return (
    <section className="adssolution-section">
      <div className="adssolution__container">
        <div className="adssolution-row">
          <div className="adssolution-content">
            <h3 className="adssolution-title">{title}</h3>
            <p className="adssolution-body">{body}</p>
          </div>

          <div className="adssolution-visual">
            <div className="adssolution-visual__frame">
              <img src={Image1.src} alt="Solution visual" className="adssolution-visual__img" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
