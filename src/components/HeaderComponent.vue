<template>
  <div class="parent">
    <div class="div1" data-aos="fade-right">
      <img
        src="https://placehold.co/400x300?text=Ilustration"
        alt="Illustration Image"
        class="ilustrationContain"
      />
    </div>

    <div class="div2" data-aos="fade-left">
      <h2 class="titleContain">IT MANAGEMENT ZOMAC S.A.S</h2>

      <h3 class="ContainInformation">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis voluptates deserunt labore
        perferendis vel fugiat ipsa inventore. Dolores blanditiis odio eaque similique, soluta dicta
        ratione perspiciatis velit, eligendi ipsam debitis?
      </h3>
    </div>
  </div>
</template>

<script lang="js">
export default {
  name: 'HeaderComponent',
}
</script>

<style scoped>
.parent {
  width: 100%;
  min-height: 50vh; /* Cambiado de height a min-height */
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  /* background-color: var(--color1); */
  padding: 20px;
}

.div1 {
  display: flex;
  justify-content: center;
  align-items: center;
}

.ilustrationContain {
  max-width: 100%;
  height: auto;
  border-radius: 10px;
}

.div2 {
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 20px;
}

.ContainInformation {
  width: 100%;
  /* color: var(--color3); */
  font-family: var(--font-family1);
  font-weight: 300;
  margin-top: 10px;
  text-align: justify;
  font-size: 18px;
}

.titleContain {
  width: 100%;
  font-size: 2.5rem;
  font-weight: 500;
  font-family: var(--font-family2);
  color: var(--color2);
  text-align: left;
}

/* 🌐 Diseño responsive */
@media (max-width: 768px) {
  .parent {
    grid-template-columns: 1fr;
    min-height: auto; /* Permite que el contenedor crezca con el contenido */
    height: 120vh;
  }

  .div1,
  .div2 {
    width: 100%;
  }

  .titleContain {
    text-align: center;
  }

  .ContainInformation {
    text-align: justify;
  }
}
</style>
