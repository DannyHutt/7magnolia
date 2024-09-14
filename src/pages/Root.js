import React from 'react';

import SharedContext from '../SharedContext';
import '../App.css';
import {
  createBrowserRouter,
  RouterProvider,
  Link,
  NavLink,
  useMatch,
  Router,
  Outlet,
} from "react-router-dom"

import logo from '../logo.svg';
import logoDark from '../images/logo-white.svg';
import mark from '../images/7m.svg';

import iconSun from '../images/icon-sun.svg';
import iconMoon from '../images/icon-moon.svg';
import iconSync from '../images/icon-refresh.svg';
import iconCheck from '../images/icon-checkmark.svg';

import iconSunDark from '../images/icon-sun-dark.svg';
import iconMoonDark from '../images/icon-moon-dark.svg';
import iconSyncDark from '../images/icon-refresh-dark.svg';
import iconCheckDark from '../images/icon-checkmark-dark.svg';



import { useState, useEffect } from "react";


const useThemeDetector = () => {
    const getCurrentTheme = () => window.matchMedia("(prefers-color-scheme: dark)").matches; // ENABLES DARK MODE SUPPORT
    //const getCurrentTheme = () => false; // DISABLES DARK MODE SUPPORT (half of it, also need to update css in 2 files)
    
    const [sysTheme, setSysTheme] = useState(getCurrentTheme());
    
    const mqListener = (e => {
      setSysTheme(e.matches);
    });
    
    useEffect(() => {
      const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
      darkThemeMq.addListener(mqListener);
      return () => darkThemeMq.removeListener(mqListener);
    }, []);
  
    return sysTheme;
  }

  


const useOutsideClick = (callback) => {
    const ref = React.useRef();
  
    React.useEffect(() => {
      const handleClick = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
          callback();
        }
      };
  
      document.addEventListener('click', handleClick, true);
  
      return () => {
        document.removeEventListener('click', handleClick, true);
      };
    }, [ref]);
  
    return ref;
  };
  

