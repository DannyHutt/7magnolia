import React from 'react';
// --------------------------------
// ICONS 
// --------------------------------
import linkedInIcon from '../images/icon-in.svg';
// --------------------------------
// IMAGES 
// --------------------------------
import laurenHeadshot from '../images/lady.jpg';
import jannaHeadshot from '../images/janna.jpg';
import danHeadshot from '../images/dan.jpg';
import hummaHeadshot from '../images/humma.jpg';

const AboutPage = () => {
 return (
    <div className="page-about">
        <section className='section-head'>
            <div className="Content-wrap">
                <div className="content-block">
                    <span className="eyebrow large color-pinkAA">Our Team</span>
                    <h1 className="display">Who we are</h1>
                </div>
                <div className="content-block-alt">
                    <p className="headline">We assemble the best teams to deliver high quality products with lasting impact. As a virtual agency, we are flexible, competitive, and able to collaborate with anyone.</p>
                </div>
            </div>
        </section>
        <section aria-labelledby='Our-people-heading' id="SectionAbout" className="section-body section-core">
        <div className="Content-wrap">

        <div className="row">

          <div className="partnersCard">
            <img aria-hidden="true" src={danHeadshot} className="avatar-img" alt="Photograph of Dan Gauthier" />
            <div className="aboutContent">
              <h4 className='h4'>Dan Gauthier <a className="linkedIn-btn" href="https://www.linkedin.com/in/dan-gauthier-0a34b72"><img src={linkedInIcon} className="linkedin" alt="Linkedin" /></a></h4>

              <span aria-hidden className="title">Co-Founder | CEO</span>
              <span className="visually-hidden">Title: Co-Founder & CEO</span>

              <p>Dan is a designer and engineer with two decades of experience bridging the gap between both disciplines. This hybrid lens allows him to carve out a unique space in the industry as a leader who can guide the production process end-to-end.</p>
              
            </div>
          </div>

          <div className="partnersCard">
            <img aria-hidden="true" src={laurenHeadshot} className="avatar-img" alt="Photograph of Lauren McAuliffe" />
            <div className="aboutContent">
              <h4 className='h4'>Lauren McAuliffe <a className="linkedIn-btn" href="https://www.linkedin.com/in/laurenmcauliffe"><img src={linkedInIcon} className="linkedin" alt="Linkedin" /></a></h4>


              <span aria-hidden className="title">Co-Founder | Principal Designer</span>
              <span className="visually-hidden">Title: Co-Founder & Principal Designer</span>
            
              <p>Lauren is a designer and advocate for inclusive design. For over a decade, visual design has been her area of expertise while curiosity led her to build a UX practice. She is committed to creating experiences that are not only beautiful, but foster a sense of belonging.
                <br/>Lauren is a keynote speaker, sharing best practices and inspiring others to design through an inclusive lens.
              </p>
              
            </div>
          </div>

        </div>


        </div>
        </section> 

        <section aria-labelledby='Partners-heading' className="section-body section-partners">
        <div className="Content-wrap">

        <div className="partnersHead">
          <h2 className='h3' id='Partners-heading'>Our Creative Partners</h2>
        </div>

        <div className="row">

        <div className="partnersCard">
            <img aria-hidden="true" src={hummaHeadshot} className="avatar-img" alt="Photograph of Humma Sheikh" />
            <div className="aboutContent">
              <h3 className='h4'>Humma Sheikh <a className="linkedIn-btn" href="#"><img src={linkedInIcon} className="linkedin" alt="Linkedin" /></a></h3>

              
              <span aria-hidden className="title">Behavioral Design Specialist</span>
              <span className="visually-hidden">Title: Behavioral Design Specialist</span>

              <p>Humma blends her love for qualitative research, behavior science, and design to build empathy for diverse populations. She believes it is crucial to understand the underlying psychology of decision-making in order to create effective business strategies and user experiences.</p>
              
            </div>
          </div>

          <div className="partnersCard">
            <img aria-hidden="true" src={jannaHeadshot} className="avatar-img" alt="Photograph of Janna Doherty" />
            <div className="aboutContent">
              <h3 className='h4'>Janna Doherty <a className="linkedIn-btn" href="https://www.linkedin.com/in/janna-doherty-0a4b6a1a7"><img src={linkedInIcon} className="linkedin" alt="Linkedin" /></a></h3>

              <span aria-hidden className="title">Content Specialist</span>
              <span className="visually-hidden">Content Specialist</span>

              <p>Janna has a unique background in visual art and museum education. From exhibit labels about science and art to digital media, Janna understands how to engage an audience in an approachable and inclusive way. </p>
              
              
            </div>
          </div>

        </div>

        </div>
        </section> 
    </div>
    

        

       
 );
};

export default AboutPage;