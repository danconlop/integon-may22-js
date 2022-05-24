<template>
  <section>
    <div class="form">
      <!-- // Ejercicio 1.07 -->
      <label>
        Name
        <input type="text" v-model="name" />
      </label>
      <label>
        Preferred javascript style
        <select name="language" v-model="language">
          <option value="Javascript">JavaScript</option>
          <option value="TypeScript">TypeScript</option>
          <option value="CoffeeScript">CoffeeScript</option>
          <option value="Dart">Dart</option>
        </select>
      </label>
    </div>
    <ul class="overview">
      <li><strong>Overview</strong></li>
      <li>Name: {{ name }}</li>
      <li>Preference: {{ language }}</li>
    </ul>
    <!-- Loop -->
    <ul>
      <li v-for="n in 5" :key="`loop-1-${n}`">
        {{ n }}
      </li>
      <li v-for="n in 5" :key="`loop-2-${n}`">
        {{ n }}
      </li>
    </ul>
    <!-- Loop -->
    <ul>
      <li v-for="n in 5" :key="n">
        {{ n }}
      </li>
    </ul>
    <!-- Loop -->
    <ul>
      <li v-for="(pasatiempo, index) in pasatiempos" :key="index">
        {{ index }}. {{ pasatiempo }}
      </li>
    </ul>
    <!-- Loop -->
    <ul v-if="personas.length > 0">
      <li v-for="(persona, index) in personas" :key="index">
        {{ persona.id }}.- {{ persona.nombre }} {{ persona.estado }}
      </li>
    </ul>
    <div>
      <h1>Triggering Vue Methods</h1>
      <ul>
        <li v-for="n in 5" :key="n">
          <a href="#" @click="triggerAlert(n)">Trigger {{ n }}</a>
        </li>
      </ul>
    </div>
    <div>
      <h1>{{ text }}</h1>
      <h1 v-once v-text="text"></h1>
      <h2 v-html="textoHTML"></h2>
      <a
        :href="link.url"
        :target="link.target"
        :tabindex="link.tabindex"
        v-text="link.title"
      />
      <p v-if="cantidad > 100">Cantidad es mayor de 100</p>
      <p v-else-if="cantidad > 50">Cantidad es mayor de 50</p>
      <p v-else>Cantidad no es mayor de 50 ni de 100</p>
      <br />
      <button @click="actualizaTexto">Click Me!!!</button>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      // v-text
      text: "Directive text",
      textoHTML: "Stylise</br>HTML in<br/><b>your data</b>",
      // v-bind
      link: {
        url: "https://google.com",
        target: "_blank",
        tabindex: "0",
        title: "Go to Google",
      },
      cantidad: 100,
      name: "",
      language: "",
      pasatiempos: ["Xbox", "Netflix", "Correr", "Dormir", "Maraton"],
      personas: [
        { id: "1", nombre: "Daniel", estado: "Sonora" },
        { id: "2", nombre: "Ernesto", estado: "Jalisco" },
        { id: "3", nombre: "Lupe", estado: "BC" },
      ],
    };
  },
  methods: {
    actualizaTexto: function () {
      this.text = "nuevo texto";
    },
    triggerAlert(n) {
      alert(`${n} has been clicked`);
    },
  },
};
</script>
<!-- <style lang="scss" scoped>
h2 {
  margin: 40px 0 0;
  font-weight: normal;
}
</style> -->

<style lang="scss">
.form {
  display: flex;
  justify-content: space-evenly;
  max-width: 800px;
  padding: 40px 20px;
  border-radius: 10px;
  margin: 0 auto;
  background: #ececec;
}

.overview {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  max-width: 300px;
  margin: 40px auto;
  padding: 40px 20px;
  border-radius: 10px;
  border: 1px solid #ececec;

  > li {
    list-style: none;
    + li {
      margin-top: 20px;
    }
  }
}
</style>