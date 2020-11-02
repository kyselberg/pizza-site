<template>
  <ul>
    <li
      v-for="(size, i) in sizesList"
      :class="{
        disabled: !sizes.includes(size),
        active: size === currentSize && sizes.includes(size),
      }"
      :key="size + i"
      @click="pickThis(size)"
    >
      {{ size }} см
    </li>
  </ul>
</template>

<script>
export default {
  name: 'PizzaBlockSizes',
  props: {
    sizes: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      currentSize: '',
    }
  },
  computed: {
    sizesList() {
      return this.$store.getters.getSizesList
    },
  },
  methods: {
    pickThis(size) {
      this.currentSize = size
      this.$emit('picked-size', this.currentSize)
    },
  },
  mounted() {
    this.currentSize = this.sizes[0]
    this.$emit('picked-size', this.currentSize)
  },
}
</script>
