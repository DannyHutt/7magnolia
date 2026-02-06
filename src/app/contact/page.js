'use client';

import Masthead from '../../Components/Sub/Masthead';
import './ContactPage.css';
import Cal, { getCalApi } from "@calcom/embed-react";
import { useContext, useState, useEffect } from "react";
import { ThemeContext } from '../../theme/ThemeProvider';



const ContactPage = () => {

// theme from ThemeProvider
const { isDark } = useContext(ThemeContext);

// Prevent hydration mismatch: defer theme-dependent rendering until after mount
const [mounted, setMounted] = useState(false);
useEffect(() => {
    setMounted(true);
}, []);

const currentTheme = mounted ? (isDark ? "dark" : "light") : "dark";

    useEffect(() => {
        (async function () {
        const cal = await getCalApi({"namespace":"15min"});
        cal("ui", {"theme":currentTheme,"cssVarsPerTheme":{"light":{"cal-brand":"#FEEEE3"},"dark":{"cal-brand":"#120802"}},"hideEventTypeDetails":true,"layout":"month_view"});
        })();
    }, [])

 return (
    <div className="page-contact">
        {/* <Masthead eyebrow="Contact us" title="How can we help?" /> */}
        <section aria-labelledby='Contact-heading' id="SectionContact" className="contactUs">
            
            <div className="contactUs__container">
                <div className="col col1">
                    <div className="masthead__content">
                        <p className="masthead__eyebrow">Contact us</p>
                        <h1 id="Masthead-heading" className="masthead__title">
                            
                            Book a 15 minute consultation
                        </h1>
                    </div>
                    <p className="contactUs__text">Connect with one of our expert team members about your design or digital transformation projects. Tell us a little about your project and what you are looking to achieve.</p>
                </div>
                <div className="col col2">
                    
                    <Cal namespace="15min"
                        calLink="7magnolia/15min"
                        style={{borderRadius:"12px", border:"1px solid var(--Borders-subtle-outline)",width:"100%",maxWidth:"450px",height:"100%",overflow:"scroll"}}
                        config={{"layout":"month_view","useSlotsViewOnSmallScreen":"true","theme":currentTheme}}
                    />

                </div>
            </div>
        </section>

    </div>

    

    
    
 );
};

export default ContactPage;