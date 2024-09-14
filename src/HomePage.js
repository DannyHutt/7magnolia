import * as React from 'react';
import { useState, useEffect } from "react";
import { ThemeContext } from './App';
import { useContext } from 'react';
import SharedContext from './SharedContext';
import { NavLink } from 'react-router-dom';
// --------------------------------
// ICONS 
// --------------------------------
import uxIcon from './images/ux-icon.svg';
import uiIcon from './images/ui-icon.svg';
import researchIcon from './images/research-icon.svg';
import behaviorIcon from './images/behavior-icon.svg';
import strategyIcon from './images/strategy-icon.svg';
import developmentIcon from './images/development-icon.svg';
// --------------------------------
// GRAPHICS 
// --------------------------------
import phonesPhoto from './images/phones-qf.png';
// --------------------------------
// LOGOS 
// --------------------------------
import logo_1 from './images/logos/Frame 2273.png';
import logo_2 from './images/logos/Frame 2274.png';
import logo_3 from './images/logos/Frame 2275.png';
import logo_4 from './images/logos/Frame 827.png';
import logo_5 from './images/logos/Frame 828.png';
import logo_6 from './images/logos/Frame 829.png';
// --------------------------------
// IMAGES 
// --------------------------------
import qfPreview from './images/quantfu-preview.jpg';
import esPreview from './images/estatespace-preview.jpg';
import nxPreview from './images/neurox-preview.jpg';


const HomePage = () => {

  // --------------------------------
  // Theme effects
  // --------------------------------

  const { isDarkTheme } = useContext(SharedContext);

  // --------------------------------
  // Preload images
  // --------------------------------

  const [isLoading, setIsLoading] = useState(true);

  const cacheImages = async (srcArray) => {

    const promises = await srcArray.map((src) => {
      return new Promise (function (resolve,reject) { 
        const img = new Image();

        img.src = src;
        img.onload = resolve();
        img.onerror = reject();

      });
    });

    await Promise.all(promises);

    setIsLoading(false);

  };

  useEffect(() => { 

    const preloadSrcList = [
      uxIcon,
      uiIcon,
      researchIcon,
      behaviorIcon,
      strategyIcon,
      developmentIcon
    ];

    cacheImages(preloadSrcList);

  }, []);


 return (
  <div className='page-home'>
    
      <section className="hero" aria-labelledby="Page-heading">

        <div className="hero-content">
          
          <div className="Content-wrap">
            <div className="content-block">
              <h1 id="Page-heading" className="display">We <span className="highlight">design</span> digital products & elevate brands</h1>
              <NavLink className="btn-primary large" to="./contact">Let's Talk!</NavLink>
            </div>
            <div className='content-block-alt'>
              <img aria-hidden="true" src={phonesPhoto} alt="3 smart phones displaying one of our native app designs" />
            </div>
          </div>
          <div className="Content-wrap logos">
            <ul className="logo-ribbon">
              <li><img src={logo_1} /></li>
              <li><img src={logo_2} /></li>
              <li><img src={logo_3} /></li>
            </ul>
            <ul className='logo-ribbon'>
              <li><img src={logo_4} /></li>
              <li><img src={logo_5} /></li>
              <li><img src={logo_6} /></li>
            </ul>
          </div>
        </div>

        
        </section>



        <section aria-labelledby='Augmentation-heading' className="section-our-work">
        <div className="Content-wrap">
          <div className='our-work-frame'>

            <h2 className="h2">Our Work</h2>
            <div className="card-group">
<div className='card-group-inner'>
              <div className="section2Col-wrap">
                <div className="col col1">
                    <img aria-hidden="true" src={nxPreview} alt="Two designers collaborating and looking at a computer screen" />
                </div>
                <div className="col col2">
                    <h2 aria-label='augmentation and customization' id='Augmentation-heading' className="eyebrow">branding & identity • UX/UI </h2>
                    <h3 className="h3">NeuroX</h3>
                    <p>A brand that embodies their mission: To illuminate and celebrate the untapped talent of the neurodivergent workforce.</p>
                    <NavLink className='btn-secondary' to='./work/nx'>Read More</NavLink>
                </div>
              </div>

              <div className="section2Col-wrap">
                <div className="col col1">
                    <img aria-hidden="true" src={esPreview} alt="Two designers collaborating and looking at a computer screen" />
                </div>
                <div className="col col2">
                    <h2 aria-label='augmentation and customization' id='Augmentation-heading' className="eyebrow">UX/UI • Development • design system</h2>
                    <h3 className="h3">EstateSpace</h3>
                    <p>A multifaceted project including web and native app design, company website, and brand refresh, all unified by a comprehensive design system. </p>
                    <NavLink className='btn-secondary' to='./work/es'>Read More</NavLink>
                </div>
              </div>

              <div className="section2Col-wrap">
                <div className="col col1">
                    <img aria-hidden="true" src={qfPreview} alt="Two designers collaborating and looking at a computer screen" />
                </div>
                <div className="col col2">
                    <h2 aria-label='augmentation and customization' id='Augmentation-heading' className="eyebrow">branding & identity • UX/UI</h2>
                    <h3 className="h3">QuantFu</h3>
                    <p>An application designed to simplify complex stock trading and while empowering users through an approachable brand experience.</p>
                    <NavLink className='btn-secondary' to='./work/qf'>Read More</NavLink>
                </div>
              </div>
</div>
            </div>
            
          </div>
        </div>
        </section>

        <section className="sectionQuote">
        <div className="Content-wrap">
          <p className='quote-main'>We are a boutique design agency owned and led by neurodivergent individuals, which means we think differently—and we believe that’s our greatest strength. </p>
          <p className='quote-sub'>Our approach is rooted in the conviction that diversity of thought leads to richer, more impactful brands and products that stand out and break the mold.</p>
        </div>
        </section>


      
  </div>
 );
};

export default HomePage;