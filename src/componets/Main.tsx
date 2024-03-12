// Main.tsx
import React from 'react';
import '../Main.css'

const Main: React.FC = () => {
  return (
    <main className="main" >
      <div>
        <h2 className="main-title">EarthExplorer</h2>
        <p className="main-description">
          Adéntrate en la fascinante historia de un personaje impactado por un rayo, quien despierta en un mundo transformado por la contaminación. Donde una vez reinaban bosques y ríos claros, ahora la contaminación ha sumido todo en la desolación. En este emocionante juego de plataformas, te enfrentarás a enemigos desafiantes y superarás obstáculos mientras te sumerges en una narrativa que busca concienciar sobre la importancia de cuidar nuestro planeta y restaurar su antigua belleza natural.
        </p>
      </div>
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
    </main>
  );
};

export default Main;
