import { useState } from 'react';
import '../Estadisticas.css'; // Asegúrate de tener un archivo CSS para los estilos del Footer
import Alerta from './Alerta'; // Asegúrate de que la ruta sea correcta

const Estadisticas = () => {
  const [id, setId] = useState('');
  const [alerta, setAlerta] = useState<{ type: 'success' | 'error'; msg: string } | null>(null);
  const [conteoPorTema, setConteoPorTema] = useState<{ [key: string]: { correctas: number; incorrectas: number } }>({});

  const handleConsultar = async () => {
    if (id.trim() === '') {
      setAlerta({ type: 'error', msg: 'Por favor ingresa un ID válido.' });
    } else {
      try {
        // Obtener la URL de la API desde una variable de entorno
        const apiUrl = import.meta.env.VITE_APP_API_URL;

        // Verificar si la URL de la API está definida
        if (!apiUrl) {
          throw new Error('La URL de la API no está definida en las variables de entorno.');
        }

        // Realizar la solicitud GET a la API
        const response = await fetch(`${apiUrl}/api/level/${id}`);
        
        if (response.status === 404) {
          return  setAlerta({ type: 'error', msg: 'El usuario no fue encontrado' });
        }

        if (!response.ok) {
          throw new Error('No se pudo completar la solicitud');
        }
        
        // Convertir la respuesta a JSON
        const data = await response.json();
        console.log('Respuesta de la API:', data);

        // Guardar los datos en el estado
        setConteoPorTema(data.conteoPorTema);
        
        // Limpiar la alerta si hubo alguna
        setAlerta(null);
      } catch (error) {
        // Manejar errores de la solicitud
        setAlerta({ type: 'error', msg: 'Hubo un error al consultar.' });
      }
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

      {/* Visualización de estadísticas si hay datos */}
      {Object.keys(conteoPorTema).length > 0 && (
        <div className="estadisticas-container">
          <h3>Estadísticas por tema</h3>
          {Object.entries(conteoPorTema).map(([tema, conteo]) => (
            <div className="tema-container" key={tema}>
              <h4>{tema}</h4>
              <div className="lineas-container">
                <div className="linea">
                  <div className="correctas-barra" style={{ width: `${(conteo.correctas / (conteo.correctas + conteo.incorrectas)) * 100}%` }}></div>
                  <div className="incorrectas-barra" style={{ width: `${(conteo.incorrectas / (conteo.correctas + conteo.incorrectas)) * 100}%` }}></div>
                </div>
              </div>
              <div className="conteo-container">
                <span>Correctas: {conteo.correctas} ({((conteo.correctas / (conteo.correctas + conteo.incorrectas)) * 100).toFixed(2)}%)</span>
                <span>Incorrectas: {conteo.incorrectas} ({((conteo.incorrectas / (conteo.correctas + conteo.incorrectas)) * 100).toFixed(2)}%)</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Estadisticas;
