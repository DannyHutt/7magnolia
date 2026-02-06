'use client';

import React from 'react';
import PrimaryButton from './PrimaryButton';
import SecondaryButton from './SecondaryButton';
import ESPreview from '../images/ESPreview.jpg';
import QFPreview from '../images/QFPreview.jpg';
import BFPreview from '../images/BFPreview.jpg';
import './SectionOurWork.css';

// Items and copy taken from the Figma node `3820:2512` so the section matches exactly.
const WORK_ITEMS = [
  {
    id: 'es',
    eyebrow: 'design system • UX/UI',
    title: 'Atlas Design System',
    excerpt:
      'A multifaceted project including web and native app design, company website, and brand refresh, all unified by a comprehensive design system.',
    img: ESPreview.src,
  },
  {
    id: 'qf',
    eyebrow: 'design system • UX/UI',
    title: 'QuantFu UI Kit',
    excerpt:
      'An application designed to simplify complex stock trading while empowering users through an approachable brand experience.',
    img: QFPreview.src,
  },
  {
    id: 'bf',
    eyebrow: 'inclusive strategy & design • UX/UI',
    title: 'BroadFutures',
    excerpt:
      'A brand that embodies their mission: To illuminate and celebrate the untapped talent of the neurodivergent workforce.',
    img: BFPreview.src,
  },
];

export default function SectionOurWork() {
  return (
    <section className="section-our-work" aria-labelledby="OurWork-heading">
      <div className="section-our-work__container">
        <div className="section-our-work__inner">
          <p className="section-our-work__heading">Our Work</p>

          <div className="section-our-work__content">
            <div className="section-our-work__grid">
              {WORK_ITEMS.map((item) => (
                <div className="section-our-work__item" key={item.id}>
                  <div className="section-our-work__media">
                    <img src={item.img} alt="" className="section-our-work__image" />
                  </div>
                  <div className="section-our-work__meta">
                    <p className="section-our-work__meta-eyebrow">{item.eyebrow}</p>
                    <h3 className="section-our-work__meta-title">{item.title}</h3>
                    <p className="section-our-work__meta-excerpt">{item.excerpt}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="section-our-work__footer">
            <SecondaryButton onClick={'/work'} size="large">See our case studies</SecondaryButton>
          </div>
        </div>
      </div>
    </section>
  );
}
