"use client";


import './NxC.css';
import Image1 from '../../../../images/Work/neurox/nx-10.png';
import Image2 from '../../../../images/Work/neurox/nx-11.png';
import Image3 from '../../../../images/Work/neurox/nx-12.png';
import Image4 from '../../../../images/Work/neurox/nx-13.png';
import Image5 from '../../../../images/Work/neurox/nx-14.png';

export default function NxC() {
  const title = 'How It All Came Together';

  return (
    <section className="nxc">
      <div className="nxc__container">
        <h3 className="nxc__title">{title}</h3>

        <div className="nxc__stack">
          <div className="nxc__frame"><img src={Image1.src} alt="nx 10" className="nxc__img"/></div>
          <div className="nxc__frame"><img src={Image2.src} alt="nx 11" className="nxc__img"/></div>
          <div className="nxc__frame"><img src={Image3.src} alt="nx 12" className="nxc__img"/></div>
          <div className="nxc__frame"><img src={Image4.src} alt="nx 13" className="nxc__img"/></div>
          <div className="nxc__frame"><img src={Image5.src} alt="nx 14" className="nxc__img"/></div>
        </div>
      </div>
    </section>
  );
}
