import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Paw } from 'lucide-react';

interface PawPrintTrailProps {
  mousePosition: { x: number; y: number };
}

interface PawPrint {
  id: number;
  x: number;
  y: number;
  rotation: number;
  size: number;
}

export function PawPrintTrail({ mousePosition }: PawPrintTrailProps) {
  const [pawPrints, setPawPrints] = useState<PawPrint[]>([]);
  const [lastPrintTime, setLastPrintTime] = useState(0);
  
  useEffect(() => {
    const now = Date.now();
    if (now - lastPrintTime > 300 && (mousePosition.x !== 0 || mousePosition.y !== 0)) {
      const newPawPrint: PawPrint = {
        id: now,
        x: mousePosition.x,
        y: mousePosition.y,
        rotation: Math.random() * 360,
        size: 16 + Math.random() * 8,
      };
      
      setPawPrints((prev) => [...prev, newPawPrint]);
      setLastPrintTime(now);
      
      // Remove paw print after animation
      setTimeout(() => {
        setPawPrints((prev) => prev.filter((paw) => paw.id !== newPawPrint.id));
      }, 2000);
    }
  }, [mousePosition, lastPrintTime]);
  
  return (
    <>
      {pawPrints.map((paw) => (
        <motion.div
          key={paw.id}
          className="paw-print-trail"
          style={{
            position: 'fixed',
            left: paw.x,
            top: paw.y,
            pointerEvents: 'none',
            zIndex: 9999,
          }}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: [0, 1, 0], scale: [0.5, 1, 0.5] }}
          transition={{ duration: 2 }}
        >
          <Paw
            size={paw.size}
            className="text-primary-500/50"
            style={{ transform: `rotate(${paw.rotation}deg)` }}
          />
        </motion.div>
      ))}
    </>
  );
}