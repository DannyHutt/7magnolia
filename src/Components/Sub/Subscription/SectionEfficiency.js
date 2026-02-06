"use client";

import "./SectionEfficiency.css";

// No external images required for this section — cards are textual.

const cards = [
  { title: 'Fixed monthly rate', desc: 'One predictable price each month—no surprises.' },
  { title: 'Unlimited Design Requests', desc: 'Keep your projects moving without worrying about hourly rates.' },
  { title: 'Fast Turnaround', desc: 'Most designs are delivered one at a time within just a few days.' },
  { title: 'Senior-Level Quality', desc: 'Access expert design whenever you need it.' },
  { title: 'Streamlined Workflow', desc: 'No unnecessary meetings or endless email threads—everything is managed in the KanBan board.' },
  { title: 'Transparent Process', desc: 'Easily track and manage your design queue in real time.' },
  { title: 'Consistency & Cohesions', desc: 'Every asset aligns with your brand and style guidelines.' },
  { title: 'Flexible & Scalable', desc: 'Pause or adjust your subscription as your design needs change.' },
];

const SectionEfficiency = () => {
  return (
    <section className="section-efficiency" data-name="efficiency" data-node-id="3257:3618">
      <div className="section-efficiency__inner">
        <h2 className="section-efficiency__title">Designed for efficiency</h2>

        <div className="section-efficiency__grid">
          {cards.map((c, i) => (
            <article className="eff-card" key={c.title} data-node-id={`eff-${i}`}>
              <h3 className="eff-card__title">{c.title}</h3>
              <p className="eff-card__desc">{c.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectionEfficiency;
