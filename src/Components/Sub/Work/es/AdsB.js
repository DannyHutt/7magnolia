"use client";

import React from 'react';
import './AdsB.css';
import Image1 from '../../../../images/Work/atlas/ads-6.png';
import Image2 from '../../../../images/Work/atlas/ads-7.png';
import Image3 from '../../../../images/Work/atlas/ads-8.png';

export default function AdsB() {
  const title = 'Flexible Components';
  const body = `The UI kit follows Atomic Design principles, offering a full range of modular, reusable components designed to adapt across contexts and platforms. Components are intentionally flexible, allowing teams to assemble complex interfaces while maintaining consistency in behavior, accessibility, and visual language.`;

  return (
    <section className="adsb">
      <div className="adsb__container">
        <div className="adsb__intro">
          <h3 className="adsb__title">{title}</h3>
          <p className="adsb__body">{body}</p>
        </div>

        <div className="adsb__gallery">
          <div className="adsb__item">
            <img src={Image1.src} alt="Component examples 1" className="adsb__img" />
          </div>
          <div className="adsb__item">
            <img src={Image2.src} alt="Component examples 2" className="adsb__img" />
          </div>
          <div className="adsb__item">
            <img src={Image3.src} alt="Component examples 3" className="adsb__img" />
          </div>
        </div>
      </div>
    </section>
  );
}
