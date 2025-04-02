<template>
  <section class="sectionHeader">

      <div class="containLogo">

          <router-link to="/" class="refLogo">

              <img class="imageLogo" src="../assets/images/logos/IT.png" alt="Company Logo">

          </router-link>

      </div>

      <div class="containNav">

          <router-link to="/" class="itemNav"><i class='bx bx-home-alt'></i><span>Inicio</span></router-link>
          <router-link to="/nosotros" class="itemNav"><i class='bx bx-group'></i><span>Nosotros</span></router-link>
          <router-link to="/contacto" class="itemNav"><i class='bx bx-phone'></i><span>Contacto</span></router-link>
          <router-link to="/servicios" class="itemNav"><i class='bx bx-server'></i><span>Servicios</span></router-link>

      </div>

      <button class="menuToggle" @click="toggleMenu" v-if="isMobile">

          <i class='bx bx-menu'></i>

      </button>

  </section>

  <div v-if="isMenuOpen && isMobile" class="overlay" @click="toggleMenu"></div>

  <div class="mobileNav" :class="{ 'active': isMenuOpen }" v-if="isMobile">

      <button class="closeMenu" @click="toggleMenu">&times;</button>
      <router-link to="/" class="itemNav" @click="toggleMenu"><i class='bx bx-home-alt'></i><span>Inicio</span></router-link>
      <router-link to="/nosotros" class="itemNav" @click="toggleMenu"><i class='bx bx-group'></i><span>Nosotros</span></router-link>
      <router-link to="/contacto" class="itemNav" @click="toggleMenu"><i class='bx bx-phone'></i><span>Contacto</span></router-link>
      <router-link to="/servicios" class="itemNav" @click="toggleMenu"><i class='bx bx-server'></i><span>Servicios</span></router-link>

  </div>

</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const isMenuOpen = ref(false);
const isMobile = ref(window.innerWidth <= 768);

const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
};

const updateScreenSize = () => {
    isMobile.value = window.innerWidth <= 768;
};

onMounted(() => {
    window.addEventListener('resize', updateScreenSize);
});

onUnmounted(() => {
    window.removeEventListener('resize', updateScreenSize);
});
</script>

<style scoped>

.sectionHeader {
    width: 100%;
    height: 5rem;
    display: flex;
    background-color: transparent;
    justify-content: space-evenly;
    align-items: center;
    padding: 0 40px;
    position: absolute;
    z-index: 10000;
}

.refLogo {
    display: flex;
    width: 80px;
    height: 5rem;
    align-items: center;
    justify-content: center;
}

.imageLogo {
    display: flex;
    height: 4rem;
    background-size: contain;
}

.containNav {
    display: flex;
    width: 40%;
    justify-content: space-between;
    align-items: center;
}

.itemNav {
    text-decoration: none;
    font-family: var(--font-family1);
    font-weight: 500;
    color: var(--color1);
    transition-duration: .5s;
    font-size: 18px;
    display: flex;
    align-items: center;
    gap: 8px;
    z-index: 11000;
}

.itemNav:hover {
    color: var(--color2);
}

.menuToggle, .closeMenu {
    display: none;
    background: none;
    border: none;
    font-size: 2rem;
    cursor: pointer;
    color: var(--color1);
}

.overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: 5;
}

.mobileNav {
    display: none;
    flex-direction: column;
    position: fixed;
    top: 0;
    right: -100%;
    width: 250px;
    height: 100vh;
    background-color: var(--color2);
    justify-content: flex-start;
    align-items: flex-start;
    padding: 20px;
    transition: right 0.3s ease-in-out;
    z-index: 12000;
}

.mobileNav.active {
    right: 0;
    display: flex;
}

.mobileNav .itemNav {
    margin-bottom: 20px;
    gap: 12px;
}

@media (max-width: 768px) {

    .sectionHeader {
        display: flex;
        justify-content: space-between;
    }

    .containNav {
        display: none;
    }

    .menuToggle {
        display: block;
    }

    .closeMenu {
        display: block;
        position: absolute;
        top: 15px;
        right: 15px;
    }
}
</style>
