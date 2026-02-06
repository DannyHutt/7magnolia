
import Masthead from '../../../Components/Sub/Masthead';
import OverviewSection from '../../../Components/Sub/Work/OverviewSection';
import PagerSection from '../../../Components/Sub/PagerSection';
import HeroImage from '../../../images/Work/neurox/work-hero-nx.jpg';
import SectionTestimonial from '../../../Components/Sub/Work/SectionTestimonial';

import NxChallenge from '../../../Components/Sub/Work/nx/NxChallenge';
import NxSolution from '../../../Components/Sub/Work/nx/NxSolution';
import NxA from '../../../Components/Sub/Work/nx/NxA';
import NxB from '../../../Components/Sub/Work/nx/NxB';
import NxC from '../../../Components/Sub/Work/nx/NxC';
import NxImageFull from '../../../Components/Sub/Work/nx/NxImageFull';


// --------------------------------
// IMAGES 
// --------------------------------

import BigImage1 from '../../../images/Work/atlas/ads-3.png';



const NeuroX = () => {

    const roles = ['Branding & Identity','UX/UI', 'Inclusive Design'];

 return (

    <div className="page-nx">
        <Masthead eyebrow="Our Work" title="NeuroX" />
        <OverviewSection roles={roles} body={<><p>The NeuroX Network, an emerging company empowering employment and career opportunities for the neurodivergent community, approached us to define their brand and art direction for their upcoming conference on AI and Neurodiversity in the Workforce. The challenge was to develop an identity that both embraces diversity and sparks a conversation around often-overlooked talents. We based the logo concept around "carving your own path"—a nod to the trailblazing spirit of those who think differently.</p><p>A vibrant color palette was selected to create an illuminating effect, aligning with the narrative of raising awareness and bringing this mission to light. Careful attention was given to ensure the representation of neurodiverse individuals was authentic, reflecting the full spectrum of intersectionality.</p><p>The conference itself embodies NeuroX’s mission by offering an inclusive environment, complete with a designated quiet room, educational materials supporting cognitive differences, and "social battery" cards to help attendees communicate their preferred level of social interaction.</p></>} heroSrc={HeroImage.src} />
        
        <NxChallenge />
        <NxSolution />
        <SectionTestimonial
            bgColor="var(--Background-App-Inset)"
            quote='“7Magnolia is awesome. I can’t wait to work with them again."'
            author="Client, CEO"
        />
        <NxImageFull />
        <NxA />
        <NxB />
        <NxC />

        



        <PagerSection leftRoute="/work/qf" rightRoute="/work/es" leftLabel="QuantFu" rightLabel="Atlas" />
    </div>
    
    
 );
};

export default NeuroX;