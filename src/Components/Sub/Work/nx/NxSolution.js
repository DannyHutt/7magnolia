"use client";


import './NxSolution.css';
import Image1 from '../../../../images/Work/neurox/nx-2.png';

export default function NxSolution() {
  const title = 'The solution';
  const body = `7Magnolia created a complete brand and conference experience centered on inclusivity and empowerment. The identity, based on the concept of “carving your own path,” celebrates trailblazing thinking, while the conference environment was designed to support neurodiverse needs and encourage meaningful engagement.`;

  return (
    <section className="nxsolution-section">
      <div className="nxsolution__container">
        <div className="nxsolution-row">
          <div className="nxsolution-content">
            <h3 className="nxsolution-title">{title}</h3>
            <p className="nxsolution-body">{body}</p>
          </div>

          <div className="nxsolution-visual">
            <div className="nxsolution-visual__frame">
              <img src={Image1.src} alt="NeuroX solution visual" className="nxsolution-visual__img" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
