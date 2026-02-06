
import Masthead from '../../../Components/Sub/Masthead';
import OverviewSection from '../../../Components/Sub/Work/OverviewSection';
import PagerSection from '../../../Components/Sub/PagerSection';
import HeroImage from '../../../images/Work/atlas/work-hero-es.jpg';
import ImageOnlySection from '../../../Components/Sub/Work/ImageOnlySection';
import SectionTestimonial from '../../../Components/Sub/Work/SectionTestimonial';
import AdsChallenge from '../../../Components/Sub/Work/es/AdsChallenge';
import AdsSolution from '../../../Components/Sub/Work/es/AdsSolution';
import AdsA from '../../../Components/Sub/Work/es/AdsA';
import AdsB from '../../../Components/Sub/Work/es/AdsB';
import AdsC from '../../../Components/Sub/Work/es/AdsC';
import AdsD from '../../../Components/Sub/Work/es/AdsD';
import AdsE from '../../../Components/Sub/Work/es/AdsE';



// --------------------------------
// IMAGES 
// --------------------------------

import BigImage1 from '../../../images/Work/atlas/ads-3.png';
import BigImage2 from '../../../images/Work/atlas/ads-19.png';

const EstateSpace = () => {

    const roles = ['Design System','UX/UI', 'Development', 'Branding'];

 return (

    <div className="page-es">
        <Masthead eyebrow="Our Work" title="Atlas Design System" />
        <OverviewSection roles={roles} body={<><p>EstateSpace engaged us to create a unified digital experience across their platforms. We introduced Atlas, a design system that refined their aesthetic and ensured consistency across products with theming and responsiveness all built in.</p><p>The Atlas design system involved three core components: a UI kit that provided designers with a full range of components using Atomic design methodology, a token system that translates into css variables for easy communication to development teams creating web components, and documentation to act as a single source of truth for all things design system. This governance-focused approach ensures consistency across web and native products, streamlining development and design efforts for the EstateSpace team.</p></>} heroSrc={HeroImage.src} />
        <SectionTestimonial
            bgColor="var(--Background-App-Inset)"
            quote='“7Magnolia is awesome. I can’t wait to work with them again."'
            author="Client, CEO"
        />
        <AdsChallenge />
        <AdsSolution />
        <ImageOnlySection imageSrc={BigImage1.src} bgColor="#1CC39D" />
        <AdsA />
        <AdsB />
        <AdsC />
        <AdsD />    
        <AdsE />
        <ImageOnlySection imageSrc={BigImage2.src} bgColor="var(--Background-App" />

        <PagerSection leftRoute="/work/nx" rightRoute="/work/bf" leftLabel="NeuroX" rightLabel="BroadFutures" />
    </div>
    
    
 );
};

export default EstateSpace;