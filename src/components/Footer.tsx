import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="reveal-wrapper" style={{ backgroundColor: 'var(--on-background)', width: '100%', padding: '8rem 0 5rem', color: 'rgba(255,255,255,0.5)' }}>
      <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 3rem' }}>
        <div className="footer-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '4rem' }}>
          
          <div style={{ gridColumn: 'span 4' }} className="footer-brand">
            <img 
              style={{ height: '2.5rem', marginBottom: '2.5rem', opacity: 1 }}
              src="/images/fullpartner_logo_blanco.png" 
              alt="Full Partner"
            />
            <p className="font-inter" style={{ fontSize: '0.925rem', fontWeight: 300, lineHeight: 1.8, maxWidth: '22rem', letterSpacing: '-0.01em' }}>
              Precisión industrial diseñada para la nueva generación de cadenas de suministro globales. Comprometidos con la excelencia operativa.
            </p>
          </div>

          <div style={{ gridColumn: 'span 3' }} className="footer-cols">
            <h6 className="font-manrope tracking-super-wide uppercase" style={{ fontSize: '0.6rem', fontWeight: 900, marginBottom: '2.5rem', color: '#FFFFFF', opacity: 0.9 }}>Divisiones</h6>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <li><Link href="#" className="font-inter nav-link-footer" style={{ fontSize: '0.875rem' }}>Soluciones Logísticas</Link></li>
              <li><Link href="#" className="font-inter nav-link-footer" style={{ fontSize: '0.875rem' }}>Sistemas de Maquinaria</Link></li>
              <li><Link href="#" className="font-inter nav-link-footer" style={{ fontSize: '0.875rem' }}>Suministros Globales</Link></li>
              <li><Link href="#" className="font-inter nav-link-footer" style={{ fontSize: '0.875rem' }}>Hub de Innovación</Link></li>
            </ul>
          </div>

          <div style={{ gridColumn: 'span 3' }} className="footer-cols">
            <h6 className="font-manrope tracking-super-wide uppercase" style={{ fontSize: '0.6rem', fontWeight: 900, marginBottom: '2.5rem', color: '#FFFFFF', opacity: 0.9 }}>Legal &amp; Gobernanza</h6>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <li><Link href="#" className="font-inter nav-link-footer" style={{ fontSize: '0.875rem' }}>Política de Privacidad</Link></li>
              <li><Link href="#" className="font-inter nav-link-footer" style={{ fontSize: '0.875rem' }}>Términos de Servicio</Link></li>
              <li><Link href="#" className="font-inter nav-link-footer" style={{ fontSize: '0.875rem' }}>Cumplimiento</Link></li>
              <li><Link href="#" className="font-inter nav-link-footer" style={{ fontSize: '0.875rem' }}>Sostenibilidad</Link></li>
            </ul>
          </div>

          <div style={{ gridColumn: 'span 2' }} className="footer-cols">
            <h6 className="font-manrope tracking-super-wide uppercase" style={{ fontSize: '0.6rem', fontWeight: 900, marginBottom: '2.5rem', color: '#FFFFFF', opacity: 0.9 }}>Presencia</h6>
            <p className="font-inter" style={{ fontSize: '0.875rem', marginBottom: '1.5rem', fontWeight: 300 }}>Sede Central: Santiago, Nodo Industrial 4.</p>
            <div style={{ display: 'flex', gap: '1.5rem' }}>
              <span className="material-symbols-outlined hover-scale" style={{ cursor: 'pointer', color: '#FFFFFF', opacity: 0.6 }}>public</span>
              <span className="material-symbols-outlined hover-scale" style={{ cursor: 'pointer', color: '#FFFFFF', opacity: 0.6 }}>domain</span>
            </div>
          </div>
          
        </div>

        <div style={{ marginTop: '8rem', paddingTop: '3rem', backgroundColor: 'rgba(255,255,255,0.03)', margin: '8rem -3rem 0', padding: '3rem 3rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '2rem' }}>
          <p className="font-manrope" style={{ fontSize: '0.75rem', fontWeight: 400, opacity: 0.5, textTransform: 'uppercase', letterSpacing: '0.1em' }}>© 2026 Full Partner Industrial. Precisión Arquitectónica en Logística.</p>
          <div style={{ display: 'flex', gap: '3rem' }}>
            <Link href="#" className="font-manrope nav-link-footer inline" style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Inversores</Link>
            <Link href="#" className="font-manrope nav-link-footer inline" style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Carreras</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
