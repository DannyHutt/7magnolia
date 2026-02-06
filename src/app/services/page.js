import Masthead from '../../Components/Sub/Masthead';
import SectionSkills from '../../Components/Sub/Services/SectionSkills';
import SectionModels from '../../Components/Sub/Services/SectionModels'
import SectionAgile from '../../Components/Sub/Services/SectionAgile';
import SectionTiers from '../../Components/Sub/Services/SectionTiers';
import SectionAssembleTeam from '../../Components/SectionAssembleTeam';

const ServicesPage = () => {

 return (
    <div className="page-subscription">
        <Masthead eyebrow="Services" title="From Branding to Development" />
        <SectionSkills />
        <SectionModels />
        <SectionAgile />
        <SectionTiers />
        <SectionAssembleTeam />
    </div>
 );
};

export default ServicesPage;