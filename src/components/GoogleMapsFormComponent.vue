<template>
  <div class="parent-container">
    <h1 class="parent-title">Ubicación y Formulario</h1>
    <div class="map-container">
      <div class="map-wrapper">
        <iframe
          class="google-map"
          src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d296.2443323061153!2d-75.45133285560135!3d2.580402655814782!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMsKwMzQnNDkuNSJOIDc1wrAyNycwNS4xIlc!5e0!3m2!1ses-419!2sus!4v1743686354518!5m2!1ses-419!2sus"
          allowfullscreen
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <div class="form-container">
        <h2 class="form-title">¡Habla con Nosotros!</h2>
        <form @submit.prevent="enviarFormulario">
          <label class="form-label">Nombre:</label>
          <input type="text" v-model="form.nombre" class="form-input" required />
          <label class="form-label">Email:</label>
          <input type="email" v-model="form.email" class="form-input" required />
          <label class="form-label">Teléfono:</label>
          <input type="number" v-model="form.telefono" class="form-input" required />
          <label class="form-label">Comentario:</label>
          <textarea v-model="form.comentario" class="form-input" required></textarea>

          <div class="form-checkbox">
            <input type="checkbox" id="politicas" v-model="form.politicas" required />
            <label for="politicas" class="form-label">
              Acepto las
              <a href="#" @click.prevent="mostrarPolitica = true" class="politica-link">
                políticas de privacidad
              </a>
            </label>
          </div>

          <button type="submit" class="form-button">Enviar</button>
        </form>
        <p v-if="mensaje" class="mensaje">{{ mensaje }}</p>
      </div>
    </div>

    <!-- Modal de políticas -->
    <div v-if="mostrarPolitica" class="modal-overlay" @click.self="mostrarPolitica = false">
      <div class="modal-content">
        <h3>Política de Tratamiento de Datos Personales</h3>
        <p>
          En el evento que se recolecten datos personales sensibles, el Titular podrá negarse a
          autorizar su Tratamiento.
        </p>

        <br />

        <p>
          En <strong>IT MANAGEMENT ZOMAC SAS</strong>, siendo respetuosos con los datos personales
          de los titulares, informamos sus derechos de conocer, actualizar, rectificar o suprimir
          sus datos personales frente a la entidad en su condición de responsable del tratamiento y
          protección en los términos de ley.
        </p>
        <p>
          Así mismo la empresa velará por el uso adecuado del tratamiento al cual serán sometidos
          los datos personales y la finalidad de los mismos, enmarcados dentro del cumplimiento de
          la misión institucional como prestador de servicios de salud y funciones administrativas y
          legales de la entidad.
        </p>
        <br />
        <p>
          La <strong>GERENCIA de IT MANAGEMENT ZOMAC SAS</strong> será responsable de atender las
          peticiones, quejas y reclamos que formule el titular del dato en ejercicio de los derechos
          contemplados en el numeral 5 de la política, a excepción del descrito en su literal e).
        </p>
        <p>
          Para tales efectos, el titular del dato personal o quien ejerza su representación podrá
          enviar su petición, queja o reclamo de lunes a viernes de 8:00 a.m. a 5:00 p.m. al correo
          electrónico <strong>contacto@itmsas.net</strong>, llamar a la línea telefónica en
          Neiva <strong>316 834 9798</strong>, o radicarla en la siguiente dirección
          <strong>Carrera 6 N° 19 - 29, Barrio Quirinal</strong>, correspondientes a la sede administrativa de
          la empresa.
        </p>
        <button class="modal-close" @click="mostrarPolitica = false">Cerrar</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        nombre: '',
        email: '',
        telefono: '',
        comentario: '',
        politicas: false,
      },
      mensaje: '',
      mostrarPolitica: false,
    }
  },

  methods: {

    async enviarFormulario() {
      if (!this.form.politicas) {
        this.mensaje = 'Debes aceptar las políticas de privacidad.';
        return;
      }

      try {
        const response = await fetch('https://itmsas.net/enviar_formulario.php', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: new URLSearchParams(this.form).toString(),
        });

        const data = await response.json();

        if (response.ok) {
          this.mensaje = data.message || 'Formulario enviado correctamente';
        } else {
          this.mensaje = `Error: ${data.message || 'Hubo un problema al enviar el formulario.'}`;
        }
      } catch (error) {
        console.error("Error en el fetch:", error);
        this.mensaje = 'Error al enviar el formulario. Por favor, intenta nuevamente.';
      }
    }

  },
}
</script>

<style scoped>
.parent-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  min-height: 80vh;
}

.parent-title {
  font-size: 3.5rem;
  margin-bottom: 30px;
  text-align: center;
  font-family: var(--font-family2);
  color: var(--color2);
  /* text-shadow: 0 0 10px rgba(229, 50, 44, 0.6); */
  font-weight: 600;
}

.map-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  max-width: 1200px;
  gap: 20px;
}

.map-wrapper {
  flex: 1 1 600px;
  height: 55vh;
  min-width: 280px;
}

.google-map {
  width: 100%;
  height: 100%;
  border: 0;
}

.form-container {
  flex: 1 1 400px;
  min-width: 280px;
  background: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(5px);
  padding: 20px;
  border-radius: 10px;
  box-shadow: -2px 0 10px rgba(0, 0, 0, 0.1);
}

.form-title {
  font-size: 1.8rem;
  margin-bottom: 15px;
  color: var(--color2);
  font-family: var(--font-family2);
  /* text-shadow: 0 0 10px rgba(229, 50, 44, 0.6); */
  text-align: center;
  font-weight: 500;
}

.form-label {
  font-size: 1rem;
  color: var(--color2);
  margin-bottom: 5px;
  display: block;
  font-family: var(--font-family2);
}

.form-input {
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
  resize: none;
  font-family: var(--font-family1);
}

.form-input:focus {
  border-color: var(--color2);
  outline: none;
}

.form-checkbox {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 15px;
}

.form-button {
  width: 100%;
  padding: 12px;
  background: var(--color2);
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
}

.form-button:hover {
  background: var(--color8);
}

.mensaje {
  margin-top: 10px;
  font-size: 1rem;
  text-align: center;
  color: #333;
  font-family: var(--font-family1);
}

.politica-link {
  color: var(--color2);
  text-decoration: none;
  cursor: pointer;
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: 20px;
}

.modal-content {
  background-color: #fff;
  max-width: 600px;
  max-height: 80vh;
  overflow-y: auto;
  padding: 25px;
  border-radius: 10px;
  font-family: var(--font-family2);
  color: #333;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
  position: relative;
}

.modal-content h3 {
  margin-top: 0;
  color: var(--color2);
  font-size: 1.5rem;
  /* text-shadow: 0 0 6px rgba(229, 50, 44, 0.5); */
}

.modal-close {
  margin-top: 20px;
  background-color: var(--color2);
  font-family: var(--font-family1);
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 6px;
  cursor: pointer;
}

.modal-close:hover {
  background-color: var(--color8);
}

/* Responsividad */
@media (max-width: 1024px) {
  .parent-title {
    font-size: 2.5rem;
  }
}

@media (max-width: 768px) {
  .map-container {
    flex-direction: column;
  }

  .map-wrapper,
  .form-container {
    width: 100%;
    height: auto;
  }

  .form-container {
    box-shadow: none;
    margin-top: 10px;
  }

  .parent-title {
    font-size: 2rem;
  }

  .modal-content {
    top: 4%;
  }
}
</style>
