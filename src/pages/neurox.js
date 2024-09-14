import React from 'react';
// --------------------------------
// IMAGES 
// --------------------------------
import heroImage from '../images/Cover-nx.jpg';
import nx1 from '../images/case-studies/nx-1.jpg';
import nx2 from '../images/case-studies/nx-2.jpg';
import nx3 from '../images/case-studies/nx-3.jpg';
import nx4 from '../images/case-studies/nx-4.jpg';
import nx5 from '../images/case-studies/nx-5.jpg';
import nx6 from '../images/case-studies/nx-6.jpg';
import nx7 from '../images/case-studies/nx-7.jpg';
import nx8 from '../images/case-studies/nx-8.jpg';
import nx9 from '../images/case-studies/nx-9.jpg';

const NeuroX = () => {
 return (
    <div className="page-nx case-study">
        <section className='section-head'>
         <div className="Content-wrap">
            <div className="content-block">
                <span className="eyebrow large color-pinkAA">Our Work</span>
                <h1 className="display">NeuroX</h1>
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
                <p>The NeuroX Network, an emerging company empowering employment and career opportunities for the neurodivergent community, approached us to define their brand and art direction for their upcoming conference on AI and Neurodiversity in the Workforce. The challenge was to develop an identity that both embraces diversity and sparks a conversation around often-overlooked talents. We based the logo concept around "carving your own path"—a nod to the trailblazing spirit of those who think differently.</p>
                <p>A vibrant color palette was selected to create an illuminating effect, aligning with the narrative of raising awareness and bringing this mission to light. Careful attention was given to ensure the representation of neurodiverse individuals was authentic, reflecting the full spectrum of intersectionality.</p>
                <p>The conference itself embodies NeuroX’s mission by offering an inclusive environment, complete with a designated quiet room, educational materials supporting cognitive differences, and "social battery" cards to help attendees communicate their preferred level of social interaction.</p>
            </div>
            <div className='col col2'>
                <h3>ROLES</h3>
                <ul>
                    <li>Branding & Identity</li>
                    <li>UX/UI</li>
                    <li>Inclusive Design</li>
                </ul>
            </div>
            </div>
            <div className='images-block'>
                <div className='row row1'>
                    <div className='col col1'>
                        <img className="" aria-hidden="true" src={nx1} alt="" />
                    </div>
                    <div className='col col2'>
                        <img className="" aria-hidden="true" src={nx2} alt="" />
                    </div>
                </div>
                <div className='row row2'>
                    <div className='col col1'>
                        <img className="" aria-hidden="true" src={nx3} alt="" />
                    </div>
                </div>
                <div className='row row3'>
                    <div className='col col1'>
                        <img className="" aria-hidden="true" src={nx4} alt="" />
                    </div>
                    <div className='col col2'>
                        <img className="" aria-hidden="true" src={nx5} alt="" />
                    </div>
                </div>
                <div className='row row4'>
                    <div className='col col1'>
                        <img className="" aria-hidden="true" src={nx6} alt="" />
                    </div>
                    <div className='col col2'>
                        <img className="" aria-hidden="true" src={nx7} alt="" />
                    </div>
                </div>
                <div className='row row5'>
                    <div className='col col1'>
                        <img className="" aria-hidden="true" src={nx8} alt="" />
                    </div>
                    <div className='col col2'>
                        <img className="" aria-hidden="true" src={nx9} alt="" />
                    </div>
                </div>
            </div>
        </div>
       </section>
    </div>
    
 );
};

export default NeuroX;