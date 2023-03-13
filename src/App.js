import logo from './logo.svg';
import mark from './images/7m.svg';
import accent from './images/hero-overlay.svg';
import devIcon from './images/development-icon.svg';
import uxIcon from './images/ux-icon.svg';
import designIcon from './images/visual-design-icon.svg';
import plusIcon from './images/plus-icon.svg';

import pigIcon from './images/pig-icon.svg';
import techIcon from './images/tech-icon.svg';
import eduIcon from './images/education-icon.svg';
import healthIcon from './images/health-icon.svg';

import avatarImg from './images/tempAvatar.png';
import linkedInIcon from './images/linkedin-icon.svg';
import './App.css';

function App() {
  return (
    <div className="App">

      <section className="navbar">
        <div className="Content-wrap">
          <nav>
            <img src={logo} className="App-logo" alt="logo" />
            <ul className="main-nav">
              <li className="on"><a href='#'>Our Expertise</a></li>
              <li><a href='#'>Industries</a></li>
              <li><a href='#'>Our Values</a></li>
              <li><a href='#'>About 7Magnolia</a></li>
              <li><a href='#'>Work With Us</a></li>
            </ul>
          </nav>
        </div>
      </section>

      <section className="hero gradientBG">
          <div className="Content-wrap">
            <div className="hero-content">
              <div className="content-block">
                <h1>Empowering humans through intentional design</h1>
                <p>Whether it's an application, design system, or website, we are dedicated to delivering exceptional work based on our clients’ individual project needs. Our agency is committed to helping businesses thrive while creating accessible and memorable experiences for humans. </p>
                <button className="btn-primary">Contact Us</button>
              </div>
              <div className="accentContainer">
                <img src={accent} className="accentGraphic" alt="accent" />
              </div>
            </div>
            <div className="flower"></div>
          </div>
          <div className="whiteSquare"></div>
      </section>

    <section className="expertise">
        <div className="Content-wrap">
          <div className="sectionHead">
            <h2>Expertise</h2>
            <p>from concept to production, design systems, inclusive practices and accessiblity standards</p>
          </div>
          <div className="row">

            <div className="card">
              <div class="cardHead">
                <img src={uxIcon} className="ux-icon" alt="UX" />
                <h4>UX</h4>
              </div>
              <p>We approach each challenge with a deep understanding of the needs, goals, and motivations....</p>
            </div>

            <div className="card">
              <div class="cardHead">
                <img src={designIcon} className="design-icon" alt="Visual Design" />
                <h4>Visual Design</h4>
              </div>
              <p>We approach each challenge with a deep understanding of the needs, goals, and motivations....</p>
            </div>

            <div className="card">
              <div class="cardHead">
                <img src={devIcon} className="dev-icon" alt="Development" />
                <h4>Development</h4>
              </div>
              <p>We approach each challenge with a deep understanding of the needs, goals, and motivations....</p>
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


      <section className="industries">
        <div className="Content-wrap">

          <div className="industriesHead">
            <h3>Industries</h3>
            <p>All the cool industries we work with, blah blah  blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blahblah blah blah blah blah blah </p>
          </div>

          <div className="industriesContent">

                <div class="cardHead">
                  <img src={pigIcon} className="pig-icon" alt="Finance" />
                  <h4>Finance</h4>
                </div>
                <div class="cardHead">
                  <img src={techIcon} className="tech-icon" alt="Tech" />
                  <h4>Tech</h4>
                </div>
                <div class="cardHead">
                  <img src={healthIcon} className="health-icon" alt="Healthcare" />
                  <h4>Healthcare</h4>
                </div>

                <div class="cardHead">
                  <img src={eduIcon} className="education-icon" alt="Education" />
                  <h4>Education</h4>
                </div>
            
          </div>
          
        </div>
      </section>

      <section className="aboutUs">
        <div className="Content-wrap">

          <div className="aboutHead">
            <h2>About 7Magnolia</h2>
            <p>7Magz does a lot of cool stuff and we know a lot of cool people that can also do realy cool stuff. </p>
          </div>
          <div className="aboutBody">
            <img src={avatarImg} className="avatar-img" alt="Person" />
            <div className="aboutContent">
              <h4>Dan Gauthier</h4>
              <p><b>Founder, Principal Design Wizard</b><br/>
              Dan has been working for over 200 years and has maybe been on vacation twice. He wakes up at 6:00am, puts on a pair of bathing suit shorts and a winter sweater and watches videos about the meaning of life and other existential philosophies. He likes to start his day with some coffee in his giant mug of milk and eats a bowl of stress for breakfast. From 7:00am-7:00pm, he works to the soothing sounds of Phish and is either frozen for hours in his office or he is doing his daily 5 miles of pacing around the house. By 8:00pm Dan will then cook an elaborate 5 course dinner and end his day with a spoonful (or two) of Gunta’s Ganja Goop and pass out on his 12 person leather couch.
              </p>
              <img src={linkedInIcon} className="linkedin" alt="Linkedin" />
            </div>
          </div>

        </div>
      </section>

      <section className="partners">
        <div className="Content-wrap">
        <div className="aboutHead">
            <h2>Our Creative Partners</h2>
            <p>We assemble awesome teams based on your needs</p>
          </div>

          <div className="partnersBody">

            <div className="partnersCard">
              <img src={avatarImg} className="avatar-img" alt="Person" />
              <div className="partnersContent">
                <h4>Lauren McAuliffe</h4>
                <p><b>Principal Design Lady, Cleaning Lady, and Chief Napper</b><br/>
                Lauren likes to work 5 hours tops per day then she spends 3 hours on her daily self-care routine of chakra cleansing, yoga, and taking naps with little boop. When she isn’t working, she spends her time reminding Dan to eat or drink water and helps keep the laundry under control. 
                </p>
                <img src={linkedInIcon} className="linkedin" alt="Linkedin" />
              </div>
            </div>

            <div className="partnersCard">
              <img src={avatarImg} className="avatar-img" alt="Person" />
              <div className="partnersContent">
                <h4>Janner Doherty</h4>
                <p><b>Chief Science Lady and Content Specialist</b><br/>
                Janner knows all the science and can teach it to anyone. She is also really good with words and writes ridiculously awesome content. She likes to hike mountains and eat burgers. If you spill something and can’t figure out how to remove a stain, she can help you get it out AND turn it into a science lesson. 1,2,3 SCIENCE!!
                </p>
                <img src={linkedInIcon} className="linkedin" alt="Linkedin" />
              </div>
            </div>

            <div className="partnersCard">
              <img src={avatarImg} className="avatar-img" alt="Person" />
              <div className="partnersContent">
                <h4>Dan Gauthier</h4>
                <p><b>Founder, Principal Design Wizard</b><br/>
                Dan has been working for over 200 years and has maybe been on vacation twice. He wakes up at 6:00am, puts on a pair of bathing suit shorts and a winter sweater and watches videos about the meaning of life and other existential philosophies. He likes to start his day with some coffee in his giant mug of milk and eats a bowl of stress for breakfast. 
                </p>
                <img src={linkedInIcon} className="linkedin" alt="Linkedin" />
              </div>
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
