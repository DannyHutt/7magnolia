'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import './nav-links.css';
import Image from 'next/image';
import logo from '../logo.svg';
import logoDark from '../images/logo-white.svg';
import PrimaryButton from './PrimaryButton';

import { useState, useContext, useEffect } from "react";
import { ThemeContext } from '../theme/ThemeProvider';

const CloseIcon = ({ color = 'var(--Foreground-Body-text, #190d05)', size="32" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    focusable="false"
  >
    <path d="M7.84505 5.48828L5.48828 7.84505L17.6432 20L5.48828 32.1549L7.84505 34.5117L20 22.3568L32.1549 34.5117L34.5117 32.1549L22.3568 20L34.5117 7.84505L32.1549 5.48828L20 17.6432L7.84505 5.48828Z" fill={color}/>
  </svg>
);

const OpenIcon = ({ color = 'var(--Foreground-Body-text, #190d05)', size="32" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    focusable="false"
  >
    <path d="M3.3335 8.33301V11.6663H36.6668V8.33301H3.3335ZM3.3335 18.333V21.6663H36.6668V18.333H3.3335ZM3.3335 28.333V31.6663H36.6668V28.333H3.3335Z" fill={color}/>
  </svg>
);

export default function NavLinks() {

    // mobile nav 
    const [mobileNavState, setMobileNavState] = useState(false);
    const handleNavClick = () => {
        setMobileNavState(prevMobileNavState => !prevMobileNavState);
    };

    // highlighting links
    const pathname = usePathname();

    // Close menu when the path changes
    useEffect(() => {
        setMobileNavState(false);
    }, [pathname]);

    // theme from ThemeProvider
    const { toggleTheme, isDark } = useContext(ThemeContext);

    // Prevent hydration mismatch: defer theme-dependent rendering until after mount
    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        setMounted(true);
    }, []);

    // Use a stable default logo during SSR/hydration, then switch to theme-aware logo after mount
    const currentLogo = mounted ? (isDark ? logoDark : logo) : logo;
    const currentLogoClass = mounted ? (isDark ? "theme-dark App-logo" : "theme-light App-logo") : "App-logo";
    const themeButtonClass = mounted ? (isDark ? "btn-theme-dark" : "btn-theme-light") : "btn-theme-light";

  return (

    <header className={"navbar mobile-nav-"+ mobileNavState}>
            <nav>
                <div className='nav-mobile-tools'>

                    <Link className='logo-link' aria-label="7Magnolia home" tabIndex="0" role="link" href="/">
                        <Image src={ currentLogo } className={currentLogoClass} alt="7Magnolia" />
                    </Link>

                    <button onClick={handleNavClick} className='nav-mobile-menu-button'>
                        {mobileNavState ? <CloseIcon color='var(--Foreground-Body-text, #190d05)' size="32" /> : <OpenIcon color='var(--Foreground-Body-text, #190d05)' size="32" />}
                    </button>
                </div>
                            
                <ul className="main-nav">
                    <li><Link href='/services' className={clsx({'active': pathname === '/services',},)}>Services</Link></li>
                    <li><Link href='/subscription' className={clsx({'active': pathname === '/subscription',},)}>Subscription</Link></li>
                    <li><Link href='/work' className={clsx({'active': pathname === '/work',},)}>Our Work</Link></li>
                    <li><Link href='/team' className={clsx({'active': pathname === '/team',},)}>Team</Link></li>
                    <li><Link href='https://billing.stripe.com/p/login/dRmfZh0US0Owbf12d98og00'>Login</Link></li>
                </ul>
                
                <div className='nav-tools'>
                    <PrimaryButton onClick={'/contact'} size="small" className="main-nav__cta-button">Schedule a call</PrimaryButton>
                    <div className="li-theme">
                        <button aria-label='change theme' id='Theme-btn' onClick={() => toggleTheme()} className={themeButtonClass}></button>
                    </div>

                </div>
            </nav>
    </header>
    
  );
}