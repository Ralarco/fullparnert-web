'use client';
import Link from 'next/link';

export default function Services() {
  return (
    <section id="insumos" className="services-section reveal-wrapper" style={{ backgroundColor: 'var(--surface)', padding: '12rem 0' }}>
      <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 3rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '6rem', gap: '4rem', flexWrap: 'wrap' }}>
          <div style={{ flex: 1, minWidth: '300px' }}>
            <span className="font-manrope tracking-super-wide uppercase text-primary" style={{ fontSize: '0.65rem', fontWeight: 900, marginBottom: '2rem', display: 'block', opacity: 0.8 }}>
              Capacidades
            </span>
            <h2 className="font-inter tracking-tight" style={{ fontSize: '3.5rem', fontWeight: 900, lineHeight: 1, color: 'var(--on-surface)', letterSpacing: '-0.04em' }}>
              Operativa Ecosistémica.
            </h2>
          </div>
          <p className="font-manrope" style={{ flex: 1, minWidth: '300px', fontSize: '1.125rem', color: 'var(--on-surface-variant)', lineHeight: 1.7, fontWeight: 400, maxWidth: '32rem' }}>
            Integración total de suministros, equipos y soporte técnico para optimizar su cadena de valor con precisión arquitectónica.
          </p>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '1.5rem' }}>
          {/* Insumos Logísticos */}
          <div style={{ gridColumn: 'span 7', backgroundColor: 'var(--surface-container-lowest)', borderRadius: '1.5rem', padding: '4rem', display: 'flex', flexDirection: 'column', minHeight: '450px', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'relative', zIndex: 10, display: 'flex', flexDirection: 'column', height: '100%' }}>
              <span className="font-manrope" style={{ fontSize: '0.75rem', fontWeight: 900, opacity: 0.3, marginBottom: '3rem', letterSpacing: '0.2em' }}>01</span>
              <h3 className="font-inter tracking-tight" style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--primary)', marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: '-0.02em' }}>INSUMOS LOGÍSTICOS</h3>
              <p className="font-manrope" style={{ fontSize: '1rem', color: 'var(--on-surface-variant)', lineHeight: 1.6, maxWidth: '24rem', marginBottom: 'auto' }}>Suministros industriales diseñados para la máxima durabilidad y eficiencia en entornos de alta demanda operativa.</p>
              
              <Link href="#" className="btn btn-gradient" style={{ width: 'fit-content', padding: '1rem 2.5rem', marginTop: '3rem' }}>
                <span className="font-manrope tracking-widest text-[10px]">EXPLORAR CATÁLOGO</span>
              </Link>
            </div>
            <span className="material-symbols-outlined" style={{ position: 'absolute', bottom: '-2rem', right: '-1rem', fontSize: '15rem', color: 'var(--primary)', opacity: 0.03, pointerEvents: 'none' }}>inventory_2</span>
          </div>

          {/* Maquinaria */}
          <div id="maquinaria" style={{ gridColumn: 'span 5', backgroundColor: 'var(--on-background)', borderRadius: '1.5rem', padding: '4rem', display: 'flex', flexDirection: 'column', minHeight: '450px', position: 'relative', overflow: 'hidden' }}>
            <img 
              style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.3, filter: 'grayscale(1)' }}
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuA19taTDpGCYZsNv-OHuU0aovGZ0G16Gae6RQPeE-bkAUylbrOmgwC0LvJ89kcOWWjdYDbPpqv7cP5zc4nRh1MUxdhgfwQBROM_qbaCjO1p4Ai2tWXeQPZtybS1FoTnLVSinUrlY2OoBZT9nprempdOrHS15N_o5VyFTCgL9wqTXeRR0GB7eupBRQkG54vBqqUfUh17Yb1JsPqjKSnGD5L1-esCzvApjlus_-hQky4t3XOwGSSY-1KDaSkcmHCXPAJuDn7wYVRE5u8" 
              alt="Maquinaria"
            />
            <div style={{ position: 'relative', zIndex: 10, display: 'flex', flexDirection: 'column', height: '100%' }}>
              <span className="font-manrope" style={{ fontSize: '0.75rem', fontWeight: 900, opacity: 0.5, marginBottom: '3rem', letterSpacing: '0.2em', color: 'white' }}>02</span>
              <h3 className="font-inter tracking-tight" style={{ fontSize: '2rem', fontWeight: 800, color: 'white', marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: '-0.02em' }}>MAQUINARIA</h3>
              <p className="font-manrope" style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.6, marginBottom: 'auto' }}>Flota de última generación disponible para proyectos de gran escala.</p>
              
              <Link href="#" className="font-manrope" style={{ color: 'white', fontWeight: 800, fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: '1rem', marginTop: '3rem' }}>
                VER EQUIPOS <span className="material-symbols-outlined" style={{ fontSize: '1.25rem' }}>arrow_forward</span>
              </Link>
            </div>
          </div>

          {/* Servicios */}
          <div id="servicios" style={{ gridColumn: 'span 5', backgroundColor: 'var(--surface-container-high)', borderRadius: '1.5rem', padding: '4rem', display: 'flex', flexDirection: 'column', minHeight: '450px', position: 'relative' }}>
            <div style={{ position: 'relative', zIndex: 10, display: 'flex', flexDirection: 'column', height: '100%' }}>
              <span className="font-manrope" style={{ fontSize: '0.75rem', fontWeight: 900, opacity: 0.3, marginBottom: '3rem', letterSpacing: '0.2em' }}>03</span>
              <h3 className="font-inter tracking-tight" style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--primary)', marginBottom: '2rem', textTransform: 'uppercase', letterSpacing: '-0.02em' }}>SERVICIOS</h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: 'auto' }}>
                {['Mantenimiento Industrial', 'Pintura y Acabados', 'Soldadura de Precisión'].map(item => (
                  <li key={item} className="font-manrope" style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '1rem', fontWeight: 500, color: 'var(--on-surface)' }}>
                    <div style={{ width: '0.5rem', height: '0.5rem', borderRadius: '50%', backgroundColor: 'var(--primary)', opacity: 0.3 }}></div>
                    {item}
                  </li>
                ))}
              </ul>
              
              <Link href="#" className="font-manrope" style={{ color: 'var(--primary)', fontWeight: 800, fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: '1rem', marginTop: '3rem' }}>
                MÁS DETALLES <span className="material-symbols-outlined" style={{ fontSize: '1.25rem' }}>arrow_forward</span>
              </Link>
            </div>
          </div>

          {/* Asesorías */}
          <div id="asesorias" style={{ gridColumn: 'span 7', backgroundColor: 'var(--primary-container)', borderRadius: '1.5rem', padding: '4rem', display: 'flex', flexDirection: 'column', minHeight: '450px', position: 'relative', overflow: 'hidden' }}>
            <img 
              style={{ position: 'absolute', bottom: '-10%', right: '-5%', width: '60%', opacity: 0.1, filter: 'brightness(0)' }}
              src="./images/asesoria_bg.png" 
              alt="Asesoría Técnica"
            />
            <div style={{ position: 'relative', zIndex: 10, display: 'flex', flexDirection: 'column', height: '100%' }}>
              <span className="font-manrope" style={{ fontSize: '0.75rem', fontWeight: 900, opacity: 0.4, marginBottom: '3rem', letterSpacing: '0.2em', color: 'var(--on-primary-container)' }}>04</span>
              <h3 className="font-inter tracking-tight" style={{ fontSize: '2.5rem', fontWeight: 900, color: 'var(--on-primary-container)', marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: '-0.04em' }}>ASESORÍAS TÉCNICAS</h3>
              <p className="font-manrope" style={{ fontSize: '1.125rem', color: 'var(--on-primary-container)', opacity: 0.8, lineHeight: 1.6, maxWidth: '28rem', marginBottom: 'auto' }}>Consultoría especializada para la optimización de layouts logísticos y procesos operativos de alto rendimiento.</p>
              
              <Link href="#" className="btn btn-primary" style={{ backgroundColor: 'var(--primary)', color: 'white', width: 'fit-content', padding: '1rem 2.5rem', marginTop: '3rem' }}>
                <span className="font-manrope tracking-widest text-[10px]">SOLICITAR AUDITORÍA</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
