import * as React from 'react';
import SharedContext from './SharedContext';
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
  Link,
  NavLink,
  Router,
  Outlet,
} from "react-router-dom"

import logo from './logo.svg';
import logoDark from './images/logo-white.svg';
import mark from './images/7m.svg';

import iconSun from './images/icon-sun.svg';
import iconMoon from './images/icon-moon.svg';
import iconSync from './images/icon-refresh.svg';
import iconCheck from './images/icon-checkmark.svg';

import iconSunDark from './images/icon-sun-dark.svg';
import iconMoonDark from './images/icon-moon-dark.svg';
import iconSyncDark from './images/icon-refresh-dark.svg';
import iconCheckDark from './images/icon-checkmark-dark.svg';

import HomePage from './HomePage';
import A11yPage from './pages/A11yPage';

import ContactPage from './pages/ContactUs';
import AboutPage from './pages/About';
import ServicesPage from './pages/Services';
import ValuesPage from './pages/Values';

//import ContactForm from './Components/ContactForm';

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

function App() {

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



  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    // other pages....
    {
      path: "/accessibility-statement",
      element: <A11yPage />,
    },
    {
      path: "/about",
      element: <AboutPage />,
    },
    {
      path: "/services",
      element: <ServicesPage />,
    },
    {
      path: "/values",
      element: <ValuesPage />,
    },
    {
      path: "/contact",
      element: <ContactPage />,
    },
  ])

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

  const [themeMenuState, setThemeMenuState] = useState(false)
  const [workMenuState, setWorkMenuState] = useState(false)

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

  const ref = useOutsideClick(handleClickOutside);
  
  return (
    <div className={isDarkTheme ? "App darkTheme" : "App lightTheme"} id="App">

      <header className="navbar section">
        <div className="Content-wrap">
          <nav>
            <a className='logo-link' aria-label="7Magnolia home" tabIndex="0" role="link" href="/"><img src={isDarkTheme ? logoDark: logo} className="App-logo" alt="7Magnolia" /></a>
            
              <ul className="main-nav">

                <li className={currentPage === 'about' ? 'active': ''}>
                Who We Are
                </li>

                <li className='mag-nav-dd-item' ref={ref} >
                  <button aria-label='Our Work' id='Work-btn' onClick={handleWorkClick} aria-expanded={workMenuState} className={currentPage === 'testimonial' ? 'our-work-btn active': 'our-work-btn'}>Our Work</button>
                  <ul aria-labelledby="Theme-btn" role="tablist" className={"popover-menu "+ workMenuState}>
                    <li className={currentPage === 'sync' ? 'theme-default active': 'theme-default'}>
                      <a className='pop-menu-button' href="">NeuroX</a>
                    </li>
                    <li className={currentPage === 'light' ? 'theme-light active': 'theme-light'}>
                      <a className='pop-menu-button' href="">EstateSpace</a>
                    </li>
                    <li className={currentPage === 'dark' ? 'theme-dark active': 'theme-dark'}>
                      <a className='pop-menu-button' href="">QuantFu</a>
                    </li>
                  </ul>
                </li>
                
                <li className={currentPage === 'services' ? 'active': ''}><a href='#SectionOurValues'>Our Services</a></li>
                <li className={currentPage === 'values' ? 'active': ''}><a href='#SectionAbout'>Values & Initiatives</a></li>
                
              </ul>
           
            <div class='nav-tools'>
              <a className="btn-secondary" href='#SectionContact'>Contact Us</a>
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

        <RouterProvider router={router} />

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
}

export default App;
