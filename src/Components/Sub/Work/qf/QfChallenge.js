"use client";

import React from 'react';
import './QfChallenge.css';
import Image1 from '../../../../images/Work/quantfu/qf-1.png';

export default function QfChallenge() {
  const title = 'The challenge';
  const body = `QuantFu needed a cohesive brand and UI system to make their sophisticated trading platforms more approachable and efficient. Trading can be intimidating, and their existing platform did little to guide users or help them understand the process. Inconsistent materials and interfaces made it difficult to communicate their mission and deliver a seamless, user-friendly experience across both the website and application.`;

  return (
    <section className="qfchallenge-section">
      <div className="qfchallenge__container">
        <div className="qfchallenge-row">
          <div className="qfchallenge-visual">
            <div className="qfchallenge-visual__frame">
              <img src={Image1.src} alt="QuantFu challenge visual" className="qfchallenge-visual__img" />
            </div>
          </div>

          <div className="qfchallenge-content">
            <h3 className="qfchallenge-title">{title}</h3>
            <p className="qfchallenge-body">{body}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
