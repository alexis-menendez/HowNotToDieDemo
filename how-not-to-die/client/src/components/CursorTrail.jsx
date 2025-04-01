// file path: how-not-to-die/client/src/components/CursorTrail.jsx

// CursorTrail.jsx
import React, { useEffect, useRef } from 'react';
import styles from '../assets/css/CursorTrail.module.css';

const CursorTrail = () => {
  const trailRef = useRef([]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const dot = document.createElement('div');
      dot.className = styles.trailDot;
      dot.style.left = `${e.clientX}px`;
      dot.style.top = `${e.clientY}px`;
      document.body.appendChild(dot);

      trailRef.current.push(dot);

      // Remove after fade duration
      setTimeout(() => {
        dot.remove();
        trailRef.current.shift();
      }, 400);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return null; // Nothing rendered directly — just DOM dots
};

export default CursorTrail;
