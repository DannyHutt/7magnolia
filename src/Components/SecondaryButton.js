'use client';

import React from 'react';
import './SecondaryButton.css';
import { useRouter } from 'next/navigation';

/**
 * SecondaryButton
 * - Token-driven styles in `SecondaryButton.css` using variables from `src/index.css`.
 * - Props: `size` = 'small' | 'large', `children`, `onClick`, `className`, `type`, `disabled`.
 */
export default function SecondaryButton({
  size = 'small',
  children = 'Secondary',
  onClick,
  className = '',
  type = 'button',
  disabled = false,
  ...rest
}) {
  const sizeClass = size === 'large' ? 'secondary-button--large' : 'secondary-button--small';
  const classes = ['secondary-button', sizeClass, className].filter(Boolean).join(' ');
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
      <span className="label">{children}</span>
    </button>
  );
}
