"use client";


import './QfB.css';
import Image1 from '../../../../images/Work/quantfu/qf-5.png';

export default function QfB() {
  const title = 'Setting Standards & Defining Principles';
  const body = `Guidelines were established to ensure consistency and clarity across all touchpoints. These principles cover accessibility best practices, visual hierarchy, interaction patterns, and brand tone, ensuring that both product interfaces and marketing materials communicate a unified, user-friendly experience.`;

  return (
    <section className="qfb">
      <div className="qfb__container">
        <div className="qfb__intro">
          <h3 className="qfb__title">{title}</h3>
          <p className="qfb__body">{body}</p>
        </div>

        <div className="qfb__gallery">
          <div className="qfb__item">
            <img src={Image1.src} alt="Standards and principles artboards" className="qfb__img" />
          </div>
        </div>
      </div>
    </section>
  );
}
