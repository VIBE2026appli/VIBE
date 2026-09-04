// ⚡ Bolt: Extracted static styles outside component to prevent object reallocation on every render
const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    width: '100vw',
    backgroundColor: '#050505',
    color: '#D4AF37',
    fontFamily: 'Georgia, serif',
    textAlign: 'center',
    padding: '40px 20px'
  },
  heading: {
    fontSize: '3rem',
    marginBottom: '10px',
    letterSpacing: '8px'
  },
  subtitle: {
    fontSize: '1.1rem',
    marginBottom: '8px',
    opacity: 0.9
  },
  locations: {
    fontSize: '0.9rem',
    marginBottom: '40px',
    opacity: 0.6
  },
  button: {
    backgroundColor: '#D4AF37',
    color: '#050505',
    padding: '14px 32px',
    borderRadius: '30px',
    textDecoration: 'none',
    fontWeight: 'bold',
    fontSize: '1rem',
    marginBottom: '20px'
  },
  footer: {
    fontSize: '0.8rem',
    opacity: 0.5,
    marginTop: '60px'
  }
};

export default function App() {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>
        ✦ VIBE
      </h1>
      <p style={styles.subtitle}>
        L'app LGBTQ+ 100% canadienne
      </p>
      <p style={styles.locations}>
        Montréal · Québec · Toronto · Vancouver · Ottawa
      </p>
      <a href="https://vibegay.ca/inscription" style={styles.button}>
        Rejoindre VIBE
      </a>
      <p style={styles.footer}>
        © 2026 VIBE Canada · vibegay.ca
      </p>
    </div>
  );
}