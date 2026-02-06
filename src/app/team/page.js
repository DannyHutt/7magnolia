
import Masthead from '../../Components/Sub/Masthead';
import AboutA from '../../Components/Sub/Team/AboutA';
import AboutB from '../../Components/Sub/Team/AboutB';
import AboutC from '../../Components/Sub/Team/AboutC';
import AboutD from '../../Components/Sub/Team/AboutD';


const AboutPage = () => {
 return (
    <div className="page-about">
          <Masthead eyebrow="Team" title="Meet Our Team" />
          <AboutA />
          <AboutB />
          <AboutC />
          <AboutD />
        
    </div>
 );
};

export default AboutPage;