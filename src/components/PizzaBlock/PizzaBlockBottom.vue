<template>
  <div class="pizza-block__bottom">
    <div class="pizza-block__price">от {{ price }} ₽</div>
    <div @click="addToCart" class="button button--outline button--add">
      <svg
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
          fill="white"
        />
      </svg>
      <span>Добавить</span>
      <i v-if="counter">{{ counter }}</i>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PizzaBlockBottom',
  props: {
    price: {
      type: Number,
      required: true,
    },
    counter: {
      type: Number,
      required: true,
    },
  },
  methods: {
    addToCart() {
      this.$emit('add-to-cart')
    },
    // removeFromCart () {
    //   if (this.counter > 0) this.$store.dispatch(REMOVE_CART_ACTION, this.price)
    //   this.counter = this.counter > 0 ? this.counter - 1 : this.counter
    // }
  },
  // beforeCreate () {
  //   console.log('beforeCreate: ', this.$store.getters.getCartPizzaList)
  // },
  // created () {
  //   this.counter = this.counter || 0
  //   console.log('created: ', this.$store.getters.getCartPizzaList)
  // },
  // beforeMount () {
  //   console.log('beforeMount: ', this.$store.getters.getCartPizzaList)
  // },
  // mounted () {
  //   // const key = this.name + this.size + this.type
  //   // this.counter = this.$store.getters.getCartPizzaList[key].counter || 0
  //   console.log('mounted', this.$store.getters.getCartPizzaList)
  // },
  // beforeUpdate () {
  //   console.log('beforeUpdate: ', this.$store.getters.getCartPizzaList)
  // },
  // updated () {
  //   console.log('update: ', this.$store.getters.getCartPizzaList)
  // }
}
</script>
