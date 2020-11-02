import * as _ from '@/store/constants'

export default {
  [_.FETCH_PIZZAS]({ state, commit }, payload) {
    fetch('https://next.json-generator.com/api/json/get/41I88wFPK')
      .then(response => response.json())
      .then(json => {
        const list = []
        for (const item of json.pizzas) {
          list.push(item)
        }
        state.pizzaList = list
      })
      .then(() => {
        commit(_.SORT_MUTATION, payload)
      })
  },
  [_.SORT_ACTION]({ commit }, payload) {
    commit(_.SORT_MUTATION, payload)
  },
  [_.ADD_CART_ACTION]({ commit }, payload) {
    commit(_.ADD_CART_MUTATION, payload)
  },
  [_.REMOVE_CART_ACTION]({ commit }, payload) {
    commit(_.REMOVE_CART_MUTATION, payload)
  },
  [_.CLEAR_CART_ACTION]({ commit }) {
    commit(_.CLEAR_CART_MUTATION)
  },
}
