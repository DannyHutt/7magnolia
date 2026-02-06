'use client';

import React from 'react';
import './TertiaryButton.css';
import { useRouter } from 'next/navigation';



/**
 * TertiaryButton
 * - Text-only button with a right chevron and underline-on-hover.
 * - Token-driven: uses TitleCase variables from `src/index.css`.
 * - Props align with `SecondaryButton` for consistency.
 */
export default function TertiaryButton({
  size = 'small',
  children = "Let's Talk!",
  onClick,
  className = '',
  type = 'button',
  disabled = false,
  ...rest
}) {
  const sizeClass = size === 'large' ? 'tertiary-button--large' : 'tertiary-button--small';
  const classes = ['tertiary-button', sizeClass, className].filter(Boolean).join(' ');
  const router = useRouter();

  return (
    <button
      type={type}
      className={classes}
      onClick={() => router.push(onClick)}
      disabled={disabled}
      aria-pressed="false"
      {...rest}
    >
      <span className="tertiary-label">{children}</span>
      <svg xmlns="http://www.w3.org/2000/svg" width="10" height="16" viewBox="0 0 10 16" fill="none">
        <path d="M2 0L10 8L2 16L0 14L6 8L0 2L2 0Z" fill="var(--Foreground-Accent-pink)"/>
      </svg>
    </button>
  );
}
