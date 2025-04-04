<template>
  <div class="video-background-component">
    <!-- Contenedor para video con overlay -->
    <div class="video-container">

      <div class="overlay"></div>

      <video autoplay loop muted>
        <source src="../assets/videos/bgOne.mp4" type="video/mp4" />
      </video>

    </div>

    <!-- Contenedor principal para centrar el contenido -->
    <div class="content-container" data-aos="fade-up">
      <!-- Contenedor para imagen -->
      <div class="image-container">
        <img class="ilustration" src="../assets/images/ilustrations/undraw_real-time-analytics_xu2g.svg" alt="Imagen" />
      </div>

      <!-- Contenedor para el texto y título -->
      <div class="text-container">
        <h1 class="title-videoComponent">IT MANAGEMENT ZOMAC S.A.S</h1>
        <p>
          Empresa que desarrolla actividades conjuntas que permitan
          al grupo empresarial M.O.M garantizar la continuidad de su desarrollo en los cuales
          intervienen los procesos gerenciales, contables, financieros, jurídicos, ingeniería y
          talento, sirviendo como apoyo en las operaciones administrativas y asistenciales.

          <br>

          De igual forma IT MANAGMENT ZOMAC S.A.S busca desarrollar y/o actualizar los sistemas y procesos que
          soportan las áreas asistenciales y administrativas en las nuevas unidades de negocios y
          centros de operación.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VideoBackgroundComponent',
}
</script>

<style scoped>
/* Contenedor principal */
.video-background-component {
  position: relative;
  width: 100%;
  height: 100vh; /* Altura completa de la ventana */
}

/* Contenedor para el video */
.video-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: -1; /* Asegurarse de que el video esté detrás del contenido */
}

/* Overlay oscuro */
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(84, 83, 83, 0.8); /* Color negro con transparencia */
  z-index: 1; /* Overlay sobre el video pero debajo del contenido */
}

/* Estilo para el video */
.video-container video {
  width: 100%;
  height: 100%;
  object-fit: cover; /* Para que el video cubra todo el contenedor */
}

/* Contenedor para centrar todo el contenido (imagen y texto) */
.content-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%; /* Para que ocupe toda la altura del video */
  position: relative;
  z-index: 2; /* Asegura que el contenido esté encima del video */
  flex-direction: row; /* En pantallas grandes, la imagen y el texto estarán en fila */
}

/* Estilo para la imagen */
.image-container {
  margin-right: 100px; /* Separación entre la imagen y el texto */
}

.ilustration {
  width: 100%; /* La imagen ocupa todo el contenedor */
  max-width: 400px; /* Limita el tamaño máximo de la imagen */
  height: auto; /* Mantiene la relación de aspecto */
}

/* Estilo para el texto */
.text-container {
  color: white;
  width: 40%;
  text-align: justify; /* Justificar el texto */
  font-family: var(--font-family1);
}

/* Título */
.text-container h1 {
  font-size: 2.5rem;
  margin-bottom: 15px;
  color: var(--color2);
}

/* Descripción */
.text-container p {
  font-size: 1.2rem;
}

/* Media Query para pantallas más pequeñas (móviles) */
@media (max-width: 768px) {
  /* En pantallas pequeñas, la disposición cambia a columna (imagen y texto encima) */
  .content-container {
    flex-direction: column;
    text-align: center; /* Centra el texto para móviles */
    padding: 20px; /* Agrega un poco de espacio alrededor */
  }

  /* La imagen se ajusta al 80% de la pantalla */
  .image-container {
    margin-right: 0;
    margin-bottom: 20px;
    width: 60%;
  }

  /* Texto ajustado a un 100% de la pantalla */
  .text-container {
    width: 100%;
  }

  .text-container h1 {
    font-size: 1.8rem;
  }

  .text-container p {
    font-size: 1rem;
  }
}

/* Media Query para pantallas aún más pequeñas (por ejemplo, móviles muy pequeños) */
@media (max-width: 480px) {
  .text-container h1 {
    font-size: 1.5rem;
  }

  .text-container p {
    font-size: 0.9rem;
  }
}
</style>
