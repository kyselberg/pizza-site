<template>
  <div class="pizza-block">
    <pizza-block-header :imageUrl="pizza.imageUrl" :name="pizza.name" />
    <div class="pizza-block__selector">
      <pizza-block-types @picked-type="type = $event" :types="pizza.types" />
      <pizza-block-sizes @picked-size="size = $event" :sizes="pizza.sizes" />
    </div>
    <pizza-block-bottom
      @add-to-cart="addToCart"
      :price="pizza.price"
      :counter="counter"
    />
  </div>
</template>

<script>
import PizzaBlockHeader from '@/components/PizzaBlock/PizzaBlockHeader'
import PizzaBlockTypes from '@/components/PizzaBlock/PizzaBlockTypes'
import PizzaBlockSizes from '@/components/PizzaBlock/PizzaBlockSizes'
import PizzaBlockBottom from '@/components/PizzaBlock/PizzaBlockBottom'
import { ADD_CART_ACTION } from '@/store/constants'
export default {
  name: 'ThePizzaItem',
  components: {
    PizzaBlockBottom,
    PizzaBlockHeader,
    PizzaBlockSizes,
    PizzaBlockTypes,
  },
  props: {
    pizza: Object,
  },
  data() {
    return {
      type: '',
      size: '',
      counter: this.$store.getters.getCounter(this.pizza.name),
    }
  },
  methods: {
    addToCart() {
      this.$store.dispatch(ADD_CART_ACTION, {
        type: this.type,
        size: this.size,
        img: this.pizza.imageUrl,
        price: this.pizza.price,
        name: this.pizza.name,
        counter: ++this.counter,
      })
      console.log(this.$store.getters.getCartPizzaList)
    },
  },
  mounted() {
    console.log(this.$store.getters.getCounter(this.pizza.name))
  },
}
</script>
