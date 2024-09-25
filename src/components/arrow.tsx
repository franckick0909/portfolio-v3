import React from 'react';

interface ArrowProps {
  width?: number;
  height?: number;
  fill?: string;
  stroke?: string;
  className?: string;
}

    export default function Arrow({ width = 180, height = 180, fill = 'none', stroke = 'currentColor', className }: ArrowProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 180 180" width={width} height={height} className={className}>
      <path
        d="M90.54,0H89.46C71.61,23.72,49,47,27.43,65.3l.87,1.08c22-14.14,39.61-31.56,60.72-52C88.8,69,86.41,139.09,84.23,180H95.77c-2.18-40.92-4.79-111-5-165.64,20.89,19.81,38.75,37.66,60.94,52l.87-1.08C130.81,47.67,108.39,23.72,90.54,0Z"
        fill={fill}
        stroke={stroke}
      />
    </svg>
  );
}
