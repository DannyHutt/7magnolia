import React from 'react';

import { useContext } from 'react';
import SharedContext from '../SharedContext';

import uxIcon from '../images/icon-ux.svg';
import inclusionIcon from '../images/icon-inclusion.svg';
import systemsIcon from '../images/icon-systems.svg';
import brandingIcon from '../images/icon-branding.svg';
import devIcon from '../images/icon-dev.svg';
import behaviorIcon from '../images/icon-behavior.svg';



const ServicesPage = () => {

    const { isDarkTheme } = useContext(SharedContext);


 return (
    <div className="page-services">
       <section className='section-head'>
         <div className="Content-wrap">
            <div className="content-block">
                <span className="eyebrow large color-pinkAA">Our Services</span>
                <h1 className="display">Let us help you bring your vision to life</h1>
            </div>
            <div className="content-block-alt">

            </div>
        </div>
       </section>
       <section className="section-body">
            <div className="Content-wrap">
                <div className='card-wrapper'>
                    <div className="card-column">
                        <div className="smallCard">
                            <img aria-hidden="true" src={uxIcon} />
                            <span className='h4'>UX/UI Design</span>
                            <p>We craft intuitive and visually engaging digital experiences that prioritize user needs, balancing functionality with aesthetics.</p>
                        </div>
                        <div className="smallCard">
                            <img aria-hidden="true" src={brandingIcon} />
                            <span className='h4'>Branding & Identity</span>
                            <p>We shape distinct brand identities and help define your narrative, creating cohesive visual stories that express your values and vision.</p>
                        </div>
                    </div>
                    <div className='card-column'>
                        <div className="smallCard">
                            <img aria-hidden="true" src={devIcon} />
                            <span className='h4'>Web Development</span>
                            <p>Our development team builds high-performance, responsive websites that translate creative ideas into robust digital solutions.</p>
                        </div>
                        <div className="smallCard">
                            <img aria-hidden="true" src={systemsIcon} />
                            <span className='h4'>Design Systems</span>
                            <p>We design scalable, modular systems that ensure consistency and efficiency across your digital platforms, streamlining both design and development.</p>
                        </div>
                    </div>
                    <div className='card-column'>
                        <div className="smallCard">
                            <img aria-hidden="true" src={inclusionIcon} />
                            <span className='h4'>Inclusive Design</span>
                            <p>We design experiences that embrace diversity by prioritizing accessibility and creating a sense of belonging for the communities we serve.</p>
                        </div>
                        <div className="smallCard">
                            <img aria-hidden="true" src={behaviorIcon} />
                            <span className='h4'>Behavioral Design</span>
                            <p>By understanding user behavior and psychology, we develop solutions that guide users towards desired actions and outcomes.</p>
                        </div>
                    </div>
                </div>
            </div>
       </section>
    </div>

    
 );
};

export default ServicesPage;