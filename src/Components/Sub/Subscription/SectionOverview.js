"use client";

import React from "react";
import "./SectionOverview.css";
import PrimaryButton from '../../PrimaryButton';
import HeroImage from "../../../images/subscription/abstract-2.jpg";

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


const SectionOverview = () => {
  const features = [
    'Unlimited requests',
    '24-72 hour turnaround',
    'Dedicated designer',
    'Pause or cancel anytime',
    'Track & manage your design queue',
  ];

  return (
    <section className="section-overview" data-name="overview" data-node-id="3257:3336">
      <div className="section-overview__container">
        <div className="section-overview__lead">
          <h1 id="Masthead-heading" className="masthead__title">
            Unlimited Design. <br /><span className="gradientText">One Simple Plan.</span>
          </h1>
          <p className="section-overview__desc">Say goodbye to unpredictable design costs and timelines. With 7Magnolia’s subscription-based design service, you get ongoing, high-quality design support whenever you need it—no hourly rates, no project-by-project fees. Just a flat monthly subscription that gives you access to our team of designers, delivering creative, high-impact solutions for your business.</p>

          <div className="section-overview__services-label">Services included</div>
          <ul className="section-overview__services">
            <li><strong><Checkmark color="var(--Foreground-Accent-pink, #190d05)" size={20} />Digital Design:</strong> <span>UI/UX for websites, apps, and dashboards</span></li>
            <li><strong><Checkmark color="var(--Foreground-Accent-pink, #190d05)" size={20} />Branding & Identity:</strong> <span>Logos, visual systems, and style guides</span></li>
            <li><strong><Checkmark color="var(--Foreground-Accent-pink, #190d05)" size={20} />Marketing Assets:</strong> <span>Graphics, presentations, email campaigns, and illustrations</span></li>
          </ul>
        </div>

        <aside className="section-overview__card" aria-hidden="false">
          <div className="overview-card__bg">
            <div className="overview-card__bg-img">
              <img src={HeroImage.src} alt="Decorative background" />
            </div>
          </div>

          <div className="overview-card__panel">
            <div className="overview-card__panel-header">
                <p className="overview-card__label">Design Subscription</p>
              <div className="overview-card__price">
                <span className="overview-card__amount">$5,995</span>
                <span className="overview-card__per">/month</span>
              </div>
            </div>
            <div className="overview-card__panel-inner">
              <div className="overview-card__includes">Includes</div>
              <ul className="overview-card__features">
                {features.map((f, i) => (
                  <li key={f} className="overview-card__feature">
                    <span className="overview-card__check">
                      <Checkmark color="var(--Foreground-Accent-pink, #190d05)" size={20} />
                    </span>
                    <span className="overview-card__feature-text">{f}</span>
                  </li>
                ))}
              </ul>

              <PrimaryButton onClick={() => window.location.href="https://buy.stripe.com/dRmfZh0US0Owbf12d98og00"} size="large">Signup Today</PrimaryButton>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default SectionOverview;
