<template>
    <div class="parent">

        <div class="div2" data-aos="fade-right">

            <h2 class="title">Nuestra Calidad</h2>

            <p class="description">
                Nos esforzamos por ofrecer la mejor calidad en nuestros servicios. Nuestro equipo trabaja
                constantemente para mejorar el soporte, garantizar la excelencia y mantener el compromiso
                con nuestros clientes.
            </p>

            <div class="progress-wrapper">

                <div v-for="(bar, index) in progressBars" :key="index" class="progress-container">
                    <h2 class="progress-title">{{ bar.title }}</h2>

                    <div class="progress-circle">

                            <svg viewBox="0 0 100 100">
                                <circle cx="50" cy="50" r="45" stroke="#ddd" stroke-width="10" fill="none"></circle>
                                <circle
                                :ref="(el) => (bar.ref = el)"
                                cx="50"
                                cy="50"
                                r="45"
                                stroke-width="10"
                                fill="none"
                                stroke-dasharray="283"
                                stroke-dashoffset="283"
                                ></circle>
                                <text
                                    x="50%"
                                    y="50%"
                                    alignment-baseline="middle"
                                    text-anchor="middle"
                                    class="progress-text"
                                >
                                    {{ bar.percentage }}%
                                </text>
                            </svg>

                    </div>

                </div>

            </div>

        </div>

        <div class="div1" data-aos="fade-left">
            <img
                src="https://placehold.co/400x300?text=Illustration"
                alt="Illustration"
                class="illustration"
            />
        </div>

    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const progressBars = ref([
  { title: 'Soporte', percentage: 0, ref: null },
  { title: 'Calidad', percentage: 0, ref: null },
  { title: 'Compromiso', percentage: 0, ref: null },
])

const animateProgress = (bar) => {
  let progress = 0
  const target = 100
  const duration = 2000 // 2 segundos
  const stepTime = 20
  const step = target / (duration / stepTime)

  const update = () => {
    if (progress < target) {
      progress += step
      bar.percentage = Math.round(progress)
      const offset = 283 - (283 * bar.percentage) / 100
      if (bar.ref) bar.ref.style.strokeDashoffset = offset
      requestAnimationFrame(update)
    }
  }
  update()
}

onMounted(() => {
  progressBars.value.forEach((bar) => {
    animateProgress(bar)
  })
})
</script>

<style scoped>
.parent {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10%; /* Espacio entre los contenedores */
    padding: 30px;
    flex-wrap: wrap;
    /* background-color: #f5f5f5; */
}

/* Ajustes de la imagen */
.div1 img {
  max-width: 100%;
  height: auto;
  border-radius: 10px;
}

/* Sección de texto */
.div2 {
  max-width: 600px;
  text-align: center;
}

.title {
  font-size: 2.5rem;
  font-weight: 500;
  margin-bottom: 20px;
  font-family: var(--font-family2);
  color: var(--color2);
}

.description {
  font-size: 18px;
  /* color: var(--color3); */
  text-align: justify;
  font-family: var(--font-family1);
  margin-bottom: 30px; /* Más separación con las barras */
}

/* Contenedor de las barras de progreso */
.progress-wrapper {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap; /* Para que se acomoden en móviles */
  gap: 40px; /* Espacio entre barras */
}

/* Ajustes de cada barra */
.progress-container {
  text-align: center;
}

/* Títulos de las barras */
.progress-title {
  font-size: 20px;
  font-weight: 400;
  margin-bottom: 15px;
  font-family: var(--font-family2);
}

/* Ajuste de tamaño de las barras */
.progress-circle {
  width: 130px; /* Aumentado el tamaño */
  height: 160px; /* Aumentado el tamaño */
  position: relative;
}

svg {
  width: 100%;
  height: 100%;
}

/* Texto dentro de las barras */
.progress-text {
  font-size: 20px;
  font-weight: bold;
  fill: #333;
  font-family: var(--font-family1);
}

/* Color de las barras */
circle[stroke] {
  stroke: var(--color2);
  transition: stroke-dashoffset 0.5s ease-in-out;
}

/* 🌟 Responsividad 🌟 */
@media (max-width: 768px) {
  .parent {
    flex-direction: column;
    text-align: center;
    gap: 40px;
  }

  .div2 {
    max-width: 90%;
  }

  .progress-wrapper {
    flex-direction: column;
    align-items: center;
  }
}
</style>
