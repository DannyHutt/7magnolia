'use client';

import { useState, useContext, useEffect } from "react";
import { ThemeContext } from '../theme/ThemeProvider';
import PrimaryButton from './PrimaryButton';
import './HeroHome.css';

import heroGraphicLight from '../images/hero-graphic-light.png';
import heroGraphicDark from '../images/hero-graphic-dark.png';

export default function HeroHome() {

    // theme from ThemeProvider
    const { isDark } = useContext(ThemeContext);
    
    // Prevent hydration mismatch: defer theme-dependent rendering until after mount
    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        setMounted(true);
    }, []);

    // Use a stable default logo during SSR/hydration, then switch to theme-aware logo after mount
    const heroGraphic = mounted ? (isDark ? heroGraphicDark : heroGraphicLight) : heroGraphicLight;

  return (
    <section className="hero-home" aria-labelledby="Page-heading">
      <div className="hero-home__container">
        <div className="hero-home__content">
          <div className="hero-home__copy">
            <h1 id="Page-heading" className="hero-home__title">
              <span>Boost</span> your team. Not your headcount.
            </h1>
            <p className="hero-home__subtitle">
              Partner with a small, senior team that moves quickly and crafts delightful
              user experiences. We combine research, product design, and engineering
              to ship valuable, maintainable products.
            </p>

            <div className="hero-home__cta">
              <PrimaryButton onClick={'#Services'} size="large">Start a project</PrimaryButton>
            </div>
          </div>

          <div className="hero-home__visual" aria-hidden="true">
            <img
              className="hero-home__visual-image"
              src={heroGraphic.src }
              alt="Illustration showing a central user and surrounding team avatars"
            />
          </div>
        </div>
       
      </div>
       
    </section>
  );
}
