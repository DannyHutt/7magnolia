"use client";


import './AdsA.css';
import Image1 from '../../../../images/Work/atlas/ads-4.png';
import Image2 from '../../../../images/Work/atlas/ads-5.png';

// Figma-exported placeholder images
const IMAGE_TOP = 'http://localhost:3845/assets/1c89d3805ad6819f9c077d643568beae08def401.png';
const IMAGE_MID = 'http://localhost:3845/assets/24554a1abcb75d4e5ffa1046569a930393c5a41f.png';

export default function AdsA() {
  const title = 'Design Tokens and Themes';
  const body = `Atlas is built on a flexible token system that abstracts design decisions—such as color, typography, spacing, and motion—into reusable variables. These tokens enable theming across products while ensuring accessibility and consistency, and they translate directly into CSS variables to support seamless handoff and implementation by development teams.`;

  return (
    <section className="adsa">
      <div className="adsa__container">
        <div className="adsa__intro">
          <h3 className="adsa__title">{title}</h3>
          <p className="adsa__body">{body}</p>
        </div>

        <div className="adsa__images">
          <div className="adsa__image-large">
            <img src={Image1.src} alt="Tokens artboard" className="adsa__img" />
          </div>
          <div className="adsa__image-large">
            <img src={Image2.src} alt="Typography artboard" className="adsa__img" />
          </div>
        </div>
      </div>
    </section>
  );
}
