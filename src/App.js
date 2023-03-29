import * as React from 'react';

import logo from './logo.svg';
import mark from './images/7m.svg';
import accent from './images/hero-overlay.svg';

import devIcon from './images/development-icon.svg';
import uxIcon from './images/ux-icon.svg';
import designIcon from './images/visual-design-icon.svg';
import plusIcon from './images/plus-icon.svg';
import linkedInIcon from './images/linkedin-icon.svg';

import pigIcon from './images/pig-icon.svg';
import techIcon from './images/tech-icon.svg';
import eduIcon from './images/education-icon.svg';
import healthIcon from './images/health-icon.svg';
import partnerIcon from './images/partner-icon.svg';
import handsIcon from './images/hands-icon.svg';

import avatarImg from './images/tempAvatar.png';
import laurenHeadshot from './images/lauren-headshot.png';
import jannaHeadshot from './images/janna-headshot.png';

import './App.css';

import ContactForm from './Components/ContactForm';

//import { useEffect } from "react";


// Add an event listener listening for scroll
//window.addEventListener("scroll", navHighlighter);

// function navHighlighter() {
  
//   // Get current scroll position
//   let scrollY = window.pageYOffset;
//   const sections = document.querySelectorAll("section[id]");
//   // Now we loop through sections to get height, top and ID values for each
//   sections.forEach(current => {
//     const sectionHeight = current.offsetHeight;
//     const sectionTop = current.offsetTop - 50;

// console.log(document.querySelectorAll("section[id]"));
//     var sectionId = current.getAttribute("id");
    
//     /*
//     - If our current scroll position enters the space where current section on screen is, add .active class to corresponding navigation link, else remove it
//     - To know which link needs an active class, we use sectionId variable we are getting while looping through sections as an selector
//     */

//     if (
//       scrollY > sectionTop &&
//       scrollY <= sectionTop + sectionHeight
//     ){
//       document.querySelector(".navbar a[href*=" + sectionId + "]").parentElement.classList.add("on");
//     } else {
//       document.querySelector(".navbar a[href*=" + sectionId + "]").parentElement.classList.remove("on");
//     }
//   });
// }


