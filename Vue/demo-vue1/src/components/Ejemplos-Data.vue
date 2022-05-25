<template>
  <div class="container">
    <input v-model="firstName" placeholder="First name" />
    <input v-model="lastName" placeholder="Last name" />
    <br />
    <h3 class="output">{{ fullName }}</h3>

    <div class="container">
      <input type="number" v-model="incrementOne" />
      <h3>Get input: {{ incrementOne }}</h3>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      firstName: "",
      lastName: "",
      count: -1,
    };
  },
  computed: {
    fullName() {
      return `${this.firstName} ${this.lastName}`;
    },
    incrementOne: {
      // getter
      get() {
          console.log(`Regresando el valor: ${this.count+1}`)
        return this.count + 1;
      },
      // setter
      set(val) {
          console.log(`Se recibió el valor: ${this.count}`)
        this.count = val - 1;
        console.log(`Se recibió el valor: ${this.count}`)
      },
    },
  },
};
</script>

<style scoped>
.container {
  margin: 0 auto;
  padding: 30px;
  max-width: 600px;
}
input {
  padding: 10px 6px;
  margin: 20px 10px 10px 0;
}
.output {
  font-size: 16px;
}
</style>