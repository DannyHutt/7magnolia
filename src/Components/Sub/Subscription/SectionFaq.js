"use client";

import './SectionFaq.css';

const faqs = [
  {
    q: 'What is included in the subscription?',
    a: 'Our subscription covers a wide range of design services, including branding, UI/UX design for web and apps, marketing assets, presentations, illustrations, and more. Essentially, if it’s design, we can help.',
  },
  {
    q: 'How many requests can I submit?',
    a: 'Unlimited. You can submit as many design requests as you need each month. We prioritize requests to ensure everything gets delivered efficiently.',
  },
  {
    q: 'How long does it take to get a design delivered?',
    a: 'Most requests are completed within 24–72 hours. Complex projects may take longer, but we will always communicate timelines upfront.',
  },
  {
    q: 'What about meetings?',
    a: 'We intentionally keep meetings to a minimum. By managing work asynchronously, we eliminate unnecessary calls and email back-and-forth—freeing up time to focus on speed, clarity, and high-quality design deliverables.',
  },
  {
    q: 'Can I pause or cancel my subscription?',
    a: 'Yes. Subscriptions are flexible. You can pause or cancel at any time when design needs are low.',
  },
  {
    q: 'How does billing work?',
    a: 'Billing cycles are based on 31 day period. For example if you use the service for 10 days and then pause your subscription you will have 21 days of service remaining to be used anytime in the future.',
  },
  {
    q: 'How do you handle larger requests?',
    a: 'Larger requests are broken down on our end into smaller tasks. You should expect to receive a reasonable amount of work every 24-48 hours until the entire request is done.',
  },
  {
    q: 'How do I give feedback on designs?',
    a: 'You can provide feedback in the KanBan board and we will continue to revise until you are 100% satisfied.',
  },
  {
    q: 'Are there requests you don\'t support?',
    a: 'We do not cover the following design work: 3D modeling, animated graphics (GIFS, etc.), document design, complex packaging, extensive print design (magazines, books, etc.)',
  },
];

const SectionFaq = () => {
  return (
    <section className="section-faq">
      <div className="section-faq__container">
        <h2 className="section-faq__title">Frequently asked questions</h2>

        <div className="faq-list">
          {faqs.map((item, idx) => (
            <div key={idx} className="faq-item">
              <h3 className="faq-question">{item.q}</h3>
              <p className="faq-answer">{item.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectionFaq;
