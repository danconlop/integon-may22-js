<template>
  <div id="app">
    <div id="nav">
      <router-link to="/clientes">Clientes</router-link>
      <router-link to="/facturas">Facturas</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>


export default {
  name: 'App',
  components: {
    
  }
}
</script>

<style>

</style>
