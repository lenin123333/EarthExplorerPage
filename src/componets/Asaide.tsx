import React, { useState, useEffect } from 'react';
import '../Asaide.css'
import gif1 from '../assets/gifs/gif1.gif';
import gif2 from '../assets/gifs/gif2.gif';
import gif3 from '../assets/gifs/gif3.gif';
import gif4 from '../assets/gifs/gif4.gif';
import gif5 from '../assets/gifs/gif5.gif';
import gif6 from '../assets/gifs/gif6.gif';
import gif7 from '../assets/gifs/gif7.gif';
import gif8 from '../assets/gifs/gif8.gif';


const gifs = [gif1, gif2, gif3, gif4, gif5, gif6, gif7, gif8];

const Aside: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClick = (index: number) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % gifs.length);
    }, 10000); // Cambia la imagen cada 10 segundos

    return () => clearInterval(intervalId);
  }, []);

  return (
    <aside className="aside">
      <h2 className="aside-title">Movimientos</h2>
      <div className="gif-container">
        {gifs.map((gif, index) => (
          <img
            key={index}
            src={gif}
            alt={`Movement GIF ${index + 1}`}
            style={{ display: index === currentIndex ? 'block' : 'none' }}
          />
        ))}
        <div className="dots-container">
          {gifs.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => handleClick(index)}
            ></span>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default Aside;
