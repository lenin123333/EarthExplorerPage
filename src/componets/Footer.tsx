// Footer.tsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faYoutube, faTiktok } from '@fortawesome/free-brands-svg-icons';

import '../Footer.css'; // Asegúrate de tener un archivo CSS para los estilos del Footer

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="social-icons">
        <a href="mailto:earthexplorer42@gmail.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
        <a href="https://www.youtube.com/channel/UC58TDtVB46x4Wwa7izHqqqA" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faYoutube} />
        </a>
        <a href="https://www.tiktok.com/@earthexplorergame" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faTiktok} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
