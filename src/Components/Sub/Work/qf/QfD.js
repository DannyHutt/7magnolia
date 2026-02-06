"use client";

import React from 'react';
import './QfD.css';
import Image1 from '../../../../images/Work/quantfu/qf-8.png';
import Image2 from '../../../../images/Work/quantfu/qf-9.png';
import Image3 from '../../../../images/Work/quantfu/qf-10.png';

export default function QfD() {
  const title = 'How It All Came Together';

  return (
    <section className="qfd">
      <div className="qfd__container">
        <h3 className="qfd__title">{title}</h3>

        <div className="qfd__grid">
          <div className="qfd__card"><img src={Image1.src} alt="qf a" className="qfd__img" /></div>
          <div className="qfd__card"><img src={Image2.src} alt="qf b" className="qfd__img" /></div>
          <div className="qfd__card"><img src={Image3.src} alt="qf c" className="qfd__img" /></div>
        </div>
      </div>
    </section>
  );
}
