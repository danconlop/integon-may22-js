<template>
  <div class="container">
    <h1>Shop Watcher</h1>
    <div>
      Black Friday sale
      <strike>Was {{ oldDiscount }}%</strike>
      <strong> Now {{ discount }}% OFF</strong>
      <br />
      <a href="#" @click="updateDiscount">Increase Discount!</a>
    </div>
    <br />
    <div class="container">
      <h1>Deep Watcher</h1>
      <div>
        <h4>{{ product.label }}</h4>
        <h5>${{ product.price }} (${{ discountDeep }} Off)</h5>
      </div>
      <a href="#" @click="updatePrice">Reduce Price!</a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      oldDiscount: 0,
      discount: 5,
      discountDeep: 0,
      product: {
        price: 25,
        label: "Blue juice",
      },
    };
  },
  watch: {
    discount(newValue, oldValue) {
      console.log(
        `oldDiscount: ${this.oldDiscount} Discount: ${this.discount} DISCOUNT OldValue: ${oldValue} DISCOUNT NewValue: ${newValue}`
      );
      this.oldDiscount = oldValue;
      console.log(
        `oldDiscount: ${this.oldDiscount} Discount: ${this.discount} DISCOUNT OldValue: ${oldValue} DISCOUNT NewValue: ${newValue}`
      );
    },
    "product.price"() {
      this.discountDeep++;
    },
  },
  methods: {
    updateDiscount() {
      this.discount = this.discount + 5;
    },
    updatePrice() {
      if (this.product.price < 1) return;
      this.product.price--;
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  margin: 0 auto;
  padding: 30px;
  max-width: 600px;
  font-family: "Avenir", Helvetica, sans-serif;
  margin: 0;
}
a {
  display: inline-block;
  background: rgb(235, 50, 50);
  border-radius: 10px;
  font-size: 14px;
  color: white;
  padding: 10px 20px;
  text-decoration: none;
}
</style>