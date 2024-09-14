import React from 'react';
import { NavLink } from 'react-router-dom';
// --------------------------------
// IMAGES 
// --------------------------------
import keynotePhoto from '../images/lauren-keynote-photo.jpg';
import smallBusinessPhoto from '../images/small-business-photo.jpg';

const ValuesPage = () => {
 return (
    <div className="page-values">
        <section className='section-head'>
            <div className="Content-wrap">
                <div className="content-block">
                    <span className="eyebrow large color-pinkAA">Initiatives</span>
                    <h1 className=" display">Our passion projects</h1>
                </div>
                <div className="content-block-alt">

                </div>
            </div>
        </section>
        <section className="section-body">
            <div className="Content-wrap">
                <div className="item-wrapper">
                    <div className="largeCard">
                        <img src={keynotePhoto} alt="" />
                        <div className="content">
                            <h3 className='h3'>Inclusion + Equity</h3>
                            <p>With a background in inclusive design and a drive to help create more equitable experiences and opportunities, we take a special interest in projects that require an inclusive lens. As a neurodiverse team, we understand the world and systems around us weren’t built for everyone to thrive in and we want to change that.</p>
                            <a className='btn-secondary' target='_blank' href='https://vimeo.com/879489261?share=copy'>Watch Keynote</a>
                        </div>
                    </div>
                    <div className="largeCard reverse">
                        <img src={smallBusinessPhoto} alt="" />
                        <div className="content">
                            <h3 className='h3'>Small Businesses</h3>
                            <p>We are a small business and understand how difficult it can be at the start. Not knowing where to begin with your brand and presence in the world can be daunting but we have the skills (and personal experience) to help you hit the ground running. If you are interested in one of our small business design packages, please reach out, we’d love to work with you!</p>
                            <NavLink className='btn-secondary' to='./contact'>Contact Us</NavLink>
                        </div>
                    </div>
                </div>
            </div>
       </section>
    </div>
    
 );
};

export default ValuesPage;