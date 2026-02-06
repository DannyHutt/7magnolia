"use client";

import './AboutD.css';
import SecondaryButton from '../../SecondaryButton';

import ConfImage from "../../../images/about/About-Conf.png";

export default function AboutD() {
  const title = 'What we care about';
  const body = `With a background in inclusive design and a drive to help create more accessible experiences and opportunities, we take a special interest in projects that require an inclusive lens. As a neurodiverse team, we understand the world and systems around us weren’t built for everyone to thrive in and we want to change that.`;

  return (
    <section className="aboutd">
      <div className="aboutd__container">
        <div className="aboutd__row">
          <div className="aboutd__visual">
            <img src={ConfImage.src} alt="Conference keynote" className="aboutd__img" />
          </div>

          <div className="aboutd__content">
            <div className="aboutd__text">
                <h3 className="aboutd__title">{title}</h3>
                <p className="aboutd__body">{body}</p>
            </div>

            <SecondaryButton className="aboutd__cta">Watch Keynote</SecondaryButton>
          </div>
        </div>
      </div>
    </section>
  );
}
