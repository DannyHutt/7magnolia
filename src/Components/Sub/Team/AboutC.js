"use client";

import './AboutC.css';
import SecondaryButton from '../../SecondaryButton';

const IconAttention = ({ color = 'var(--Foreground-Icon-on-pink)', size = 36 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 36 36"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    focusable="false"
  >
    <path d="M16.4997 4.5C10.6797 4.5 5.99971 9.21 5.99971 15C5.99971 19.2 8.44471 22.785 11.9997 24.465V31.5H22.4997V27H23.9997C25.6647 27 26.9997 25.665 26.9997 24V19.5H29.2497C29.8797 19.5 30.2397 18.75 29.8797 18.285L26.9997 14.49C26.8675 11.7949 25.7034 9.25409 23.7485 7.39417C21.7936 5.53425 19.198 4.49792 16.4997 4.5ZM16.4997 1.5C23.3697 1.5 29.0847 6.645 29.9097 13.365L32.2497 16.5C33.1197 17.58 33.2697 19.08 32.6397 20.385C32.0997 21.465 31.1397 22.2 29.9997 22.425V24C29.9997 26.79 28.0797 29.145 25.4997 29.805V34.5H8.99971V26.205C5.24971 23.745 2.99971 19.59 2.99971 15C2.99971 7.56 9.05971 1.5 16.4997 1.5ZM11.8497 14.13V13.5C11.8497 13.275 11.8497 13.14 11.9397 12.93L10.6047 11.94C10.4997 11.88 10.4997 11.67 10.4997 11.52L11.7297 9.48C11.8047 9.345 11.9997 9.27 12.1497 9.345L13.6347 9.975C13.9047 9.69 14.2497 9.48 14.6097 9.345L14.8497 7.8C14.8947 7.59 14.9997 7.5 15.1797 7.5H17.5647C17.7147 7.5 17.8497 7.59 17.8497 7.8L18.0597 9.345C18.4047 9.48 18.7497 9.69 19.0497 9.975L20.5947 9.345C20.7297 9.27 20.8497 9.345 20.9397 9.48L22.1397 11.52C22.2147 11.73 22.2147 11.88 22.0647 11.94L20.8047 12.93C20.8047 13.14 20.8497 13.35 20.8497 13.5C20.8497 13.71 20.8047 13.92 20.8047 14.13L22.0647 15.105C22.2147 15.18 22.2147 15.315 22.1397 15.465L20.9397 17.565C20.8497 17.715 20.7297 17.715 20.5947 17.715L19.1097 17.07C18.7497 17.355 18.4797 17.505 18.0597 17.64L17.8497 19.26C17.8497 19.395 17.7147 19.5 17.5647 19.5H15.1797C14.9997 19.5 14.8947 19.395 14.8497 19.26L14.6097 17.64C14.2497 17.505 13.9047 17.355 13.6347 17.085L12.1497 17.715C11.9997 17.715 11.8047 17.715 11.7297 17.565L10.4997 15.465C10.4997 15.315 10.4997 15.18 10.6047 15.105L11.8497 14.13ZM16.3497 15.675C17.5197 15.675 18.4797 14.685 18.4797 13.5C18.4797 12.315 17.5647 11.385 16.3497 11.385C15.1797 11.385 14.1897 12.3 14.1897 13.5C14.1897 14.7 15.1797 15.675 16.3497 15.675Z" fill={color}/>
  </svg>
);

const IconQuality = ({ color = 'var(--Foreground-Icon-on-pink)'}) => (
  <svg
    width="30"
    height="31"
    viewBox="0 0 30 31"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    focusable="false"
  >
    <path d="M10.999 0C16.5724 0 21.166 4.1586 21.8945 9.54297H27.9609C28.789 9.54334 29.4609 10.2148 29.4609 11.043V28.7637C29.4606 29.5916 28.7889 30.2633 27.9609 30.2637H10.3193C9.49109 30.2637 8.81963 29.5918 8.81934 28.7637V21.8662C3.785 20.8504 7.47442e-05 16.386 0 11.042C0 4.95012 4.91807 3.48038e-05 10.999 0ZM11.8193 27.2637H26.4609V12.543H11.8193V27.2637ZM10.999 3C6.58761 3.00003 3 6.59427 3 11.042C3.00007 14.7278 5.46471 17.8245 8.81934 18.7783V11.043C8.81934 10.2145 9.49091 9.54297 10.3193 9.54297H18.8564C18.1573 5.81407 14.9021 3 10.999 3Z" fill={color}/>
  </svg>
);

const IconCollaboration = ({ color = 'var(--Foreground-Icon-on-pink)'}) => (
  <svg
    width="32"
    height="27"
    viewBox="0 0 32 27"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    focusable="false"
  >
    <path d="M29.25 0H2.4375C1.79103 0 1.17105 0.256807 0.713927 0.713927C0.256807 1.17105 0 1.79103 0 2.4375V24.375C0 25.0215 0.256807 25.6415 0.713927 26.0986C1.17105 26.5557 1.79103 26.8125 2.4375 26.8125H29.25C29.8965 26.8125 30.5165 26.5557 30.9736 26.0986C31.4307 25.6415 31.6875 25.0215 31.6875 24.375V2.4375C31.6875 1.79103 31.4307 1.17105 30.9736 0.713927C30.5165 0.256807 29.8965 0 29.25 0ZM29.25 2.4375V8.53125H2.4375V2.4375H29.25ZM2.4375 10.9688H10.9688V24.375H2.4375V10.9688ZM29.25 24.375H13.4062V10.9688H29.25V24.375Z" fill={color}/>
  </svg>
);

const IconInclusion = ({ color = 'var(--Foreground-Icon-on-pink)' }) => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    focusable="false"
  >
    <path d="M9.06111 14L11.3556 11.7056C11.6667 11.3944 11.8222 11.0315 11.8222 10.6167C11.8222 10.2019 11.6667 9.83889 11.3556 9.52778C11.0444 9.21667 10.6753 9.06111 10.248 9.06111C9.8197 9.06111 9.45 9.21667 9.13889 9.52778L5.75556 12.9111C5.6 13.0667 5.49007 13.2352 5.42578 13.4167C5.36044 13.5981 5.32778 13.7926 5.32778 14C5.32778 14.2074 5.36044 14.4019 5.42578 14.5833C5.49007 14.7648 5.6 14.9333 5.75556 15.0889L9.13889 18.4722C9.45 18.7833 9.8197 18.9389 10.248 18.9389C10.6753 18.9389 11.0444 18.7833 11.3556 18.4722C11.6667 18.1611 11.8222 17.7981 11.8222 17.3833C11.8222 16.9685 11.6667 16.6056 11.3556 16.2944L9.06111 14ZM18.9389 14L16.6444 16.2944C16.3333 16.6056 16.1778 16.9685 16.1778 17.3833C16.1778 17.7981 16.3333 18.1611 16.6444 18.4722C16.9556 18.7833 17.3253 18.9389 17.7536 18.9389C18.1808 18.9389 18.55 18.7833 18.8611 18.4722L22.2444 15.0889C22.4 14.9333 22.5099 14.7648 22.5742 14.5833C22.6396 14.4019 22.6722 14.2074 22.6722 14C22.6722 13.7926 22.6396 13.5981 22.5742 13.4167C22.5099 13.2352 22.4 13.0667 22.2444 12.9111L18.8611 9.52778C18.7056 9.37222 18.5308 9.25556 18.3369 9.17778C18.1419 9.1 17.9475 9.06111 17.7536 9.06111C17.5586 9.06111 17.3641 9.1 17.1702 9.17778C16.9753 9.25556 16.8 9.37222 16.6444 9.52778C16.3333 9.83889 16.1778 10.2019 16.1778 10.6167C16.1778 11.0315 16.3333 11.3944 16.6444 11.7056L18.9389 14ZM3.11111 28C2.25556 28 1.52289 27.6956 0.913111 27.0869C0.30437 26.4771 0 25.7444 0 24.8889V3.11111C0 2.25556 0.30437 1.52289 0.913111 0.913111C1.52289 0.30437 2.25556 0 3.11111 0H24.8889C25.7444 0 26.4771 0.30437 27.0869 0.913111C27.6956 1.52289 28 2.25556 28 3.11111V24.8889C28 25.7444 27.6956 26.4771 27.0869 27.0869C26.4771 27.6956 25.7444 28 24.8889 28H3.11111ZM3.11111 24.8889H24.8889V3.11111H3.11111V24.8889Z" fill={color}/>
  </svg>
);


