<template>

  <HeaderVistas
    titulo="¿En qué podemos ayudarte?"
    subtitulo="Vive la experiencia con nueva tecnología e innovación"
    :imagenFondo="banner"
  />

  <GoogleMapsFormComponent/>
  <FooterComponent/>

</template>


<script setup>

import FooterComponent from '@/components/FooterComponent.vue';
import GoogleMapsFormComponent from '@/components/GoogleMapsFormComponent.vue';
import HeaderVistas from '@/components/HeaderVistas.vue';

// Importación de backgrounds
import banner from '@/assets/images/banners/bg3.jpg';

</script>