function App() {
  return (
    <div className="App">

      <section className="navbar">
        <div className="Content-wrap">
          <nav>
            <img src={logo} className="App-logo" alt="logo" />
            <ul className="main-nav">
              <li><a href='#SectionExpertise'>Our Expertise</a></li>
              <li><a href='#SectionIndustries'>Industries</a></li>
              {/* <li><a href='#'>Our Values</a></li> */}
              <li><a href='#SectionAbout'>About 7Magnolia</a></li>
              <li><a href='#SectionContact'>Work With Us</a></li>
            </ul>
          </nav>
        </div>
      </section>

      <section className="hero gradientBG">
          <div className="Content-wrap">
            <div className="hero-content">
              <div className="content-block">
                <h1>Empowering humans through intentional design</h1>
                <p>Our team is committed to helping businesses thrive by creating inclusive and engaging digital experiences for everyone. Whether a design system, website, or application, we deliver exceptional work based on your project aspirations.</p>
                <a className="btn-primary" href="#SectionContact">Contact Us</a>
              </div>
              <div className="accentContainer">
                <img src={accent} className="accentGraphic" alt="accent" />
              </div>
            </div>
            <div className="flower"></div>
          </div>
          <div className="whiteSquare"></div>
      </section>

    <section id="SectionExpertise" className="expertise">
        <div className="Content-wrap">
          <div className="sectionHead">
            <h2>Expertise</h2>
            <p>From concept to production, we lead with best practices in User Experience (UX), Visual Design, and Development to bring your vision to life. If your project requires other services, we can assemble a team </p>
          </div>
          <div className="row">

            <div className="card">
              <div className="cardHead">
                <img src={uxIcon} className="ux-icon" alt="UX" />
                <h4>UX</h4>
              </div>
              <p>We approach each project with a deep understanding of the needs, goals, and motivations of users, ensuring inclusive practices and accessibility standards are centered in design.</p>
            </div>

            <div className="card">
              <div className="cardHead">
                <img src={designIcon} className="design-icon" alt="Visual Design" />
                <h4>Visual Design</h4>
              </div>
              <p>Our visual practice includes all phases from concept exploration and art direction to interactive prototypes and thoroughly crafted products. Our approach infuses design principles, research, and psychology to create experiences that are both beautiful and accessible.</p>
            </div>

            <div className="card">
              <div className="cardHead">
                <img src={devIcon} className="dev-icon" alt="Development" />
                <h4>Development</h4>
              </div>
              <p>Our flexible model for web and app development services supports customizable and scalable products, tailored to your needs and optimized for a seamless transition across devices.</p>
            </div>

          </div>
        </div>
      </section>


      <section className="andMore">
        <div className="Content-wrap">

          <img src={plusIcon} className="plus-icon" alt="More" />
          <h3>And More...</h3>
          <p>Behavior Change  /  Research  /  Content Strategy  /  Illustration  /  Branding</p>

        </div>
      </section>


      <section id="SectionIndustries" className="industries">
        <div className="Content-wrap">

          <div className="industriesHead">
            <h3>Industries</h3>
            <p>Our cross-cutting approach to design is valued by a wide range of industry professionals. From finance and tech to healthcare and education, we deepen the connection between our clients and their users through informed design.</p>
          </div>

          <div className="industriesContent">

                <div className="cardHead">
                  <img src={pigIcon} className="pig-icon" alt="Finance" />
                  <h4>Finance</h4>
                </div>
                <div className="cardHead">
                  <img src={techIcon} className="tech-icon" alt="Tech" />
                  <h4>Tech</h4>
                </div>
                <div className="cardHead">
                  <img src={healthIcon} className="health-icon" alt="Healthcare" />
                  <h4>Healthcare</h4>
                </div>

                <div className="cardHead">
                  <img src={eduIcon} className="education-icon" alt="Education" />
                  <h4>Education</h4>
                </div>
            
          </div>
          
        </div>
      </section>

      <section id="SectionAbout" className="aboutUs">
        <div className="Content-wrap">

          <div className="aboutHead">
            <h2>About 7Magnolia</h2>
            <p>Founded in 2019, 7Magnolia began with a passion to bring human-centered design to the forefront of digital products. For each project, we assemble the best team based on the skills and experience needed to design solutions and deliver high quality products that cultivate connectivity with lasting impact.
            <br/><br/>We are a virtual agency which keeps us flexible, competitive, and able to collaborate with anyone, anywhere. </p>
          </div>
          <div className="aboutBody">
            <img src={avatarImg} className="avatar-img" alt="Person" />
            <div className="aboutContent">
              <h4>Dan Gauthier</h4>
              <p><b>Founder, Chief Design Officer</b><br/>
              Dan is a designer and engineer with more than 15 years experience bridging the gap between both disciplines. His talent as an artist and illustrator evolved into digital design while the desire to understand the inner workings of production led him to development. This inspired him to carve out a unique space in the industry where the two worlds come together, bringing 7Magnolia to life. With a passion for design systems, Dan has been able to apply this hybrid lens to make products that elegantly capture the nuances of the design and production process end-to-end. Dan has an entrepreneurial spirit and is driven by the thrill of creating something that benefits others.</p>
              <img src={linkedInIcon} className="linkedin" alt="Linkedin" />
            </div>
          </div>

        </div>
      </section>

      <section id="SectionPartners" className="partners">
        <div className="Content-wrap">
        <div className="partnersHead">
            <h2>Our Creative Partners</h2>
            <p>We assemble the perfect team for each project based on the skills and expertise needed to meet your project goals.</p>
          </div>

          <div className="partnersBody">

            <div className="partnersCard">
              <img src={laurenHeadshot} className="avatar-img" alt="Person" />
              <div className="partnersContent">
                <h4>Lauren McAuliffe</h4>
                <p><b>Principal Designer</b><br/>
                Lauren is a neurodivergent designer and advocate for inclusive and accessible practices. For more than a decade visual design has been her area of expertise and in recent years moved into a hybrid space where she can also dig deep into UX challenges and alleviate pain points. Her proudest moments are when she can craft experiences that are not only beautiful, but also create a sense of belonging.
                  <br/><br/>Lauren is a keynote speaker, sharing best practices and inspiring others to design through an Inclusive and Neurodiverse lens.
                </p>
                <img src={linkedInIcon} className="linkedin" alt="Linkedin" />
              </div>
            </div>

            <div className="partnersCard">
              <img src={jannaHeadshot} className="avatar-img" alt="Person" />
              <div className="partnersContent">
                <h4>Janner Doherty</h4>
                <p><b>Content Specialist</b><br/>
                For more than a decade, Janna has worked as an educational program and exhibit designer, professional learning facilitator, writer, and video producer. Janna brings a unique perspective to content creation, stemming from her interdisciplinary background in visual media art and museum education. From exhibit labels about science and art, to web content and interactive videos, Janna understands the importance of engaging your audience in an approachable and inclusive way, inviting users in as they are to foster a meaningful connection. 
                </p>
                <img src={linkedInIcon} className="linkedin" alt="Linkedin" />
              </div>
            </div>

            <div className="partnersCard">
              <img src={avatarImg} className="avatar-img" alt="Person" />
              <div className="partnersContent">
                <h4>Humma Sheikh</h4>
                <p><b>Behavior Change Scientist</b><br/>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostruddo eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun. 
                </p>
                <img src={linkedInIcon} className="linkedin" alt="Linkedin" />
              </div>
            </div>
          </div>

        </div>
      </section>

      <section id="SectionContact" className="contactUs">
        <div className="Content-wrap">
        <div className="contactUs-wrap">
            <div className="col col1">
                <img src={handsIcon} className="ux-icon" alt="UX" />
                <h2>How Can We Help?</h2>
                <p>Connect with one of our expert team members about your design or digital transformation projects. Tell us a little about your project and what you are looking to achieve.</p>
                <a className="btn-primary" href="mailto:dan@7magnolia.com">Work With Us</a>
            </div>
            <div className="col col2">
            <img src={partnerIcon} className="ux-icon" alt="UX" />
                <h2>Opportunities at 7Magnolia</h2>
                <p>If you would like to be a part of our team, please send us your portfolio and the kind of role you are looking for.</p>
                <a className="btn-secondary" href="mailto:dan@7magnolia.com">Join Our Team</a>
              {/* <ContactForm /> */}
            </div>
        </div>
        </div>
      </section>

      <footer>
        <div className="Content-wrap">
          <img src={mark} className="mark" alt="7Magnolia" />
          <p>© Copyright 2023 - 7Magnolia</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
