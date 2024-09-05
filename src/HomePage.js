import * as React from 'react';
import { useState, useEffect } from "react";
import { ThemeContext } from './App';
import { useContext } from 'react';
import SharedContext from './SharedContext';

// --------------------------------
// IMAGES 
// --------------------------------

// import accent from './images/hero-overlay.svg';
// import accentDark from './images/hero-overlay-dark.svg';

// flower
// import flower2p5p from './images/flower2p-5p.png';
// import flower2p5p162 from './images/flower2p-5p_162.png';

// import designIcon from './images/visual-design-icon.svg';
// import designIconDark from './images/visual-design-icon-dark.svg';

// import plusIcon from './images/plus-icon.svg';
// import plusIconDark from './images/plus-icon-dark.svg';

import flower_bg_a from './images/flower2p-5p_162.png';
import flower_bg from './images/flower2p-5p.png';

import linkedInIcon from './images/linkedin-icon.svg';

import uxIcon from './images/ux-icon.svg';
import uiIcon from './images/ui-icon.svg';
import researchIcon from './images/research-icon.svg';
import behaviorIcon from './images/behavior-icon.svg';
import strategyIcon from './images/strategy-icon.svg';
import developmentIcon from './images/development-icon.svg';

// import partnerIcon from './images/partner-icon.svg';
// import partnerIconDark from './images/partner-icon-dark.svg';
import handsIcon from './images/hands-icon.svg';
import handsIconDark from './images/hands-icon-dark.svg';
import valuesIcon from './images/values-icon.svg';
import valuesIconDark from './images/values-icon-dark.svg';
import roundedInnerIcon from './images/rounded-inner.svg';
import roundedInnerIconDark from './images/rounded-inner-dark.svg';
import backToTopIcon from './images/back-to-top-icon.svg';
import backToTopIconDark from './images/back-to-top-icon-dark.svg';

import researchIconColor from './images/research_icon.svg';
import researchIconColorDark from './images/research-icon-dark.svg';
import teamsIconColor from './images/teams_icon.svg';
import teamsIconColorDark from './images/teams-icon-dark.svg';
import serviceIconColor from './images/service_icon.svg';
import serviceIconColorDark from './images/service-icon-dark.svg';

import laurenHeadshot from './images/lauren-headshot.png';
import jannaHeadshot from './images/janna-headshot.png';
import danHeadshot from './images/dan-headshot.png';
import hummaHeadshot from './images/humma-headshot.png';

import laurenSpeakingPhoto from './images/lauren_speaking.png';
import researchPhoto from './images/research-photo.png';
import teamsPhoto from './images/teams-photo.png';

// client logos
import clientLogoALX from './images/logo_alx.png';
import clientLogoBose from './images/logo_bose.png';
import clientLogoBrown from './images/logo_brown.png';
import clientLogoES from './images/logo_estatespace.png';
import clientLogoFidelity from './images/logo_fidelity.png';
import clientLogoFSS from './images/logo_fullspectrum.png';
import clientLogoGenentech from './images/logo_genentech.png';
import clientLogoHumana from './images/logo_humana.png';
import clientLogoMagellan from './images/logo_magellan.png';
import clientLogoUnum from './images/logo_unum.png';




// --------------------------------
// Extras 
// --------------------------------

import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import HubspotForm from 'react-hubspot-form'

// --------------------------------
// Time of day effects 
// --------------------------------

const date = new Date();
const current_hour = date.getHours();
//var current_hour = 21;
//console.log('the time is:', current_hour);

var timeRange;

switch(true){
  case (current_hour <= 1):
    timeRange = '10p-1a';
    break;
  case (current_hour <= 5):
    timeRange = '2a-5a';
    break;
  case (current_hour <= 9):
    timeRange = '6a-9a';
    break;
  case (current_hour <= 13):
    timeRange = '10a-1p'; 
    break;
  case (current_hour <= 17):
    timeRange = '2p-5p';
    break;
  case (current_hour <= 21):
    timeRange = '6p-9p';
    break;
  case (current_hour <= 24):
    timeRange = '10p-1a';
    break;
  default:
    timeRange = 'broken';
}

