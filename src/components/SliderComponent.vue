<template>
  <div class="slider-section">
    <h2 class="slider-title">Nuestros Aliados</h2>

    <div class="slider-container" data-aos="fade-up">
      <Swiper
        :modules="[Autoplay]"
        :loop="true"
        :autoplay="{ delay: 2500, disableOnInteraction: false }"
        :speed="1500"
        :space-between="10"
        :breakpoints="{
          0: { slidesPerView: 1 },
          480: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
          1280: { slidesPerView: 5 }
        }"
        class="mySwiper"
      >
        <SwiperSlide v-for="(logo, index) in logos" :key="index" class="slide-wrapper">
          <div class="slide">
            <img :src="logo" alt="Logo de aliado" class="logo-image" />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'

import lg1 from '@/assets/images/logos/BOYACÁ.png'
import lg2 from '@/assets/images/logos/CASA DEL NIÑO.png'
import lg3 from '@/assets/images/logos/CFIM.png'
import lg4 from '@/assets/images/logos/CLÍNICA.png'
import lg5 from '@/assets/images/logos/CORPOMEDICAL.png'
import lg6 from '@/assets/images/logos/FUNDACION.png'
import lg7 from '@/assets/images/logos/INPROMEDIQ.png'

const logos = ref([lg1, lg2, lg3, lg4, lg5, lg6, lg7])
</script>

<style scoped>
.slider-section {
  width: 100%;
  min-height: auto;
  text-align: center;
  padding: 40px 20px;
}

.slider-title {
  font-weight: 600;
  margin-bottom: 15px;
  font-size: 3.5rem;
  color: var(--color2);
  font-family: var(--font-family2);
  text-shadow: 0 0 10px rgba(229, 50, 44, 0.6);
}

.slider-container {
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  min-height: 20vh;
}

.mySwiper {
  width: 100%;
  margin: 0 auto;
}

@media (min-width: 1024px) {
  .mySwiper {
    width: 80%;
  }
}

.slide-wrapper {
  display: flex;
  justify-content: center;
}

.slide {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 120px;
  border-radius: 10px;
  background-color: var(--color1);
  box-shadow: 2px 2px 15px rgba(0, 0, 0, 0.10);
}

.logo-image {
  width: 100%;
  max-width: 180px;
}

@media (max-width: 768px) {
  .slider-title {
    font-size: 2rem;
  }
}
</style>
