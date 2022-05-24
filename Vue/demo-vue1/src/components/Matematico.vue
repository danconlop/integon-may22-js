<template>
    <div>
        <p>Número 1: {{ numero1 }} Número 2: {{ numero2 }} Resultado: {{ resultado }}</p>
        <p>{{mayusculas ? texto.toUpperCase() : texto}}</p>
        <div>
          <h1>{{ title }}</h1>
          <h2>{{ subtitle }}</h2>
          <ul>
            <li>{{ items[0] }}</li>
            <li>{{ items[1] }}</li>
            <li>{{ items[2] }}</li>
          </ul>
        </div>
    </div>
</template>


<style lang="scss">
  @import '../assets/styles/typography.scss'
</style>

<script>
export default {
  name: 'Matematico-1',
  props: {
    numero1: String,
    numero2: String,
    operacion: String
  },
  data() {
    return {
      resultado: 0,
      texto: "texto de ejemplo",
      mayusculas: true,
      title: 'My list component!',
      subtitle: 'Vue JS basics',
      items: ['Item 1', 'Item 2', 'Item 3']
    }
  },
  methods: {
    calculaOperacion: function(){
      switch(this.operacion){
          case "+":
            this.resultado = parseInt(this.numero1) + parseInt(this.numero2);
            break;
          case "*":
            this.resultado = parseInt(this.numero1) * parseInt(this.numero2);
            break;
          case "-":
            this.resultado = parseInt(this.numero1) - parseInt(this.numero2);
            break;
          case "/":
            this.resultado = parseInt(this.numero1) / parseInt(this.numero2);
            break;
        }
    }
  },
  watch: {
    $props: {
      handler(){
        this.calculaOperacion()
      },
      immediate:true
    }
  }
}

    
</script>