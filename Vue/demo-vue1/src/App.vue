<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <!-- <SlottedComponent>
      <h3>Esto va en el slot</h3>
    </SlottedComponent> -->
    <!-- <Repeat :config="{ times: 5, content: 'Repeat me.' }" /> -->
    <!-- <GreetingsExample :greeting="greeting" :who="who" />
    <button @click="newGreeting()">New Greeting</button> -->

    <!-- <BindingDemo :dato1="input1" v-bind:dato2="input2" dato3="789" /> -->
    <!-- <DemoAxios /> -->
    <!-- <SearchComponent /> -->
    <!-- <CarritoDeCompra/> -->
    <!-- <EjemplosData /> -->
    <!-- <DemoWatcher /> -->
    <!-- <matematico numero1="10" numero2="15" operacion="+" /> -->
    <!-- <EjemploDirectivas /> -->
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    
    <!-- <PugTest /> -->
    <!-- <CuentaCaracteres /> -->
    <!-- <matematico numero1="10" numero2="15" operacion="*" />
    <matematico numero1="10" numero2="15" operacion="-" />
    <matematico numero1="10" numero2="15" operacion="/" /> -->
  </div>
</template>

<script>
// import SearchComponent from "./components/Search-Component.vue";
// import DemoAxios from "./components/Demo-Axios.vue";
// import BindingDemo from "./components/Binding-Demo.vue";
// import GreetingsExample from "./components/Greetings-Example.vue";
import HelloWorld from './components/HelloWorld.vue';
// import matematico from './components/Matematico.vue';
// import PugTest from './components/Pug-Test.vue';
// import CuentaCaracteres from './components/Cuenta-Caracteres.vue';
// import EjemploDirectivas from './components/Ejemplo-Directivas.vue';
// import CarritoDeCompra from './components/Carrito-De-Compra.vue'
// import EjemplosData from './components/Ejemplos-Data.vue'
// import DemoWatcher from './components/Demo-Watcher.vue'
// import Repeat from './components/Repeat-Component.vue'
// import SlottedComponent from './components/Slotted-Component.vue'
// import CardExample from './components/Card-Example.vue'

const possibleGreetings = [
  { greeting: "Hello", who: "Vue.js" },
  { greeting: "Hey", who: "Everyone" },
  { greeting: "Hi", who: "JavaScript" },
];

export default {
  name: "App",
  data() {
    return {
      input1: "123",
      input2: "456",
      input3: "789",
      // Greetings Example
      // greeting: "Hello",
      // who: "Vue.js",
      currentIndex: 0,

    };
  },
  components: {
    // CarritoDeCompra,
    // SearchComponent,
    // DemoAxios,
    // BindingDemo,
    // GreetingsExample,
    // Repeat,
    // SlottedComponent,
    // CardExample,
    HelloWorld,
},
  computed: {
    currentGreeting() {
      return possibleGreetings[this.currentIndex]
    },
    greeting() {
      return this.currentGreeting.greeting
    },
    who() {
      return this.currentGreeting.who
    }
  },
  methods: {
    newGreeting() {
      this.currentIndex = this.currentIndex === possibleGreetings.length - 1 ? 0 : this.currentIndex + 1
    }
  }
};
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
