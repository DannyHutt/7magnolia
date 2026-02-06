"use client";

import React from 'react';
import './AdsD.css';
import Image1 from '../../../../images/Work/atlas/ads-10.png';

export default function AdsD() {
  const title = 'Variables and Naming Conventions';
  const intro = `Clear, standardized naming conventions were established for tokens, components, and variables to reduce ambiguity and improve cross-team communication. This shared language helps designers and developers work more efficiently, making the system easier to maintain, extend, and scale over time.`;

  return (
    <section className="adsd">
      <div className="adsd__container">
        <div className="adsd__intro">
          <h3 className="adsd__title">{title}</h3>
          <p className="adsd__body">{intro}</p>
        </div>

        <div className="adsd__visual">
          <img src={Image1.src} alt="Variables and naming conventions artboards" className="adsd__img" />
        </div>
      </div>
    </section>
  );
}
