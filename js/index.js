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

function obtencionDatos() {
  const url = "https://balitas123.pythonanywhere.com/categoriaMasJugada";
  const url2 = "https://balitas123.pythonanywhere.com/mejoresTiempos";

  const consultarAPI2 = async () => {
    const inicio = performance.now();

    const respuesta = await fetch(url);
    const resultado = await respuesta.json();
    var cont = 1;
    resultado.forEach((array) => {
      array.forEach((elemento) => {
        console.log(elemento);
        if (cont == 1) {
          categoriaMasJugada(elemento);
          cont++;
        } else {
          categoriaMenosJugada(elemento);
        }
      });
    });

    const respuesta2 = await fetch(url2);
    const resultado2 = await respuesta2.json();
    resultado2.forEach((array) => {
      rankingGlobal(array);
      console.log(array);
    });

    const fin = performance.now();

    console.log(`Ejecución SEGUNDO Async: ${fin - inicio} ms`);
  };

  function categoriaMasJugada(elemento) {
    const parrafo = document.querySelector("#categoriaMasJugada");
    parrafo.innerHTML = "Categoria Mas Jugada:" + elemento;
  }
  function categoriaMenosJugada(elemento) {
    const parrafo = document.querySelector("#categoriaMenosJugada");
    parrafo.innerHTML = "Categoria Menos Jugada:" + elemento;
  }

  function rankingGlobal(arrayNiveles) {
    const arituculo = document.querySelector("#contenedorNiveles");
    arituculo.innerHTML += `
    <div class="nivel">
    <p class="numero">Nivel ${arrayNiveles[0] + 1}</p>
    <p class="tiempo">Mejor Tiempo ${arrayNiveles[1]}</p>
    <p class="descripcion">IdUsuario:${arrayNiveles[3]} <br> Nombre:${
      arrayNiveles[2]
    }</p>
</div>
    
    
    `;
  }

  consultarAPI2();
}

function traerDatos() {
  const url = "https://balitas123.pythonanywhere.com/obtenerNiveles";
  const url_1 = "https://balitas123.pythonanywhere.com/obtenerCategorias";
  const idJugador = document.getElementById("idJugador");
  const obtenerDatos = document.getElementById("btnObtenerDatos");
  obtenerDatos.addEventListener("click", function () {
   
    if (idJugador.value == "") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Debes llenar tus datos!",
      });
      return;
    }
    const contenedor = document.querySelector("#contenedorTrabajos");
    contenedor.innerHTML = "";
    enviarIdJugador(idJugador.value);
    enviarIdJugador_2(idJugador.value);
  });

  const enviarIdJugador = async (idJugador) => {
    const data = { idJugador: idJugador };

    try {
      const respuesta = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!respuesta.ok) {
        throw new Error("Network response was not ok");
      }

      const resultado = await respuesta.json();
      resultado.forEach((array) => {
        creadorContenedores(array);
        
      });

      
    } catch (error) {
      console.error("Error:", error);
    }
  };



  function creadorContenedores(arrayNiveles) {
    const contenedor = document.querySelector("#contenedorTrabajos");
    contenedor.innerHTML += `
    <div class="trabajo">
    <div class="thumb">
        <img src="img/niveles/${arrayNiveles[0] + 1}.png" alt="Lorem ipsum">
    </div>
    <div class="descripcion">
        <p class="nombre">Nivel ${arrayNiveles[0] + 1}</p>
        <p class="Categoria">Mejor Tiempo ${arrayNiveles[1]} </p>
    </div>
</div>
    `;
  }



const enviarIdJugador_2 = async (idJugador) => {
    const data = { idJugador: idJugador };

    try {
      const respuesta = await fetch(url_1, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!respuesta.ok) {
        throw new Error("Network response was not ok");
      }

      const resultado = await respuesta.json();
      console.log(resultado);
      limpiarContenedorCategorias()
      resultado.forEach((array) => {
        
        creadorCategorias(array);
      });
      
     
    } catch (error) {
      
    }
};



function creadorCategorias(arrayNiveles) {
  const contenedorCategorias = document.querySelector('#categoriasRespuestas');

  const divContenedor = document.createElement('div');
  divContenedor.classList.add('contenedor');

  const h2Titulo = document.createElement('h2');
  h2Titulo.classList.add('titulo');
  h2Titulo.textContent = arrayNiveles[0];

  const divCategorias = document.createElement('div');
  divCategorias.classList.add('categorias');

  const pRespuestas = document.createElement('p');
  pRespuestas.textContent = 'Respuestas Preguntas';

  const divContenedorRespuestas = document.createElement('div');
  divContenedorRespuestas.classList.add('contenedor-respuestas');

  const pCorrectas = document.createElement('p');
  pCorrectas.classList.add('correctas');
  pCorrectas.textContent = `Correctas ${arrayNiveles[1]}`;

  const pIncorrectas = document.createElement('p');
  pIncorrectas.classList.add('incorrectas');
  pIncorrectas.textContent = `Incorrectas ${arrayNiveles[2]}`;

  divContenedorRespuestas.appendChild(pCorrectas);
  divContenedorRespuestas.appendChild(pIncorrectas);

  const divBarContainer = document.createElement('div');
  divBarContainer.classList.add('bar-container');

  const divBarFill = document.createElement('div');
  divBarFill.classList.add('bar-fill');
  divBarFill.id = arrayNiveles[0];

  var porcentaje;
  var correctas = parseInt(arrayNiveles[1]);
  var totalIntentos = parseInt(arrayNiveles[3]);
  if (totalIntentos == 0) {
    divBarFill.style.width = '50%';
  } else {
    porcentaje = (correctas * 100) / totalIntentos;
    divBarFill.style.width = `${porcentaje}%`;
  }

  divBarContainer.appendChild(divBarFill);

  divCategorias.appendChild(pRespuestas);
  divCategorias.appendChild(divContenedorRespuestas);
  divCategorias.appendChild(divBarContainer);

  divContenedor.appendChild(h2Titulo);
  divContenedor.appendChild(divCategorias);

  contenedorCategorias.appendChild(divContenedor);
}
function limpiarContenedorCategorias() {
  const contenedorCategorias = document.querySelector('#categoriasRespuestas');
  contenedorCategorias.innerHTML = '';
}

}
document.addEventListener("DOMContentLoaded", iniciarAnimacion);
document.addEventListener("DOMContentLoaded", obtencionDatos);
document.addEventListener("DOMContentLoaded", traerDatos);
