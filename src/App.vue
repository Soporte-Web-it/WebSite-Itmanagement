<template>

  <NavBar />

  <!-- Ícono para alternar el tema -->

  <div @click="toggleTheme" class="theme-toggle">
    <i :class="isDark ? 'fas fa-sun' : 'fas fa-moon'" class="theme-icon"></i>
  </div>

  <router-view :key="$route.fullPath" />

</template>

<script setup>

import NavBar from '@/components/NavBar.vue';
import { ref, onMounted, onUnmounted } from "vue";

// Detectamos el tema almacenado o usamos "light" por defecto
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

onMounted(() => {
  // Aplica el tema almacenado
  if (isDark.value) {
    document.body.classList.add("dark-mode");
  }

  // Lógica original para cambiar el título de la pestaña
  let previousTitle = document.title;

  const handleBlur = () => {
    previousTitle = document.title;
    document.title = "¿Ya te vas?";
  };

  const handleFocus = () => {
    document.title = previousTitle;
  };

  window.addEventListener("blur", handleBlur);
  window.addEventListener("focus", handleFocus);

  // Limpieza de eventos al desmontar el componente
  onUnmounted(() => {
    window.removeEventListener("blur", handleBlur);
    window.removeEventListener("focus", handleFocus);
  });
});
</script>

<style>
/* Definición de variables CSS para tema claro */
:root {
  --bg-color: white;
  --text-color: black;
}

/* Tema oscuro */
.dark-mode {
  --bg-color: #545353;
  --text-color: white;
}

/* Aplicación de las variables */
body {
  background-color: var(--bg-color);
  color: var(--text-color);
  transition: background-color 0.3s ease, color 0.3s ease;
}

/* Estilos para el ícono de alternar tema */
.theme-toggle {
  position: fixed;
  top: 90%;       /* margen superior para bajar un poco */
  right: 20px;     /* alineado a la derecha */
  background-color: rgb(255, 255, 255, 0.8); /* caja con color de fondo */
  padding: 8px;    /* espacio interno para que el ícono no esté pegado a los bordes */
  border-radius: 8px; /* bordes redondeados */
  cursor: pointer;
  transition: background-color 0.3s ease;
  z-index: 20000;
}

.theme-toggle:hover {
  background-color: rgba(0, 0, 0, 0.2);
}

.theme-icon {
  font-size: 1.5rem;
  color: var(--color2);
}
</style>
