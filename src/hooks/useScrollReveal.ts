'use client';
import { useEffect } from 'react';

export function useScrollReveal() {
  useEffect(() => {
    const faders = document.querySelectorAll('.reveal-wrapper');

    const appearOptions = {
      threshold: 0.15,
      // Trigger slightly before they scroll into view
      rootMargin: "0px 0px -50px 0px"
    };

    const appearOnScroll = new IntersectionObserver(function(entries, observer) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          // Important: Once revealed, stop observing to keep it visible
          observer.unobserve(entry.target);
        }
      });
    }, appearOptions);

    faders.forEach(fader => {
      appearOnScroll.observe(fader);
    });

    return () => {
      faders.forEach(fader => appearOnScroll.unobserve(fader));
    };
  }, []);
}
