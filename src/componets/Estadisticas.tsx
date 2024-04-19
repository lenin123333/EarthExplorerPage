import React, { useState } from 'react';
import '../Estadisticas.css'; // Asegúrate de tener un archivo CSS para los estilos del Footer
import Alerta from './Alerta'; // Asegúrate de que la ruta sea correcta

export default function Estadisticas() {
  const [id, setId] = useState('');
  const [alerta, setAlerta] = useState<{ type: 'success' | 'error'; msg: string } | null>(null);

  const handleConsultar = () => {
    if (id.trim() === '') {
      setAlerta({ type: 'error', msg: 'Por favor ingresa un ID válido.' });
    } else {
      // Aquí puedes realizar la consulta con el ID ingresado
    }
  };

  return (
    <>
      <h2 className="main-title">Estadísticas</h2>
      <div className="container">
        <h2 className="sub-title">Consulta tu progreso</h2>
        <div className="input-container">
          <input
            type="text"
            placeholder="Ingresa ID"
            className="input-field"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
          <button className="consult-button" onClick={handleConsultar}>
            Consultar
          </button>
        </div>
      </div>
      {alerta && <Alerta alerta={alerta} />}
    </>
  );
}
