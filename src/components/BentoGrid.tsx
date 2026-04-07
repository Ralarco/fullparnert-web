'use client';
import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export default function BentoGrid() {
  const container = useRef<HTMLElement>(null);

  useGSAP(() => {
    // Staggered entrance for cards
    ScrollTrigger.batch('.bento-card', {
      onEnter: (elements) => {
        gsap.from(elements, {
          y: 60,
          autoAlpha: 0,
          stagger: 0.15,
          duration: 1,
          ease: 'power3.out',
          overwrite: true
        });
      },
      once: true,
      start: 'top 85%'
    });

    // Parallax for background images
    gsap.utils.toArray<HTMLElement>('.bento-card').forEach((card) => {
      const bg = card.querySelector('.bento-card-bg');
      gsap.to(bg, {
        y: 40,
        ease: 'none',
        scrollTrigger: {
          trigger: card,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true
        }
      });
    });

  }, { scope: container });

  return (
    <section ref={container} className="section-bento">
      <div className="container-bento">
        <div className="bento-grid">
          {/* Card 1: Insumos Logísticos */}
          <div id="logistics" className="bento-card-wrapper bento-span-8 bento-row-1 bento-dark hover-lift">
            <img 
              className="bento-card-bg bento-img-grayscale"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCvW3YAxDS-HV3DDFOeYXfVgtaEVE4moajqkj6h4HIXw5A_P0cZL17S9W9QPnrzhwbMKjr2w8nVNok3wD-lL0awCaubaR-gCjdWNtGWNTiAirVNSI0cOb1LKtrnMO_y3bKizh7iB4PHhTWVdvQF3RP2RqiPHHuwT7dxX5x1OCWxBtoa7vb5RnwCIQOV8984TWwFmYdO0iK-pvzEmUNlVZ3flwWHAql0zRbWqV9bppqg60Ac05VehlfVHuPZtmkjHBQdDpLWN098SmU"
              alt="Bodega con estanterías industriales cargadas de insumos logísticos"
              loading="lazy"
            />
            <div className="bento-content">
              <span className="material-symbols-outlined bento-icon-light">inventory_2</span>
              <h3 className="bento-title-light font-inter tracking-tight">Insumos Logísticos</h3>
              <p className="bento-subtitle-light font-manrope tracking-super-wide">FILM STRETCH / CINTA EMBALAJE</p>
              
              <div className="flex items-center gap-6 mt-8">
                <span className="material-symbols-outlined bento-arrow-accent">arrow_circle_down</span>
                <button type="button" className="btn btn-gradient py-4 px-10">
                  <span className="font-manrope tracking-widest text-[10px]">VER MÁS</span>
                </button>
              </div>
            </div>
            <div className="bento-overlay"></div>
          </div>

          {/* Card 2: Maquinaria Disponible */}
          <div id="maquinaria" className="bento-card-wrapper bento-span-4 bento-row-2 bento-surface hover-lift">
            <img 
              className="bento-card-bg bento-img-contain bento-img-half-grayscale"
              src="/images/Paletizadora-1024x1024.png"
              alt="Máquina paletizadora industrial de última generación para embalaje"
              loading="lazy"
            />
            <div className="bento-content">
              <span className="material-symbols-outlined bento-icon-primary">forklift</span>
              <h3 className="bento-title-dark font-inter tracking-tight">Maquinaria <br/>Disponible</h3>
              <p className="bento-subtitle-dark font-manrope tracking-super-wide">PALETIZADORA / COMPACTADORA</p>
              
              <div className="flex flex-col gap-6 mt-8">
                <span className="material-symbols-outlined bento-arrow-primary">arrow_circle_down</span>
                <button type="button" className="btn btn-gradient w-fit py-4 px-10">
                  <span className="font-manrope tracking-widest text-[10px]">CATÁLOGO</span>
                </button>
              </div>
            </div>
          </div>

          {/* Card 3: Servicios */}
          <div className="bento-card-wrapper bento-span-4 bento-row-1 bento-surface-low hover-lift">
            <img 
              className="bento-card-bg bento-img-grayscale bento-img-low-opacity"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDnq-G40Fm738RgA0bl76up2h4I5jp41IbutYrVQH4oO2WK8NTg4dQ58FsBAWTqtT3f_kTEoK1kiUnqQ7Qa53ZqH6oelh1oFYFIOdWBAvu7KyKRkX2tOKKagVwbrBixMMGtSqoSLZZCbtPWDRn-Y3t0Cp8gwlYqVNBC4hLbN0mHRvju1buQC4h6TEa39ALOTKRcKeuOlvTudc5zMFpNSXNIx3l_L6BspiBqL4Er6M1pLWjUUezVg-pSivuSsCSfHECbF-yGGXnqik4"
              alt="Servicios"
            />
            <div className="bento-content bento-content-p3">
              <div className="flex justify-between items-start mb-8">
                <span className="material-symbols-outlined bento-icon-primary" aria-hidden="true">handyman</span>
                <span className="material-symbols-outlined bento-arrow-primary opacity-50" aria-hidden="true">arrow_circle_down</span>
              </div>
              <h3 className="bento-title-small font-inter tracking-tight">Servicios</h3>
              <p className="bento-tagline font-manrope tracking-super-wide">Obras Civíles Menores</p>
              
              <div className="bento-tag-grid mt-auto">
                {['Remodelación', 'Mantención', 'Pintura', 'Soldaduras'].map(item => (
                  <div key={item} className="bento-tag">{item}</div>
                ))}
              </div>
            </div>
          </div>

          {/* Card 4: Asesorías Técnicas */}
          <div className="bento-card-wrapper bento-span-4 bento-row-1 bento-surface-highest hover-lift">
            <img 
              className="bento-card-bg bento-img-grayscale bento-img-very-low-opacity"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBms0fORdS86QGdK286VdrqeYzQFWlzM7_hpgUgVO4XMsKau2wFG9sOUS5_nvxJU-csHJVOJt6iT4eSsb6SV7hQ898yBrM_aLbafGcGk2_mHDVHw7UEb0kAf81Sp6Cc5lwQzOCFJpwpHtWvpSk0T9CEneUvMZJyyAPjGFAxFO7DHiy-nGA7KNb68RdX_pUo577rFmJDxnS2Xsejd2coPN7be7qJ8JjUesrH1G8dk1CQnWRa1wqbL1jTyN7E4PAcLibpdJT3ZRqi5I0"
              alt="Asesorías Técnicas"
            />
            <div className="bento-content bento-content-p3">
              <div className="flex justify-between items-start mb-8">
                <span className="material-symbols-outlined bento-icon-primary">construction</span>
                <span className="material-symbols-outlined bento-arrow-primary opacity-50">arrow_circle_down</span>
              </div>
              <h3 className="bento-title-small font-inter tracking-tight">Asesorías</h3>
              <p className="bento-tagline font-manrope tracking-super-wide">Profesionales</p>
              
              <div className="bento-tag-list mt-auto">
                {['Estudios Técnicos', 'Planos Arquitectónicos'].map(item => (
                  <div key={item} className="bento-tag text-left">{item}</div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
