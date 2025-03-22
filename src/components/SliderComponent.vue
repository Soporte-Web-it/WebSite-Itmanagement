<template>

    <div class="slider-section">

        <h2 class="slider-title">Nuestros Aliados</h2>

        <div class="slider-container" data-aos="fade-up">

            <Swiper
                :modules="[Autoplay]"
                :loop="true"
                :autoplay="{ delay: 0, disableOnInteraction: false }"
                :speed="2000"
                :space-between="5"
                :breakpoints="{
                    768: { slidesPerView: 'auto' },
                    1024: { slidesPerView: 5 }
                }"
                class="mySwiper"
                >

                <SwiperSlide v-for="(logo, index) in logos" :key="index" class="slide-wrapper">

                    <div class="slide">

                        <img :src="logo" alt="Logo" class="logo-image" />

                    </div>

                </SwiperSlide>

            </Swiper>

        </div>

    </div>

</template>
  
<script setup>

    import { ref } from "vue";
    import { Swiper, SwiperSlide } from "swiper/vue";
    import { Autoplay } from "swiper/modules";
    import "swiper/css";

    // Importación de logos para el slider

    import lg1 from '@/assets/images/logos/BOYACÁ.png';
    import lg2 from '@/assets/images/logos/CASA DEL NIÑO.png';
    import lg3 from '@/assets/images/logos/CFIM.png';
    import lg4 from '@/assets/images/logos/CLÍNICA.png';
    import lg5 from '@/assets/images/logos/CORPOMEDICAL.png';
    import lg6 from '@/assets/images/logos/FUNDACION.png';
    import lg7 from '@/assets/images/logos/INPROMEDIQ.png';
    import lg8 from '@/assets/images/logos/IT.png';
    import lg9 from '@/assets/images/logos/MEDIALCO.png';
    import lg10 from '@/assets/images/logos/MEDICAL.png';
    import lg11 from '@/assets/images/logos/MOM SAS.png';
    import lg12 from '@/assets/images/logos/MYS.png';
    import lg13 from '@/assets/images/logos/NEFRO SERVICIOS.png';
    import lg14 from '@/assets/images/logos/PAJONAL.png';
    import lg15 from '@/assets/images/logos/PERPETUAL.png';
    import lg16 from '@/assets/images/logos/PROFUTURO.png';
    import lg17 from '@/assets/images/logos/REINA ISABEL.png';
    import lg18 from '@/assets/images/logos/RENAL HELP.png';
    import lg19 from '@/assets/images/logos/SAGRADA FAMILIA.png';
    import lg20 from '@/assets/images/logos/SES SALUD.png'
    import lg21 from '@/assets/images/logos/UROS.png'


    const logos = ref([
        lg1,
        lg2,
        lg3,
        lg4,
        lg5,
        lg6,
        lg7,
        lg8,
        lg9,
        lg10,
        lg11,
        lg12,
        lg13,
        lg14,
        lg15,
        lg16,
        lg17,
        lg18,
        lg19,
        lg20,
        lg21,
    ]);

</script>
  
<style scoped>

.slider-section {
    height: 40vh;
    text-align: center;
    padding: 20px 0;
    background-color: var(--color1);
}

.slider-title {
    font-weight: 400;
    margin-bottom: 15px;
    font-size: 2rem;
    color: var(--color2);
    font-family: var(--font-family2);
}

.slider-container {
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    padding: 20px 0;
}

.mySwiper {
    display: flex;
    align-items: center;
    width: 100%;
}

.slide-wrapper {
    display: flex;
    justify-content: center;
}

.slide {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 250px;
    height: 120px;
    border-radius: 10px;
    background: rgba(255, 255, 255, 0.30);
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur( 2px);
    transition: transform 0.3s ease;
}

.slide:hover {
    transform: scale(1.1);
}

.logo-image {
    width: 220px;
    height: auto;
    filter: grayscale(100%);
    transition: filter 0.3s ease;
}

.slide:hover .logo-image {
    filter: grayscale(0%);
}

/* Ajuste para pantallas pequeñas */
@media (max-width: 768px) {

    .slider-title {
        font-size: 2rem;
    }

    .mySwiper {
        width: 100%;
    }

    .slide {
        width: 200px;
        height: 100px;
    }

    .logo-image {
        width: 180px;
    }
}

</style>
