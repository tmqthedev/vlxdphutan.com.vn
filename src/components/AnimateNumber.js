import React, { useState, useEffect } from 'react';

const AnimateNumber = ({ target, duration = 2000 }) => {
  const [number, setNumber] = useState(0);

  useEffect(() => {
    const increment = target / (duration / 50);
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setNumber(target);
        clearInterval(timer);
      } else {
        setNumber(Math.floor(current));
      }
    }, 50);

    return () => clearInterval(timer);
  }, [target, duration]);

  return <span>{number.toLocaleString('vi-VN')}</span>;
};

export default AnimateNumber;
