const Footer = () => {
  return (
    <footer style={{ padding: '2rem', textAlign: 'center', color: 'var(--muted)', borderTop: '1px solid var(--glass-border)', marginTop: '4rem' }}>
      <p>&copy; {new Date().getFullYear()} WePhoto. Unit 22, 33-37 College St, Gladesville NSW 2111, Australia</p>
    </footer>
  );
};

export default Footer;
