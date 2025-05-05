<template>

  <HeaderVistas
    titulo="Conoce mas de nuestros servicios y aportes"
    subtitulo="¡Tecnología e innovación son nuestros pilares!"
    :imagenFondo="banner"
  />


  <ComponentPrueba/>
  <FooterComponent/>

</template>

<script setup>
import ComponentPrueba from '@/components/ComponentPrueba.vue';
import FooterComponent from '@/components/FooterComponent.vue';
import HeaderVistas from '@/components/HeaderVistas.vue';

import banner from '@/assets/images/banners/bg2.jpg';

</script>
