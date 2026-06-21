import React, { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from "framer-motion";

const wrap = (min, max, v) => {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

export default function ScrollVelocity({
  children,
  baseVelocity = 100,
  velocityMultiplier = 5,
  className = "",
  style = {}
}) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, velocityMultiplier], {
    clamp: false,
  });

  // wrap between -20% and -45% so it loops seamlessly 
  // Make sure the number of children duplicates is enough to cover the screen
  const x = useTransform(baseX, (v) => `${wrap(-20, -40, v)}%`);

  const directionFactor = useRef(1);
  
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * Math.abs(moveBy) * velocityFactor.get();
    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className={`overflow-hidden m-0 whitespace-nowrap flex flex-nowrap ${className}`} style={{ ...style, display: 'flex', flexWrap: 'nowrap', whiteSpace: 'nowrap' }}>
      <motion.div style={{ x, display: 'flex', whiteSpace: 'nowrap', flexWrap: 'nowrap' }}>
        <span style={{ display: 'flex', alignItems: 'center', paddingRight: '50px' }}>{children}</span>
        <span style={{ display: 'flex', alignItems: 'center', paddingRight: '50px' }}>{children}</span>
        <span style={{ display: 'flex', alignItems: 'center', paddingRight: '50px' }}>{children}</span>
        <span style={{ display: 'flex', alignItems: 'center', paddingRight: '50px' }}>{children}</span>
        <span style={{ display: 'flex', alignItems: 'center', paddingRight: '50px' }}>{children}</span>
        <span style={{ display: 'flex', alignItems: 'center', paddingRight: '50px' }}>{children}</span>
        <span style={{ display: 'flex', alignItems: 'center', paddingRight: '50px' }}>{children}</span>
        <span style={{ display: 'flex', alignItems: 'center', paddingRight: '50px' }}>{children}</span>
      </motion.div>
    </div>
  );
}
