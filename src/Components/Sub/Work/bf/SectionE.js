"use client";

import React from 'react';
import './SectionE.css';
import Image1 from '../../../../images/Work/broadfutures/bf-12.png';
import Image2 from '../../../../images/Work/broadfutures/bf-13.png';
import Image3 from '../../../../images/Work/broadfutures/bf-14.png';
import Image4 from '../../../../images/Work/broadfutures/bf-15.png';
import Image5 from '../../../../images/Work/broadfutures/bf-16.png';
import Image6 from '../../../../images/Work/broadfutures/bf-17.png';
import Image7 from '../../../../images/Work/broadfutures/bf-18.png';
import Image8 from '../../../../images/Work/broadfutures/bf-19.png';
import Image9 from '../../../../images/Work/broadfutures/bf-20.png';
import Image10 from '../../../../images/Work/broadfutures/bf-21.png';


const IMAGES = {
  a: Image1.src,
  b: Image2.src,
  c: Image3.src,
  d: Image4.src,
  e: Image5.src,
  f: Image6.src,
  g: Image7.src,
  h: Image8.src,
  i: Image9.src,
  j: Image10.src,
};

export default function SectionE() {
  return (
    <section className="sectione">
      <div className="sectione__container">
        <h3 className="sectione__title">How It All Came Together</h3>

        <div className="sectione__grid">
          <div className="sectione__col">
            <div className="sectione__card">
              <img src={IMAGES.a} alt="art a" className="sectione__img" />
            </div>
            <div className="sectione__card">
              <img src={IMAGES.b} alt="art b" className="sectione__img" />
            </div>
            <div className="sectione__card">
              <img src={IMAGES.c} alt="art c" className="sectione__img" />
            </div>
          </div>

          <div className="sectione__col">
            <div className="sectione__card">
              <img src={IMAGES.d} alt="art d" className="sectione__img" />
            </div>
            <div className="sectione__card">
              <img src={IMAGES.e} alt="art e" className="sectione__img" />
            </div>
            <div className="sectione__card">
              <img src={IMAGES.f} alt="art f" className="sectione__img" />
            </div>
            <div className="sectione__card">
              <img src={IMAGES.g} alt="art g" className="sectione__img" />
            </div>
          </div>

          <div className="sectione__col">
            <div className="sectione__card">
              <img src={IMAGES.h} alt="art h" className="sectione__img" />
            </div>
            <div className="sectione__card">
              <img src={IMAGES.i} alt="art i" className="sectione__img" />
            </div>
            <div className="sectione__card">
              <img src={IMAGES.j} alt="art j" className="sectione__img" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
