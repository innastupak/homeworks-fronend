<template>
  <div id="store">
      <StoreItem :product="product" v-for="product in products" :key="product.id"></StoreItem>
  </div>
</template>

<script>
import axios from 'axios';
import StoreItem from "./StoreItem.vue";

export default {
  name: "Store",
  data() {
    return {
      products: []
      }
  },
  components: {
    StoreItem
  },
  props: {
    msg: String
  },
   mounted() {
    axios
      .get('http://localhost:3005/products')
      .then(response => (this.products = response.data));
  }
};
</script>

<style lang="scss">
#store {
  width: 90%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 25% 25% 25% 25%;
  color: #2c3e50;
}
</style>
