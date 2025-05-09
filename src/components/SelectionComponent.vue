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
            <img
              src="../assets/images/ilustrations/maintenance_rjtm.svg"
              alt="Infraestructura TIC"
            />
            <div class="text">
              <h2>Infraestructura TIC de Alto Rendimiento</h2>
              <ul class="service-list">
                <li><i class="fas fa-network-wired"></i> Diseño y despliegue de Data Centers en modalidad onpremise, híbrido y nube, Networking</li>
                <li><i class="fas fa-desktop"></i> Estaciones de trabajo, OutSourcing de soporte técnico especializado</li>
                <li><i class="fas fa-shield-alt"></i> Ciberseguridad</li>
              </ul>
            </div>
          </div>

          <div v-show="selected === 1" class="description">
            <img src="../assets/images/ilustrations/undraw_pair-programming.svg" alt="Software" />
            <div class="text">
              <h2>Software Empresarial a la Medida</h2>
              <ul class="service-list">
                <li><i class="fas fa-code"></i> Desarrollo, integración de sistemas, automatización</li>
                <li><i class="fas fa-cogs"></i> Aplicaciones diseñadas para optimizar la operatividad de tu negocio</li>
              </ul>
            </div>
          </div>

          <div v-show="selected === 2" class="description">
            <img src="../assets/images/ilustrations/undraw_workspace.svg" alt="Administrativo" />
            <div class="text">
              <h2>Gestión Administrativa Eficiente</h2>
              <ul class="service-list">
                <li><i class="fas fa-file-alt"></i> ERP, digitalización de procesos y control documental</li>
                <li><i class="fas fa-people-carry"></i> Outsourcing de gestión de procesos administrativos transversales al objetivo misional</li>
                <li><i class="fas fa-chart-line"></i> Soluciones que mejoran la eficiencia operativa, reducen costos y maximizan la productividad</li>
              </ul>
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
      categories: ['Infraestructura TIC', 'Software', 'Administrativo'],
    }
  },
}
</script>

<style scoped>
.wrapper {
  width: 100%;
  min-height: 60vh;
  padding: 60px 20px;
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
  font-size: 3.5rem;
  color: var(--color2);
  font-family: var(--font-family2);
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
  background: #e5322c;
  color: #fff;
  border-color: #e5322c;
}

button:hover {
  border-color: #e5322c;
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

.service-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.service-list li {
  font-size: 1.1rem;
  color: #666;
  margin-bottom: 16px;
  position: relative;
  padding-left: 28px;
}

.service-list li i {
  position: absolute;
  left: 0;
  top: 2px;
  font-size: 1rem;
  color: #e5322c;
}

/* Fade Transition */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s ease;
}
.fade-enter-from,
.fade-leave-to {
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

  .service-list li {
    text-align: left;
    padding-left: 32px;
  }
}
</style>
