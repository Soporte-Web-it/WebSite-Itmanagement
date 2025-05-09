<template>

  <NavBar />

  <!-- Ícono para alternar el tema -->
  <div @click="toggleTheme" class="theme-toggle">
    <i :class="isDark ? 'fas fa-sun' : 'fas fa-moon'" class="theme-icon"></i>
  </div>

  <router-view :key="$route.fullPath" />

  <div v-if="loading" class="loader-overlay">
    <div class="loader-content">
        <img src="@/assets/images/logos/IT.png" alt="Logo de carga" class="loader-logo" />
        <p class="loader-text">¡Estamos cargando una nueva experiencia para ti!</p>
    </div>
  </div>


</template>


<script setup>

import NavBar from '@/components/NavBar.vue';
import { ref, onMounted, onUnmounted } from "vue";

// Tema oscuro/claro
const isDark = ref(localStorage.getItem("theme") === "dark");

const toggleTheme = () => {
  isDark.value = !isDark.value;
  if (isDark.value) {
    document.body.classList.add("dark-mode");
    localStorage.setItem("theme", "dark");
  } else {
    document.body.classList.remove("dark-mode");
    localStorage.setItem("theme", "light");
  }
};

const handleBlur = () => {
  document.title = "¿Ya te vas? 😲";
};

const handleFocus = () => {
  document.title = "IT MANAGEMENT ZOMAC S.A.S"; // Puedes cambiar por tu título predeterminado
};

onMounted(() => {
  if (isDark.value) {
    document.body.classList.add("dark-mode");
  }

  window.addEventListener("blur", handleBlur);
  window.addEventListener("focus", handleFocus);
});

onUnmounted(() => {
  window.removeEventListener("blur", handleBlur);
  window.removeEventListener("focus", handleFocus);
});


const loading = ref(true);

onMounted(() => {
  setTimeout(() => {
    loading.value = false;
  }, 1000); // simula carga durante 1.5 segundos
});

console.log("Powered By: Sebastián Gómez") // Developer Software Jr

</script>

<style>

html, body {
  overflow-x: hidden;
  width: 100%;
  margin: 0;
  padding: 0;
}


/* Tema claro */
:root {
  --bg-color: white;
  --text-color: black;
  --color2: #E5322C; /* color secundario de fallback */
}

/* Tema oscuro */
.dark-mode {
  --bg-color: #6C6C6C;
  --text-color: white;
}

/* Aplicación del tema */
body {
  background-color: var(--bg-color);
  color: var(--text-color);
  transition: background-color 0.3s ease, color 0.3s ease;
}

/* Botón de tema */
.theme-toggle {
  position: fixed;
  bottom: 30px;
  right: 30px;
  background-color: rgba(255, 255, 255, 0.8);
  padding: 10px;
  border-radius: 50%;
  cursor: pointer;
  transition: background-color 0.3s ease;
  z-index: 20000;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}

.theme-toggle:hover {
  background-color: rgba(0, 0, 0, 0.2);
}

.theme-icon {
  font-size: 1.5rem;
  color: var(--color2);
  transition: transform 0.3s ease, color 0.3s ease;
}

.theme-toggle:hover .theme-icon {
  transform: rotate(20deg);
}

/* Responsive: icono en móviles más cerca del borde */
@media (max-width: 768px) {
  .theme-toggle {
    bottom: 20px;
    right: 20px;
    padding: 8px;
  }

  .theme-icon {
    font-size: 1.3rem;
  }
}

/* Responsive para pantallas ultra pequeñas */
@media (max-width: 420px) {
  .theme-toggle {
    bottom: 15px;
    right: 15px;
    padding: 6px;
  }

  .theme-icon {
    font-size: 1.1rem;
  }
}


.loader-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--bg-color);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99999;
  transition: opacity 0.3s ease;
}

.loader-logo {
  width: 200px;
  height: auto;
  animation: pulse 2s infinite ease-in-out;
}

/* Animación suave tipo "pulse" */
@keyframes pulse {
  0% { transform: scale(1); opacity: 0.9; }
  50% { transform: scale(1.1); opacity: 1; }
  100% { transform: scale(1); opacity: 0.9; }
}

.loader-content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.loader-text {
  margin-top: 15px;
  font-size: 1.2rem;
  font-family: var(--font-family2);
  color: var(--color2);
  animation: blink 1.5s infinite;
}

/* Efecto de parpadeo suave */
@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.4; }
}

@media (max-width: 768px) {

  .loader-text {
    text-align: center;
  }

}

</style>
