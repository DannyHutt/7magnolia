
import Masthead from '../../../Components/Sub/Masthead';
import OverviewSection from '../../../Components/Sub/Work/OverviewSection';
import PagerSection from '../../../Components/Sub/PagerSection';
import ChallengeSection from '../../../Components/Sub/Work/bf/ChallengeSection';
import SolutionSection from '../../../Components/Sub/Work/bf/SolutionSection';
import ImageOnlySection from '../../../Components/Sub/Work/ImageOnlySection';
import SectionA from '../../../Components/Sub/Work/bf/SectionA';
import SectionB from '../../../Components/Sub/Work/bf/SectionB';
import SectionC from '../../../Components/Sub/Work/bf/SectionC';
import SectionD from '../../../Components/Sub/Work/bf/SectionD';
import SectionTestimonial from '../../../Components/Sub/Work/SectionTestimonial';
import SectionE from '../../../Components/Sub/Work/bf/SectionE';


// --------------------------------
// IMAGES 
// --------------------------------

import HeroImage from '../../../images/Work/broadfutures/work-hero-bf.jpg';
import BigImage1 from '../../../images/Work/broadfutures/Frame 1000003121.jpg';
import BigImage2 from '../../../images/Work/broadfutures/bf-22.png';


const BroadFutures = () => {
 return (

    <div className="page-bf">
        <Masthead eyebrow="Our Work" title="Broad Futures" />
        <OverviewSection heroSrc={HeroImage.src} />
        <ChallengeSection />
        <SolutionSection />
        <ImageOnlySection imageSrc={BigImage1.src} bgColor="#D6FCFF" />
        <SectionA />
        <SectionB />
        <SectionC />
        <SectionD />
        <SectionTestimonial />
        <SectionE />
        <ImageOnlySection imageSrc={BigImage2.src} bgColor="var(--Background-App" />
        <PagerSection leftRoute="/work/es" rightRoute="/work/qf" leftLabel="Atlas" rightLabel="QuantFu" />
    </div>
    
    
 );
};

export default BroadFutures;