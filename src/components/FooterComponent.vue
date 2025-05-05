<template>
  <!-- Pie de página principal -->
  <footer class="footer">
    <div class="container">

      <!-- Sección del logo y descripción -->
      <div class="footer-section logo-section">
        <div class="containLogo">
          <!-- Enlace al inicio con el logo -->
          <router-link to="/" class="refLogo">
            <img class="imageLogo" src="../assets/images/logos/IT BLANCO.png" alt="Company Logo" />
          </router-link>
        </div>
        <p class="description">
          Compañia prestadora de servicios administrativos e integrales
        </p>
      </div>

      <!-- Navegación interna -->
      <div class="footer-section">
        <h3>Nuestra empresa</h3>
        <ul>
          <li><router-link to="/" class="itemNav"><span>Inicio</span></router-link></li>
          <li><router-link to="/nosotros" class="itemNav"><span>Nosotros</span></router-link></li>
          <li><router-link to="/contacto" class="itemNav"><span>Contacto</span></router-link></li>
          <li><router-link to="/servicios" class="itemNav"><span>Servicios</span></router-link></li>
        </ul>
      </div>

      <!--  Sección de enlaces sociales (comentada, puede activarse si se necesita) -->
      <!--
      <div class="footer-section">
        <h3>¡Conoce más!</h3>
        <ul>
          <li><a href="#">LinkedIn</a></li>
          <li><a href="#">Facebook</a></li>
          <li><a href="#">Yelp</a></li>
          <li><a href="#">Houzz</a></li>
        </ul>
      </div>
      -->

      <!-- Información de contacto -->
      <div class="footer-section">
        <h3>Información de contacto</h3>
        <p class="itfooter">Calle 3a N° 9 - 01 San Pedro. Hobo, Huila (Colombia)</p>
        <p class="itfooter">316 742 0491</p>
        <p class="email"><a href="mailto:contact@example.com">recepcion@itmsas.net</a></p>
      </div>
    </div>

    <!-- Parte inferior del footer con derechos de autor -->
    <div class="footer-bottom">
      <p>Copyright © 2025 IT MANAGEMENT ZOMAC S.A.S</p>
      <!-- <p>Powered by Sebastían Gómez</p> -->
    </div>
  </footer>
</template>

<style scoped>
/* Estilos del footer */
.footer {
  background-color: var(--color3);
  border-radius: 2rem 2rem 0 0;
  color: #fff;
  padding: 40px 20px;
  text-align: center;
}

/* Contenedor general del contenido */
.container {
  display: flex;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  flex-wrap: wrap;
}

/* Sección del footer individual (logo, links, info) */
.footer-section {
  width: 23%;
  font-family: var(--font-family1);
}

/* Contenedor del logo */
.containLogo {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;
}

/* Imagen del logo */
.imageLogo {
  max-width: 150px;
  height: auto;
}

/* Descripción corta */
.description {
  font-size: 14px;
  margin-top: 10px;
}

/* Estilo para el email */
.email a {
  display: flex;
  text-decoration: none;
  color: var(--color1);
  justify-content: center;
  padding-top: 15px;
}

.itfooter {
  margin-top: 15px;
}

/* Títulos de cada bloque */
h3 {
  font-size: 16px;
  margin-bottom: 10px;
}

/* Listado de navegación */
ul {
  list-style: none;
  padding: 0;
  text-decoration: none;
}

ul li {
  margin-bottom: 8px;
  text-decoration: none;
}

ul li a {
  color: #fff;
  text-decoration: none;
  transition: 0.3s;
}

ul li a:hover {
  color: var(--color2); /* Color de acento al pasar el mouse */
}

/* Pie inferior del footer */
.footer-bottom {
  text-align: center;
  margin-top: 20px;
  font-size: 14px;
  border-top: 1px solid #444;
  padding-top: 10px;
  font-family: var(--font-family1);
}

/* Media Queries para dispositivos móviles y tablets */

/* Tablets */
@media (max-width: 1024px) {
  .container {
    flex-wrap: wrap;
    justify-content: center;
  }

  .footer-section {
    width: 45%;
    margin-bottom: 20px;
    text-align: center;
  }

  .email a {
    justify-content: center;
  }
}

/* Móviles */
@media (max-width: 768px) {
  .container {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .footer-section {
    width: 100%;
  }

  .containLogo {
    justify-content: center;
  }

  .imageLogo {
    max-width: 120px;
  }
}
</style>
