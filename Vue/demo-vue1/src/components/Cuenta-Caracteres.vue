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
  beforeCreate(){
    console.log('Before create...');
  },
  created(){
    console.log('Created....');
  },
  beforeMount(){
    console.log('Before mount...');
  },
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