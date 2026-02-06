"use client";

import './ImageOnlySection.css';
import DefaultImage from '../../../images/Work/broadfutures/Frame 1000003121.jpg';

export default function ImageOnlySection({ imageSrc = DefaultImage, bgColor }) {
  const sectionStyle = bgColor ? { backgroundColor: bgColor } : undefined;

  return (
    <section className="imageonly-section" style={sectionStyle}>
      <div className="imageonly-section__container">
        <div className="imageonly-content">
          <div className="imageonly-frame">
            <img src={imageSrc} alt="Decorative" className="imageonly-img" />
          </div>
        </div>
      </div>
    </section>
  );
}
