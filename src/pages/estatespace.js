import React from 'react';
// --------------------------------
// IMAGES 
// --------------------------------
import heroImage from '../images/Cover-es.jpg';
import es1 from '../images/case-studies/es-1.jpg';
import es2 from '../images/case-studies/es-2.jpg';
import es3 from '../images/case-studies/es-3.jpg';
import es4 from '../images/case-studies/es-4.jpg';
import es5 from '../images/case-studies/es-5.jpg';
import es6 from '../images/case-studies/es-6.jpg';
import es7 from '../images/case-studies/es-7.jpg';
import es8 from '../images/case-studies/es-8.jpg';
import es9 from '../images/case-studies/es-9.png';
import es10 from '../images/case-studies/es-10.jpg';

const EstateSpace = () => {
 return (
    <div className="page-es case-study">
        <section className='section-head'>
         <div className="Content-wrap">
            <div className="content-block">
                <span className="eyebrow large color-pinkAA">Our Work</span>
                <h1 className="display">EstateSpace</h1>
            </div>
            <div className="content-block-alt"></div>
        </div>
       </section>
       <section className='section-body'>
            <div className="Content-wrap">
                <img className="hero-image" aria-hidden="true" src={heroImage} alt="" />
                <div className="details-block">
                    <div className='col col1'>
                        <h3>overview</h3>
                        <p>EstateSpace partnered with us to create a unified digital experience across their desktop platform, native app, and website. The goal was to refine their aesthetic and build a seamless, consistent design system. We introduced Atlas, a comprehensive design system aimed at creating harmony across all digital products while enhancing the user experience and maintaining brand integrity.</p>
                        <p>When redesigning the company website, we developed custom-branded graphics that illustrated the layered and interconnected ecosystem of the app. Subtle, intentional animations were used to enhance the narrative without overwhelming the user. As a best practice, we built the website with accessibility in mind, adhering to WCAG standards and ensuring compatibility with OS settings like reduced motion.</p>
                        <p>The Atlas design system involved three core components: a UI kit that provided designers with a full range of components using Atomic design methodology, web components to set coding standards for developers, and a documentation website to act as a single source of truth for all things design system. This governance-focused approach ensures consistency across web and native products, streamlining development and design efforts for the EstateSpace team.</p>
                    </div>
                    <div className='col col2'>
                        <h3>ROLES</h3>
                        <ul>
                            <li>UX/UI</li>
                            <li>Design System</li>
                            <li>Front-End Development</li>
                        </ul>
                    </div>
                </div>
                <div className='images-block'>
                    <div className='row row1'>
                        <div className='col col1'>
                            <img className="" aria-hidden="true" src={es1} alt="" />
                        </div>
                    </div>
                    <div className='row row2'>
                        <div className='col col1'>
                            <img className="" aria-hidden="true" src={es2} alt="" />
                        </div>
                        <div className='col col2'>
                            <img className="" aria-hidden="true" src={es3} alt="" />
                        </div>
                        <div className='col col3'>
                            <img className="" aria-hidden="true" src={es4} alt="" />
                        </div>
                    </div>
                    <div className='row row3'>
                        <div className='col col1'>
                            <img className="" aria-hidden="true" src={es5} alt="" />
                        </div>
                        <div className='col col2'>
                            <img className="" aria-hidden="true" src={es6} alt="" />
                        </div>
                    </div>
                    <div className='row row4'>
                        <div className='col col1'>
                            <img className="" aria-hidden="true" src={es7} alt="" />
                        </div>
                        <div className='col col2'>
                            <img className="" aria-hidden="true" src={es8} alt="" />
                        </div>
                    </div>
                    <div className='row row5'>
                        <div className='col col1'>
                            <img className="" aria-hidden="true" src={es9} alt="" />
                        </div>
                        <div className='col col2'>
                            <img className="" aria-hidden="true" src={es10} alt="" />
                        </div>
                    </div>
                </div>
            </div>
       </section>
    </div>
    
 );
};

export default EstateSpace;