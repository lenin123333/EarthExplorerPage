// Header.tsx
import React, { useState, useEffect } from 'react';
import MainMenu from '../assets/MainMenu.jpg';
import logo from '../assets/logo/Logo.png';
import bird_1 from '../assets/fly/fly_0.png';
import bird_2 from '../assets/fly/fly_1.png';
import bird_3 from '../assets/fly/fly_2.png';
import bird_4 from '../assets/fly/fly_3.png';
import bird_5 from '../assets/fly/fly_4.png';

import bird_idol_5 from '../assets/idol/idle_2_0.png';
import bird_idol_4 from '../assets/idol/idle_2_1.png';
import bird_idol_3 from '../assets/idol/idle_2_2.png';
import bird_idol_2 from '../assets/idol/idle_2_3.png';
import bird_idol_1 from '../assets/idol/idle_2_4.png';

import idolEnemy from '../assets/enemy/idle_0.png';
import idolEnemy_1 from '../assets/enemy/idle_1.png';
import idolEnemy_2 from '../assets/enemy/idle_2.png';
import idolEnemy_3 from '../assets/enemy/idle_3.png';
import idolEnemy_4 from '../assets/enemy/idle_4.png';
import idolEnemy_5 from '../assets/enemy/idle_5.png';
import idolEnemy_6 from '../assets/enemy/idle_6.png';
import idolEnemy_7 from '../assets/enemy/idle_7.png';




const Header: React.FC = () => {
  const [showBird, setShowBird] = useState(false);
  const [birdIndex, setBirdIndex] = useState(0);
  const [birdIdolIndex, setIdolBirdIndex] = useState(0);
  const [enemylIndex, setEnemyIndex]= useState(0);

  useEffect(() => {
    const contentAnimation = document.querySelector('.content') as HTMLElement;

    contentAnimation.addEventListener('animationend', () => {
      setShowBird(true);
    });

    // Cambia la imagen del ave cada 3 segundos
    const birdInterval = setInterval(() => {
      setBirdIndex((prevIndex) => (prevIndex + 1) % 5);

    }, 150);

    const birdIdolInterval = setInterval(() => {
      setIdolBirdIndex((prevIndex) => (prevIndex + 1) % 5);

    }, 250);

    const enemyInterval = setInterval(() => {
      setEnemyIndex((prevIndex) => (prevIndex + 1) % 8);

    }, 250);
    return () => {
      contentAnimation.removeEventListener('animationend', () => { });
      clearInterval(birdInterval);
      clearInterval(birdIdolInterval);
      clearInterval(enemyInterval);

    };
  }, []);

  const birdImages = [bird_1, bird_2, bird_3, bird_4, bird_5];
  const birdIdolImages = [bird_idol_5, bird_idol_4, bird_idol_3, 
    bird_idol_2, bird_idol_1];

  const enemyImages=[ idolEnemy,
   idolEnemy_1,
   idolEnemy_2,
   idolEnemy_3,
   idolEnemy_4,
   idolEnemy_5,
   idolEnemy_6,
   idolEnemy_7]  

  return (
    <header className="header">
      <div className="background">
        {/* Las imágenes de fondo */}
        <img src={MainMenu} alt="Forest Background 2" />

        {/* Añade las demás imágenes de fondo según sea necesario */}
      </div>
      <div className="content">
        <h1>
          <img src={logo} alt="EarthExplorer Logo" />
        </h1>
        <p>
          Preparate para vivir una aventura extraordinaria, llena de emocionantes retos y enemigos desconocidos
        </p>
        {showBird && (
          <>
            <img
              className="idol-bird"
              src={birdIdolImages[birdIdolIndex]}
              alt="Idol Bird"
            />
          </>
        )}
      </div>

      {showBird && (
        <>
          <img
            className="enemy-idol"
            src={enemyImages[enemylIndex]}
            alt="Enemy Idol"
          />
          <img
            className="flying-bird"
            src={birdImages[birdIndex]}
            alt="Bird"
          />
        </>
      )}
    </header>
  );
};

export default Header;
