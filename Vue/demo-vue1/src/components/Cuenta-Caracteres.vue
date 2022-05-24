<template>
  <div>
    Texto:
    <input
      type="text"
      id="txtInput"
      v-model="textoCaja"
      @keyup="cuentaCaracteres"
    />
    <p>Has escrito {{ caracteres }} caracteres</p>
  </div>
</template>


<script>
export default {
  // Se ejecuta cuando el componente es montado (ciclo de vida del componente)
  mounted() {
    this.cuentaCaracteres();
  },
  data() {
    return {
      caracteres: 0,
      textoCaja: "TEXTO EJEMPLO",
    };
  },
  methods: {
    cuentaCaracteres: function () {
      this.caracteres = this.textoCaja.length;
    },
  },
};
</script>