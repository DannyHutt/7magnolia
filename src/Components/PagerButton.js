'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import './PagerButton.css';

// Placeholder chevron (from Figma) — replace with local asset when ready
const CHEVRON = 'http://localhost:3845/assets/51caed7c9ceaca808cee8154c378536a43cb8373.svg';

const Chevron = ({ color = 'var(--Foreground-Icon-on-pink, #FFF5EE)' }) => (
  <svg
    width="10"
    height="16"
    viewBox="0 0 10 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    focusable="false"
  >
    <path d="M2 0L10 8L2 16L0 14L6 8L0 2L2 0Z" fill={color} />
  </svg>

  

);

/**
 * PagerButton
 * Props:
 * - direction: 'previous' | 'next' (default: 'previous')
 * - route: string (path to navigate to, e.g. '/work/es')
 * - onClick: optional override callback
 * - size: 'small' | 'large' (matches SecondaryButton sizing)
 * - disabled: boolean
 * - className: additional classes
 */
export default function PagerButton({
  direction = 'previous',
  route = '',
  onClick,
  size = 'small',
  disabled = false,
  className = '',
  children,
  ...rest
}) {
  const router = useRouter();
  const dir = String(direction || 'previous').toLowerCase();
  const sizeClass = size === 'large' ? 'pager-button--large' : 'pager-button--small';
  const classes = ['pager-button', `pager-button--${dir}`, sizeClass, className]
    .filter(Boolean)
    .join(' ');

  const handleClick = (e) => {
    if (disabled) return;
    if (onClick) {
      onClick(e);
      return;
    }
    if (route) {
      // Use next/router push from next/navigation in client component
      router.push(route);
    }
  };

  const label = children || (dir === 'next' ? 'Next' : 'Back');

  return (
    <button
      type="button"
      className={classes}
      onClick={handleClick}
      disabled={disabled}
      aria-label={label}
      {...rest}
    >
      {dir === 'previous' && (
        <div alt="" aria-hidden="true" className="pager-button__icon pager-button__icon--left">
            <Chevron />
        </div>
      )}

      <span className="pager-button__label">{label}</span>

      {dir === 'next' && (
        <div alt="" aria-hidden="true" className="pager-button__icon pager-button__icon--right">
            <Chevron />
        </div>
      )}
    </button>
  );
}
