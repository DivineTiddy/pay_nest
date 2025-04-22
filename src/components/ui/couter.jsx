import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

export const Counter = ({ targetNumber, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.3, // adjust how much of the element should be visible before triggering
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView && !hasStarted) {
      setHasStarted(true);
      const startTime = performance.now();

      const updateCounter = (currentTime) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const currentCount = Math.floor(progress * targetNumber);
        setCount(currentCount);

        if (progress < 1) {
          requestAnimationFrame(updateCounter);
        }
      };

      requestAnimationFrame(updateCounter);
    }
  }, [inView, hasStarted, targetNumber, duration]);

  return (
    <p className="font-semibold text-xl md:text-[35px] text-[#242424]" ref={ref} >
      {count.toLocaleString()}+
    </p>
  );
};
