<template>
  <router-link to="/cart" class="button">
    <slot></slot>
  </router-link>
</template>

<script>
export default {
  name: 'CartButton',
}
</script>
