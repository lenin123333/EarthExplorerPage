import '../Estadisticas.css'; // Asegúrate de tener un archivo CSS para los estilos del Footer

export default function Estadisticas() {
  return (
    <>
      <h2 className="main-title">Estadísticas</h2>
      <div className="container">
        <h2 className="sub-title">Consulta tu progreso</h2>
        <div className="input-container">
          <input type="text" placeholder="Ingresa ID" className="input-field" />
          <button className="consult-button">Consultar</button>
        </div>
      </div>
    </>
  );
}
