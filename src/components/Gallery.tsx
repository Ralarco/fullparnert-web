'use client';

export default function Gallery() {
  const projects = [
    {
      cat: "Montaje Industrial",
      title: "Hub Logístico Norte",
      img: "/images/proyectos_01.jpg"
    },
    {
      cat: "Pintura Especializada",
      title: "Centro de Distribución Sur",
      img: "/images/proyectos_02.jpg"
    },
    {
      cat: "Infraestructura",
      title: "Renovación Rack System",
      img: "/images/proyectos_03.jpg"
    }
  ];

  return (
    <section className="reveal-wrapper" style={{ padding: '12rem 0', backgroundColor: 'var(--surface)' }}>
      <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 3rem' }}>
        
        <div style={{ marginBottom: '6rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <span className="font-manrope tracking-super-wide text-primary uppercase" style={{ fontSize: '0.65rem', fontWeight: 900, opacity: 0.8 }}>Otros proyectos</span>
          <h2 className="font-inter tracking-tight" style={{ fontSize: '3.5rem', fontWeight: 900, letterSpacing: '-0.04em', color: 'var(--on-surface)' }}>Viña San Pedro</h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2.5rem' }}>
          {projects.map((project, i) => (
            <div 
              key={i} 
              className="reveal-wrapper"
              style={{ position: 'relative', overflow: 'hidden', height: '550px', backgroundColor: 'var(--surface-container-high)', borderRadius: '2rem' }}
            >
              <img 
                className="grayscale-hover"
                src={project.img} 
                alt={project.title} 
                style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)' }} 
              />
              <div 
                style={{ 
                  position: 'absolute', 
                  inset: 0, 
                  background: 'linear-gradient(to top, rgba(0, 49, 83, 0.9) 0%, transparent 60%)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  padding: '3rem',
                  pointerEvents: 'none'
                }}
              >
                {/* <p className="font-manrope tracking-widest" style={{ fontSize: '0.65rem', textTransform: 'uppercase', fontWeight: 900, marginBottom: '1rem', color: 'rgba(255,255,255,0.6)', letterSpacing: '0.2em' }}>
                  {project.cat}
                </p>
                <h5 className="font-inter tracking-tight" style={{ fontSize: '2rem', fontWeight: 800, color: 'white', letterSpacing: '-0.02em' }}>
                  {project.title}
                </h5> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
