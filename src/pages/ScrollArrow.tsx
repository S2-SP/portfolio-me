import React, { useEffect, useState } from 'react';
import { animateScroll as scroller } from 'react-scroll';
import { GoArrowDown } from 'react-icons/go';
import { GoArrowUp } from 'react-icons/go';
import '../styles.css';

interface Props {
  targetId: string;
}

const ScrollArrow: React.FC<Props> = ({ targetId }) => {
  const [isVisible, setIsVisible] = useState(true);

  // Detect when target is in view
  useEffect(() => {
    const target = document.getElementById(targetId);
  
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(!entry.isIntersecting); // Hide arrow when target is reached
      },
      { threshold: 0.1 }
    );
  
    if (target) observer.observe(target);
  
 
    return () => {
      if (target) observer.unobserve(target);
    };
  }, [targetId]);
  

  const handleScroll = () => {
    scroller.scrollTo(targetId, {
      duration: 800,
      smooth: 'easeInOutQuart',
    });
  };

  return isVisible ? (
    <button className="scroll-down-arrow" onClick={handleScroll}>
      {targetId !== 'home' ? <span className="bounce">
        <GoArrowDown size={30} />
        </span>
      : <span className="bounce">
        <GoArrowUp size={30} />
        </span> }
    </button>
  ) : null;
};

export default ScrollArrow;
