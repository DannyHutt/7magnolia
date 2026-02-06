"use client";


import './NxImageFull.css';
import Image1 from '../../../../images/Work/neurox/nx-3.png';

export default function NxImageFull() {
  return (
    <section className="nximagefull">
      <div className="nximagefull__container">
        <div className="nximagefull__frame">
          <img src={Image1.src} alt="NeuroX full" className="nximagefull__img" />
        </div>
      </div>
    </section>
  );
}
