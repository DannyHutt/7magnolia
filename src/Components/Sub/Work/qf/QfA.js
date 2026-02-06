"use client";


import './QfA.css';
import Image1 from '../../../../images/Work/quantfu/qf-4.png';

export default function QfA() {
  const title = 'Building the Brand Foundation';
  const body = `The brand foundation was designed to capture QuantFu’s mission and personality. Visual elements, typography, and UI cues were developed to reduce cognitive load and make interfaces feel welcoming. The “bot” character was introduced to personify the platform, creating a relatable guide that helps users navigate complex trading tasks with confidence.`;

  return (
    <section className="qfa">
      <div className="qfa__container">
        <div className="qfa__intro">
          <h3 className="qfa__title">{title}</h3>
          <p className="qfa__body">{body}</p>
        </div>

        <div className="qfa__visual">
          <img src={Image1.src} alt="Brand foundation artboards" className="qfa__img" />
        </div>
      </div>
    </section>
  );
}
