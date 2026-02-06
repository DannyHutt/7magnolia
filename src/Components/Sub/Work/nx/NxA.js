"use client";

import './NxA.css';
import Image1 from '../../../../images/Work/neurox/nx-4.png';
import Image2 from '../../../../images/Work/neurox/nx-5.png';
import Image3 from '../../../../images/Work/neurox/nx-6.png';
import Image4 from '../../../../images/Work/neurox/nx-7.png';

const IMAGES = {
  a: Image1.src,
  b: Image2.src,
  c: Image3.src,
  d: Image4.src,
};

export default function NxA() {
  const title = 'A Brand Rooted in Community';
  const body = `The NeuroX Network logo and visual identity are inspired by the idea of forging one’s own path, reflecting the creativity, innovation, and resilience of neurodivergent communities. A vibrant, energetic color palette was chosen to convey optimism, creativity, and possibility, while imagery featuring authentic, diverse individuals highlights unique talents and fosters a sense of belonging. Together, these elements illuminate the brand’s mission and create a welcoming visual identity that celebrates the strengths and contributions of the neurodivergent community.`;

  return (
    <section className="nxa">
      <div className="nxa__container">
        <div className="nxa__intro">
          <h3 className="nxa__title">{title}</h3>
          <p className="nxa__body">{body}</p>
        </div>

        <div className="nxa__gallery">
          <div className="nxa__card"><img src={IMAGES.a} alt="nx art a" className="nxa__img" /></div>
          <div className="nxa__card"><img src={IMAGES.b} alt="nx art b" className="nxa__img" /></div>
          <div className="nxa__card"><img src={IMAGES.c} alt="nx art c" className="nxa__img" /></div>
          <div className="nxa__card"><img src={IMAGES.d} alt="nx art d" className="nxa__img" /></div>
        </div>
      </div>
    </section>
  );
}
