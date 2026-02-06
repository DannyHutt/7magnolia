"use client";


import './QfSolution.css';
import Image1 from '../../../../images/Work/quantfu/qf-2.png';

export default function QfSolution() {
  const title = 'The solution';
  const body = `To make sophisticated trading tools more approachable and intuitive, 7Magnolia worked with QuantFu to develop a unified brand and UI system. The system emphasizes clarity, simplicity, and consistency, helping users understand the platform and navigate tasks with confidence. A guiding “bot” character provides support at each step, reducing cognitive load and humanizing the experience. The final solution aligns with QuantFu’s values of efficiency and approachability, ensuring a cohesive, user-friendly experience across all products and materials.`;

  return (
    <section className="qfsolution-section">
      <div className="qfsolution__container">
        <div className="qfsolution-row">
          <div className="qfsolution-content">
            <h3 className="qfsolution-title">{title}</h3>
            <p className="qfsolution-body">{body}</p>
          </div>

          <div className="qfsolution-visual">
            <div className="qfsolution-visual__frame">
              <img src={Image1.src} alt="QuantFu solution visual" className="qfsolution-visual__img" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