const Root = () => {


    // --------------------------------
  // Preload images
  // --------------------------------

  const [isLoading, setIsLoading] = useState(true);

  const cacheImages = async (srcArray) => {

    const promises = await srcArray.map((src) => {
      return new Promise (function (resolve,reject) { 
        const img = new Image();

        img.src = src;
        img.onload = resolve();
        img.onerror = reject();

      });
    });

    await Promise.all(promises);

    setIsLoading(false);

  };

  useEffect(() => { 

    const preloadSrcList = [
      logo,
      logoDark,
      mark,
      iconCheck,
      iconCheckDark,
      iconMoon,
      iconMoonDark,
      iconSun,
      iconSunDark,
      iconSync,
      iconSyncDark
    ];

    cacheImages(preloadSrcList);

  }, []);







  const isSysThemeDark = useThemeDetector();
  const [theme, setTheme] = useState("sync");
  const [currentPage, setCurrentPage] = useState("sync");
  //const [isDarkTheme, setIsDarkTheme] = useState(false);
  let isDarkTheme = false;
  switch(theme){
    case 'sync':
      //setIsDarkTheme(isSysThemeDark);
      isDarkTheme = isSysThemeDark;
      break;
    case 'light':
      //setIsDarkTheme(false);
      isDarkTheme = false;
      break;
    case 'dark':
      //setIsDarkTheme(true);
      isDarkTheme = true;
      break;
  }



  const handleChangeTheme = (theme) => {
    setTheme(theme);
  }

  const handleChangePage = (currentPage) => {
    setCurrentPage(currentPage);
  }

  const [themeMenuState, setThemeMenuState] = useState(false);
  const [workMenuState, setWorkMenuState] = useState(false);
  const [mobileNavState, setMobileNavState] = useState(false);

  const handleNavClick = () => {
    setMobileNavState(prevMobileNavState => !prevMobileNavState);
  };

  const handleThemeClick = () => {
    setThemeMenuState(prevThemeMenuState => !prevThemeMenuState);
  };

  const handleWorkClick = () => {
    setWorkMenuState(prevWorkMenuState => !prevWorkMenuState);
  };

  const handleClickOutside = () => {
    setThemeMenuState(false);
    setWorkMenuState(false); // can these be less specific?
  };

  const match_nx = useMatch("/work/nx");
  const match_es = useMatch("/work/es");
  const match_qf = useMatch("/work/qf");

  const peachyCream = '#FCF5E5';
  const themeTextColor = peachyCream;

  const ref = useOutsideClick(handleClickOutside);
 return (

    
    // <div className={isDarkTheme ? "App darkTheme" : "App lightTheme"} id="App">
    <div className="App darkTheme" id="App">
      {/* <a className='top-banner'><b>View our recent webinar</b> &nbsp; <span>- Dealing with shitty bosses</span></a> */}
      <header className="navbar section">
        <div className="Content-wrap">
          <nav className={"mobile-nav "+ mobileNavState}>
            <div className='nav-mobile-tools'>
              <a className='logo-link' aria-label="7Magnolia home" tabIndex="0" role="link" href="/"><svg xmlns="http://www.w3.org/2000/svg" width="170" height="39" viewBox="0 0 170 39" fill="none">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M18.6331 36.0628C27.7805 36.0628 35.1959 28.6474 35.1959 19.5C35.1959 10.3526 27.7805 2.93723 18.6331 2.93723C9.48576 2.93723 2.07035 10.3526 2.07035 19.5C2.07035 28.6474 9.48576 36.0628 18.6331 36.0628ZM18.6331 38.1331C28.9239 38.1331 37.2663 29.7908 37.2663 19.5C37.2663 9.20922 28.9239 0.866882 18.6331 0.866882C8.34234 0.866882 0 9.20922 0 19.5C0 29.7908 8.34234 38.1331 18.6331 38.1331Z" fill={themeTextColor}/>
                  <path d="M47.1836 27.7812V13.0403H49.3161L54.8853 25.7316H53.8708L59.3986 13.0403H61.5311V27.7812H59.1502L59.1295 16.8705L59.8334 17.0361L55.2372 27.7812H53.4775L48.7778 17.0361L49.5231 16.8705L49.5438 27.7812H47.1836Z" fill={themeTextColor}/>
                  <path d="M67.4856 27.7812H64.7942L71.4607 13.0403H73.6346L80.3011 27.7812H77.651L72.2267 15.1107H72.9513L67.4856 27.7812ZM67.7341 24.3237L68.7485 22.2534H76.2639L77.237 24.3237H67.7341Z" fill={themeTextColor}/>
                  <path d="M90.0226 27.9468C88.4906 27.9468 87.1656 27.6501 86.0476 27.0566C84.9434 26.4493 84.0945 25.5866 83.501 24.4686C82.9214 23.3369 82.6315 21.9773 82.6315 20.3901C82.6315 18.8304 82.9214 17.4916 83.501 16.3736C84.0945 15.2418 84.9365 14.3791 86.0269 13.7856C87.1173 13.1783 88.4078 12.8747 89.8984 12.8747C90.9336 12.8747 91.8998 13.0196 92.7969 13.3095C93.6941 13.5993 94.4532 14.0272 95.0743 14.5931L94.1633 16.5392C93.4594 16.0009 92.7762 15.6145 92.1137 15.3798C91.4512 15.1314 90.7266 15.0072 89.9398 15.0072C88.4354 15.0072 87.2898 15.4626 86.5031 16.3736C85.7301 17.2845 85.3437 18.6234 85.3437 20.3901C85.3437 22.1982 85.7439 23.5646 86.5445 24.4893C87.345 25.4003 88.5389 25.8558 90.1262 25.8558C90.7335 25.8558 91.327 25.8075 91.9067 25.7109C92.5002 25.6004 93.0592 25.4486 93.5836 25.2554L92.9625 26.2491V21.7358H89.7949V19.8104H95.3848V26.8909C94.9294 27.1256 94.4118 27.3188 93.8321 27.4706C93.2524 27.6225 92.6382 27.7398 91.9895 27.8226C91.3408 27.9054 90.6852 27.9468 90.0226 27.9468Z" fill={themeTextColor}/>
                  <path d="M100.069 27.7812V13.0403H102.056L110.545 24.0753L109.986 24.3651V13.0403H112.491V27.7812H110.483L102.036 16.7877L102.574 16.4564V27.7812H100.069Z" fill={themeTextColor}/>
                  <path d="M123.896 27.9468C122.461 27.9468 121.218 27.6432 120.169 27.0359C119.12 26.4286 118.313 25.559 117.747 24.4272C117.181 23.2954 116.898 21.9566 116.898 20.4108C116.898 18.8511 117.181 17.5123 117.747 16.3943C118.313 15.2625 119.12 14.3929 120.169 13.7856C121.218 13.1783 122.461 12.8747 123.896 12.8747C125.345 12.8747 126.594 13.1783 127.643 13.7856C128.692 14.3929 129.5 15.2625 130.066 16.3943C130.631 17.5123 130.914 18.8442 130.914 20.3901C130.914 21.9497 130.625 23.2954 130.045 24.4272C129.479 25.559 128.672 26.4286 127.623 27.0359C126.587 27.6432 125.345 27.9468 123.896 27.9468ZM123.896 25.8351C125.249 25.8351 126.311 25.3727 127.084 24.4479C127.857 23.5094 128.244 22.1568 128.244 20.3901C128.244 18.6234 127.857 17.2845 127.084 16.3736C126.311 15.4488 125.249 14.9864 123.896 14.9864C122.557 14.9864 121.501 15.4488 120.728 16.3736C119.955 17.2845 119.569 18.6234 119.569 20.3901C119.569 22.1568 119.955 23.5094 120.728 24.4479C121.501 25.3727 122.557 25.8351 123.896 25.8351Z" fill={themeTextColor}/>
                  <path d="M135.306 27.7812V13.0403H137.977V25.5866H144.85V27.7812H135.306Z" fill={themeTextColor}/>
                  <path d="M148.547 27.7812V13.0403H151.218V27.7812H148.547Z" fill={themeTextColor}/>
                  <path d="M157.184 27.7812H154.493L161.159 13.0403H163.333L170 27.7812H167.35L161.925 15.1107H162.65L157.184 27.7812ZM157.433 24.3237L158.447 22.2534H165.963L166.936 24.3237H157.433Z" fill={themeTextColor}/>
                  <path d="M18.6627 30.1747C17.8194 30.1747 17.1824 29.9594 16.7518 29.5288C16.3211 29.0981 16.1058 28.515 16.1058 27.7793C16.1058 27.3307 16.1866 26.8732 16.348 26.4067C16.5275 25.9402 16.8056 25.3749 17.1824 24.7111C17.5592 24.0292 18.0437 23.1769 18.6358 22.1542L23.2113 14.3221H14.3833C14.1141 14.3221 13.8988 14.3938 13.7373 14.5374C13.5938 14.663 13.4503 14.9411 13.3067 15.3717C13.1632 15.7844 12.9478 16.4124 12.6608 17.2557H11.7188L13.4951 10.5809H26.118V11.9267L22.2423 18.6015C21.6323 19.6422 21.1927 20.5572 20.9235 21.3467C20.6723 22.1183 20.5467 22.8181 20.5467 23.4461C20.5467 23.9305 20.5916 24.3791 20.6813 24.7918C20.771 25.1865 20.8697 25.5634 20.9773 25.9222C21.085 26.2631 21.1837 26.604 21.2734 26.945C21.3631 27.2679 21.408 27.5909 21.408 27.9139C21.408 28.6854 21.1388 29.2596 20.6005 29.6364C20.0623 29.9953 19.4163 30.1747 18.6627 30.1747Z" fill={themeTextColor}/>
                  </svg>
                  {/* <img src={isDarkTheme ? logoDark: logo} className="App-logo" alt="7Magnolia" /> */}
              </a>
              <button onClick={handleNavClick} className='nav-mobile-close-button'>
                <svg width="32" height="32" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.84505 5.48828L5.48828 7.84505L17.6432 20L5.48828 32.1549L7.84505 34.5117L20 22.3568L32.1549 34.5117L34.5117 32.1549L22.3568 20L34.5117 7.84505L32.1549 5.48828L20 17.6432L7.84505 5.48828Z" fill="white"/>
                </svg>

              </button>
              <button onClick={handleNavClick} className='nav-mobile-menu-button'>
                <svg width="32" height="32" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3.3335 8.33301V11.6663H36.6668V8.33301H3.3335ZM3.3335 18.333V21.6663H36.6668V18.333H3.3335ZM3.3335 28.333V31.6663H36.6668V28.333H3.3335Z" fill="white"/>
                </svg>
              </button>
            </div>
                        
              <ul className="main-nav">
                <li><NavLink onClick={handleNavClick} to='./'>Home</NavLink></li>
                <li><NavLink onClick={handleNavClick} to='./services'>Services</NavLink></li>

                <li className='mag-nav-dd-item' ref={ref} >
                  <button aria-label='Our Work' id='Work-btn' onClick={handleWorkClick} aria-expanded={workMenuState} className={match_nx + match_es + match_qf ? 'active our-work-btn': 'our-work-btn'}>Our Work</button>
                  <ul aria-labelledby="Theme-btn" role="tablist" className={"popover-menu "+ workMenuState}>
                    <li><NavLink onClick={handleNavClick} className='pop-menu-button' to='./work/nx'>NeuroX</NavLink></li>
                    <li><NavLink onClick={handleNavClick} className='pop-menu-button' to='./work/es'>EstateSpace</NavLink></li>
                    <li><NavLink onClick={handleNavClick} className='pop-menu-button' to='./work/qf'>QuantFu</NavLink></li>
                  </ul>
                </li>
                
                <li><NavLink onClick={handleNavClick} to='./values'>Initiatives</NavLink></li>
                <li><NavLink onClick={handleNavClick} to='./team'>Our Team</NavLink></li>
                
              </ul>
           
            <div className='nav-tools'>
              <NavLink onClick={handleNavClick} className="btn-primary" to='./contact'>Contact Us</NavLink>
              <div ref={ref} className="li-theme">
                <button aria-label='change theme' id='Theme-btn' onClick={handleThemeClick} aria-expanded={themeMenuState} className="theme-btn"></button>
                <ul aria-labelledby="Theme-btn" role="tablist" className={"popover-menu "+ themeMenuState}>
                  <li className={theme === 'sync' ? 'theme-default active': 'theme-default'}>
                    <button id='tab1' role="tab" tabIndex="0" aria-selected={theme === 'sync'} onClick={() => handleChangeTheme('sync')} className="btn-theme-default">OS Default</button>
                  </li>
                  <li className={theme === 'light' ? 'theme-light active': 'theme-light'}>
                    <button id='tab2' role="tab" tabIndex="0" aria-selected={theme === 'light'} onClick={() => handleChangeTheme('light')} className="btn-theme-light">Light theme</button>
                  </li>
                  <li className={theme === 'dark' ? 'theme-dark active': 'theme-dark'}>
                    <button id='tab3' role="tab" tabIndex="0" aria-selected={theme === 'dark'} onClick={() => handleChangeTheme('dark')} className="btn-theme-dark">Dark theme</button>
                  </li>
                </ul>
              </div>

            </div>
          </nav>
        </div>
      </header>
      
      <main>
        <SharedContext.Provider value={{isDarkTheme: isDarkTheme}}>
            <Outlet />
        </SharedContext.Provider>
      </main>
      
<footer>
  <div className="Content-wrap">
    <div>
      <img src={mark} className="mark" alt="7Magnolia" />
      <p>7Magnolia is dedicated to ensuring our website is accessible to as many visitors as possible regardless of sensory, vision, cognitive, and mobility challenges. We have an active commitment to increasing our site's website accessibility. Read our <a aria-label="Our accessibility statement" tabIndex="0" role="link"  href="/accessibility-statement">Accessibility Statement</a></p>
    </div>
    <p className="copyright">© Copyright 2023 - 7Magnolia</p>
  </div>
</footer>
</div>
    
 );
};

export default Root;