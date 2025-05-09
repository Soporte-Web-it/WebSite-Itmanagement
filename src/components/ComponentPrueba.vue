<template>
  <section class="intro-section">
    <div class="intro-content" data-aos="fade-up">
      <h1 class="intro-title">Soluciones Integrales para un Futuro Eficiente</h1>

      <p class="intro-subtitle">
        Combinamos tecnología, experiencia y compromiso para ofrecer servicios de hardware, software y gestión administrativa adaptados a tus necesidades.
      </p>

      <button @click="redirectToWhatsApp" class="intro-button">
        <svg class="whatsapp-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
          <path
            fill="white"
            d="M16.004 2.003c-7.732 0-14 6.268-14 14 0 2.473.646 4.834 1.875 6.926L2 30l7.27-1.865c2.015 1.1 4.29 1.683 6.73 1.683h.004c7.73 0 14-6.267 14-14 0-7.73-6.27-14-14-14zm0 25.333c-2.107 0-4.145-.562-5.938-1.625l-.426-.25-4.313 1.106 1.147-4.188-.282-.438C5.04 20.023 4.337 18.05 4.337 16c0-6.43 5.236-11.667 11.667-11.667S27.67 9.57 27.67 16s-5.237 11.667-11.667 11.667zm6.427-8.948c-.354-.177-2.098-1.037-2.424-1.155-.325-.118-.562-.177-.8.177-.236.354-.913 1.155-1.12 1.393-.207.236-.412.266-.766.089-.354-.178-1.496-.55-2.85-1.755-1.053-.94-1.763-2.098-1.97-2.452-.207-.354-.023-.546.154-.723.159-.158.354-.412.531-.62.177-.207.236-.354.354-.59.118-.236.06-.443-.03-.62-.09-.177-.8-1.925-1.096-2.642-.29-.696-.585-.602-.8-.612-.206-.008-.443-.01-.679-.01s-.62.088-.946.443c-.325.354-1.24 1.212-1.24 2.958 0 1.746 1.27 3.433 1.447 3.67.177.236 2.5 3.822 6.06 5.362.846.365 1.506.582 2.022.745.85.27 1.623.232 2.235.141.682-.101 2.098-.856 2.395-1.681.296-.826.296-1.534.207-1.681-.09-.148-.325-.236-.679-.412z"
          />
        </svg>
        Escríbenos por WhatsApp
      </button>
    </div>
  </section>
</template>

<script setup>
const redirectToWhatsApp = () => {
  const phone = '573168349798'; // 🇨🇴 Número en formato internacional
  const message = encodeURIComponent('Hola, quiero más información de sus servicios.');
  window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
};
</script>

<style scoped>
.intro-section {
  min-height: 80vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  padding: 2rem;
  box-sizing: border-box;
  text-align: center;
  /* background: #000; Opcional: cambia o elimina según tu fondo */
}

.intro-content {
  max-width: 800px;
  animation: fadeIn 1.2s ease-out both;
}

/* 🖥 Escritorio */
.intro-title {
  font-size: 3.5rem;
  margin-bottom: 1rem;
  line-height: 1.2;
  font-family: var(--font-family2);
  font-weight: 600;
  color: var(--color2);
  /* text-shadow: 0 0 10px rgba(229, 50, 44, 0.6); */
}

.intro-subtitle {
  font-size: 1.5rem;
  opacity: 0.8;
  margin-bottom: 2rem;
  color: var(--color3);
  font-family: var(--font-family1);
}

.intro-button {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: #25D366;
  color: #fff;
  padding: 0.8rem 2rem;
  font-size: 1rem;
  border: none;
  border-radius: 2rem;
  cursor: pointer;
  transition: transform 0.3s, box-shadow 0.3s;
}

.intro-button:hover {
  transform: scale(1.05);
  box-shadow: 0 0 15px #25d366aa;
}

.whatsapp-icon {
  width: 1.2rem;
  height: 1.2rem;
  fill: white;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
    transform: translateY(40px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

/* 📱 Responsividad */
@media (max-width: 1024px) {
  .intro-title {
    font-size: 2.8rem;
  }

  .intro-subtitle {
    font-size: 1.3rem;
  }
}

@media (max-width: 768px) {
  .intro-title {
    font-size: 2.2rem;
  }

  .intro-subtitle {
    font-size: 1.1rem;
  }

  .intro-button {
    padding: 0.7rem 1.5rem;
    font-size: 0.95rem;
  }

  .whatsapp-icon {
    width: 1rem;
    height: 1rem;
  }
}

@media (max-width: 480px) {
  .intro-title {
    font-size: 1.8rem;
  }

  .intro-subtitle {
    font-size: 1rem;
  }

  .intro-button {
    flex-direction: column;
    gap: 0.3rem;
    padding: 0.6rem 1.2rem;
  }
}
</style>
