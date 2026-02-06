"use client";


import './SectionTestimonial.css';

export default function SectionTestimonial({
  bgColor = 'var(--Background-App)',
  quote = '“7Magnolia is awesome. I can’t wait to work with them again.',
  author = 'Client, CEO',
}) {
  const style = { backgroundColor: bgColor };

  return (
    <section className="sectiontestimonial" style={style}>
      <div className="sectiontestimonial__container">
        <div className="sectiontestimonial__content">
          <p className="sectiontestimonial__quote">{quote}</p>
          <p className="sectiontestimonial__author">{author}</p>
        </div>
      </div>
    </section>
  );
}
