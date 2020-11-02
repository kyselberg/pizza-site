<template>
  <div class="content">
    <div class="container">
      <div class="content__top">
        <the-categories
          @category-selected="category = $event"
          :items="this.$store.getters.getCategoriesItems"
        />
        <sort-popup :items="this.$store.getters.getSortItems" />
      </div>
      <h2 class="content__title">
        {{ category === -1 ? 'Все' : categoryTitle(category) }} пиццы
      </h2>
      <div class="content__items" :class="{ jstart: category > -1 }">
        <pizza-block-layout
          v-for="pizza in pizzaList(category)"
          :key="pizza.id"
          :pizza="pizza"
        />
      </div>
    </div>
  </div>
</template>

<script>
import SortPopup from '@/components/PizzaListComponent/SortPopup'
import TheCategories from '@/components/PizzaListComponent/TheCategories'
import PizzaBlockLayout from '@/components/PizzaBlock/PizzaBlockLayout'
import { mapGetters } from 'vuex'
export default {
  name: 'ThePizzaComponent',
  components: { PizzaBlockLayout, SortPopup, TheCategories },
  data() {
    return {
      category: -1,
    }
  },
  computed: {
    ...mapGetters({
      pizzaList: 'getPizzaByCategory',
      categoryTitle: 'getCategoryName',
    }),
  },
}
</script>

<style>
div.jstart {
  justify-content: flex-start;
}
</style>
