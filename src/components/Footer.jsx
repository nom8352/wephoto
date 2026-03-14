const Footer = () => {
  return (
    <footer style={{ padding: '2rem', textAlign: 'center', color: 'var(--muted)', borderTop: '1px solid var(--glass-border)', marginTop: '4rem' }}>
      <p>&copy; {new Date().getFullYear()} WePhoto. Gladesville NSW 2111</p>
    </footer>
  );
};

export default Footer;
