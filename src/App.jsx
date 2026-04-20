     import React from 'react';

function App() {
  const cities = [
    { name: 'MONTRÉAL', url: 'https://vibegay.ca/montreal' },
    { name: 'QUÉBEC', url: 'https://vibegay.ca/quebec' },
    { name: 'OTTAWA', url: 'https://vibegay.ca/ottawa' },
    { name: 'TORONTO', url: 'https://vibegay.ca/toronto' }
  ];

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      color: '#D4AF37',
      fontFamily: 'serif',
      textAlign: 'center'
    }}>
      <h1 style={{ letterSpacing: '10px', marginBottom: '40px', fontSize: '2rem' }}>V I B E</h1>
      
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '20px',
        width: '90%',
        maxWidth: '400px'
      }}>
        {cities.map(city => (
          <a key={city.name} href={city.url} style={{
            border: '1px solid #D4AF37',
            padding: '20px 10px',
            textDecoration: 'none',
            color: '#D4AF37',
            fontSize: '14px',
            fontWeight: 'bold'
          }}>
            {city.name}
          </a>
        ))}
      </div>

      <div style={{ marginTop: '40px', width: '250px' }}>
        <input type="text" placeholder="Votre Prénom" style={{
          background: 'transparent',
          border: 'none',
          borderBottom: '1px solid #D4AF37',
          color: '#D4AF37',
          width: '100%',
          padding: '10px 0',
          outline: 'none',
          textAlign: 'center'
        }} />
      </div>
    </div>
  );
}

export default App;     p;
