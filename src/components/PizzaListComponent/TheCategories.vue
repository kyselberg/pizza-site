<template>
  <div class="categories">
    <ul>
      <li
        @click="chooseThis(defaultItem)"
        :class="{ active: defaultItem.name === currentItem }"
      >
        {{ defaultItem.name }}
      </li>
      <li
        v-for="(item, index) in items"
        :class="{ active: item.name === currentItem }"
        :key="`${item.name}_${index}`"
        @click="chooseThis(item)"
      >
        {{ item.name }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'TheCategories',
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      defaultItem: { name: 'Все', category: -1 },
      currentItem: 'Все',
    }
  },
  methods: {
    chooseThis(item) {
      this.currentItem = item.name
      this.$emit('category-selected', item.category)
    },
  },
}
</script>