//console.log('timeRange: ', timeRange);
timeRange = '2p-5p'; // Disables time based image




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
      flower_bg_a,
      flower_bg,
      linkedInIcon,
      uxIcon,
      uiIcon,
      researchIcon,
      behaviorIcon,
      strategyIcon,
      developmentIcon,
      handsIcon,
      handsIconDark,
      valuesIcon,
      valuesIconDark,
      roundedInnerIcon,
      roundedInnerIconDark,
      backToTopIcon,
      backToTopIconDark,
      researchIconColor,
      researchIconColorDark,
      teamsIconColor,
      teamsIconColorDark,
      serviceIconColor,
      serviceIconColorDark,
      laurenHeadshot,
      jannaHeadshot,
      danHeadshot,
      hummaHeadshot,
      laurenSpeakingPhoto,
      researchPhoto,
      teamsPhoto,
      clientLogoALX,
      clientLogoBose,
      clientLogoBrown,
      clientLogoES,
      clientLogoFSS,
      clientLogoFidelity,
      clientLogoGenentech,
      clientLogoHumana,
      clientLogoMagellan,
      clientLogoUnum
    ];

    cacheImages(preloadSrcList);

  }, []);


 return (
  <div>
    <ParallaxProvider>
      <section aria-labelledby="Page-heading" className={`hero gradient${timeRange}`}>

        <div className="hero-content">
          <img aria-hidden="true" src={isDarkTheme ? roundedInnerIconDark : roundedInnerIcon} className="rounded-inner" alt="" />
          <div className="Content-wrap">
            <div className="content-block">
              <h1 id="Page-heading" className="display"><span className="highlight">Empower Your Business</span> with Cutting-Edge Digital Solutions</h1>
              <a className="btn-primary" href="#SectionContact">Let's Talk!</a>
            </div>
            <div className="accentContainer">

              <svg className="accentGraphic" width="520" height="706" viewBox="0 0 520 706" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g opacity={isDarkTheme ? "0.4" : "0.2"}>
                <path d="M250.766 705C220.312 705 197.308 697.253 181.757 681.758C166.206 666.264 158.43 645.282 158.43 618.812C158.43 602.672 161.346 586.209 167.178 569.423C173.657 552.637 183.701 532.301 197.308 508.413C210.916 483.88 228.411 453.214 249.794 416.415L415.028 134.609H96.2243C86.5047 134.609 78.729 137.191 72.8972 142.356C67.7134 146.875 62.5296 156.882 57.3458 172.376C52.162 187.225 44.3863 209.821 34.0187 240.165H0L64.1495 0H520V48.4203L380.037 288.585C358.006 326.03 342.131 358.956 332.411 387.363C323.34 415.124 318.804 440.302 318.804 462.898C318.804 480.33 320.424 496.47 323.664 511.319C326.903 525.522 330.467 539.08 334.355 551.992C338.243 564.258 341.807 576.525 345.047 588.791C348.287 600.412 349.907 612.033 349.907 623.654C349.907 651.415 340.187 672.074 320.748 685.632C301.308 698.544 277.981 705 250.766 705Z" fill={isDarkTheme ? "#6A739F" : "#3C4570"}/>
                </g>
              </svg>

            </div>
          </div>
        </div>

        <div className="hero-flower">
          <Parallax translateY={[0, 30]}>
            <div className={`flower flower${timeRange}`}>

            </div>
          </Parallax>
        </div>
        </section>



        <section aria-labelledby='Augmentation-heading' className="section2Col">
        <div className="Content-wrap">
        <div className="section2Col-wrap">
        <div className="col col1">
            <img aria-hidden="true" src={teamsPhoto} alt="Two designers collaborating and looking at a computer screen" />
        </div>
        <div className="col col2">
            <img aria-hidden="true" src={isDarkTheme ? teamsIconColorDark : teamsIconColor}  />
            <h2 aria-label='augmentation and customization' id='Augmentation-heading' className="eyebrow">augmentation • customization</h2>
            <h3 className="h2">Curated teams</h3>
            <p>When your project needs a boost, we assemble teams tailored to your unique project goals, reducing unnecessary over-staffing and expenses. Whether you require high-level strategy or product development, we build the right team to support your vision at the right time.</p>
        </div>
        </div>
        </div>
        </section>


        <section aria-labelledby='Inclusion-heading' className="section2Col reverse">
        <div className="Content-wrap">
        <div className="section2Col-wrap">
        <div className="col col1">
            <img aria-hidden="true" src={laurenSpeakingPhoto} alt="Co-Founder Lauren McAuliffe holding a microphone, speaking to an audience during an inclusive design workshop" />
        </div>
        <div className="col col2">
            <img aria-hidden="true" src={isDarkTheme ? valuesIconDark : valuesIcon} />
            <h2 aria-label='inclusion and accessiblity' id='Inclusion-heading' className="eyebrow">Inclusion • accessibility</h2>
            <h3 className="h2">Champions for equity</h3>
            <p>Inclusion and accessibility are a core value within our design philosophy. We are dedicated to crafting experiences that not only meet accessibility standards but also reach a diverse audience and  foster a sense of belonging within underserved communities.</p>

            <a style={{marginTop:'8px'}} className="btn-secondary outline" href="https://vimeo.com/879489261?share=copy" target="_blank">Watch Keynote</a>
        </div>
        </div>
        </div>
        </section>


        <section aria-labelledby="Research-heading" className="section2Col">
        <div className="Content-wrap">
        <div className="section2Col-wrap">
        <div className="col col1">
            <img aria-hidden="true" src={researchPhoto} alt="Two designers in a workshop sorting data on post-it notes" />
        </div>
        <div className="col col2">
            <img aria-hidden="true" src={isDarkTheme ? researchIconColorDark : researchIconColor} />
            <h2 aria-label='research and behavior change' id="Research-heading" className="eyebrow">Research • Behavior change</h2>
            <h3 className="h2">Leading with data</h3>
            <p>We believe effective design starts with research and behavior science. We work alongside researchers and behavior change experts to understand the motivations and challenges faced by the populations we serve.</p>
        </div>
        </div>
        </div>
        </section>

        <section aria-labelledby='Expertise-heading' id="SectionIndustries" className="industries">
        <div className="Content-wrap">

        <div className="industriesHead">
        <img aria-hidden="true" src={isDarkTheme ? serviceIconColorDark : serviceIconColor} />
            <h2 aria-label='expertise and adaptability' id='Expertise-heading' className="eyebrow">expertise • adaptability</h2>
            <h3 className="h2">Services that scale</h3>
            <p>We provide the creative expertise to help boost and empower your team. Our flexible team model enables us to adjust resources as project requirements or business goals evolve.</p>
        </div>

        <ul className="industriesContent">
            <li className="cardHead">
              <img aria-hidden="true" src={isDarkTheme ? uxIcon : uxIcon} />
              <span className='h4'>UX</span>
            </li>
            <li className="cardHead">
              <img aria-hidden="true" src={isDarkTheme ? behaviorIcon : behaviorIcon} />
              <span className='h4'>Behavior Change</span>
            </li>
            <li className="cardHead">
              <img aria-hidden="true" src={isDarkTheme ? uiIcon : uiIcon} />
              <span className='h4'>UI/Visual Design</span>
            </li>

            <li className="cardHead">
              <img aria-hidden="true" src={isDarkTheme ? strategyIcon : strategyIcon} />
              <span className='h4'>Strategy</span>
            </li>

            <li className="cardHead">
              <img aria-hidden="true" src={isDarkTheme ? researchIcon : researchIcon} />
              <span className='h4'>Research</span>
            </li>

            <li className="cardHead">
              <img aria-hidden="true" src={isDarkTheme ? developmentIcon : developmentIcon} />
              <span className='h4'>Development</span>
            </li>

        </ul>

        </div>
        </section>

        <section aria-label='Our clients' id="SectionClients" className="sectionClients">
        <div className="Content-wrap">

        <div><img src={clientLogoALX} alt="Amplify LatinX" /></div>
        <div><img src={clientLogoBose} alt="BOSE" /></div>
        <div><img src={clientLogoBrown} alt="Brown University" /></div>
        <div><img src={clientLogoES} alt="Estatespace" /></div>
        <div><img src={clientLogoFidelity} alt="Fidelity Investments" /></div>
        <div><img src={clientLogoFSS} alt="Full Spectrum Software" /></div>
        <div><img src={clientLogoGenentech} alt="Genentech" /></div>
        <div><img src={clientLogoHumana} alt="Humana" /></div>
        <div><img src={clientLogoMagellan} alt="Megellan Health" /></div>
        <div><img src={clientLogoUnum} alt="Unum" /></div>

        </div>
        </section>



        <section aria-labelledby='Our-people-heading' id="SectionAbout" className="aboutUs">
        <div className="Content-wrap">

        <div className="aboutHead">
          <h2 id='Our-people-heading' className="eyebrow">Our People</h2>
          <h3 className='h2'>About 7Magnolia</h3>
          <p>We started as designers and developers with a passion to bring human-centered design to the forefront of digital products. Now, we assemble the best teams to deliver high quality products with lasting impact. As a virtual agency, we are flexible, competitive, and able to collaborate with anyone.</p>
        </div>

        <div className="row">

          <div className="partnersCard">
            <img aria-hidden="true" src={danHeadshot} className="avatar-img" alt="Photograph of Dan Gauthier" />
            <div className="aboutContent">
              <h4 className='h4'>Dan Gauthier</h4>

              <span aria-hidden className="pronoun">He/Him</span>
              <span className="visually-hidden">Pronouns: He Him</span>

              <span aria-hidden className="title">Co-Founder | CDO</span>
              <span className="visually-hidden">Title: Co-Founder & CDO</span>

              <p>Dan is a designer and engineer with more than 15 years experience bridging the gap between both disciplines. This hybrid lens allows him to carve out a unique space in the industry as a leader who can guide the production process end-to-end.</p>
              <a className="linkedIn-btn" href="https://www.linkedin.com/in/dan-gauthier-0a34b72"><img src={linkedInIcon} className="linkedin" alt="Linkedin" /></a>
            </div>
          </div>

          <div className="partnersCard">
            <img aria-hidden="true" src={laurenHeadshot} className="avatar-img" alt="Photograph of Lauren McAuliffe" />
            <div className="aboutContent">
              <h4 className='h4'>Lauren McAuliffe</h4>

              <span aria-hidden className="pronoun">She/Her</span>
              <span className="visually-hidden">Pronouns: She Her</span>

              <span aria-hidden className="title">Co-Founder | Principal Designer</span>
              <span className="visually-hidden">Title: Co-Founder & Principal Designer</span>
            
              <p>Lauren is a designer and advocate for inclusive design. For over a decade, visual design has been her area of expertise while curiosity led her to build a UX practice. She is committed to creating experiences that are not only beautiful, but foster a sense of belonging.
                <br/>Lauren is a keynote speaker, sharing best practices and inspiring others to design through an inclusive lens.
              </p>
              <a className="linkedIn-btn" href="https://www.linkedin.com/in/laurenmcauliffe"><img src={linkedInIcon} className="linkedin" alt="Linkedin" /></a>
            </div>
          </div>

        </div>


        </div>
        </section>

        <section aria-labelledby='Partners-heading' className="partners">
        <div className="Content-wrap">

        <div className="partnersHead">
          <h2 className='h3' id='Partners-heading'>Our Creative Partners</h2>
        </div>

        <div className="row">

        <div className="partnersCard">
            <img aria-hidden="true" src={hummaHeadshot} className="avatar-img" alt="Photograph of Humma Sheikh" />
            <div className="partnersContent">
              <h3 className='h4'>Humma Sheikh</h3>

              <span aria-hidden className="pronoun">She/Her</span>
              <span className="visually-hidden">Pronouns: She Her</span>
              
              <span aria-hidden className="title">Behavioral Design Specialist</span>
              <span className="visually-hidden">Title: Behavioral Design Specialist</span>

              <p>Humma blends her love for qualitative research, behavior science, and design to build empathy for diverse populations. She believes it is crucial to understand the underlying psychology of decision-making in order to create effective business strategies and user experiences.</p>
              <a className="linkedIn-btn" href="#"><img src={linkedInIcon} className="linkedin" alt="Linkedin" /></a>
            </div>
          </div>

          <div className="partnersCard">
            <img aria-hidden="true" src={jannaHeadshot} className="avatar-img" alt="Photograph of Janna Doherty" />
            <div className="partnersContent">
              <h3 className='h4'>Janna Doherty</h3>

              <span aria-hidden className="pronoun">She/Her</span>
              <span className="visually-hidden">She/Her</span>

              <span aria-hidden className="title">Content Specialist</span>
              <span className="visually-hidden">Content Specialist</span>

              <p>Janna has a unique background in visual art and museum education. From exhibit labels about science and art to digital media, Janna understands how to engage an audience in an approachable and inclusive way. </p>
              
              <a className="linkedIn-btn" href="https://www.linkedin.com/in/janna-doherty-0a4b6a1a7"><img src={linkedInIcon} className="linkedin" alt="Linkedin" /></a>
            </div>
          </div>

        </div>

        </div>
        </section>

        <section aria-labelledby='Contact-heading' id="SectionContact" className="contactUs">
        <div className="Content-wrap">
        <div className="contactUs-wrap">
          <div className="col col1">
              <img aria-hidden="true" src={isDarkTheme ? handsIconDark : handsIcon} />
              <h2 className='h2' id='Contact-heading'>How Can We Help?</h2>
              <p>Connect with one of our expert team members about your design or digital transformation projects. Tell us a little about your project and what you are looking to achieve.</p>
              {/* <a className="btn-primary" href="mailto:dan@7magnolia.com">Work With Us</a> */}
          </div>
          <div className="col col2">

          <HubspotForm
            region='na1'
            portalId='44103127'
            formId='303aa920-0c99-432b-9775-39411a792253'
          />
            
          {/* 
            <img src={isDarkTheme ? partnerIconDark : partnerIcon} className="ux-icon" alt="UX" />
            <h2>Opportunities at 7Magnolia</h2>
            <p>If you would like to be a part of our team, please send us your portfolio and the kind of role you are looking for.</p>
            <a className="btn-secondary" href="mailto:dan@7magnolia.com">Join Our Team</a>
            <ContactForm /> */}
          </div>
          <a href="#App" className="back-to-top">
            <img src={isDarkTheme ? backToTopIconDark : backToTopIcon} className="back-to-top-icon" alt="Back to top" />
          </a>
        </div>
        </div>
        </section>
      </ParallaxProvider>
  </div>
 );
};

export default HomePage;