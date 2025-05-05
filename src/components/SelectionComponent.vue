<template>
  <div class="wrapper">
    <div class="container">
      <h1 class="title">Conoce Nuestros Servicios</h1>

      <div class="buttons">
        <button
          v-for="(item, index) in categories"
          :key="index"
          @click="selected = index"
          :class="{ active: selected === index }"
        >
          {{ item }}
        </button>
      </div>

      <transition name="fade" mode="out-in">
        <div v-if="selected !== null" key="selected-content" class="content">
          <div v-show="selected === 0" class="description">
            <img src="../assets/images/ilustrations/undraw_server-cluster.svg" alt="Hardware" />
            <div class="text">
              <h2>Hardware de Alto Rendimiento</h2>
              <p>
                Estaciones de trabajo, redes estructuradas y dispositivos periféricos. Suministro y mantenimiento con soporte especializado para garantizar continuidad y seguridad.
              </p>
            </div>
          </div>

          <div v-show="selected === 1" class="description">
            <img src="../assets/images/ilustrations/undraw_team.svg" alt="Software" />
            <div class="text">
              <h2>Software Empresarial a Medida</h2>
              <p>
                Soluciones escalables: desarrollo, integración de sistemas, automatización y ciberseguridad. Aplicaciones diseñadas para optimizar la operatividad de tu negocio.
              </p>
            </div>
          </div>

          <div v-show="selected === 2" class="description">
            <img src="../assets/images/ilustrations/undraw_workspace.svg" alt="Administrativo" />
            <div class="text">
              <h2>Gestión Administrativa Eficiente</h2>
              <p>
                ERP, digitalización de procesos y control documental. Soluciones que mejoran la eficiencia operativa, reducen costos y maximizan la productividad.
              </p>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: 1,
      categories: ['Hardware', 'Software', 'Administrativo'],
    };
  },
};
</script>

<style scoped>
.wrapper {
  width: 100%;
  min-height: 60vh;
  padding: 60px 20px;
  /* background: #f9f9f9; */
  display: flex;
  justify-content: center;
  align-items: center;
}

.container {
  width: 100%;
  max-width: 1200px;
  text-align: center;
  padding: 40px;
}

.title {
  font-weight: 600;
  margin-bottom: 40px;
  /* line-height: 1.2; */

  font-size: 3.5rem;
  color: var(--color2);
  font-family: var(--font-family2);
  text-shadow: 0 0 10px rgba(229, 50, 44, 0.6);
}

.buttons {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 16px;
  margin-bottom: 40px;
}

button {
  background: transparent;
  border: 2px solid #ccc;
  padding: 12px 28px;
  font-size: 1rem;
  border-radius: 999px;
  transition: all 0.3s ease;
  cursor: pointer;
  font-weight: 500;
  font-family: var(--font-family1);
}

button.active {
  background: #E5322C;
  color: #fff;
  border-color: #E5322C;
  font-family: var(--font-family1);
}

button:hover {
  border-color: #E5322C;
  font-family: var(--font-family1);
}

.content {
  background: white;
  border-radius: 20px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all 0.5s ease;
  font-family: var(--font-family1);
}

.description {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 40px;
  text-align: left;
}

.description img {
  width: 100%;
  max-width: 380px;
  border-radius: 20px;
  object-fit: cover;
  transition: transform 0.5s;
}

.description img:hover {
  transform: scale(1.05);
}

.text {
  max-width: 500px;
}

.text h2 {
  font-size: 2rem;
  font-weight: 700;
  color: #222;
  margin-bottom: 20px;
}

.text p {
  font-size: 1.1rem;
  color: #666;
  line-height: 1.6;
}

/* Fade Transition */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.4s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

/* Responsive */
@media (max-width: 768px) {
  .description {
    flex-direction: column;
    text-align: center;
  }

  .text {
    max-width: 100%;
  }

  .title {
    font-size: 2rem;
  }
}
</style>
