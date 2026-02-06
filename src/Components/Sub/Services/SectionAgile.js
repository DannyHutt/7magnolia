"use client";

import "./SectionAgile.css";
import Image from "../../../images/services/doublediamond.jpg";

const SectionAgile = () => {
  return (
    <section className="section-agile" data-name="sectionagile" data-node-id="3102:1197">
      <div className="section-agile__inner">
        <div className="section-agile__header">
          <h2 className="section-agile__title">Design Thinking + Agile</h2>
          <p className="section-agile__lead">Our ideal process blends design thinking with agile practices to create user-centered, collaborative, and iterative solutions.</p>
        </div>

        <div className="section-agile__art" aria-hidden="true">
          <div className="section-agile__art-inner">
            <img src={Image.src} alt="Design thinking + agile diagram" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionAgile;
