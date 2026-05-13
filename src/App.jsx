import React from 'react'
import '../style.css'

function App() {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    width: '100vw',
    backgroundImage: 'url("/src/bg.png")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: '#D4AF37',
    fontFamily: 'serif',
    textAlign: 'center'
  };

  return (
    <div style={containerStyle}>
      <header>
          <nav className="navbar">
              <div className="logo">VIBE<span>2026</span></div>
              <ul className="nav-links">
                  <li><a href="#accueil">Accueil</a></li>
                  <li><a href="#concept">Concept</a></li>
                  <li><a href="#contact">Contact</a></li>
              </ul>
          </nav>
      </header>

      <main>
          <section id="hero">
              <div className="container">
                  <h1>Bienvenue sur Vibe2026</h1>
                  <p>Découvrez les nouvelles tendances et l'énergie de l'année 2026.</p>
                  <a href="#concept" className="btn">Explorer</a>
              </div>
          </section>

          <section id="concept" className="container">
              <h2>Notre Vision</h2>
              <p>Le projet Vibe2026 est conçu pour connecter les idées et les gens.</p>
          </section>
      </main>

      <footer>
          <div className="container">
              <p>&copy; 2026 Vibe2026 - Tous droits réservés.</p>
          </div>
      </footer>
    </div>
  )
}

export default App
