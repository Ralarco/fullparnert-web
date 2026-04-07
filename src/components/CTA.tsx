'use client';
import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export default function CTA() {
  const container = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.from('.cta-content > *', {
      y: 30,
      autoAlpha: 0,
      stagger: 0.1,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: container.current,
        start: 'top 85%',
      }
    });
  }, { scope: container });

  return (
    <section id="contact" ref={container} style={{ padding: '12rem 0', backgroundColor: 'var(--surface-container-low)' }}>
      <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 3rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '6rem', flexWrap: 'wrap' }} className="cta-content">
          <div style={{ flex: 1, minWidth: '320px' }}>
            <span className="font-manrope tracking-super-wide text-primary uppercase" style={{ fontSize: '0.65rem', fontWeight: 900, marginBottom: '2rem', display: 'block', opacity: 0.8 }}>
              Optimización
            </span>
            <h3 className="font-inter tracking-tight" style={{ fontSize: '3.5rem', fontWeight: 900, marginBottom: '2.5rem', color: 'var(--on-background)', letterSpacing: '-0.04em', lineHeight: 0.95 }}>
              ¿Listo para diseñar <br/>su operación?
            </h3>
            <p className="font-manrope" style={{ color: 'var(--on-surface-variant)', fontSize: '1.125rem', lineHeight: 1.7, maxWidth: '28rem', fontWeight: 400 }}>
              Nuestros consultores proveen una auditoría técnica para identificar dónde la 
              automatización y el equipamiento correcto pueden incrementar su operación en hasta un 40%.
            </p>
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', flexShrink: 0, minWidth: '280px' }}>
            <button className="btn btn-gradient" style={{ padding: '1.25rem 3rem' }}>
               <span className="font-manrope tracking-widest text-[10px]">INICIAR AUDITORÍA</span>
            </button>
            <button className="btn btn-outline" style={{ padding: '1.25rem 3rem', borderColor: 'rgba(0,49,83,0.1)' }}>
               <span className="font-manrope tracking-widest text-[10px]">DESCARGAR CATÁLOGO</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
