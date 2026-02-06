"use client";


import './SectionA.css';
import Image1 from '../../../../images/Work/broadfutures/bf-4.png';
import Image2 from '../../../../images/Work/broadfutures/bf-5.png';

export default function SectionA() {
  const title = 'Workshops and Collaboration';
  const body = `We kicked off the project with a participatory design workshop to shape the brand identity and strategy, bringing stakeholders together to align on priorities and explore creative directions. This co-design approach continued through content strategy and website design, using live and asynchronous sessions to ensure the brand and digital experience reflected a shared vision and the needs of the community.`;

  return (
    <section className="sectiona">
      <div className="sectiona__container">
        <div className="sectiona__intro">
          <h3 className="sectiona__title">{title}</h3>
          <p className="sectiona__body">{body}</p>
        </div>

        <div className="sectiona__image-large">
          <img src={Image1.src} alt="Workshop board" className="sectiona__img" />
        </div>

        <div className="sectiona__image-wide">
          <img src={Image2.src} alt="Workshop details" className="sectiona__img" />
        </div>
      </div>
    </section>
  );
}
