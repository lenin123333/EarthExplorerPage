// Main.tsx
import React from 'react';
import '../Main.css'

const Main: React.FC = () => {
  return (
    <div className="main">
      <h2 className="main-title">EarthExplorer</h2>
      <p className="main-description">
        EarthExplorer, el juego de plataformas 2D, te desafía a enfrentar enemigos, descubrir secretos ocultos y reconstruir una historia perdida en un paisaje postapocalíptico. Sumérgete en esta experiencia única con gráficos vibrantes y mecánicas envolventes, explorando los rincones más oscuros mientras luchas por la supervivencia y descubres la verdad detrás de la devastación. ¡Una emocionante mezcla de emoción, intriga y descubrimientos te espera en EarthExplorer!
      </p>
      <div className="trailer-container">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/3Uem8EdjIzU?si=86pZlyDOowWdgMfW"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default Main;
