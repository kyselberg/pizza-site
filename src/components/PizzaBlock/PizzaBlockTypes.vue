<template>
  <ul>
    <li
      v-for="(type, nativeType) in typesList"
      :class="{
        disabled: !this.types.includes(nativeType),
        active: type === currentType && this.types.includes(nativeType),
      }"
      :key="type + nativeType"
      @click="pickThis(type)"
    >
      {{ type }}
    </li>
  </ul>
</template>

<script>
export default {
  name: 'PizzaBlockTypes',
  props: {
    types: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      currentType: '',
    }
  },
  computed: {
    typesList() {
      return this.$store.getters.getTypesList
    },
  },
  methods: {
    pickThis(type) {
      this.currentType = type
      this.$emit('picked-type', this.currentType)
    },
  },
  mounted() {
    this.currentType = !this.types[0] ? 'тонкое' : 'традиционное'
    this.$emit('picked-type', this.currentType)
  },
}
</script>
