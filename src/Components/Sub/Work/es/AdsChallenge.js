"use client";

import React from 'react';
import './AdsChallenge.css';
import Image1 from '../../../../images/Work/atlas/ads-1.png';

export default function AdsChallenge() {
  const title = 'The challenge';
  const body = `As EstateSpace’s product ecosystem expanded, maintaining a consistent experience across web and native platforms became increasingly challenging. Updating the UI was a manual, time-consuming process that placed a heavy burden on the development team. The organization needed a scalable, themable system with built-in responsiveness that could improve collaboration and reduce friction between design and engineering teams.`;

  return (
    <section className="adschallenge-section">
      <div className="adschallenge__container">
        <div className="adschallenge-row">
          <div className="adschallenge-visual">
            <div className="adschallenge-visual__frame">
              <img src={Image1.src} alt="Ads challenge visual" className="adschallenge-visual__img" />
            </div>
          </div>

          <div className="adschallenge-content">
            <h3 className="adschallenge-title">{title}</h3>
            <p className="adschallenge-body">{body}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
