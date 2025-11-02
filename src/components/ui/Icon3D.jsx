import React from 'react';

export default function Icon3D({ size = 40, className = '', label = '' }) {
  return (
    <div className={`inline-block ${className}`}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="icon-3d"
        aria-label={label}
      >
        <defs>
          <linearGradient id="g1" x1="0" x2="1">
            <stop offset="0" stopColor="#7C3AED" />
            <stop offset="1" stopColor="#06B6D4" />
          </linearGradient>
          <linearGradient id="g2" x1="0" x2="1">
            <stop offset="0" stopColor="#F97316" />
            <stop offset="1" stopColor="#F43F5E" />
          </linearGradient>
        </defs>

        <rect x="6" y="10" width="44" height="34" rx="8" fill="url(#g1)" opacity="0.95"/>
        <path d="M14 22c0-3 4-6 10-6s10 3 10 6-4 6-10 6-10-3-10-6z" fill="url(#g2)" opacity="0.95"/>
        <circle cx="44" cy="16" r="6" fill="#fff" opacity="0.18"/>
      </svg>
    </div>
  );
}
