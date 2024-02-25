// components/Marquee.tsx
import React, { ReactNode } from 'react';

interface MarqueeProps {
  behavior?: 'scroll' | 'slide' | 'alternate';
  direction?: 'up' | 'down' | 'left' | 'right';
  scrollamount?: number;
  className?: string;
  children?: ReactNode;
}

const Marquee: React.FC<MarqueeProps> = ({
  
  direction = 'up',
  scrollamount = 4,
  className = '',
  children,
}) => {
  return (
    <div className={className} style={{ overflow: 'hidden' }}>
      <div
        style={{
          display: 'inline-block',
          animation: `marquee-${direction} ${10 / scrollamount}s linear infinite`,
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default Marquee;
