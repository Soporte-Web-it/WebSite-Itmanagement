<template>

  <HeaderVistas
    titulo="Quiénes Somos"
    subtitulo="Comprometidos con la excelencia, orientados a brindar soluciones integrales con profesionalismo y confianza."
    :imagenFondo="banner"
  />

  <ServicesCardsComponent/>
  <AccordionComponent/>
  <PoliticsComponent/>

  <DownloadComponent/>

  <FooterComponent/>

</template>

<script setup>

import HeaderVistas from '@/components/HeaderVistas.vue';
import ServicesCardsComponent from '@/components/ServicesCardsComponent.vue';
import AccordionComponent from '@/components/AccordionComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';
import PoliticsComponent from '@/components/PoliticsComponent.vue';
import DownloadComponent from '@/components/DownloadComponent.vue';

// Importación de backgrounds
import banner from '@/assets/images/banners/bg4.jpg';

</script>
