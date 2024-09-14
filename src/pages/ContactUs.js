import React from 'react';
import HubspotForm from 'react-hubspot-form';

const ContactPage = () => {
 return (
    <div className="page-contact">

        <section className='section-head'>
            <div className="Content-wrap">
                <div className="content-block">
                    <span className="eyebrow large color-pinkAA">Contact Us</span>
                    <h1 className="display">How can we help?</h1>
                </div>
                <div className="content-block-alt">

                </div>
            </div>
        </section>


       

        <section aria-labelledby='Contact-heading' id="SectionContact" className="contactUs">
            <div className="Content-wrap">
                <div className="contactUs-wrap">
                    <div className="col col1">
                        <p>Connect with one of our expert team members about your design or digital transformation projects. Tell us a little about your project and what you are looking to achieve.</p>
                    </div>
                    <div className="col col2">

                        <HubspotForm
                            region='na1'
                            portalId='44103127'
                            formId='303aa920-0c99-432b-9775-39411a792253'
                        />
                        
                    </div>
                </div>
            </div>
        </section>

       
    </div>

    

    
    
 );
};

export default ContactPage;