'use client';

import { useState, useContext, useEffect } from "react";
import { ThemeContext } from '../theme/ThemeProvider';
import './LogoRibbon.css';


// --------------------------------
// LOGOS 
// --------------------------------
import logo_1 from '../images/logos/Frame 2273.png';
import logo_2 from '../images/logos/Frame 2274.png';
import logo_3 from '../images/logos/Frame 2275.png';
import logo_4 from '../images/logos/Frame 827.png';
import logo_5 from '../images/logos/Frame 828.png';
import logo_6 from '../images/logos/Frame 829.png';

import logo_1alt from '../images/logos/Frame 2273 dark.png';
import logo_2alt from '../images/logos/Frame 2274 dark.png';
import logo_3alt from '../images/logos/Frame 2275 dark.png';
import logo_4alt from '../images/logos/Frame 827 dark.png';
import logo_5alt from '../images/logos/Frame 828 dark.png';
import logo_6alt from '../images/logos/Frame 829 dark.png';

export default function LogoRibbon() {
    // theme from ThemeProvider
    const { isDark } = useContext(ThemeContext);

    // Prevent hydration mismatch: defer theme-dependent rendering until after mount
    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        setMounted(true);
    }, []);

    // Use a stable default logo during SSR/hydration, then switch to theme-aware logo after mount
    const logo1 = mounted ? (isDark ? logo_1alt.src : logo_1.src) : logo_1.src;
    const logo2 = mounted ? (isDark ? logo_2alt.src : logo_2.src) : logo_2.src;
    const logo3 = mounted ? (isDark ? logo_3alt.src : logo_3.src) : logo_3.src;
    const logo4 = mounted ? (isDark ? logo_4alt.src : logo_4.src) : logo_4.src;
    const logo5 = mounted ? (isDark ? logo_5alt.src : logo_5.src) : logo_5.src;
    const logo6 = mounted ? (isDark ? logo_6alt.src : logo_6.src) : logo_6.src;
    
  return (
    <section className="Client-ribbon">
      <div className="Client-ribbon__container logos">
        <ul className="logo-ribbon">
          <li><img src={logo1} alt="client logo 1" /></li>
          <li><img src={logo2} alt="client logo 2" /></li>
          <li><img src={logo3} alt="client logo 3" /></li>
        </ul>
        <ul className='logo-ribbon'>
          <li><img src={logo4} alt="client logo 4" /></li>
          <li><img src={logo5} alt="client logo 5" /></li>
          <li><img src={logo6} alt="client logo 6" /></li>
        </ul>
      </div>
    </section>
  );
}
