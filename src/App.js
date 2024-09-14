import * as React from 'react';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"

import Root from "./pages/Root";

import HomePage from './HomePage';
import A11yPage from './pages/A11yPage';

import ContactPage from './pages/ContactUs';
import AboutPage from './pages/About';
import ServicesPage from './pages/Services';
import ValuesPage from './pages/Values';
import QFPage from './pages/quantfu';
import ESPage from './pages/estatespace';
import NXPage from './pages/neurox';


function App() {


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: "/home",
          element: <HomePage />,
        },
        {
          path: "/accessibility-statement",
          element: <A11yPage />,
        },
        {
          path: "/team",
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
          path: "/work/qf",
          element: <QFPage />,
        },
        {
          path: "/work/es",
          element: <ESPage />,
        },
        {
          path: "/work/nx",
          element: <NXPage />,
        },
        {
          path: "/contact",
          element: <ContactPage />,
        }
      ],
    },
    // other pages....
    
  ])

  
  
  
  return (
   
     
<React.StrictMode>
  <RouterProvider router={router} />
</React.StrictMode>
        

   
     
  );
}

export default App;
