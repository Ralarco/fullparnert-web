'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Hide default cursor
    document.body.style.cursor = 'none';

    const onMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      
      // Aim dot (instant)
      gsap.to(cursorRef.current, {
        x: clientX,
        y: clientY,
        duration: 0.1,
        ease: 'power2.out'
      });

      // Follower (delayed)
      gsap.to(followerRef.current, {
        x: clientX,
        y: clientY,
        duration: 0.6,
        ease: 'power3.out'
      });
    };

    const onMouseEnter = () => {
      gsap.to([cursorRef.current, followerRef.current], {
        autoAlpha: 1,
        duration: 0.3
      });
    };

    const onMouseLeave = () => {
      gsap.to([cursorRef.current, followerRef.current], {
        autoAlpha: 0,
        duration: 0.3
      });
    };

    const onHoverEnter = () => {
      gsap.to(followerRef.current, {
        scale: 2.5,
        backgroundColor: 'rgba(0, 150, 255, 0.1)',
        borderColor: 'rgba(0, 150, 255, 0.5)',
        duration: 0.3
      });
      gsap.to(cursorRef.current, {
        scale: 0.5,
        duration: 0.3
      });
    };

    const onHoverLeave = () => {
      gsap.to(followerRef.current, {
        scale: 1,
        backgroundColor: 'transparent',
        borderColor: 'rgba(0, 150, 255, 0.3)',
        duration: 0.3
      });
      gsap.to(cursorRef.current, {
        scale: 1,
        duration: 0.3
      });
    };

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseenter', onMouseEnter);
    document.addEventListener('mouseleave', onMouseLeave);

    // Interaction with links and buttons
    const interactiveElements = document.querySelectorAll('a, button, .bento-card');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', onHoverEnter);
      el.addEventListener('mouseleave', onHoverLeave);
    });

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseenter', onMouseEnter);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.body.style.cursor = 'auto';
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', onHoverEnter);
        el.removeEventListener('mouseleave', onHoverLeave);
      });
    };
  }, []);

  return (
    <>
      <div 
        ref={cursorRef} 
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '8px',
          height: '8px',
          backgroundColor: '#FFFFFF',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 9999,
          transform: 'translate(-50%, -50%)',
          opacity: 0,
          mixBlendMode: 'difference'
        }}
      />
      <div 
        ref={followerRef} 
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '40px',
          height: '40px',
          border: '1px solid rgba(0, 200, 255, 0.5)',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 9998,
          transform: 'translate(-50%, -50%)',
          opacity: 0
        }}
      />
    </>
  );
}
