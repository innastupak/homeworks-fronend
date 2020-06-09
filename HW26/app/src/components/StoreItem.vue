<template>
  <div class="storeitem">
    <div class="label label-sale" v-if="product.sale">-{{product.sale}}</div>
    <div class="label label-top" v-if="product.topLabel">Топ продаж</div>

    <img :src="require(`@/assets/${product.img}`)" />
    <div class="product-name">{{product.name}}</div>

    <div v-if="product.sale" class="old-price">{{product.price}} {{product.curency}}</div>
    <div v-else>{{product.price}} {{product.curency}}</div>
    <div v-if="product.sale" class="new-price">{{newPrice}} {{product.curency}}</div>

    <div v-if="product.promoCode" class="promo-sale">
      Промокод на знижку: <span>{{product.promoSale}}</span>
      <br />
      {{product.promoCode}}
    </div>

    <button>Купить</button>
  </div>
</template>

  <script>
export default {
  name: "StoreItem",
  computed: {
    newPrice: function() {
      return Math.ceil(
        this.product.price -
          (this.product.price * parseInt(this.product.sale)) / 100
      );
    }
  },
  props: {
    product: Object
  }
};
</script>

<style lang="scss">
.storeitem {
  padding: 20px 20px 50px 20px;
  border: 0.5px solid #ccc;
  color: #2c3e50;
  position: relative;
}
img {
  width: 100%;
  height: 200px;
  object-fit: contain;
  margin-bottom: 20px;
}
.promo-sale span {
  color: red;
}
.old-price {
  text-decoration: line-through;
  color: grey;
}
.new-price {
  color: red;
  font-size: 20px;
}
.price {
  font-size: 20px;
}
.label {
  float: left;
  padding: 5px;
  margin-bottom: 5px;
  border-radius: 10px;
  color: white;
}
.label-top {
  background: orange;
  width: 90px;
}
.label-sale {
  background: red;
  width: 40px;
}
button {
  padding: 5px 20px;
  color: black;
  position: absolute;
  bottom: 15px;
}
</style>
