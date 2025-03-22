<template>

    <NavBar />
    <router-view :key="$route.fullPath" />
    
</template>

<script setup>
import NavBar from '@/components/NavBar.vue';

import { onMounted, onUnmounted } from "vue";

onMounted(() => {
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

    // Limpieza de eventos cuando el componente se desmonta
    onUnmounted(() => {
        window.removeEventListener("blur", handleBlur);
        window.removeEventListener("focus", handleFocus);
    });
});
</script>
  