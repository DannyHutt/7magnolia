
import SectionSkillsCloud from '../Components/SectionSkillsCloud';
import SectionServices from '../Components/SectionServices';
import SectionSteps from '../Components/SectionSteps';
import HeroHome from '../Components/HeroHome';
import SectionOurWork from '../Components/SectionOurWork';
import LogoRibbon from '../Components/LogoRibbon';
import SectionAssembleTeam from '../Components/SectionAssembleTeam';


const HomePage = () => {


 return (
  <div className='page-home'>

      <HeroHome />
      <LogoRibbon />
      <SectionSkillsCloud />
      <SectionServices />
      <SectionSteps />
      <SectionOurWork />
      <SectionAssembleTeam />

  </div>
 );
};

export default HomePage;