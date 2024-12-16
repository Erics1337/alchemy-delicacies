import React from 'react'

interface SacredGeometryPatternProps {
  className?: string
}

export function SacredGeometryPattern({ className = '' }: SacredGeometryPatternProps) {
  return (
    <div className={`absolute inset-0 pointer-events-none ${className}`}>
      <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
        <defs>
          <pattern id="flowerOfLife" x="0" y="0" width="25" height="25" patternUnits="userSpaceOnUse">
            <circle cx="12.5" cy="12.5" r="10" fill="none" stroke="currentColor" strokeWidth="0.5"/>
            <circle cx="4.17" cy="12.5" r="10" fill="none" stroke="currentColor" strokeWidth="0.5"/>
            <circle cx="20.83" cy="12.5" r="10" fill="none" stroke="currentColor" strokeWidth="0.5"/>
            <circle cx="12.5" cy="4.17" r="10" fill="none" stroke="currentColor" strokeWidth="0.5"/>
            <circle cx="12.5" cy="20.83" r="10" fill="none" stroke="currentColor" strokeWidth="0.5"/>
            <circle cx="4.17" cy="4.17" r="10" fill="none" stroke="currentColor" strokeWidth="0.5"/>
            <circle cx="20.83" cy="20.83" r="10" fill="none" stroke="currentColor" strokeWidth="0.5"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#flowerOfLife)"/>
      </svg>
    </div>
  )
}

