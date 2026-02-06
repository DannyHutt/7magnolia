"use client";

import "./SectionModels.css";

import ImgStaffA from "../../../images/services/staff a.png";
import ImgStaffB from "../../../images/services/staff b.png";
import ImgStaffC from "../../../images/services/staff c.png";

const SectionModels = () => {
  const cards = [
    {
      title: "Staff Augmentation",
      lead: ["Our ", "designers and/or developers", " in your team"],
      leadEmphasisIndex: 1,
      description:
        "Staff augmentation offers a flexible way to scale your team with experienced professionals, helping you bridge skill gaps or boost capacity without the long-term cost of full-time hires. Whether you need designers, developers, or technical experts to reduce debt or tackle complex projects, we provide the talent you need—exactly when you need it.",
      image: ImgStaffA.src,
      imageLeft: true,
    },
    {
      title: "Dedicated Teams",
      lead: ["Our ", "teams", " in your organization."],
      leadEmphasisIndex: 1,
      description:
        "Dedicated product teams embed directly with your organization to bring user-centered expertise. Whether you’re launching a new platform, evolving your brand, or improving an existing product, our teams work collaboratively and iteratively. We take ownership of milestones and outcomes, ensuring high-quality, impactful design that moves your business forward.",
      image: ImgStaffB.src,
      imageLeft: true,
    },
    {
      title: "Outsourcing",
      lead: ["Our ", "PM and team", " building for you."],
      leadEmphasisIndex: 1,
      description:
        "Outsourcing means partnering with expert teams who handle your entire project from strategy to delivery—including project management. Launching a product or scaling a new initiative? We deliver end-to-end design solutions with the talent and structure you need—without the overhead of an in-house team.",
      image: ImgStaffC.src,
      imageLeft: true,
    },
  ];

  return (
    <section className="section-models" data-name="sectionmodels" data-node-id="3332:19383">
      <div className="section-models__container">
        <h2 className="section-models__title">Flexible and scalable team models</h2>

        {cards.map((card, idx) => (
          <div className="models-row" key={card.title} data-node-id={`models-row-${idx}`}>
            {card.imageLeft && (
              <div className="models-card">
                <div className="models-card__art">
                  <img src={card.image} alt="" />
                </div>
              </div>
            )}

            <div className="models-content">
              <h3 className="models-content__heading">{card.title}</h3>
              <p className="models-content__lead">
                {card.lead.map((part, i) => (
                  <span key={i} className={i === card.leadEmphasisIndex ? "models-content__em" : undefined}>
                    {part}
                  </span>
                ))}
              </p>
              <p className="models-content__desc">{card.description}</p>
            </div>

            {!card.imageLeft && (
              <div className="models-card">
                <div className="models-card__art">
                  <img src={card.image} alt="" />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default SectionModels;
