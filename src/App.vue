<template>
  <div class="wrapper">
    <the-header></the-header>
    <router-view></router-view>
  </div>
</template>

<script>
import TheHeader from '@/components/Header/TheHeader'
import { FETCH_PIZZAS } from '@/store/constants'
export default {
  name: 'App',
  components: { TheHeader },
  created() {
    this.$store.dispatch(FETCH_PIZZAS, this.$store.getters.getSortItems[0].type)
  },
}
</script>

<style src="./assets/scss/app.scss" lang="scss"></style>
