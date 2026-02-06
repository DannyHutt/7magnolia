"use client";


import './SectionB.css';
import Image1 from '../../../../images/Work/broadfutures/bf-6.png';
import Image2 from '../../../../images/Work/broadfutures/bf-7.jpg';

export default function SectionB() {
  const title = 'Identity Exploration & Iterations';
  const intro = `During the logo workshop, stakeholders engaged in a “Noun Exercise”, sharing words that captured the ideas, emotions, and values at the heart of BroadFutures’ mission. These nouns informed sketches, which were organized through card sorting and used to inspire unique brand mark concepts. Through multiple rounds of iteration, the team explored a wide variety of sketches before honing in on refined concepts, ultimately shaping a visual identity that is both polished and deeply meaningful.`;

  const greyscaleTitle = 'Greyscale Logo Iterations';
  const greyscaleDesc = `We began using only greyscale sketches to ensure the logo’s structure and integrity worked in its simplest form before color was introduced, reinforcing clarity, flexibility, and legibility across applications.`;

  const moodTitle = 'Color Exploration & Visual Direction with Moodboards';
  const moodDesc = `Once a brand mark was chosen, a moodboard was developed to explore core elements—color, typography, imagery, and UI components. This process created a cohesive foundation that reflected the brand’s personality, values, and overall nature, guiding the art direction for all subsequent design work.`;

  return (
    <section className="sectionb">
      <div className="sectionb__container">
        <div className="sectionb__intro">
          <h3 className="sectionb__title">{title}</h3>
          <p className="sectionb__body">{intro}</p>
        </div>

        <div className="sectionb__block">
            <div className="sectionb__text-group">
                <h4 className="sectionb__h4">{greyscaleTitle}</h4>
                <p className="sectionb__small">{greyscaleDesc}</p>
            </div>
          <div className="sectionb__image-grid">
            <img src={Image1.src} alt="Greyscale logo iterations" className="sectionb__img" />
          </div>
        </div>

        <div className="sectionb__block">
            <div className="sectionb__text-group">
                <h4 className="sectionb__h4">{moodTitle}</h4>
                <p className="sectionb__small">{moodDesc}</p>
            </div>
          <div className="sectionb__image-mood">
            <img src={Image2.src} alt="Moodboards" className="sectionb__img" />
          </div>
        </div>
      </div>
    </section>
  );
}
