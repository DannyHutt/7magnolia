"use client";


import './NxChallenge.css';
import Image1 from '../../../../images/Work/neurox/nx-1.png';

export default function NxChallenge() {
  const title = 'The challenge';
  const body = `As a brand-new organization, the NeuroX Network needed a complete brand and conference experience to bring their mission to life: empowering neurodivergent individuals in employment and career growth. With no existing visual identity or framework, our challenge was to design an experience that celebrated diversity, showcased hidden talents, and created a welcoming, inclusive space for all attendees.`;

  return (
    <section className="nxchallenge-section">
      <div className="nxchallenge__container">
        <div className="nxchallenge-row">
          <div className="nxchallenge-visual">
            <div className="nxchallenge-visual__frame">
              <img src={Image1.src} alt="NeuroX challenge visual" className="nxchallenge-visual__img" />
            </div>
          </div>

          <div className="nxchallenge-content">
            <h3 className="nxchallenge-title">{title}</h3>
            <p className="nxchallenge-body">{body}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
