import { motion } from 'motion/react';
import { Banknote, DollarSign } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function MoneyFloat() {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  // Generate deterministic values for SSR/hydration matching (even though we wait for mount, 
  // it's good to keep consistent random seeds or just use array index to seed)
  const items = Array.from({ length: 45 }).map((_, i) => {
    // pseudo-random based on index to avoid hydration mismatch if needed, though we delay to mount
    const seed = (i * 17) % 100;
    const isDollarSign = i % 3 === 0;
    const size = isDollarSign ? seed / 3 + 25 : seed / 2 + 35; // varied slightly larger sizes
    const xStart = (i * 7 + seed) % 100;
    
    // Create a sway effect by taking multiple X waypoints
    const xPath = [
      `${xStart}vw`,
      `${xStart + (seed % 10) - 5}vw`,
      `${xStart - (seed % 15) + 7}vw`,
      `${xStart + (seed % 20) - 10}vw`
    ];
    
    const delay = (seed % 50) / 10; // 0 to 5s delay
    const duration = 12 + (seed % 20); // 12 to 32s length
    const rotateStart = (seed * 5) % 360;
    const rotateEnd = rotateStart + 360 + (seed % 360);
    
    // 3D rotations
    const rotateXEnd = 360 * ((seed % 3) + 1);
    const rotateYEnd = 360 * (((seed + i) % 3) + 1);

    // Simulated depth of field
    const depthPlane = seed % 3; // 0: background, 1: midground, 2: foreground
    const opacityMax = depthPlane === 0 ? 0.2 : depthPlane === 1 ? 0.5 : 0.8;
    const blurStr = depthPlane === 0 ? "blur-[4px]" : depthPlane === 1 ? "blur-[1.5px]" : "blur-none";
    const scale = depthPlane === 0 ? 0.6 : depthPlane === 1 ? 1.0 : 1.4;

    return {
      id: i,
      isDollarSign,
      size,
      xPath,
      delay,
      duration,
      rotateStart,
      rotateEnd,
      rotateXEnd,
      rotateYEnd,
      opacityMax,
      blurStr,
      scale
    };
  });

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0" style={{ perspective: "1000px" }}>
      {items.map((item) => (
        <motion.div
          key={item.id}
          initial={{ 
            opacity: 0, 
            y: '120vh', 
            x: item.xPath[0],
            rotateZ: item.rotateStart,
            rotateX: 0,
            rotateY: 0,
            scale: item.scale
          }}
          animate={{ 
            opacity: [0, item.opacityMax, item.opacityMax, 0], 
            y: ['120vh', '-20vh'], 
            x: item.xPath,
            rotateZ: [item.rotateStart, item.rotateEnd],
            rotateX: [0, item.rotateXEnd],
            rotateY: [0, item.rotateYEnd]
          }}
          transition={{
            duration: item.duration,
            repeat: Infinity,
            delay: item.delay,
            ease: "linear"
          }}
          className={`absolute top-0 left-0 text-[#D4AF37] flex items-center justify-center filter drop-shadow-2xl ${item.blurStr}`}
          style={{ width: item.size, height: item.size, transformStyle: "preserve-3d" }}
        >
          {item.isDollarSign ? (
            <DollarSign width={item.size} height={item.size} strokeWidth={2} />
          ) : (
            <Banknote width={item.size} height={item.size} strokeWidth={1.5} />
          )}
        </motion.div>
      ))}
    </div>
  );
}
