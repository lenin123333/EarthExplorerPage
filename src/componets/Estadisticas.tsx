import { useState, useEffect, useRef } from 'react';
import Chart from 'chart.js/auto'; // Importa Chart.js
import '../Estadisticas.css'; // Asegúrate de tener un archivo CSS para los estilos del Footer
import Alerta from './Alerta'; // Asegúrate de que la ruta sea correcta

type ChartInstance = {
  chart: Chart<"doughnut", number[], string>; // Tipo de gráfico específico que estás utilizando
  canvas: HTMLCanvasElement;
};

const Estadisticas = () => {
  const [id, setId] = useState('');
  const [alerta, setAlerta] = useState<{ type: 'success' | 'error'; msg: string } | null>(null);
  const [conteoPorTema, setConteoPorTema] = useState<{ [key: string]: { correctas: number; incorrectas: number } }>({});
  const [temaMasRepetido, setTemaMasRepetido] = useState<string>('');
  const [mejoresTiempos, setMejoresTiempos] = useState<{ [key: string]: number }>({});
  const [total, setTotal] = useState<number>(0);
  const chartInstances = useRef<ChartInstance[]>([]);

  useEffect(() => {
    // Cada vez que los datos de conteoPorTema cambien, actualiza los gráficos
    actualizarGraficos();

    // Función de limpieza al desmontar el componente
    return () => {
      chartInstances.current.forEach(({ chart }) => {
        chart.destroy();
      });
    };
  }, [conteoPorTema]);

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
        setTemaMasRepetido(data.temaMasRepetido);
        setMejoresTiempos(data.bestTimes);
        setTotal(data.total); // Actualizamos el total
        
        // Limpiar la alerta si hubo alguna
        setAlerta(null);
      } catch (error) {
        // Manejar errores de la solicitud
        setAlerta({ type: 'error', msg: 'Hubo un error al consultar.' });
      }
    }
  };

  const actualizarGraficos = () => {
    // Destruye los gráficos anteriores para evitar duplicados
    chartInstances.current.forEach(({ chart }) => {
      chart.destroy();
    });

    // Borra las referencias anteriores
    chartInstances.current = [];

    // Recorre los datos de conteoPorTema y crea un gráfico circular para cada tema
    Object.entries(conteoPorTema).forEach(([tema, conteo], index) => {
      const canvas = document.getElementById(`${tema}-chart`) as HTMLCanvasElement;
      if (canvas) {
        const ctx = canvas.getContext('2d');
        if (ctx) {
          const chart = new Chart(ctx, {
            type: 'doughnut',
            data: {
              labels: ['Correctas', 'Incorrectas'],
              datasets: [{
                data: [conteo.correctas, conteo.incorrectas],
                backgroundColor: ['#4caf50', '#f44336'],
              }],
            },
          });
          chartInstances.current.push({ chart, canvas });

          // Establece las posiciones de los gráficos en función del índice de fila y columna
          canvas.style.marginBottom = '20px';
          canvas.style.width = '100%';
          canvas.style.height = 'auto';
        }
      }
    });
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
          <h3>Tema más repetido: {temaMasRepetido}</h3>
          <div className="graficos-container">
            {Object.entries(conteoPorTema).map(([tema]) => (
              <div className="tema-container" key={tema}>
                <h4>{tema}</h4>
                <canvas id={`${tema}-chart`} width="15000" height="200"></canvas>
              </div>
            ))}
          </div>
          <div className="mejores-tiempos-container">
            <h3>Mejores tiempos</h3>
            <p className='temaRepitido'>Niveles Jugados: <span>{total} de 18</span></p>
            {Object.entries(mejoresTiempos).map(([nivel, datos]) => (
              <div className="mejor-tiempo-tarjeta" key={nivel}>
                <h4>Nivel {+nivel + 1}</h4>
                <p>Mejor tiempo: {datos.bestTime.timeLevel} segundos</p>
                <p>Usuario: {datos.bestTime.User.name}</p>
              </div>
            ))}
          </div>
          
        </div>
      )}
    </>
  );
};

export default Estadisticas;
