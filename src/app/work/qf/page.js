
import Masthead from '../../../Components/Sub/Masthead';
import OverviewSection from '../../../Components/Sub/Work/OverviewSection';
import PagerSection from '../../../Components/Sub/PagerSection';
import HeroImage from '../../../images/Work/quantfu/work-hero-qf.jpg';
import SectionTestimonial from '../../../Components/Sub/Work/SectionTestimonial';
import ImageOnlySection from '../../../Components/Sub/Work/ImageOnlySection';

import QfChallenge from '../../../Components/Sub/Work/qf/QfChallenge';
import QfSolution from '../../../Components/Sub/Work/qf/QfSolution';
import QfA from '../../../Components/Sub/Work/qf/QfA';
import QfB from '../../../Components/Sub/Work/qf/QfB';
import QfC from '../../../Components/Sub/Work/qf/QfC';
import QfD from '../../../Components/Sub/Work/qf/QfD';


// --------------------------------
// IMAGES 
// --------------------------------

import BigImage1 from '../../../images/Work/quantfu/qf-3.png';


const QuantFu = () => {

    const roles = ['UI Kit','UX/UI', 'Branding & Identity'];
    
 return (

    <div className="page-qf">
        <Masthead eyebrow="Our Work" title="QuantFu" />
        <OverviewSection roles={roles} body={<><p>QuantFu, a company specializing in simplifying complex trading systems, partnered with 7Magnolia to define their brand aesthetic and create a cohesive UI Kit. Our task was to capture QuantFu’s mission—making trading more approachable and reducing cognitive load—while designing their company website and application.</p><p>We developed a UI Kit that prioritized consistency and simplicity, ensuring that both the product design and customer-facing materials were easy to navigate. To further humanize the experience, we created a character concept of the “bot”, personifying QuantFu as an assistant that helps users automate tasks and streamline trading within the app.</p><p>The final brand reflects QuantFu’s core values of efficiency and user-friendliness, seamlessly integrated into a cohesive digital experience. This design approach allows QuantFu to offer a simplified, approachable solution to complex trading challenges.</p></>} heroSrc={HeroImage.src} />
        <SectionTestimonial
            bgColor="var(--Background-App-Inset)"
            quote='“7Magnolia is awesome. I can’t wait to work with them again."'
            author="Client, CEO"
        />
        <QfChallenge />
        <QfSolution />
        <ImageOnlySection imageSrc={BigImage1.src} bgColor="#FFAB2B" />
        <QfA />
        <QfB />
        <QfC />
        <QfD />

        <PagerSection leftRoute="/work/bf" rightRoute="/work/nx" leftLabel="BroadFutures" rightLabel="NeuroX" />
    </div>
    
    
 );
};

export default QuantFu;