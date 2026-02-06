"use client";

import "./SectionHow.css";

const steps = [
  {
    number: 1,
    title: "Subscribe",
    desc: "After you subscribe, we’ll set up your KanBan board within 24 hours. Once you approve the KanBan board invite, we’re ready to start handling your design requests. Instructions are also provided directly on the KanBan board.",
  },
  {
    number: 2,
    title: "Submit your requests",
    desc: "Use the KanBan board to submit your design tasks. Requests are managed one at a time to ensure each receives focused attention.",
  },
  {
    number: 3,
    title: "We get to work",
    desc: "Your dedicated 7Magnolia designer begins work immediately, delivering polished, high-quality assets within 24–72 hours.",
  },
  {
    number: 4,
    title: "Repeat, as needed",
    desc: "With unlimited requests, you can maintain creative momentum all month long—without worrying about additional costs.",
  },
];

const SectionHow = () => {
  return (
    <section className="section-how" data-name="sectionhow" data-node-id="3257:3511">
      <div className="section-how__container">
        <h2 className="section-how__title">How it works</h2>

        <div className="section-how__grid">
          {steps.map((s) => (
            <div className="how-card" key={s.number} data-node-id={`how-${s.number}`}>
              <div className="how-card__icon">
                <div className="how-card__number">{s.number}</div>
              </div>

              <div className="how-card__body">
                <h3 className="how-card__heading">{s.title}</h3>
                <p className="how-card__desc">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectionHow;
