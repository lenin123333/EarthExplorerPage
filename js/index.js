//Animacion Jugador
function iniciarAnimacion() {
  // Lista de URLs de las imágenes a mostrar en la animación
  const imagenes = [
    "../img/Animaciones/idle_1.png",
    "../img/Animaciones/idle_2.png",
    "../img/Animaciones/idle_3.png",
    "../img/Animaciones/idle_4.png",
    "../img/Animaciones/idle_5.png",
    "../img/Animaciones/idle_6.png",
    "../img/Animaciones/idle_7.png",

    // Añade aquí todas las URLs de tus imágenes
  ];

  const intervalo = 120; // Intervalo en milisegundos entre cada cambio de imagen
  let indice = 0;

  function cambiarImagen() {
    const imagenAnimada = document.querySelector(".imagen-animada");
    imagenAnimada.src = imagenes[indice];

    // Incrementa el índice para cambiar a la siguiente imagen
    indice = (indice + 1) % imagenes.length;
  }

  // Inicia la animación
  setInterval(cambiarImagen, intervalo);
}

document.addEventListener("DOMContentLoaded", iniciarAnimacion);