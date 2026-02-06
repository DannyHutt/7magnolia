"use client";


import './AdsE.css';
import Image1 from '../../../../images/Work/atlas/ads-11.png';
import Image2 from '../../../../images/Work/atlas/ads-12.png';
import Image3 from '../../../../images/Work/atlas/ads-13.png';
import Image4 from '../../../../images/Work/atlas/ads-14.png';
import Image5 from '../../../../images/Work/atlas/ads-15.png';
import Image6 from '../../../../images/Work/atlas/ads-16.png';
import Image7 from '../../../../images/Work/atlas/ads-17.png';
import Image8 from '../../../../images/Work/atlas/ads-18.png';

const IMAGES = {
  a: Image1.src,
  b: Image2.src,
  c: Image3.src,
  d: Image4.src,
  e: Image5.src,
  f: Image6.src,
  g: Image7.src,
  h: Image8.src,
};

export default function AdsE() {
  return (
    <section className="adse">
      <div className="adse__container">
        <h3 className="adse__title">How It All Came Together</h3>

        <div className="adse__grid">
          <div className="adse__col">
            <div className="adse__card"><img src={IMAGES.a} alt="art a" className="adse__img" /></div>
            <div className="adse__card"><img src={IMAGES.b} alt="art b" className="adse__img" /></div>
            <div className="adse__card"><img src={IMAGES.c} alt="art c" className="adse__img" /></div>
          </div>

          <div className="adse__col">
            <div className="adse__card"><img src={IMAGES.d} alt="art d" className="adse__img" /></div>
            <div className="adse__card"><img src={IMAGES.e} alt="art e" className="adse__img" /></div>
            <div className="adse__card"><img src={IMAGES.f} alt="art f" className="adse__img" /></div>
          </div>

          <div className="adse__col">
            <div className="adse__card"><img src={IMAGES.g} alt="art g" className="adse__img" /></div>
            <div className="adse__card"><img src={IMAGES.h} alt="art h" className="adse__img" /></div>
          </div>
        </div>
      </div>
    </section>
  );
}
