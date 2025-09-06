import React from 'react';

export const ShoeIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="m7 17 5-5-1.5-1.5" />
    <path d="M14 6.5 12 5l-1.06 1.06" />
    <path d="M12 22s-4-2-4-8 4-8 4-8 4 2 4 8-4 8-4 8Z" />
    <path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
    <path d="M21.48 16.5c.34.59.45 1.25.26 1.91-.19.66-.63 1.22-1.22 1.53l-1.51.81c-.6.32-1.27.48-1.95.48H6.98c-1.12 0-2.14-.55-2.77-1.48L2.4 15.9c-.63-.93-.8-2.09-.45-3.13l1.54-4.54c.35-1.04 1.2-1.84 2.29-2.08l2.95-.66c.45-.1.9-.14 1.35-.14h.01c1.07 0 2.07.41 2.83 1.12l2.3 2.13c.21.2.45.35.7.47l2.12.98c.78.36 1.39.98 1.74 1.74l.97 2.13Z" />
  </svg>
);
