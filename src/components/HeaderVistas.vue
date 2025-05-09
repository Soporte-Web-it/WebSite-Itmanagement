<template>
  <header class="header-container" :style="{ backgroundImage: `url(${imagenFondo})` }">
    <div class="overlay"></div>
    <div class="header-content">
      <h1
        class="header-title"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="100"
      >
        {{ titulo }}
      </h1>
      <p
        v-if="subtitulo"
        class="header-subtitle"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="300"
      >
        {{ subtitulo }}
      </p>
    </div>
  </header>
</template>

<script setup>
defineProps({
  titulo: {
    type: String,
    required: true
  },
  subtitulo: {
    type: String,
    default: ''
  },
  imagenFondo: {
    type: String,
    required: true
  }
});
</script>

<style scoped>
.header-container {
  position: relative;
  width: 100%;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  /* border-radius: 0 0 2rem 2rem; */
  /* box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5); */
  text-align: center;
  font-family: var(--font-family2);
  /* background-attachment: fixed; */
}

.overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1;
}

.header-content {
  position: relative;
  z-index: 2;
  color: #fff;
  padding: 1rem;
}

.header-title {
  font-size: 3.5rem;
  font-weight: 600;
  /* text-shadow: 0 0 10px rgba(255, 255, 255, 0.5); */
  margin: 0;
}

.header-subtitle {
  font-size: 1.5rem;
  margin-top: 1rem;
  color: var(--color1);
}

@media (max-width: 768px) {
  .header-title {
    font-size: 2rem;
  }

  .header-subtitle {
    font-size: 1rem;
  }
}
</style>
