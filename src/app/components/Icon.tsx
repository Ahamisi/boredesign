'use client';

import React from 'react';
import { Icon as IconifyIcon } from '@iconify/react';
// You'd import the specific icon sets you need

interface IconProps {
  name: string;
  size?: number | string;
  color?: string;
  className?: string;
}

const Icon: React.FC<IconProps> = ({ name, size = 24, color, className = '' }) => {
  // For Vuesax icons, prefix with 'vuesax:'
  const iconName = name.startsWith('vuesax:') ? name : `vuesax:${name}`;
  
  return (
    <IconifyIcon 
      icon={iconName} 
      style={{ fontSize: size, color }} 
      className={className}
    />
  );
};

export default Icon; 