export default function AboutC() {
  return (
    <section className="aboutc">
      <div className="aboutc__container">
        <h2 className="aboutc__title">Our Values</h2>

        <div className="aboutc__grid">
          <article className="aboutc__card">
            <div className="aboutc__icon"><IconAttention /></div>
            <h3 className="aboutc__card-title">Attention</h3>
            <p className="aboutc__card-body">As a boutique agency, we provide a level of focus and care that larger firms often can’t. Every project matters to us and this attention to detail and commitment to personal service ensures your needs are understood, prioritized, and fully met.</p>
          </article>

          <article className="aboutc__card">
            <div className="aboutc__icon"><IconQuality /></div>
            <h3 className="aboutc__card-title">Quality</h3>
            <p className="aboutc__card-body">Our quality of work is our reputation. With over 20+ years experience in design, we have high standards and maintain a highly vetted roster of talent. Our goal is to deliver solutions that not only work today but continue to add value over time.</p>
          </article>

          <article className="aboutc__card">
            <div className="aboutc__icon"><IconCollaboration /></div>
            <h3 className="aboutc__card-title">Collaboration</h3>
            <p className="aboutc__card-body">We integrate seamlessly into your team, working side by side to achieve shared goals. Our process is grounded in openness, adaptability, and respect for different expertise, ensuring that every project benefits from collective creativity and insight.</p>
          </article>

          <article className="aboutc__card">
            <div className="aboutc__icon"><IconInclusion /></div>
            <h3 className="aboutc__card-title">Accessibility &amp; Inclusion</h3>
            <p className="aboutc__card-body">Meeting accessibility standards is our foundation, not our finish line. We follow WCAG 2.1 guidelines so that every experience meets recognized standards. But we go beyond compliance by maintaining an inclusive lens, considering diverse abilities, perspectives, and ways of thinking to create a welcoming experience for all.</p>
          </article>
        </div>

        {/* Use the project's SecondaryButton component to keep token-driven styles consistent */}
        <SecondaryButton onClick={'/services'} className="aboutc__cta">Read about our services</SecondaryButton>
      </div>
    </section>
  );
}
