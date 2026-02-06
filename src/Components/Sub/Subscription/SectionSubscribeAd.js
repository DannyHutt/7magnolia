"use client";

import PrimaryButton from '../../PrimaryButton';
import './SectionSubscribeAd.css';
import AbstractBG from "../../../images/subscription/abstract-1.jpg";


const SectionSubscribeAd = () => {
  return (
    <section className="section-subscribe-ad" data-name="subscribeAd" data-node-id="3257:3820">
      <div className="section-subscribe-ad__wrap">
        <div className="subscribe-ad__banner">
          <div className="subscribe-ad__bg">
            <img src={AbstractBG.src} alt="decorative background" />
          </div>

          <div className="subscribe-ad__content">
            <div className="subscribe-ad__text">
              <p className="subscribe-ad__price">$5,995<span className="subscribe-ad__per">/month</span></p>
              <h3 className="subscribe-ad__title">Start your design subscription</h3>
            </div>

            <div className="subscribe-ad__cta">
              <PrimaryButton onClick={() => window.location.href="https://buy.stripe.com/dRmfZh0US0Owbf12d98og00"} size="large">Signup Today</PrimaryButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionSubscribeAd;
