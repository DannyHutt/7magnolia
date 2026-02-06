"use client";

import React from "react";
import "./SectionSkills.css";

// Asset placeholders (from Figma export). You can replace these with your own paths.
import imgGraphicResearch from "../../../images/services/Graphic-research.png";
import imgGraphicSystems from "../../../images/services/Graphic-systems.png";
import imgGraphicStrategy from "../../../images/services/Graphic-strategy.png";
import imgGraphicDev from "../../../images/services/Graphic-dev.png";

const Checkmark = ({ color = 'var(--Foreground-Body-text, #190d05)', size = 20 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    focusable="false"
  >
    <path d="M19.512 1.40475L17.717 0.185745C17.4787 0.0253405 17.1867 -0.0344951 16.9045 0.0192491C16.6223 0.0729932 16.3727 0.235971 16.21 0.472745L7.42299 13.4317L3.38399 9.39275C3.17993 9.19092 2.9045 9.07771 2.61749 9.07771C2.33048 9.07771 2.05505 9.19092 1.85099 9.39275L0.317993 10.9287C0.217185 11.0294 0.137213 11.149 0.082649 11.2806C0.0280851 11.4122 0 11.5533 0 11.6957C0 11.8382 0.0280851 11.9793 0.082649 12.1109C0.137213 12.2425 0.217185 12.3621 0.317993 12.4627L6.52699 18.6747C6.87599 19.0217 7.42199 19.2897 7.91399 19.2897C8.40599 19.2897 8.90199 18.9797 9.22099 18.5157L19.801 2.90975C19.9619 2.67174 20.0218 2.37963 19.9676 2.0975C19.9135 1.81536 19.7496 1.56623 19.512 1.40475Z" fill={color} />
  </svg>
);



const SectionSkills = () => {
  const rows = [
    {
      title: "Research & Testing",
      description:
        "We help you reduce risk and build with confidence by testing ideas directly with your users. We uncover what resonates, what frustrates, and what truly drives engagement—ensuring your product is intuitive, effective, and aligned with your customers’ needs. Some of our methods include:",
      items: ["Usability Studies", "Participatory Design", "Desirability Studies"],
      image: imgGraphicResearch,
      checkColor: 'var(--Foreground-Accent-orange)',
      imageLeft: true,
    },
    {
      title: "Design Systems",
      description:
        "We design scalable, modular systems that ensure consistency and efficiency across your digital platforms, streamlining both design and development. Our capabilities include:",
      items: ["Component Libraries", "UI Kits", "Governance and Documentation", "Atomic Design Methodology"],
      image: imgGraphicSystems,
      checkColor: 'var(--Foreground-Accent-blue)',
      imageLeft: false,
    },
    {
      title: "Experience Strategy & Design",
      description:
        "We design for meaning, not just function. By uniting strategy and design, we create experiences that resonate on an emotional level—beautiful, intuitive, and built to inspire long-term loyalty. Our services include:",
      items: ["Visual & UI Design", "UX & Service Design", "Prototyping", "Journey Mapping", "Information Architecture"],
      image: imgGraphicStrategy,
      checkColor: 'var(--Foreground-Accent-pink)',
      imageLeft: true,
    },
    {
      title: "Application Development",
      description:
        "We bring digital products to life through agile, iterative development. From iOS and Android apps to content management systems, we combine flexibility, speed, and rigorous testing to deliver applications that are scalable, reliable, and built to evolve with your users. Some of our offerings include:",
      items: ["iOS and Android Development", "Content Management Systems", "QA & Testing"],
      image: imgGraphicDev,
      checkColor: 'var(--Foreground-Accent-green)',
      imageLeft: false,
    },
  ];

  return (
    <section className="section-skills" data-name="sectionskills" data-node-id="2981:36102">
      <div className="section-skills__container">
        {/* <h2 className="section-skills__title">Skills & Capabilities</h2> */}

        {rows.map((row, idx) => (
          <div className="skills-row" key={row.title} data-node-id={`row-${idx}`}>
            {row.imageLeft && (
              <div className="skills-image">
                <div className="skills-image__inner">
                  <img src={row.image.src} alt="" />
                </div>
              </div>
            )}

            <div className="skills-content">
              <h3 className="skills-content__heading">{row.title}</h3>
              <p className="skills-content__desc">{row.description}</p>

              <ul className="skills-list">
                {row.items.map((it, i) => (
                  <li className="skills-list__item" key={it}>
                    <span className="skills-list__icon">
                      <Checkmark color={row.checkColor} />
                    </span>
                    <span className="skills-list__label">{it}</span>
                  </li>
                ))}
              </ul>
            </div>

            {!row.imageLeft && (
              <div className="skills-image">
                <div className="skills-image__inner">
                  <img src={row.image.src} alt="" />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default SectionSkills;
