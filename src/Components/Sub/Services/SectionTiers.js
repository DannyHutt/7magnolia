"use client";


import Image from "../../../images/services/tiers.png";
import "./SectionTiers.css";

const SectionTiers = () => {
  return (
    <section className="section-tiers" data-name="sectiontiers" data-node-id="3102:1218">
      <div className="section-tiers__container">
        <div className="section-tiers__header">
          <h2 className="section-tiers__title">Potential Project Tiers</h2>
          <p className="section-tiers__lead">The following examples are to help give a general sense of time and services for common product design projects. Every engagement is unique and details vary based on requirements and needs.</p>
        </div>

        <div className="section-tiers__art" aria-hidden="true">
          <div className="section-tiers__art-inner">
            <img src={Image.src} alt="Project tiers diagram" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionTiers;
