<template>
  <div class="info-container">
    <div class="image-section" data-aos="zoom-in">
      <img
        src="../assets/images/ilustrations/digital-nomad_xr4z.svg"
        alt="Illustration Image"
        class="illustration"
      />
    </div>

    <div class="text-section" data-aos="fade-up">
      <h2 class="info-title">¡Impulsamos tu transformación digital!</h2>
      <p class="info-paragraph">
        IT MANAGEMENT, combina innovación tecnológica, soluciones robustas de infraestructura TIC,
        desarrollo de software personalizado y soporte administrativo eficiente para llevar tu
        organización al siguiente nivel. Nuestro compromiso es brindarte herramientas confiables,
        seguras y adaptadas a tus necesidades reales.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeaderComponent',
}
</script>

<style scoped>
.info-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  gap: 2rem;
  padding: 2rem;
  background: 6C6C6C;
  background: linear-gradient(9deg,rgba(229, 50, 44, 1) 25%, rgba(0, 0, 0, 1) 60%);
  border-radius: 2rem;
  box-shadow: 0 0 25px rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(8px);
  color: #f1f5f9;
  transition: all 0.3s ease-in-out;
  min-height: 50vh;
  background-attachment: fixed;
}

.image-section {
  display: flex;
  justify-content: center;
  align-items: center;
}

.illustration {
  width: 50%;
  max-width: 400px;
  height: auto;
  aspect-ratio: 4 / 3;
  border-radius: 1rem;
  /* box-shadow: 0 0 20px rgba(56, 189, 248, 0.3); */
  transition: transform 0.3s ease;
}

.illustration:hover {
  transform: scale(1.05);
}

.text-section {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  text-align: left;
  max-width: 80%;
}

.info-title {
  font-size: 3.5rem;
  font-weight: 600;
  font-family: var(--font-family2);
  background: linear-gradient(90deg, #e5322c, #ab2824);
  background-size: 200% auto;
  color: transparent;
  -webkit-background-clip: text;
  animation: wave 3s linear infinite;
}

@keyframes wave {
  0% {
    background-position: 200% center;
  }
  100% {
    background-position: 0% center;
  }
}

.info-paragraph {
  font-size: 1.125rem;
  font-weight: 300;
  line-height: 1.8;
  color: #ffffff;
  font-family: var(--font-family1);
  text-align: justify;
}

/* Responsive Design */
@media (max-width: 768px) {
  .info-container {
    grid-template-columns: 1fr;
    padding: 1.5rem;
    text-align: center;
  }

  .text-section {
    align-items: center;
    text-align: center;
    max-width: 100%;
  }

  .info-title {
    font-size: 2rem;
    text-align: center;
  }

  .info-paragraph {
    font-size: 1rem;
    text-align: justify;
  }

  .illustration {
    width: 300px;
  }
}
</style>
