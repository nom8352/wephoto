const Portfolio = () => {
  return (
    <div className="portfolio fade-in" style={{ padding: '4rem 1rem', maxWidth: '1200px', margin: '0 auto' }}>
      <h1 style={{ textAlign: 'center', fontSize: '3rem', marginBottom: '2rem' }}>Portfolio</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
        <div className="glass" style={{ height: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--muted)', fontSize: '1.2rem' }}>Maternity Highlights</div>
        <div className="glass" style={{ height: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--muted)', fontSize: '1.2rem' }}>Newborn Gallery</div>
        <div className="glass" style={{ height: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--muted)', fontSize: '1.2rem' }}>Family Sessions</div>
        <div className="glass" style={{ height: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--muted)', fontSize: '1.2rem' }}>Graphic Design Work</div>
      </div>
    </div>
  );
};

export default Portfolio;
