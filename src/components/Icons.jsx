// Inline SVG icons for services — cyan line style, matches the design direction.
import React from "react";

const base = { fill: "none", stroke: "#22d3ee", strokeWidth: 3 };

export const ServiceIcon = ({ name, className = "h-10 w-10" }) => {
  const icons = {
    house: (
      <svg viewBox="0 0 40 40" className={className} aria-hidden="true">
        <path d="M6 20 20 8l14 12v14H6z" {...base} />
      </svg>
    ),
    laptop: (
      <svg viewBox="0 0 40 40" className={className} aria-hidden="true">
        <rect x="8" y="8" width="24" height="16" {...base} />
        <path d="M4 30h32" {...base} />
      </svg>
    ),
    grid: (
      <svg viewBox="0 0 40 40" className={className} aria-hidden="true">
        <path d="M6 6h13v13H6zM21 6h13v13H21zM6 21h13v13H6zM21 21h13v13H21z" fill="#22d3ee" fillOpacity=".6" />
      </svg>
    ),
    spark: (
      <svg viewBox="0 0 40 40" className={className} aria-hidden="true">
        <path d="M20 4v32M4 20h32M9 9l22 22M31 9 9 31" stroke="#22d3ee" strokeWidth="2.5" fill="none" />
      </svg>
    ),
    shield: (
      <svg viewBox="0 0 40 40" className={className} aria-hidden="true">
        <path d="M20 4 34 10v10c0 9-6 14-14 16C12 34 6 29 6 20V10z" {...base} />
      </svg>
    ),
    tower: (
      <svg viewBox="0 0 40 40" className={className} aria-hidden="true">
        <rect x="10" y="4" width="20" height="32" {...base} />
        <circle cx="20" cy="16" r="5" fill="#22d3ee" />
      </svg>
    ),
    download: (
      <svg viewBox="0 0 40 40" className={className} aria-hidden="true">
        <path d="M20 6v20M12 18l8 8 8-8M6 34h28" {...base} />
      </svg>
    ),
    wifi: (
      <svg viewBox="0 0 40 40" className={className} aria-hidden="true">
        <path d="M8 28a16 16 0 0 1 24 0M13 22a9 9 0 0 1 14 0" {...base} />
        <circle cx="20" cy="32" r="3" fill="#22d3ee" />
      </svg>
    ),
  };
  return icons[name] || icons.house;
};
