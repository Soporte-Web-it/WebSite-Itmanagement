<template>
  <section class="services-cards">
    <h2 class="title-section-card">Nuestro Compromiso</h2>

    <div class="container">
      <div class="card" data-aos="fade-right">
        <div class="card-inner">
          <div class="card-front">
            <img src="../assets/images/ilustrations/undraw_working-together_r43a.svg" alt="Ilustración 1" />
            <h3 class="title-card">Diseño y desarrollo de Software</h3>
          </div>

          <div class="card-back">
            <p class="information-card">
              Servicios de desarrollo web de plataformas online para la gestión de procesos, productos
              y requerimientos a la medida. Utilizando altos estándares de programación.
            </p>
          </div>
        </div>
      </div>

      <div class="card" data-aos="fade-up">
        <div class="card-inner">
          <div class="card-front">
            <img src="../assets/images/ilustrations/undraw_articles.svg" alt="Ilustración 2" />
            <h3 class="title-card">Soporte</h3>
          </div>

          <div class="card-back">
            <p class="information-card">
              Contamos con un área de atención y soporte al cliente, dedicada
              a atender las solicitudes y/o requerimientos de carácter técnico, según el esquema
              definido por la compañía.
            </p>
          </div>
        </div>
      </div>

      <div class="card" data-aos="fade-left">
        <div class="card-inner">
          <div class="card-front">
            <img src="../assets/images/ilustrations/undraw_team.svg" alt="Ilustración 3" />
            <h3 class="title-card">Innovación</h3>
          </div>

          <div class="card-back">
            <p class="information-card">
              Entendemos las necesidades de las empresas y creamos soluciones
              a sus problemas de forma creativa y innovadora.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ServicesCards'
}
</script>

<style scoped>
.services-cards {
  display: flex;
  width: 100%;
  height: auto;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: var(--color-one);
  padding: 20px;
}

.title-section-card {
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  margin-bottom: 2%;
  font-size: 2.5rem;
  color: var(--color2);
  font-weight: 500;
  font-family: var(--font-family2);
}

.information-card {
  display: flex;
  font-size: 21px;
  font-family: var(--font-family-one);
  color: var(--color-one);
}

.container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}

.card {
  width: 300px;
  height: 400px;
  perspective: 1000px;
  margin: 10px;
  transition: all 0.3s ease;
}

.card-inner {
  width: 100%;
  height: 100%;
  position: relative;
  transition: transform 0.6s;
  transform-style: preserve-3d;
}

.card:hover .card-inner {
  transform: rotateY(180deg);
}

.title-card {
  display: flex;
  font-size: 16px;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-weight: 200;
  font-family: var(--font-family-two);
}

.card-front, .card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.card-front {
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
}

.card-front img {
  width: 70%;
  max-width: 150px;
  border-radius: 10px;
}

.card-front h3 {
  margin-top: 10px;
  font-size: 1.2em;
  color: #333;
  font-family: var(--font-family-one);
  text-align: center;
  font-size: 16px;
  font-weight: 400;
}

.card-back {
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  text-align: center;
  transform: rotateY(180deg);
  border-radius: 15px;
  box-shadow: 0 8px 32px 0 rgb(255, 255, 255, 0.2);
  backdrop-filter: blur(14px);
}

.card-back p {
  font-size: 1em;
}

@media (max-width: 768px) {
  .services-cards {
    height: auto;
    padding-bottom: 40px;
  }

  .container {
    flex-direction: column;
    align-items: center;
    gap: 15px;
  }

  .card {
    width: 90%;
    max-width: 350px;
    height: auto;
  }

  .card-front img {
    width: 60%;
    max-width: 120px;
  }

  .title-card {
    font-size: 14px;
    text-align: center;
  }
}

@media (max-width: 480px) {
  .title-section-card {
    font-size: 16px;
    text-align: center;
  }

  .container {
    gap: 10px;
  }

  .card {
    width: 100%;
    max-width: 320px;
  }

  .card-front img {
    max-width: 100px;
  }
}
</style>
