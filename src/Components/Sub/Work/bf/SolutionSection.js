"use client";


import './SolutionSection.css';
import DefaultImage from '../../../../images/Work/broadfutures/bf-2.jpg';

export default function SolutionSection() {
  const title = 'The solution';
  const body = `To ground the brand in BroadFutures’ lived values and future goals, we led a series of collaborative workshops that brought stakeholders together to align on strategy and inclusive communication practices. The workshops informed the visual identity as well as the organization’s language, tone, and evolving mission and values—helping articulate who BroadFutures is today and where they are headed. These insights shaped a neuroinclusive style guide and a responsive, accessible website, where design and content were developed hand in hand to create a cohesive, holistic experience that supports diverse cognitive needs and long-term internal use.`;

  return (
    <section className="solution-section">
      <div className="solution-section__container">
        <div className="solution-row">
          <div className="solution-content">
            <h3 className="solution-title">{title}</h3>
            <p className="solution-body">{body}</p>
          </div>

          <div className="solution-visual">
            <div className="solution-visual__frame">
              <img src={DefaultImage.src} alt="Solution visual" className="solution-visual__img" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
