"use client";


import './SectionD.css';
import Image1 from '../../../../images/Work/broadfutures/bf-11.png';

export default function SectionD() {
  const title = 'Defining Standards';
  const body = `A comprehensive style guide established the foundation for consistent, accessible brand expression at BroadFutures. It defines logo variations, usage guidance, and spacing rules, reinforced through do’s and don’ts and real-world examples to protect brand integrity. The guide serves as a shared reference that enables the brand to scale while remaining clear, inclusive, and cohesive across all touchpoints.`;

  return (
    <section className="sectiond">
      <div className="sectiond__container">
        <div className="sectiond__intro">
          <h3 className="sectiond__title">{title}</h3>
          <p className="sectiond__body">{body}</p>
        </div>

        <div className="sectiond__image-wrap">
          <img src={Image1.src} alt="Defining standards artboard" className="sectiond__img" />
        </div>
      </div>
    </section>
  );
}
