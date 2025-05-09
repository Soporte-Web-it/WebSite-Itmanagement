<template>
  <div class="scroll-reveal-wrapper">
    <div class="scroll-reveal-container" :style="{ height: `${sections.length * 100}vh` }">
      <div class="fixed-content">
        <div
          v-for="(section, i) in sections"
          :key="i"
          class="scene"
          :class="{ active: isActive(i) }"
          :style="getStyles(i)"
        >
          <div class="icon-wrapper" v-html="section.icon" />
          <h2>{{ section.title }}</h2>
          <p>{{ section.text }}</p>
          <button v-if="section.cta" class="cta-button">{{ section.cta }}</button>
        </div>
      </div>
    </div>

    <!-- Footer insertado aquí -->
    <FooterComponent />
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import FooterComponent from '@/components/FooterComponent.vue'

const sections = [
  {
    title: 'Gestión Administrativa',
    text: 'Automatizamos tus procesos administrativos con soluciones digitales seguras y eficientes.',
    cta: 'Explorar',
    icon: `<svg width="120" height="120" fill="none" stroke="#E5322C" stroke-width="2" viewBox="0 0 24 24" class="icon-glow">
      <path d="M4 4h16v16H4z" />
      <path d="M8 4v16M16 4v16" />
      <path d="M4 8h16M4 16h16" />
    </svg>`
  },
  {
    title: 'Software Empresarial',
    text: 'Desarrollo a medida de software para gestión de RRHH, inventarios y operaciones.',
    cta: 'Solicitar demo',
    icon: `<svg width="120" height="120" fill="none" stroke="#E5322C" stroke-width="2" viewBox="0 0 24 24" class="icon-glow">
      <path d="M4 4h16v16H4z" />
      <path d="M9 9h6v6H9z" />
    </svg>`
  },
  {
    title: 'Soporte Técnico',
    text: 'Asistencia, mantenimiento y mejora continua para tu infraestructura tecnológica.',
    cta: 'Contáctanos',
    icon: `<svg width="120" height="120" fill="none" stroke="#E5322C" stroke-width="2" viewBox="0 0 24 24" class="icon-glow">
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
      <circle cx="12" cy="12" r="5" />
    </svg>`
  }
]

const scrollY = ref(0)
const sectionHeight = window.innerHeight

const onScroll = () => {
  scrollY.value = window.scrollY
}

onMounted(() => {
  window.addEventListener('scroll', onScroll)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll)
})

const isActive = (index) => {
  const offset = scrollY.value - index * sectionHeight
  return Math.abs(offset) < sectionHeight / 1.5
}

const getStyles = (index) => {
  const offset = scrollY.value - index * sectionHeight
  const opacity = Math.max(1 - Math.abs(offset) / (sectionHeight / 1.5), 0)
  const scale = 1 - Math.abs(offset) * 0.0005
  return {
    opacity,
    transform: `translateY(${offset * -0.08}px) scale(${scale})`,
    zIndex: isActive(index) ? 10 : 0,
    visibility: isActive(index) ? 'visible' : 'hidden',
    pointerEvents: isActive(index) ? 'auto' : 'none'
  }
}
</script>

<style scoped>
.scroll-reveal-wrapper {
  width: 100%;
  overflow-x: hidden;
}

.scroll-reveal-container {
  position: relative;
}

.fixed-content {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  padding: 2rem;
  /* background: linear-gradient(135deg, #0a0f1c, #1c2a3a); */
}

.scene {
  position: absolute;
  text-align: center;
  color: white;
  max-width: 900px;
  padding: 2rem;
  transition: all 0.4s ease;
}

.scene h2 {
  font-size: 3rem;
  margin-bottom: 1rem;
  color: var(--color2);
  font-family: var(--font-family2);
  text-shadow: 0 0 12px #ffffff55;
}

.scene p {
  font-size: 1.4rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  font-family: var(--font-family1);
  color: var(--color3);
}

.cta-button {
  padding: 0.75rem 1.5rem;
  background: var(--color2);
  border: none;
  border-radius: 12px;
  font-weight: bold;
  color: var(--color1);
  font-size: 1.1rem;
  box-shadow: 0 0 10px #E5322C;
  cursor: pointer;
  transition: all 0.3s ease;
}

.cta-button:hover {
  transform: scale(1.05);
  box-shadow: 0 0 15px var(--color8);
}

.icon-wrapper {
  margin-bottom: 2rem;
  animation: fadeIn 1s ease;
}

.icon-glow {
  stroke-linecap: round;
  stroke-linejoin: round;
  animation: glow 2s infinite ease-in-out;
}

@keyframes glow {
  0%, 100% { stroke: #00f0ff; filter: drop-shadow(0 0 4px #00f0ff88); }
  50% { stroke: #00c6ff; filter: drop-shadow(0 0 10px #00f0ffdd); }
}

@keyframes fadeIn {
  from { opacity: 0; transform: scale(0.8); }
  to { opacity: 1; transform: scale(1); }
}
</style>
