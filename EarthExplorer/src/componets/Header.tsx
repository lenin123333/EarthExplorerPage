// Header.tsx
import React, { useState, useEffect } from 'react';
import bg_forest_5 from '../assets/fondo/bg_forest_5.png';
import bg_forest_4 from '../assets/fondo/bg_forest_4.png';
import bg_forest_3 from '../assets/fondo/bg_forest_2.png';
import bg_forest_2 from '../assets/fondo/bg_forest_3.png';
import bg_forest_1 from '../assets/fondo/bg_forest_1.png';
import MainMenu from '../assets/MainMenu copy.jpg';

import logo from '../assets/logo/Logo.png';
import bird_1 from '../assets/fly/fly_0.png';
import bird_2 from '../assets/fly/fly_1.png';
import bird_3 from '../assets/fly/fly_2.png';
import bird_4 from '../assets/fly/fly_3.png';
import bird_5 from '../assets/fly/fly_4.png';
import bird_idol_13 from '../assets/idol/idle_1_7.png';
import bird_idol_12 from '../assets/idol/idle_1_6.png';
import bird_idol_11 from '../assets/idol/idle_1_5.png';
import bird_idol_10 from '../assets/idol/idle_1_4.png';
import bird_idol_9 from '../assets/idol/idle_1_3.png';
import bird_idol_8 from '../assets/idol/idle_1_2.png';
import bird_idol_7 from '../assets/idol/idle_1_1.png';
import bird_idol_6 from '../assets/idol/idle_1_0.png';
import bird_idol_5 from '../assets/idol/idle_2_0.png';
import bird_idol_4 from '../assets/idol/idle_2_1.png';
import bird_idol_3 from '../assets/idol/idle_2_2.png';
import bird_idol_2 from '../assets/idol/idle_2_3.png';
import bird_idol_1 from '../assets/idol/idle_2_4.png';



const Header: React.FC = () => {
  const [showBird, setShowBird] = useState(false);
  const [birdIndex, setBirdIndex] = useState(0);
  const [birdIdolIndex, setIdolBirdIndex] = useState(0);
  

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
      setIdolBirdIndex((prevIndex) => (prevIndex + 1) % 13);

    }, 300);

    return () => {
      contentAnimation.removeEventListener('animationend', () => { });
      clearInterval(birdInterval);
      clearInterval(birdIdolInterval);

    };
  }, []);

  const birdImages = [bird_1, bird_2, bird_3, bird_4, bird_5];
  const birdIdolImages = [bird_idol_13,bird_idol_12,bird_idol_11,
    bird_idol_10,bird_idol_9,bird_idol_8,bird_idol_7,bird_idol_6,
    bird_idol_5, bird_idol_4, bird_idol_3, bird_idol_2, bird_idol_1];
         


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
