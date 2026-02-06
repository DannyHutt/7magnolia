"use client";


import './NxB.css';
import Image1 from '../../../../images/Work/neurox/nx-8.png';
import Image2 from '../../../../images/Work/neurox/nx-9.png';

export default function NxB() {
  const title = 'Designing a Neuro-Inclusive Experience';
  const intro = `The conference experience was designed to embody NeuroX’s commitment to accessibility and inclusion, offering thoughtful accommodations that allow all attendees to engage comfortably.`;

  const sectionOneTitle = 'Social Battery Badges';
  const sectionOneBody = `Social battery badges allow participants to communicate their preferred level of social interaction in a clear, nonverbal way. This system helps attendees manage energy, reduce stress, and participate at their own pace.`;

  const sectionTwoTitle = 'Sensory Retreat Room';
  const sectionTwoBody = `A designated quiet space provides a sensory retreat for attendees who may need breaks from stimulation. Equipped with calming materials and supportive resources, the room ensures that every participant can recharge and engage meaningfully with the conference.`;

  return (
    <section className="nxb">
      <div className="nxb__container">
        <div className="nxb__intro">
          <h3 className="nxb__title">{title}</h3>
          <p className="nxb__intro-body">{intro}</p>
        </div>

        <div className="nxb__section">
          <div className="nxb__section-head">
            <h4 className="nxb__section-title">{sectionOneTitle}</h4>
            <p className="nxb__section-body">{sectionOneBody}</p>
          </div>

          <div className="nxb__gallery-top">
            <div className="nxb__card"><img src={Image1.src} alt="Social battery 1" className="nxb__img"/></div>
            
          </div>
        </div>

        <div className="nxb__section">
          <div className="nxb__section-head">
            <h4 className="nxb__section-title">{sectionTwoTitle}</h4>
            <p className="nxb__section-body">{sectionTwoBody}</p>
          </div>

          <div className="nxb__gallery-bottom">
            <div className="nxb__card"><img src={Image2.src} alt="Sensory room 1" className="nxb__img"/></div>
          </div>
        </div>
      </div>
    </section>
  );
}
