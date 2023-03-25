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
              <li className="on"><a href='#SectionExpertise'>Our Expertise</a></li>
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
                <p>Our team is committed to helping businesses thrive by creating inclusive and engaging digital experiences for everyone. Whether a design system, website, or application, we deliver exceptional work based on your project aspirations.
 </p>
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

    <section id="SectionExpertise" className="expertise">
        <div className="Content-wrap">
          <div className="sectionHead">
            <h2>Expertise</h2>
            <p>From concept to production, we lead with best practices in User Experience, Visual Design, and Development to bring your vision to life.
</p>
          </div>
          <div className="row">

            <div className="card">
              <div class="cardHead">
                <img src={uxIcon} className="ux-icon" alt="UX" />
                <h4>UX</h4>
              </div>
              <p>We approach each project with a deep understanding of the needs, goals, and motivations of users, ensuring inclusive practices and accessibility standards are centered in design.
</p>
            </div>

            <div className="card">
              <div class="cardHead">
                <img src={designIcon} className="design-icon" alt="Visual Design" />
                <h4>Visual Design</h4>
              </div>
              <p>Art direction, visual experience, and aesthetics compliment UX strategy and facilitate desired user behaviors through production assets.
</p>
            </div>

            <div className="card">
              <div class="cardHead">
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
            <p>Our cross-cutting approach to design is valued by a wide range of industry professionals. From finance and tech to healthcare and education, we deepen the connection between our clients and their users through informed design.
 </p>
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

      <section id="SectionAbout" className="aboutUs">
        <div className="Content-wrap">

          <div className="aboutHead">
            <h2>About 7Magnolia</h2>
            <p>7Magnolia is a digital design firm that empowers </p>
          </div>
          <div className="aboutBody">
            <img src={avatarImg} className="avatar-img" alt="Person" />
            <div className="aboutContent">
              <h4>Dan Gauthier</h4>
              <p><b>Founder, Principal Designer</b><br/>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostruddo eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun.
              </p>
              <img src={linkedInIcon} className="linkedin" alt="Linkedin" />
            </div>
          </div>

        </div>
      </section>

      <section id="SectionPartners" className="partners">
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
                <p><b>Principal Designer</b><br/>
                  Lauren is a neurodivergent designer and advocate for inclusive and accessible practices. For more than a decade visual design has been her area of expertise and in recent years moved into a hybrid space where she can also dig deep into UX challenges and alleviate pain points. Her proudest moments are when she can craft experiences that are not only beautiful, but also create a sense of belonging.
                  <br/>Lauren is a keynote speaker, sharing best practices and inspiring others to design through an Inclusive and Neurodiverse lens.
                </p>
                <img src={linkedInIcon} className="linkedin" alt="Linkedin" />
              </div>
            </div>

            <div className="partnersCard">
              <img src={avatarImg} className="avatar-img" alt="Person" />
              <div className="partnersContent">
                <h4>Janner Doherty</h4>
                <p><b>Content Specialist</b><br/>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostruddo eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun.
                </p>
                <img src={linkedInIcon} className="linkedin" alt="Linkedin" />
              </div>
            </div>

            <div className="partnersCard">
              <img src={avatarImg} className="avatar-img" alt="Person" />
              <div className="partnersContent">
                <h4>Humma Sheikh</h4>
                <p><b>Behavior Change Designer</b><br/>
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
            <img src={uxIcon} className="ux-icon" alt="UX" />
              <h2>Work With Us</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostruddo eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun.</p>
            </div>
            <div className="col col2">
              <div>
                <input type="text" placeholder="Name"></input>
                <input type="email" placeholder="Email"></input>
                <input type="text" placeholder="Company"></input>
                <textarea placeholder="Message"></textarea>
                <div>
                  <button className="btn-primary btn-submit">Submit</button>
                </div>
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
