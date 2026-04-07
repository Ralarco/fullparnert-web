'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`glass-nav section-nav ${scrolled ? 'scrolled' : ''}`} aria-label="Navegación Principal">   
      <div className="container-nav">
        <div className="nav-logo-wrapper">
          <Link href="/" aria-label="Inicio">
            <img 
              className="nav-logo"
              src={scrolled ? "/images/fullpartner_logo_blanco.png" : "/images/fullparnert_logo.png"} 
              alt="Logotipo de Full Partner - Servicios Logísticos e Industriales"
              loading="eager"
            />
          </Link>
        </div>

        <div className="desktop-links hidden-mobile">
          <Link className="nav-link nav-link-underline active nav-link-home" href="/">Home</Link>
          <Link className="nav-link nav-link-underline" href="/#logistics">Insumos Logísticos</Link>
          <Link className="nav-link nav-link-underline" href="/#maquinaria">Maquinarias</Link>
          <Link className="nav-link nav-link-underline" href="/#contact">Contactos</Link>
        </div>
        
        <div className="nav-actions">
          <button type="button" className="btn btn-gradient btn-animate hidden-mobile">
            Solicitar Demo
          </button>
          
          <button 
            type="button" 
            className="mobile-menu-toggle visible-mobile"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
          >
            <span className="material-symbols-outlined">
              {isMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu-overlay ${isMenuOpen ? 'open' : ''}`}>
        <div className="mobile-menu-content">
          <Link href="/" className="mobile-nav-link nav-link-home" onClick={() => setIsMenuOpen(false)}>Home</Link>
          <Link href="/#logistics" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>Insumos Logísticos</Link>
          <Link href="/#maquinaria" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>Maquinarias</Link>
          <Link href="/#contact" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>Contactos</Link>
          <button type="button" className="btn btn-gradient btn-animate w-full mt-8">
            Solicitar Demo
          </button>
        </div>
      </div>
    </nav>
  );
}
