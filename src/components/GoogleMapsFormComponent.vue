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
          <input type="tel" v-model="form.telefono" class="form-input" required />

          <label class="form-label">Comentario:</label>
          <textarea v-model="form.comentario" class="form-input" required></textarea>

          <div class="form-checkbox">
            <input type="checkbox" id="politicas" v-model="form.politicas" required />
            <label for="politicas" class="form-label">Aceptar políticas de privacidad</label>
          </div>

          <button type="submit" class="form-button">Enviar</button>
        </form>
        <p v-if="mensaje" class="mensaje">{{ mensaje }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        nombre: "",
        email: "",
        telefono: "",
        comentario: "",
        politicas: false
      },
      mensaje: ""
    };
  },
  methods: {
    async enviarFormulario() {
      if (!this.form.politicas) {
        this.mensaje = "Debes aceptar las políticas de privacidad.";
        return;
      }
      try {
        const response = await fetch("https://cfimsas.net/enviar_formulario.php", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: new URLSearchParams(this.form).toString()
        });

        if (!response.ok) {
          throw new Error("Error en la respuesta del servidor");
        }

        const data = await response.json();
        this.mensaje = data.message || "Formulario enviado correctamente";
      } catch {
        this.mensaje = "Error al enviar el formulario";
      }
    }
  }
};
</script>

<style scoped>
.parent-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 80vh;
  padding: 20px;
}

.parent-title {
  font-size: 2.5rem;
  margin-bottom: 30px;
  text-align: center;
  font-family: var(--font-family2);
  color: var(--color2);
  font-weight: 500;
}

.map-container {
  width: 80%;
  height: 55vh;
  position: relative;
  display: flex;
  flex-wrap: wrap;
}

.map-wrapper {
  flex: 1;
  height: 100%;
}

.google-map {
  width: 100%;
  height: 100%;
  border: 0;
}

.form-container {
  width: 30%;
  background: rgba(255, 255, 255, 0.95);
  padding: 20px;
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
  box-shadow: -2px 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
}

.form-title {
  font-size: 1.8rem;
  margin-bottom: 15px;
  color: var(--color2);
  font-family: var(--font-family2);
  text-align: center;
  font-weight: 500;
}

.form-label {
  font-size: 1rem;
  font-weight: bold;
  color: var(--color2);
  display: block;
  margin-bottom: 5px;
  font-family: var(--font-family2);
  font-weight: 400;
}

.form-input {
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
  transition: border 0.3s;
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
  transition: background 0.3s;
}

.form-button:hover {
  background: var(--color8);
}

.mensaje {
  margin-top: 10px;
  font-size: 1rem;
  text-align: center;
  color: #333;
}

@media (max-width: 768px) {

  .parent-container {
    height: 120vh;
  }

  .map-container {
    flex-direction: column;
    height: auto;
  }

  .form-container {
    position: static;
    width: 100%;
    height: auto;
    box-shadow: none;
    margin-top: 10px;
    padding: 15px;
  }
}
</style>
