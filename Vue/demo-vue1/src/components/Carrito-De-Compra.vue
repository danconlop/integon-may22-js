<template>
  <section style="display:flex; flex-direction: column; gap: 8px;">
    <div>
        <label>Producto</label>
        <select style="margin-left: 3px;" v-model="precio">
            <option v-for="producto in productos" :key="producto" :value="producto.precio">{{producto.nombre}} $ {{producto.precio}}</option>
        </select>
        <input style="margin-left: 3px;" type="number" v-model="cantidad">
    </div>
    <div>
        <button style="margin-left: 3px;" type="button" @click="agregaProducto()">Agregar</button>
    </div>
    <div>
        Hay {{cantProductos}} productos en el carrito y el total a pagar es: {{total}}
    </div>
    <div>
        <button type="button" @click="limpiaCarrito">Limpiar carrito</button>
    </div>
  </section>
</template>


<script>
export default {
  data() {
    return {
      productos: [
        { id: "1", nombre: "Leche", precio: 65 },
        { id: "2", nombre: "Avena", precio: 35 },
        { id: "3", nombre: "Melon", precio: 30 },
        { id: "4", nombre: "Atun", precio: 33 },
        { id: "5", nombre: "Huevo", precio: 68 },
      ],
      cantidad: 0,
      precio: 0,
      total: 0,
      cantProductos: 0,

    };
  },
  methods: {
    agregaProducto: function () {
        if(this.cantidad > 0 && this.precio > 0){
            this.total += (this.cantidad * this.precio);
            this.cantProductos += parseInt(this.cantidad);

            this.cantidad = 0;
        }
    },
    limpiaCarrito: function () {
      this.total = 0;
      this.cantProductos = 0;
      this.cantidad = 0;
    },
  },
};
</script>