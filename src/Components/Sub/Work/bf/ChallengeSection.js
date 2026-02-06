"use client";

import DefaultImage from '../../../../images/Work/broadfutures/bf-1.jpg';
import './ChallengeSection.css';


export default function ChallengeSection() {
  const title = 'The challenge';
  const body = `As BroadFutures grew, they needed a brand that not only communicated their mission, but actively practiced the inclusive principles they champion. To better reflect the organization’s maturity and support their neurodivergent audience, their brand needed to evolve. Without a centralized style guide, design and messaging varied across materials, and the existing logo no longer captured the full scope of their mission. Their website also required an overhaul to meet WCAG accessibility standards and enable easier internal management—ensuring an accessible, engaging experience for all.`;

  return (
    <section className="challenge-section">
      <div className="challenge-section__container">
        <div className="challenge-row">
          <div className="challenge-visual">
            <div className="challenge-visual__frame">
              <img src={DefaultImage.src} alt="Challenge visual" className="challenge-visual__img" />
            </div>
          </div>

          <div className="challenge-content">
            <h3 className="challenge-title">{title}</h3>
            <p className="challenge-body">{body}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
