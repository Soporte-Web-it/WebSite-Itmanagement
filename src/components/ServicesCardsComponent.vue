<template>
  <section class="cards-section">
    <h2 class="section-title">Sobre Nosotros</h2>
    <div class="cards-wrapper">
      <div
        v-for="(card, index) in cards"
        :key="index"
        ref="cardRefs"
        class="card"
        :class="{ 'in-view': isVisible[index] }"
        @mousemove="(e) => handleMouseMove(e, index)"
        @mouseleave="() => resetTransform(index)"
      >
        <div class="card-inner" :class="{ flipped: isVisible[index] }">
          <div class="card-face front">
            <h3>{{ card.title }}</h3>
            <p>{{ card.description }}</p>
          </div>
          <div class="card-face back">
            <h3>{{ card.backTitle }}</h3>
            <p>{{ card.backDescription }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, reactive, nextTick } from 'vue'

const cards = [
  {
    title: 'Razon Social',
    description: '¡Comoce más!',
    backTitle: 'Razon Social',
    backDescription: '"IT MANAGEMENT ZOMAC S.A.S apoya a sus clientes en la continuidad de su negocio, gestionando procesos gerenciales, contables, financieros, jurídicos, de ingeniería y talento humano. También desarrolla y actualiza sistemas que respaldan las áreas administrativas y asistenciales en nuevas unidades de negocio.',
  },
  {
    title: 'Misión',
    description: '¡Comoce más!',
    backTitle: 'Misión',
    backDescription:
      'IT MANAGEMENT ZOMAC S.A.S es una empresa dedicada a la prestación de servicios (Asesorías y acompañamientos) gerenciales, contables, financieros, jurídicos, ingeniería y talento humano caracterizada por la calidad de sus servicios y continua innovación; contando con profesionales íntegros y calificados; permitiéndole ser aliados estratégicos de clientes internos y externos.',
  },
  {
    title: 'Visión',
    description: '¡Comoce más!',
    backTitle: 'Visión',
    backDescription: 'En el 2030 IT MANAGEMENT ZOMAC S.A.S busca consolidarse y ser reconocido como como un referente regional y nacional en la prestación de servicios (Asesorías y acompañamientos) gerenciales, contables, financieros, jurídicos, ingeniería y talento humano. Tomando como principal fortaleza la calidad en sus trabajadores y la innovación en sus procesos.',
  },
]

const cardRefs = ref([])
const isVisible = reactive([])

let observers = []

onMounted(async () => {
  await nextTick()
  cardRefs.value.forEach((el, i) => {
    isVisible[i] = false

    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible[i] = entry.isIntersecting
      },
      { threshold: 0.5 },
    )

    if (el) observer.observe(el)
    observers.push(observer)
  })
})

onBeforeUnmount(() => {
  cardRefs.value.forEach((el, i) => {
    if (el && observers[i]) observers[i].unobserve(el)
  })
})

function handleMouseMove(event, index) {
  const card = cardRefs.value[index]
  const rect = card.getBoundingClientRect()
  const x = event.clientX - rect.left
  const y = event.clientY - rect.top
  const centerX = rect.width / 2
  const centerY = rect.height / 2
  const rotateX = ((y - centerY) / centerY) * 10
  const rotateY = ((x - centerX) / centerX) * -10
  card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
}

function resetTransform(index) {
  const card = cardRefs.value[index]
  card.style.transform = 'rotateX(0deg) rotateY(0deg)'
}
</script>

<style scoped>
.cards-section {
  padding: 4rem 2rem;
  text-align: center;
  font-family: var(--font-family1);
}

.section-title {
  font-size: 3.5rem;
  margin-bottom: 3rem;
  /* text-shadow: 0 0 10px #fff; */
  font-family: var(--font-family2);
  font-weight: 600;
  color: var(--color2);
  /* text-shadow: 0 0 10px rgba(229, 50, 44, 0.6); */
}

.cards-wrapper {
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
}

.card {
  width: 280px;
  height: 380px;
  perspective: 1200px;
  transition: transform 0.3s ease;
}

.card-inner {
  width: 100%;
  height: 100%;
  position: relative;
  transform-style: preserve-3d;
  transition: transform 1s ease;
}

.card-inner.flipped {
  transform: rotateY(180deg);
}

.card-face {
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 16px;
  backface-visibility: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 1.5rem;
  color: white;
  /* box-shadow: 0 0 15px #fff, 0 0 30px rgba(255, 255, 255, 0.2); */
  transition: box-shadow 0.3s ease;
}

.card-face.front {
  background: linear-gradient(135deg, #111, #222);
}

.card-face.back {
  background: linear-gradient(135deg, #E5322C, #333333);
  transform: rotateY(180deg);
}

.card-face.back h3 {
  margin-bottom: 2rem; /* o ajusta el valor que desees */
}

.card.in-view .card-face {
  animation: glow 1.2s ease-out forwards;
}

@keyframes glow {
  0% {
    box-shadow: 0 0 10px #fff;
  }
  100% {
    /* box-shadow: 0 0 25px #fff, 0 0 60px rgba(255, 255, 255, 0.3); */
  }
}

@media (max-width: 480px) {
  .section-title {
    font-size: 2rem;
  }
}
</style>
