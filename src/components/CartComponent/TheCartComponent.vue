<template>
  <cart-empty v-if="isEmpty" />
  <cart-not-empty v-else />
</template>

<script>
import CartNotEmpty from '@/components/CartComponent/CartNotEmpty'
import CartEmpty from '@/components/CartComponent/CartEmpty'
export default {
  name: 'Cart',
  components: {
    CartEmpty,
    CartNotEmpty,
  },
  computed: {
    isEmpty() {
      return !this.$store.getters.getCartQuantity
    },
  },
}
</script>
