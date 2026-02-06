'use client';

import React from 'react';
import PrimaryButton from './PrimaryButton';
import './SectionAssembleTeam.css';
import staffImg from '../images/staff-horizontal.png';

export default function SectionAssembleTeam() {
  return (
    <section className="section-assemble-team" aria-labelledby="Assemble-heading">
      <div className="section-assemble-team__container">
        <div className="section-assemble-team__content">
          <div className="section-assemble-team__copy">
            <h2 id="Assemble-heading" className="section-assemble-team__title">
              Let’s Assemble Your Team.
            </h2>
            <div className="section-assemble-team__cta">
              <PrimaryButton onClick={'/contact'} size="large">Schedule a call</PrimaryButton>
            </div>
          </div>

          <div className="section-assemble-team__visual" aria-hidden="true">
            <div className="section-assemble-team__visual-inner">
              <img
                className="section-assemble-team__visual-image"
                src={staffImg.src}
                alt="Illustration of assembled team"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
