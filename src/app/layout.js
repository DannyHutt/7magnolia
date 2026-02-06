

export const metadata = {
  title: '7Magnolia | Empowering Your Business with Cutting-Edge Digital Solutions',
  description: 'Empowering Your Business with Cutting-Edge Digital Solutions',
  keywords: 'UX, UI, Software Development, Web Design, Branding, Behavior Change, Inclusive Design, Neurodivergent, Accessibility'
}

import '../index.css';
import '../App.css';
import Link from 'next/link';
import mark from '../images/7m.svg';
import NavLinks from '../Components/nav-links';
import ThemeProvider from '../theme/ThemeProvider';
import linkedInIcon from '../images/icon-in.svg';

export default function RootLayout({ children }) {

return (
    <html lang="en">

        <head>
            {/* <script async src="https://www.googletagmanager.com/gtag/js?id=G-S3EKKR8LLR"></script>
            <script>function gtag() { dataLayer.push(arguments) } window.dataLayer = window.dataLayer || [], gtag("js", new Date), gtag("config", "G-S3EKKR8LLR")</script>
             */}
            
            <meta property="og:site_name" content="7Magnolia" />
            <meta property="og:title" content="7Magnolia" />
            <meta property="og:type" content="website" />
            <meta property="og:description" content="We design digital products & elevate brands" />
            <meta property="og:url" content="https://7Magnolia.com/" />
            <meta property="og:image" content="/placeholder-og.jpg" />
            <meta property="og:image:width" content="786" />
            <meta property="og:image:height" content="480" />
            <link rel="manifest" href="/manifest.json" />
            <style>
                @import url(https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap);
                @import url(https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&display=swap);
            </style>
        </head>

        <body>
            <ThemeProvider>
            <div id="root">
                <div className='App' id="App">

                    <div className='top-banner'>
                        <Link href="#"><b>View our recent webinar</b> - Dealing with shitty bosses</Link>    
                    </div>

                    <NavLinks />

                    <main>
                        {children}
                    </main>

                    <footer>
                        <div className="Content-wrap">
                            <div className='foot-main'>
                                <img src={mark.src} className="mark" alt="7Magnolia" />
                                <p>7Magnolia is dedicated to ensuring our website is accessible to as many visitors as possible regardless of sensory, vision, cognitive, and mobility challenges. We have an active commitment to increasing our site's website accessibility. Read our <a aria-label="Our accessibility statement" tabIndex="0" role="link"  href="/accessibility-statement">Accessibility Statement</a></p>
                            </div>
                            <div className='foot-sub'>
                            <p className="copyright">© Copyright 2026 - 7Magnolia</p>
                            <a className="linkedIn-btn" href="https://www.linkedin.com/company/7magnolia-llc/"><img src={linkedInIcon.src} className="linkedin" alt="Linkedin" /></a>
                            </div>
                        </div>
                    </footer>

                </div>
                
            </div>
            </ThemeProvider>
        </body>

    </html>
  )
}