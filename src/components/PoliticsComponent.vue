<template>
  <section class="quality-policies">
    <div class="container">
      <div class="text-content" data-aos="fade-right">
        <h2 class="section-title" data-aos="fade-down">Políticas de Calidad</h2>
        <ul class="policies-list">
          <li
            v-for="(policy, index) in policies"
            :key="index"
            data-aos="fade-up"
            :data-aos-delay="index * 100"
          >
            <i class="fa-solid fa-square-check check-icon"></i>
            <p v-html="policy"></p>
          </li>
        </ul>
      </div>
      <div class="image-content" data-aos="fade-left">
        <img src="../assets/images/ilustrations/undraw_voting_3ygx.svg" alt="Políticas de calidad" />
      </div>
    </div>
  </section>
</template>

<script setup>
const policies = [
  "Proveer servicios informáticos y tecnológicos basados en la utilización de recursos humanos calificados, que satisfagan plenamente las necesidades y expectativas de nuestros clientes.",
  "Administrar la empresa mediante un sistema de gestión basado en procesos, de esta manera alcanzar la eficiencia y eficacia de la organización en el cumplimiento de los objetivos establecidos.",
  "Creatividad e innovación como parte de nuestro reto diario para el mejoramiento continuo de <strong>IT MANAGEMENT ZOMAC S.A.S.</strong>.",
  "Responsabilidad para cumplir con excelencia los trabajos encomendados, velando por la efectividad del personal y de equipo en el logro final de los resultados.",
  "Entregamos lo acordado en el tiempo estipulado, excediendo las expectativas.",
  "Anticipamos las necesidades y deseos de nuestros clientes, para crear formas nuevas y rentables de satisfacción, cuidando los detalles."
];
</script>

<style scoped>
.quality-policies {
  padding: 4rem 2rem;
  min-height: 70vh;
  /* background-color: #ffffff; */
  overflow-x: hidden;
}

.container {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3rem;
  flex-wrap: wrap;
  max-width: 1200px;
  margin: 0 auto;
}

.text-content {
  flex: 1 1 500px;
}

.section-title {
  font-size: 3.5rem;
  font-weight: 600;
  margin-bottom: 2rem;
  text-align: center;
  position: relative;
  font-family: var(--font-family2);
  color: var(--color2);
  /* text-shadow: 0 0 10px rgba(229, 50, 44, 0.6); */
}

/* Glow effect under title */
.section-title::after {
  content: "";
  width: 60px;
  height: 6px;
  background: linear-gradient(90deg, #E5322C, #ab2824);
  display: block;
  margin: 0.8rem auto 0;
  border-radius: 3px;
  /* box-shadow: 0 0 10px #E5322C; */
}

.policies-list {
  list-style: none;
  padding: 0;
}

.policies-list li {
  display: flex;
  align-items: start;
  gap: 1rem;
  margin-bottom: 1.5rem;
  font-size: 1rem;
  /* color: #444; */
  font-family: var(--font-family1);
}

.check-icon {
  color: #E5322C;
  font-size: 1.4rem;
  margin-top: 4px;
}

.image-content {
  flex: 1 1 400px;
  display: flex;
  justify-content: center;
}

.image-content img {
  max-width: 100%;
  height: auto;
}

/* Responsive */
@media (max-width: 1024px) {
  .section-title {
    font-size: 2rem;
  }
}

@media (max-width: 768px) {
  .container {
    flex-direction: column;
    text-align: center;
  }
  .policies-list li {
    justify-content: center;
    text-align: left;
  }
}
</style>
