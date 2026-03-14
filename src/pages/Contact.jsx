const Contact = () => {
  return (
    <div className="contact fade-in" style={{ padding: '4rem 1rem', maxWidth: '600px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '2rem', textAlign: 'center' }}>Get in Touch</h1>
      <form className="glass" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        <input type="text" placeholder="Name" style={{ padding: '1rem', background: 'transparent', border: '1px solid var(--glass-border)', color: 'white', borderRadius: '8px', fontSize: '1rem' }} />
        <input type="email" placeholder="Email" style={{ padding: '1rem', background: 'transparent', border: '1px solid var(--glass-border)', color: 'white', borderRadius: '8px', fontSize: '1rem' }} />
        <textarea placeholder="Message" rows="5" style={{ padding: '1rem', background: 'transparent', border: '1px solid var(--glass-border)', color: 'white', borderRadius: '8px', resize: 'vertical', fontSize: '1rem' }}></textarea>
        <button type="submit" style={{ padding: '1rem', background: 'var(--accent)', color: 'var(--bg)', border: 'none', borderRadius: '8px', fontWeight: 'bold', fontSize: '1.1rem', cursor: 'pointer', transition: 'opacity 0.2s ease' }} onMouseOver={(e) => e.target.style.opacity = '0.8'} onMouseOut={(e) => e.target.style.opacity = '1'}>Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
