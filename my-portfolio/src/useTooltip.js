import { useState, useEffect, useRef } from 'react';

const useTooltip = (delay = 0) => {
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);
  const [showTooltipContent, setShowTooltipContent] = useState(false);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
  const tooltipRef = useRef(null);

  const handleMouseMove = (e) => {
    setTooltipPosition({ x: e.clientX + 10, y: e.clientY + 10 });
  };

  const handleMouseEnter = () => {
    setIsTooltipVisible(true);
  };

  const handleMouseLeave = () => {
    setIsTooltipVisible(false);
    setShowTooltipContent(false);
  };

  useEffect(() => {
    let timeoutId;

    if (isTooltipVisible) {
      timeoutId = setTimeout(() => {
        setShowTooltipContent(true);
      }, delay);
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [isTooltipVisible, delay]);

  return {
    tooltipRef,
    isTooltipVisible,
    showTooltipContent,
    tooltipPosition,
    handleMouseMove,
    handleMouseEnter,
    handleMouseLeave,
  };
};

export default useTooltip;