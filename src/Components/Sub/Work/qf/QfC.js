"use client";

import './QfC.css';
import Image1 from '../../../../images/Work/quantfu/qf-6.png';
import Image2 from '../../../../images/Work/quantfu/qf-7.png';

export default function QfC() {
  const title = 'Component Library';
  const body = `A modular, reusable component library was created using Atomic Design principles. Components are flexible enough to support a wide range of use cases while maintaining a consistent aesthetic, behavior, and accessibility standards. This library serves as a single source of truth for design and development teams, streamlining workflows and supporting scalable product growth.`;

  return (
    <section className="qfc">
      <div className="qfc__container">
        <div className="qfc__intro">
          <h3 className="qfc__title">{title}</h3>
          <p className="qfc__body">{body}</p>
        </div>

        <div className="qfc__stack">
          <div className="qfc__image-top">
            <img src={Image1.src} alt="Component library top" className="qfc__img" />
          </div>
          <div className="qfc__image-bottom">
            <img src={Image2.src} alt="Component library bottom" className="qfc__img" />
          </div>
        </div>
      </div>
    </section>
  );
}
