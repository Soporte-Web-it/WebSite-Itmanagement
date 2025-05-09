<template>
  <section class="descarga-section">
    <h2 class="titulo">Descarga nuestros documentos</h2>

    <div class="flecha-container">
      <svg viewBox="0 0 100 100" class="flecha-svg">
        <path
          d="M50,0 C60,30 40,70 50,100"
          fill="none"
          stroke="#E5322C"
          stroke-width="4"
          stroke-linecap="round"
          stroke-dasharray="6"
        />
        <path
          d="M50,100 L45,95 M50,100 L55,95"
          stroke="#E5322C"
          stroke-width="4"
          stroke-linecap="round"
        />
      </svg>
    </div>

    <div class="botones">
      <button @click="descargarArchivo('Mapa de procesos.pdf')" class="boton-descarga">
        Descargar "Mapa de Procesos"
      </button>
      <!-- <button @click="descargarArchivo('Organigrama.pdf')" class="boton-descarga">
        Descargar "Organigrama"
      </button> -->
    </div>
  </section>
</template>

<script setup>
const descargarArchivo = (archivo) => {
  const link = document.createElement('a');
  link.href = `/documents/${archivo}`; // carpeta "public/documents"
  link.download = archivo;
  link.click();
};
</script>


<style scoped>
.descarga-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem 1rem;
  min-height: auto;
  text-align: center;
}

.titulo {
  font-size: 3.5rem;
  margin-bottom: 1.5rem;
  font-weight: 600;
  font-family: var(--font-family2);
  color: var(--color2);
  /* text-shadow: 0 0 10px rgba(229, 50, 44, 0.6); */
}

.flecha-container {
  width: 80px;
  height: 100px;
  margin-bottom: 1rem;
  animation: flotar 2s ease-in-out infinite;
}

.flecha-svg {
  width: 100%;
  height: 100%;
}

@keyframes flotar {
  0% { transform: translateY(0); }
  50% { transform: translateY(5px); }
  100% { transform: translateY(0); }
}

.botones {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1rem;
}

.boton-descarga {
  background: linear-gradient(135deg, #E5322C, #ab2824);
  color: white;
  padding: 14px 28px;
  font-size: 1.1rem;
  font-weight: bold;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  font-family: var(--font-family1);
  transition: all 0.3s ease;
}

.boton-descarga:hover {
  transform: scale(1.05);
  box-shadow: 0 0 25px #E5322C;
}

@media (max-width: 480px) {
  .titulo {
    font-size: 2rem;
  }
}
</style>
