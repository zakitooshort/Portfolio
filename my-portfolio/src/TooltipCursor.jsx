import React, { useState } from 'react';
import useTooltip from './useTooltip';
import catSound1 from './assets/catnoise1.mp3';
import catSound2 from './assets/catnoise2.mp3';
import catSound3 from './assets/catnoise3.mp3';
import catSound4 from './assets/catnoise4.mp3';

const catSounds = [catSound1, catSound2, catSound3, catSound4];

const TooltipCursor = ({ children, content, delay = 0 }) => {
  const {
    tooltipRef,
    isTooltipVisible,
    showTooltipContent,
    tooltipPosition,
    handleMouseMove,
    handleMouseEnter,
    handleMouseLeave,
  } = useTooltip(delay);

  const [isShaking, setIsShaking] = useState(false);

  const handleClick = () => {
    setIsShaking(true);
    const randomSound = catSounds[Math.floor(Math.random() * catSounds.length)];
    const audio = new Audio(randomSound);
    audio.play();
    setTimeout(() => {
      setIsShaking(false);
    }, 500); 
  };

  return (
    <div
      className="min-w-min cursor-pointer"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      {isTooltipVisible && (
        <div
          ref={tooltipRef}
          className={`fixed p-2 bg-black text-white rounded-full shadow text-sm font-semibold max-w-md transition-opacity duration-200 ${showTooltipContent ? 'opacity-100' : 'opacity-0'}`}
          style={{
            top: tooltipPosition.y,
            left: tooltipPosition.x,
            zIndex: '2147483647'
          }}
        >
          {content}
        </div>
      )}
      <div className={isShaking ? 'shake' : ''}>
        {children}
      </div>
    </div>
  );
};

export default TooltipCursor;