<template>
  <!-- Contenedor principal del componente de acordeón -->
  <section class="accordion-container">
    <!-- Título de la sección con animación AOS -->
    <h2 class="accordion-title" data-aos="fade-down">Nuestros Valores</h2>

    <!-- Contenido principal dividido en dos columnas: imagen y acordeón -->
    <div class="accordion-content">
      <!-- Columna de imagen con animación de entrada lateral -->
      <div class="accordion-image" data-aos="fade-right">
        <img src="../assets/images/ilustrations/undraw_community.svg" alt="Imagen de valores" />
      </div>

      <!-- Columna del acordeón con animación de entrada lateral -->
      <div class="accordion" data-aos="fade-left">
        <!-- Renderizado de cada ítem del acordeón -->
        <div
          v-for="(item, index) in items"
          :key="index"
          class="accordion-item"
        >
          <!-- Encabezado del acordeón que activa el toggle al hacer clic -->
          <button @click="toggle(index)" class="accordion-header">
            <span class="title">{{ item.title }}</span>
            <!-- Icono con rotación condicional si está abierto -->
            <span class="icon" :class="{ open: openIndex === index }">
              <i class='bx bx-chevrons-down bx-fade-down'></i>
            </span>
          </button>

          <!-- Cuerpo del acordeón con transición animada -->
          <transition name="accordion">
            <div v-show="openIndex === index" class="accordion-body">
              <p>{{ item.content }}</p>
            </div>
          </transition>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Importaciones necesarias
import { ref, onMounted } from 'vue'
import AOS from 'aos' // Librería de animaciones on scroll
import 'aos/dist/aos.css' // Estilos de AOS

// Estado reactivo para controlar qué ítem está abierto
const openIndex = ref(null)

// Función para abrir/cerrar un ítem del acordeón
const toggle = (index) => {
  openIndex.value = openIndex.value === index ? null : index
}

// Lista de ítems del acordeón con títulos y contenidos
const items = [
  { title: 'RESPONSABILIDAD', content: 'Hacemos lo que debemos en base a lo establecido.' },
  { title: 'HONESTIDAD', content: 'En IT MANAGMENT Conservamos una conciencia clara ante nuestras labores, nos comportamos y nos expresamos con coherencia y sinceridad.' },
  { title: 'RESPETO', content: 'En IT MANAGMENT Reconocemos y toleramos las creencias, actuaciones, sentimientos y motivos de las personas.' },
  { title: 'EXCELENCIA', content: 'Nos comprometemos constantemente en cumplir con las metas propuestas desde todos los ámbitos, esforzándonos por hacerlo cada vez mejor.' },
  { title: 'INNOVACIÓN', content: 'Para IT MANAGMENT La innovación y la calidad son la clave para el cumplimiento de nuestro compromiso con el progreso de la organización, desarrollando soluciones que satisfagan las necesidades de nuestros clientes.' },
  { title: 'COMPROMISO', content: 'Trabajamos con responsabilidad, profesionalismo y creatividad con el propósito de cumplir y alcanzar la misión de la empresa.' },
  { title: 'CALIDAD', content: 'Servicio con los mejores recursos, con el propósito de satisfacer las necesidades y expectativas de nuestros clientes.' },
  { title: 'CALIDEZ HUMANA', content: 'Tratamos con empatía y cercanía a cada persona.' }
]

// Inicialización de AOS una vez montado el componente
onMounted(() => {
  AOS.init({
    duration: 800, // Duración de animaciones
    once: true // Solo animar una vez
  })
})
</script>

<style scoped>
/* Contenedor general */
.accordion-container {
  padding: 2rem;
  max-width: 1200px;
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
}

/* Título principal */
.accordion-title {
  font-size: 3.5rem;
  font-weight: 600;
  text-align: center;
  font-family: var(--font-family2);
  color: var(--color2);
  /* text-shadow: 0 0 10px rgba(229, 50, 44, 0.6); */
}

/* Contenedor con imagen + acordeón en columnas */
.accordion-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  flex-wrap: wrap;
  width: 100%;
}

/* Imagen del acordeón */
.accordion-image {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 500px;
}

.accordion-image img {
  width: 100%;
  height: auto;
  border-radius: 1rem;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  object-fit: contain;
  max-height: 300px;
}

/* Lista del acordeón */
.accordion {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  min-width: 280px;
  max-width: 600px;
}

/* Ítem individual del acordeón */
.accordion-item {
  background: white;
  border-radius: 0.5rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  transition: all 0.3s ease;
}

/* Botón de encabezado del ítem */
.accordion-header {
  width: 100%;
  background: white;
  border: none;
  padding: 1.2rem;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1rem;
  cursor: pointer;
  font-family: var(--font-family2);
  color: var(--color3);
}

/* Cuerpo del ítem (contenido ocultable) */
.accordion-body {
  padding: 1rem 1.2rem;
  background: #f9f9f9;
  color: #444;
  font-family: var(--font-family1);
}

/* Transiciones suaves */
.accordion-enter-active,
.accordion-leave-active {
  transition: all 0.3s ease;
  overflow: hidden;
}

.accordion-enter-from,
.accordion-leave-to {
  max-height: 0;
  opacity: 0;
  padding: 0 1.2rem;
}

.accordion-enter-to,
.accordion-leave-from {
  max-height: 500px;
  opacity: 1;
  padding: 1rem 1.2rem;
}

/* Icono con animación de rotación */
.icon {
  transition: transform 0.3s ease;
}

.icon.open {
  transform: rotate(180deg);
}

/* 📱 Estilos responsivos */
@media (max-width: 768px) {
  .accordion-content {
    flex-direction: column;
    align-items: center;
  }

  .accordion-image img {
    max-width: 90%;
    height: auto;
  }

  .accordion {
    width: 100%;
    max-width: 500px;
  }

  .accordion-title {
    font-size: 1.5rem;
  }

  .accordion-header {
    font-size: 0.95rem;
  }

  .accordion-body {
    font-size: 0.9rem;
  }
}

@media (max-width: 480px) {
  .accordion-title {
    font-size: 2rem;
  }

  .accordion-header {
    font-size: 0.9rem;
  }

  .accordion-body {
    font-size: 0.85rem;
  }
}
</style>
