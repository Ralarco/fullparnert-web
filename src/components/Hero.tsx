'use client';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef } from 'react';

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power4.out", duration: 1.2 } });
    
    tl.from(".hero-subtitle", { opacity: 0, y: 20 }, 0.2)
      .from(".hero-title", { opacity: 0, y: 40, stagger: 0.1 }, 0.4)
      .from(".hero-actions", { opacity: 0, y: 30, stagger: 0.1 }, 0.8)
      .from(".model-indicator", { opacity: 0, x: -50 }, 1);
  }, { scope: container });

  return (
    <section ref={container} id="hero" className="section-hero">
      <div className="hero-overlay"></div>
      
      <video
        autoPlay
        muted
        loop
        playsInline
        className="hero-video"
      >
        <source src="/images/warehouse.mp4" type="video/mp4" />
      </video>

      <div className="container-hero">
        <div className="hero-content">
          <p className="hero-subtitle font-manrope tracking-super-wide text-primary">
            Tu Aliado para el Éxito Operativo
          </p>
          
          <h1 className="hero-title font-inter tracking-tight">
            Soluciones <br/> Logísticas <br/> Completas
            <span className="block mt-2 opacity-70">En un solo lugar</span>
          </h1>

          <div className="hero-actions">
            <button 
              type="button"
              className="btn btn-gradient btn-animate py-5 px-10" 
            >
              <span className="font-manrope tracking-widest text-[10px]">Ver Maquinaria</span>
            </button>
            <button 
              type="button"
              className="btn btn-outline-light btn-animate" 
              aria-label="Ver todos nuestros servicios"
            >
              <span className="font-manrope tracking-widest text-[10px]">Servicios</span>
            </button>
          </div>
        </div>
      </div>

      <div className="model-indicator">
        <div className="model-badge">
          <span className="material-symbols-outlined text-[14px]">precision_manufacturing</span>
          {/* <span className="font-manrope tracking-widest text-[9px] uppercase">Core Digital</span> */}
        </div>
      </div>
    </section>
  );
}
