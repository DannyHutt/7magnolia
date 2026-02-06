'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

/**
 * PrimaryButton (token-driven)
 * - All visual values are derived at runtime from the Figma variables JSON
 *   (via `figma-variables-resolver`). No hardcoded token names or values.
 *
 * Props:
 * - size: 'small' | 'large' (default: 'small')
 * - state: 'default' | 'hover' (hover is handled internally)
 * - children: label
 * - onClick, className, type, ...rest
 */

export default function PrimaryButton({
  size = 'small',
  children = "Let's Talk!",
  onClick,
  className = 'primary-button',
  type = 'button',
  ...rest
}) {
  const [hover, setHover] = useState(false);

  const baseStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: 'none',
    cursor: 'pointer',
    borderRadius: 'var(--Border-radius-Buttons, 31px)',
    backgroundColor: hover ? 'var(--Background-Primary-hover, var(--Background-Primary-button, #dd0b5f))' : 'var(--Background-Primary-button, #dd0b5f)',
    color: 'var(--Foreground-Primary-button-text, #fff5ee)',
    fontWeight: 600,
    whiteSpace: 'nowrap',
    transition: 'background-color 160ms ease-in-out, transform 120ms ease',
    WebkitTapHighlightColor: 'transparent',
  };

  const sizeStyles = size === 'large'
    ? {
      padding: 'var(--Padding-padding-16, 16px) var(--Padding-padding-32, 45px)',
      fontSize: 'var(--Text-Body-L, 20px)',
      lineHeight: 'var(--Text-Body-L-line-height, 32px)',
    }
    : {
      padding: 'var(--Padding-padding-12, 10px) var(--Padding-padding-24, 24px)',
      fontSize: 'var(--Text-Body-Default, 16px)',
      lineHeight: 'var(--Text-Body-default-line-height, 24px)',
    };

  const combinedStyle = Object.assign({}, baseStyle, sizeStyles, rest.style || {});
  const router = useRouter();

  const handleClick = (e) => {
    if (!onClick) return;

    // Check if onClick is an anchor (starts with #)
    if (typeof onClick === 'string' && onClick.startsWith('#')) {
      e.preventDefault();
      const targetId = onClick.substring(1);
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else if (typeof onClick === 'string') {
      // Navigate to path
      router.push(onClick);
    } else if (typeof onClick === 'function') {
      // Call the function
      onClick(e);
    }
  };

  return (
    <button
      type={type}
      aria-pressed="false"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={handleClick}
      className={className}
      style={combinedStyle}
      {...rest}
    >
      <span style={{ display: 'inline-block' }}>{children}</span>
    </button>
  );
}
