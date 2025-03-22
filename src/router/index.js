import { createRouter, createWebHistory } from 'vue-router';
import InicioView from '@/views/InicioView.vue';
import NosotrosView from '@/views/NosotrosView.vue';
import ContactoView from '@/views/ContactoView.vue';
import ServiciosView from '@/views/ServiciosView.vue';


const routes = [
  { path: '/', component: InicioView },
  { path: '/nosotros', component: NosotrosView },
  { path: '/contacto', component: ContactoView },
  { path: '/servicios', component: ServiciosView }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
