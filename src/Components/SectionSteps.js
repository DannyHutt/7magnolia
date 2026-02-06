'use client';

import React from 'react';
import PrimaryButton from './PrimaryButton';
import './SectionSteps.css';

const SectionSteps = () => {

  const steps = [
    {
      number: 1,
      title: 'Join exploration call',
      description: 'Tell us more about your business and project on the discovery call. We\'ll talk about what skill sets are needed, timing, budget, and success criteria.',
    },
    {
      number: 2,
      title: 'Discuss solution and team model',
      description: 'Once we finalize your project requirements, we will agree on an engagement model and build your team.',
    },
    {
      number: 3,
      title: 'Onboard and project launch',
      description: 'After agreeing on milestones and deliverables, we will assemble your team and kickoff the project. All along, we will continue to adapt to your needs.',
    },
  ];

  return (
    <section className="section-steps">
      <div className="section-steps__container">
        <div className="section-steps__content">
          <div className="section-steps__track">
            <div className="section-steps__header">
              <h2 className="section-steps__title">
                We like to keep it simple.<br />
                Get started in just 3 steps.
              </h2>
              <PrimaryButton onClick={'/contact'} size="large" className="section-steps__cta-button">Schedule a call</PrimaryButton>
            </div>
          </div>

          <div className="steps-list">
            {steps.map((step, index) => (
              <div key={step.number} className="step-item">
                {index < steps.length - 1 && <div className="step-connector" />}
                <div className="step-content">
                  <div className="step-number">{step.number}</div>
                  <div className="step-text">
                    <h3 className="step-title">{step.title}</h3>
                    <p className="step-description">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionSteps;
