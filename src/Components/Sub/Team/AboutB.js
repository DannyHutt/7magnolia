"use client";

import './AboutB.css';


// --------------------------------
// ICONS 
// --------------------------------
import linkedInIcon from '../../../images/icon-in.svg';

// --------------------------------
// IMAGES 
// --------------------------------
import laurenHeadshot from '../../../images/lady.jpg';
import danHeadshot from '../../../images/dan.jpg';
// import hummaHeadshot from '../../../images/humma.jpg';


export default function AboutB() {
  return (
    <section className="aboutb">
      <div className="aboutb__container">
        <div className="aboutb__inner">
          <div className="aboutb__profile">
            <div className="aboutb__photo">
              <img src={danHeadshot.src} alt="Dan Gauthier" className="aboutb__img" />
            </div>
            <div className="aboutb__meta">
              <div className="aboutb__meta-head">
                <h4 className="aboutb__name">Dan Gauthier</h4>
                <a className="linkedIn-btn" href="https://www.linkedin.com/in/dan-gauthier-0a34b72"><img src={linkedInIcon.src} alt="linkedin" className="aboutb__icon" /></a>
              </div>
              <p className="aboutb__role">Co-Founder | CEO</p>
              <p className="aboutb__bio">Dan is an award winning UX product designer and software engineer with a passion for design systems. Before co-founding 7Magnolia, he worked with Fortune 500 companies, leading the creation of scalable systems that bridge design and engineering. He now applies this expertise to build and empower teams to deliver consistent, accessible, and elegant solutions.</p>
            </div>
          </div>

          <div className="aboutb__profile">
            <div className="aboutb__photo">
              <img src={laurenHeadshot.src} alt="Lauren McAuliffe" className="aboutb__img" />
            </div>
            <div className="aboutb__meta">
              <div className="aboutb__meta-head">
                <h4 className="aboutb__name">Lauren McAuliffe</h4>
                <a className="linkedIn-btn" href="https://www.linkedin.com/in/laurenmcauliffe"><img src={linkedInIcon.src} alt="linkedin" className="aboutb__icon" /></a>
              </div>
              <p className="aboutb__role">Co-Founder | Principal Designer</p>
              <p className="aboutb__bio">Lauren combines two decades of expertise in branding, product, and inclusive design with empathetic leadership. She helps teams and clients craft human-centered experiences that are meaningful and purpose-driven.</p>
            </div>
          </div>
        </div>
      </div>
      {/* <h3 className='h4'>Humma Sheikh <a className="linkedIn-btn" href="https://www.linkedin.com/in/humma-sheikh-61448763/"><img src={linkedInIcon.src} className="linkedin" alt="Linkedin" /></a></h3> */}
    </section>
  );
}
