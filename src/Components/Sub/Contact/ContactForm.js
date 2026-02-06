"use client";

import React, { useState } from 'react';
import './ContactForm.css';
import PrimaryButton from '../../PrimaryButton';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [message, setMessage] = useState('');

  function buildMailto() {
    const to = 'info@7magnolia.com';
    const subject = encodeURIComponent('Website contact form submission');
    const bodyLines = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Company: ${company}`,
      '',
      'Message:',
      message,
    ];
    const body = encodeURIComponent(bodyLines.join('\n'));
    return `mailto:${to}?subject=${subject}&body=${body}`;
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation: require an email
    if (!email) {
      // We keep this simple — in-app validation could be improved later
      alert('Please provide an email address.');
      return;
    }

    // Open user's mail client with prefilled message
    window.location.href = buildMailto();
  };

  return (
    <form className="contactform" onSubmit={handleSubmit}>
      <div className="contactform__fields">
        <label className="contactform__label">
          <span className="contactform__visually-hidden">Name</span>
          <input
            className="contactform__input"
            type="text"
            name="name"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            aria-label="Name"
          />
        </label>

        <label className="contactform__label">
          <span className="contactform__visually-hidden">Email</span>
          <input
            className="contactform__input"
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            aria-label="Email"
            required
          />
        </label>

        <label className="contactform__label">
          <span className="contactform__visually-hidden">Company</span>
          <input
            className="contactform__input"
            type="text"
            name="company"
            placeholder="Company"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            aria-label="Company"
          />
        </label>

        <label className="contactform__label contactform__label--message">
          <span className="contactform__visually-hidden">Message</span>
          <textarea
            className="contactform__textarea"
            name="message"
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            aria-label="Message"
            rows={6}
          />
        </label>
      </div>

      <div className="contactform__actions">
        <PrimaryButton size="small" type="submit">Submit</PrimaryButton>
      </div>
    </form>
  );
}
