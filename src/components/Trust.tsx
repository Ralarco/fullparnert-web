'use client';

export default function Trust() {
  const logos = [
    { src: "./images/mundial-300x129.png", alt: "Mundial" },
    { src: "./images/musan-300x129.png", alt: "Musan" },
    { src: "./images/acciona-300x147.png", alt: "Acciona" },
    { src: "./images/apl-300x129.png", alt: "APL" },
    { src: "./images/calyco-300x147.jpg", alt: "Calyco" }
  ];

  return (
    <section className="reveal-wrapper" style={{ padding: '8rem 0', backgroundColor: 'var(--surface-container-lowest)' }}>
      <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 3rem' }}>
        <p className="font-manrope tracking-super-wide text-center uppercase" style={{ fontSize: '0.65rem', fontWeight: 900, color: 'var(--outline)', marginBottom: '5rem', opacity: 0.6, letterSpacing: '0.3em' }}>
          Partners Estratégicos & Clientes
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '6rem', alignItems: 'center' }}>
          {logos.map((logo, i) => (
            <div key={i} className="reveal-wrapper" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img 
                src={logo.src} 
                alt={logo.alt} 
                className="grayscale-hover"
                style={{
                  maxWidth: '140px',
                  height: 'auto',
                  objectFit: 'contain',
                  opacity: 0.4,
                  filter: 'grayscale(1)',
                  transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.opacity = '1';
                  e.currentTarget.style.filter = 'grayscale(0)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.opacity = '0.4';
                  e.currentTarget.style.filter = 'grayscale(1)';
                }}
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
