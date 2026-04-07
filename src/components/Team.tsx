'use client';

export default function Team() {
  return (
    <section className="reveal-wrapper" style={{ padding: '12rem 0', backgroundColor: 'var(--surface-container-low)' }}>
      <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 3rem' }}>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '6rem', alignItems: 'center' }}>
          {/* Image Side */}
          <div style={{ gridColumn: 'span 5', position: 'relative' }} className="image-side">
            <div style={{ position: 'relative', borderRadius: '2rem', overflow: 'hidden' }}>
              <img 
                className="grayscale-hover"
                style={{ width: '100%', height: 'auto', objectFit: 'cover', transition: 'all 0.5s ease' }}
                src="./images/equipo.png" 
                alt="Elite Team"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://lh3.googleusercontent.com/aida-public/AB6AXuBms0fORdS86QGdK286VdrqeYzQFWlzM7_hpgUgVO4XMsKau2wFG9sOUS5_nvxJU-csHJVOJt6iT4eSsb6SV7hQ898yBrM_aLbafGcGk2_mHDVHw7UEb0kAf81Sp6Cc5lwQzOCFJpwpHtWvpSk0T9CEneUvMZJyyAPjGFAxFO7DHiy-nGA7KNb68RdX_pUo577rFmJDxnS2Xsejd2coPN7be7qJ8JjUesrH1G8dk1CQnWRa1wqbL1jTyN7E4PAcLibpdJT3ZRqi5I0';
                }}
              />
            </div>
            {/* Architectural stat box */}
            <div style={{
              position: 'absolute',
              bottom: '-3rem',
              right: '-3rem',
              backgroundColor: 'var(--on-background)',
              color: 'white',
              padding: '3rem',
              borderRadius: '2rem',
              boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
            }}>
              <span className="font-inter tracking-tight" style={{ fontSize: '5rem', fontWeight: 900, display: 'block', lineHeight: 0.8, letterSpacing: '-0.06em', marginBottom: '1rem' }}>15+</span>
              <span className="font-manrope tracking-super-wide uppercase" style={{ fontSize: '0.6rem', fontWeight: 900, letterSpacing: '0.3em', opacity: 0.7 }}>Años de Expertise</span>
            </div>
          </div>

          {/* Content Side */}
          <div style={{ gridColumn: 'span 7' }} className="content-side">
            <span className="font-manrope tracking-super-wide uppercase text-primary" style={{ fontSize: '0.65rem', fontWeight: 900, marginBottom: '2.5rem', display: 'block', opacity: 0.8 }}>
              Profesionales
            </span>
            <h2 className="font-inter tracking-tight" style={{ fontSize: '4.5rem', fontWeight: 900, lineHeight: 0.9, marginBottom: '4rem', color: 'var(--on-background)', letterSpacing: '-0.04em' }}>
              Equipo de Élite.
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
              <div style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start' }} className="reveal-wrapper">
                <div style={{ width: '0.5rem', height: '0.5rem', borderRadius: '50%', backgroundColor: 'var(--primary)', marginTop: '0.75rem', flexShrink: 0 }}></div>
                <div>
                  <h4 className="font-inter tracking-tight" style={{ fontWeight: 800, fontSize: '1.5rem', marginBottom: '0.5rem', color: 'var(--on-background)' }}>Equipo Especializado</h4>
                  <p className="font-manrope" style={{ fontSize: '1rem', color: 'var(--on-surface-variant)', fontWeight: 400, lineHeight: 1.6 }}>
                    Personal certificado en normativas internacionales de seguridad y eficiencia operativa, operando bajo estándares de precisión.
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start' }} className="reveal-wrapper">
                <div style={{ width: '0.5rem', height: '0.5rem', borderRadius: '50%', backgroundColor: 'var(--primary)', marginTop: '0.75rem', flexShrink: 0 }}></div>
                <div>
                  <h4 className="font-inter tracking-tight" style={{ fontWeight: 800, fontSize: '1.5rem', marginBottom: '0.5rem', color: 'var(--on-background)' }}>Tecnología de Vanguardia</h4>
                  <p className="font-manrope" style={{ fontSize: '1rem', color: 'var(--on-surface-variant)', fontWeight: 400, lineHeight: 1.6 }}>
                    Utilizamos herramientas de última generación para garantizar la máxima precisión en cada intervención logística.
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start' }} className="reveal-wrapper">
                <div style={{ width: '0.5rem', height: '0.5rem', borderRadius: '50%', backgroundColor: 'var(--primary)', marginTop: '0.75rem', flexShrink: 0 }}></div>
                <div>
                  <h4 className="font-inter tracking-tight" style={{ fontWeight: 800, fontSize: '1.5rem', marginBottom: '0.5rem', color: 'var(--on-background)' }}>Garantía de Calidad</h4>
                  <p className="font-manrope" style={{ fontSize: '1rem', color: 'var(--on-surface-variant)', fontWeight: 400, lineHeight: 1.6 }}>
                    Protocolos de control rigurosos en cada fase del servicio contratado, asegurando la continuidad de su operación.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
