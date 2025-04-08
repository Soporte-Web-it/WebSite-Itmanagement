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

      <div v-if="selected !== null" class="content">
        <div v-show="selected === 0" class="description-container">
          <img
            src="../assets/images/ilustrations/undraw_server-cluster.svg"
            alt="Hardware"
            class="illustration"
          />
          <p class="description-text">
            Suministro, configuración y mantenimiento de infraestructura tecnológica de alto
            rendimiento. Ofrecemos estaciones de trabajo, redes estructuradas y dispositivos
            periféricos con soporte técnico especializado para garantizar continuidad operativa y
            seguridad.
          </p>
        </div>

        <div v-show="selected === 1" class="description-container">
          <img
            src="../assets/images/ilustrations/undraw_team.svg"
            alt="Software"
            class="illustration"
          />
          <p class="description-text">
            Desarrollo e implementación de soluciones a medida, incluyendo software empresarial,
            integración de sistemas, automatización de procesos y ciberseguridad. Optimizamos la
            operatividad con aplicaciones escalables y adaptadas a las necesidades específicas de tu
            negocio.
          </p>
        </div>

        <div v-show="selected === 2" class="description-container">
          <img
            src="../assets/images/ilustrations/undraw_workspace.svg"
            alt="Administrativo"
            class="illustration"
          />
          <p class="description-text">
            Digitalización y optimización de procesos administrativos mediante ERP y herramientas de
            gestión documental. Implementamos soluciones para mejorar la eficiencia operativa,
            reduciendo costos y maximizando el control sobre recursos y flujos de trabajo.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: 1,
      categories: ['Hardware', 'Software', 'Administrativo'],
    }
  },
}
</script>

<style scoped>
.wrapper {
  width: 100%;
  min-height: auto;
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.container {
  max-width: 900px;
  text-align: center;
  font-family: var(--font-family1);
}

.title {
  font-size: 2.5rem;
  font-weight: 500;
  font-family: var(--font-family2);
  color: var(--color2);
  margin-bottom: 20px;
}

.buttons {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  margin-bottom: 20px;
}

button {
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  background-color: #ddd;
  border-radius: 5px;
  transition: 0.3s;
  font-family: var(--font-family1);
}

button.active {
  background-color: var(--color2);
  color: white;
}

button:hover {
  background-color: #e5200c;
  color: white;
}

.content {
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Ajuste para centrar imágenes en pantallas grandes */
.description-container {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  text-align: left;
  flex-wrap: wrap;
}

/* Tamaño uniforme para todas las ilustraciones */
.illustration {
  width: 100%;
  max-width: 300px;
  height: auto;
  border-radius: 10px;
}

/* Ajuste de texto */
.description-text {
  text-align: justify;
  font-family: var(--font-family1);
  font-size: 16px;
  max-width: 500px;
}

/* Responsive para pantallas pequeñas */
@media (max-width: 768px) {
  .description-container {
    flex-direction: column;
    text-align: center;
  }

  .illustration {
    max-width: 250px;
  }

  .description-text {
    max-width: 100%;
  }
}
</style>
