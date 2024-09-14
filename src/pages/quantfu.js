import React from 'react';
// --------------------------------
// IMAGES 
// --------------------------------
import heroImage from '../images/Cover-qf.jpg';
import qf1 from '../images/case-studies/qf-1.jpg';
import qf2 from '../images/case-studies/qf-2.jpg';
import qf3 from '../images/case-studies/qf-3.jpg';
import qf4 from '../images/case-studies/qf-4.jpg';
import qf5 from '../images/case-studies/qf-5.jpg';
import qf6 from '../images/case-studies/qf-6.jpg';
import qf7 from '../images/case-studies/qf-7.jpg';
import qf8 from '../images/case-studies/qf-8.jpg';
import qf9 from '../images/case-studies/qf-9.jpg';

const QuantFu = () => {
 return (
    <div className="page-qf case-study">
        <section className='section-head'>
            <div className="Content-wrap">
                <div className="content-block">
                    <span className="eyebrow large color-pinkAA">Our Work</span>
                    <h1 className="display">QuantFu</h1>
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
                        <p>QuantFu, a company specializing in simplifying complex trading systems, partnered with 7Magnolia to define their brand aesthetic and create a cohesive UI Kit. Our task was to capture QuantFu’s mission—making trading more approachable and reducing cognitive load—while designing their company website and application.</p>
                        <p>We developed a UI Kit that prioritized consistency and simplicity, ensuring that both the product design and customer-facing materials were easy to navigate. To further humanize the experience, we created a character concept of the “bot”, personifying QuantFu as an assistant that helps users automate tasks and streamline trading within the app.</p>
                        <p>The final brand reflects QuantFu’s core values of efficiency and user-friendliness, seamlessly integrated into a cohesive digital experience. This design approach allows QuantFu to offer a simplified, approachable solution to complex trading challenges.</p>
                    </div>
                    <div className='col col2'>
                        <h3>ROLES</h3>
                        <ul>
                            <li>Branding & Identity</li>
                            <li>UX/UI</li>
                        </ul>
                    </div>
                </div>
                <div className='images-block'>
                    <div className='row row2'>
                        <div className='col col1'>
                            <img className="" aria-hidden="true" src={qf1} alt="" />
                        </div>
                        <div className='col col2'>
                            <img className="" aria-hidden="true" src={qf2} alt="" />
                        </div>
                        <div className='col col3'>
                            <img className="" aria-hidden="true" src={qf3} alt="" />
                        </div>
                    </div>
                    <div className='row row3'>
                        <div className='col col1'>
                            <img className="" aria-hidden="true" src={qf4} alt="" />
                        </div>
                        <div className='col col2'>
                            <img className="" aria-hidden="true" src={qf5} alt="" />
                        </div>
                    </div>
                    <div className='row row4'>
                        <div className='col col1'>
                            <img className="" aria-hidden="true" src={qf6} alt="" />
                        </div>
                        <div className='col col2'>
                            <img className="" aria-hidden="true" src={qf7} alt="" />
                        </div>
                    </div>
                    <div className='row row5'>
                        <div className='col col1'>
                            <img className="" aria-hidden="true" src={qf8} alt="" />
                        </div>
                        <div className='col col2'>
                            <img className="" aria-hidden="true" src={qf9} alt="" />
                        </div>
                    </div>
                </div>
            </div>
       </section>
    </div>
    
 );
};

export default QuantFu;