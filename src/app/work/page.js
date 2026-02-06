import Masthead from '../../Components/Sub/Masthead';
import SectionAssembleTeam from '../../Components/SectionAssembleTeam';
import CaseStudyPreview from '../../Components/Sub/Work/CaseStudyPreview';
import AtlasImage from '../../images/Work/atlas.jpg';
import BroadFuturesImage from '../../images/Work/broadfutures.jpg';
import QuantFuImage from '../../images/Work/quantfu.jpg';
import NeuroXImage from '../../images/Work/neurox.jpg';

const CaseStudiesPage = () => {

 return (
    <div className="page-our-work">
        <Masthead eyebrow="Our Work" title="Case Studies" />
        <CaseStudyPreview 
            title="Atlas Design System" 
            intro="A multifaceted project including a scalable design system built with responsiveness and theming at its core." 
            body="Atlas includes a component-based UI kit, a token system that translates directly to CSS variables, and centralized documentation—ensuring consistency and streamlining collaboration across design and development teams." 
            imageSrc={AtlasImage.src}
            buttonOnClick='/work/es'
            bg="--Background-App" 
            imagePosition="right" />
        <CaseStudyPreview 
            title="BroadFutures" 
            intro="A complete brand refresh using inclusive principles tailored to the neurodivergent community." 
            body="The engagement included a comprehensive style guide and website to support consistent, neuroinclusive communication, along with participatory design sessions to align on strategy and refine brand direction." 
            imageSrc={BroadFuturesImage.src}
            buttonOnClick='/work/bf'
            bg="--Background-App-Inset" 
            imagePosition="left" />
        <CaseStudyPreview 
            title="QuantFu UI Kit" 
            intro="A cohesive UI system and product experience for a complex trading platform." 
            body="The work focused on reducing cognitive load through consistent components, clear patterns, and an assistant-style “bot” that helps users automate and navigate trading workflows. The result is a streamlined product experience that makes advanced trading more approachable and efficient." 
            imageSrc={QuantFuImage.src}
            buttonOnClick='/work/qf'
            bg="--Background-App" 
            imagePosition="right" />
        <CaseStudyPreview 
            title="NeuroX" 
            intro="A comprehensive initiative integrating brand identity with a thoughtfully designed, neuro-inclusive conference experience." 
            body="Features such as quiet rooms, cognitive-supportive resources, and social battery cards allowed every attendee to engage comfortably, embodying the “carving your own path” concept." 
            imageSrc={NeuroXImage.src}
            buttonOnClick='/work/nx'
            bg="--Background-App-Inset" 
            imagePosition="left" />
        <SectionAssembleTeam />
    </div>

    
 );
};

export default CaseStudiesPage;