<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <CarritoDeCompra/>
    <!-- <EjemploDirectivas />
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <matematico numero1="10" numero2="15" operacion="+" />
    <PugTest />
    <CuentaCaracteres /> -->
    <!-- <matematico numero1="10" numero2="15" operacion="*" />
    <matematico numero1="10" numero2="15" operacion="-" />
    <matematico numero1="10" numero2="15" operacion="/" /> -->
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue';
// import matematico from './components/Matematico.vue';
// import PugTest from './components/Pug-Test.vue';
// import CuentaCaracteres from './components/Cuenta-Caracteres.vue';
// import EjemploDirectivas from './components/Ejemplo-Directivas.vue';
import CarritoDeCompra from './components/Carrito-De-Compra.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld,
    // matematico,
    // PugTest,
    // CuentaCaracteres,
    // EjemploDirectivas,
    CarritoDeCompra
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
