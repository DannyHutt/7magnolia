"use client";

import React from 'react';
import './AdsC.css';
import Image1 from '../../../../images/Work/atlas/ads-9.png';

export default function AdsC() {
  const title = 'Sizing System';
  const intro = `A consistent sizing system underpins the design system, creating predictable spacing, layout, and rhythm across products. This approach supports responsive behavior and scalability, ensuring interfaces remain usable and visually balanced across screen sizes and device types.`;

  return (
    <section className="adsc">
      <div className="adsc__container">
        <div className="adsc__intro">
          <h3 className="adsc__title">{title}</h3>
          <p className="adsc__body">{intro}</p>
        </div>

        <div className="adsc__visual">
          <img src={Image1.src} alt="Sizing system artboards" className="adsc__img" />
        </div>
      </div>
    </section>
  );
}
