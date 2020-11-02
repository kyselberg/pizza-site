<template>
  <img class="pizza-block__image" :src="imageUrl" alt="Pizza" />
  <h4 class="pizza-block__title">{{ name }}</h4>
</template>

<script>
export default {
  name: 'PizzaBlockHeader',
  props: {
    imageUrl: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
  },
}
</script>
