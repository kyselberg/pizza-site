export default {
  getSortItems(state) {
    return state.sortItems
  },
  getPizzaList(state) {
    return state.pizzaList
  },
  getCategoriesItems(state) {
    return state.categoriesItems
  },
  getPizzaByCategory: (state, getters) => id => {
    if (id === -1) return getters.getPizzaList
    return state.pizzaList.filter(item => item.category === id)
  },
  getCategoryName: state => id => {
    return state.categoriesItems.find(item => item.category === id).name
  },
  getCartCost(state) {
    return state.cartCost
  },
  getCartQuantity(state) {
    return state.cartQuantity
  },
  getCartPizzaList(state) {
    return state.cartPizzaList
  },
  getSizesList(state) {
    return state.sizesList
  },
  getTypesList(state) {
    return state.typesList
  },
  getCounter(state) {
    return name => {
      const el = state.cartPizzaList.filter(el => el.name === name)
      return el[el.length - 1] ? el[el.length - 1].counter : 0
    }
  },
}
