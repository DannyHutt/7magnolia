'use client';

import React from 'react';
import './Masthead.css';

export default function Masthead({ eyebrow = 'Services', title = null }) {
  const defaultTitle = (
    <>
      Our design &
      <br />
      engineering skills
    </>
  );

  return (
    <section className="masthead" aria-labelledby="Masthead-heading">
      <div className="masthead__container">
        <div className="masthead__content">
          <p className="masthead__eyebrow">{eyebrow}</p>
          <h1 id="Masthead-heading" className="masthead__title">
            {title || defaultTitle}
          </h1>
        </div>
      </div>
    </section>
  );
}
