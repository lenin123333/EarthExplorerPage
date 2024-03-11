// Aside.tsx
import React from 'react';
import gif1 from '../assets/gifs/gif1.gif';
import gif2 from '../assets/gifs/gif2.gif';
import gif3 from '../assets/gifs/gif3.gif';
import gif4 from '../assets/gifs/gif4.gif';
import gif5 from '../assets/gifs/gif5.gif';
import gif6 from '../assets/gifs/gif6.gif';
import gif7 from '../assets/gifs/gif7.gif';
import gif8 from '../assets/gifs/gif8.gif';

import '../Asaide.css'

const Asaide: React.FC = () => {
  return (
    <aside className="aside">
      <h2 className="aside-title">Movimientos</h2>
      <div className="gif-container">
        <img src={gif1} alt="Movement GIF 1" />
        <img src={gif2} alt="Movement GIF 2" />
        <img src={gif3} alt="Movement GIF 3" />
        <img src={gif4} alt="Movement GIF 4" />
        <img src={gif5} alt="Movement GIF 5" />
        <img src={gif6} alt="Movement GIF 6" />
        <img src={gif7} alt="Movement GIF 7" />
        <img src={gif8} alt="Movement GIF 8" />
        
      </div>
    </aside>
  );
};

export default Asaide;
