'use client';

import React from 'react';

export default function Innovation() {
  return (
    <section id="innovation" className="section-split reveal-wrapper">
      {/* Left Content */}
      <div className="split-content split-surface-lowest">
        <div className="split-text-wrapper">
          <span className="split-tag">Innovación</span>
          <h2 className="split-title">
            La Revolución <br/>Silenciosa <br/>en Logística.
          </h2>

          <div className="split-items-container">
            <div className="split-item-row">
              <div className="split-icon-wrapper hover-scale">
                <span className="material-symbols-outlined split-icon" aria-hidden="true">bolt</span>
              </div>
              <div>
                <h5 className="split-item-title">Ultra-Alta Eficiencia</h5>
                <p className="split-item-text">
                  Trenes motrices eléctricos personalizados diseñados para operaciones de alta densidad 24/7.
                </p>
              </div>
            </div>

            <div className="split-item-row">
              <div className="split-icon-wrapper hover-scale">
                <span className="material-symbols-outlined split-icon" aria-hidden="true">analytics</span>
              </div>
              <div>
                <h5 className="split-item-title">Logística Predictiva</h5>
                <p className="split-item-text">
                  Sensores impulsados por IA que anticipan el mantenimiento antes de que ocurra una falla.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Image */}
      <div className="split-img-wrapper split-surface-high">
        <img 
          className="split-img"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBrRXVbgax_TszAh6sXCdR9CpnHcfUZrs8N8LSzOoNmLodlswXCM4aO0zAyuv4sDztUpgHQhtaXQ6rHKw8IjO1Mday4npzplkegDYNQ9qzlkzq2tUCcWIbGYEUt8xi-07MgP2mj0XhgyJyQKIgIz3_ABBi0BNnyW6TTEPybITdJowXgs1WJx48A7Zjd9BhrAkzPWTm2p_TlNhqxc98PuGO8dfP4i_dYltGPs-LBq9gZeKItTL9oYTlDyl2zIVEFPKvy7PyVeikFgY8"
          alt="Estructuras de racks en bodega logística moderna"
          loading="lazy"
        />
        <div className="split-design-overlay">
          <div className="split-design-inner">
            <div className="split-design-card"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
