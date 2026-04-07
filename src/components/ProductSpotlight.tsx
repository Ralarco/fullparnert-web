'use client';

export default function ProductSpotlight() {
  return (
    <section className="reveal-wrapper" style={{ padding: '8rem 0', backgroundColor: 'var(--background)', overflow: 'hidden' }}>
      <div style={{ padding: '0 3rem', marginBottom: '5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', maxWidth: '1920px', margin: '0 auto' }}>
        <div>
          <h2 className="tracking-tighter" style={{ fontSize: '3.75rem', fontWeight: 900, textTransform: 'uppercase', marginBottom: '1rem', color: 'var(--on-background)' }}>
            FP-700 Neo
          </h2>
          <p className="font-label tracking-widest" style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--primary)', fontWeight: 700 }}>
            The Pinnacle of Warehouse Performance
          </p>
        </div>
        
        <div className="stats-header" style={{ display: 'flex', gap: '3rem' }}>
          <div style={{ textAlign: 'right' }}>
            <span style={{ display: 'block', fontSize: '1.5rem', fontWeight: 700, color: 'var(--on-background)' }}>12.5t</span>
            <span className="font-label tracking-widest" style={{ fontSize: '10px', color: 'var(--on-surface-variant)', textTransform: 'uppercase', fontWeight: 700 }}>Lifting Capacity</span>
          </div>
          <div style={{ textAlign: 'right' }}>
            <span style={{ display: 'block', fontSize: '1.5rem', fontWeight: 700, color: 'var(--on-background)' }}>18h</span>
            <span className="font-label tracking-widest" style={{ fontSize: '10px', color: 'var(--on-surface-variant)', textTransform: 'uppercase', fontWeight: 700 }}>Continuous Ops</span>
          </div>
        </div>
      </div>

      <div style={{ position: 'relative', padding: '0 3rem' }}>
        <div style={{ position: 'relative', width: '100%', maxWidth: '72rem', margin: '0 auto' }}>
          <img 
            className="grayscale-hover"
            style={{ width: '100%' }}
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAah8URzU4_DWvkyIC9qzectYIy22XBet2khMvLBKwdGz5wRNWs09J-3NbKmuKv-ZXtsPsGWffW2R3m6QhrdHzki6hyCOai5z9owFhn1gj2MD_M0OxWvD__ZWAjOuoZMjd6No_CwchmOvL5K_-5GQKU95eWbvFPuhtfbxVYY7gn743gC-TWXARZqT7ztx_n9JGlHSrYTSIIgPd_1LhpgA3WX3LEd7K6VTlZ0ekDz1b4Y5rFeaoe3WrOE4PrzyqV_RMq8J5ayXakUk0"
            alt="FP-700 Neo Flagship Forklift"
          />

          {/* Callouts (Desktop) */}
          <div 
            className="callout-1"
            style={{
              position: 'absolute',
              top: '25%',
              left: '15%',
              display: 'flex',
              alignItems: 'center'
            }}
          >
            <div style={{ width: '8px', height: '8px', backgroundColor: 'var(--primary)', borderRadius: '50%' }}></div>
            <div style={{ width: '8rem', height: '1px', backgroundColor: 'rgba(173,179,180,0.5)' }}></div>
            <div style={{ paddingLeft: '1rem' }}>
              <span className="font-label tracking-tighter" style={{ display: 'block', fontSize: '10px', fontWeight: 700, textTransform: 'uppercase' }}>Carbon Composite Chassis</span>
              <span className="font-label" style={{ fontSize: '9px', color: 'var(--on-surface-variant)' }}>Lighter. Stronger. Industrial.</span>
            </div>
          </div>

          <div 
            className="callout-2"
            style={{
              position: 'absolute',
              bottom: '33%',
              right: '15%',
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'row-reverse'
            }}
          >
            <div style={{ width: '8px', height: '8px', backgroundColor: 'var(--primary)', borderRadius: '50%' }}></div>
            <div style={{ width: '12rem', height: '1px', backgroundColor: 'rgba(173,179,180,0.5)' }}></div>
            <div style={{ paddingRight: '1rem', textAlign: 'right' }}>
              <span className="font-label tracking-tighter" style={{ display: 'block', fontSize: '10px', fontWeight: 700, textTransform: 'uppercase' }}>Zero-Radius Steer</span>
              <span className="font-label" style={{ fontSize: '9px', color: 'var(--on-surface-variant)' }}>Navigate tightest logistics hubs.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
