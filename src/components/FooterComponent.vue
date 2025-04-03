<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-section logo-section">
        <div class="containLogo">
          <router-link to="/" class="refLogo">
            <img class="imageLogo" src="../assets/images/logos/IT.png" alt="Company Logo" />
          </router-link>
        </div>
        <p class="description">
          A descriptive paragraph that tells clients how good you are and proves that you are the
          best choice.
        </p>
      </div>
      <div class="footer-section">
        <h3>Our Company</h3>
        <ul>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Portfolio</a></li>
          <li><a href="#">Testimonials</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>
      <div class="footer-section">
        <h3>Get In Touch</h3>
        <ul>
          <li><a href="#">LinkedIn</a></li>
          <li><a href="#">Facebook</a></li>
          <li><a href="#">Yelp</a></li>
          <li><a href="#">Houzz</a></li>
        </ul>
      </div>
      <div class="footer-section">
        <h3>Contact Info</h3>
        <p>Calle 3a N° 9 - 01 San Pedro. Hobo, Huila (Colombia)</p>
        <p>316 742 0491</p>
        <p class="email"><a href="mailto:contact@example.com">recepcion@itmsas.net</a></p>
      </div>
    </div>
    <div class="footer-bottom">
      <p>Copyright © 2025 IT MANAGEMENT ZOMAC S.A.S</p>
      <p>Powered by Sebastían Gomez</p>
    </div>
  </footer>
</template>

<style scoped>
/* Estilos generales del footer */
.footer {
  background-color: var(--color3);
  color: #fff;
  padding: 40px 20px;
  text-align: center;
}

/* Contenedor principal */
.container {
  display: flex;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  flex-wrap: wrap;
}

/* Secciones individuales */
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

/* Descripción */
.description {
  font-size: 14px;
  margin-top: 10px;
}

/* Estilos del email */
.email a {
  display: flex;
  text-decoration: none;
  color: var(--color1);
  justify-content: center;
}

/* Títulos de secciones */
h3 {
  font-size: 16px;
  margin-bottom: 10px;
}

/* Listas */
ul {
  list-style: none;
  padding: 0;
}

ul li {
  margin-bottom: 8px;
}

ul li a {
  color: #fff;
  text-decoration: none;
  transition: 0.3s;
}

ul li a:hover {
  text-decoration: underline;
}

/* Parte inferior del footer */
.footer-bottom {
  text-align: center;
  margin-top: 20px;
  font-size: 14px;
  border-top: 1px solid #444;
  padding-top: 10px;
  font-family: var(--font-family1);
}

/* 🔹 MEDIA QUERIES para Responsive Design */

/* Tablets (pantallas menores a 1024px) */
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

/* Móviles (pantallas menores a 768px) */
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
