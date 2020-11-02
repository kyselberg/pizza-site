import * as _ from '@/store/constants'

export default {
  [_.SORT_MUTATION](state, payload) {
    switch (payload) {
      case 'popular': {
        state.pizzaList.sort((a, b) => b.rating - a.rating)
        break
      }
      case 'price': {
        state.pizzaList.sort((a, b) => a.price - b.price)
        break
      }
      case 'alphabet': {
        state.pizzaList.sort((a, b) => {
          const nameA = a.name.toLowerCase()
          const nameB = b.name.toLowerCase()
          if (nameA < nameB) return -1
          else if (nameA > nameB) return 1
          else return 0
        })
        break
      }
    }
  },
  [_.ADD_CART_MUTATION](state, payload) {
    state.cartCost += payload.price
    state.cartQuantity += 1
    // state.cartPizzaList.forEach(el => {
    //   if (el.name === payload.name) el.counter = payload.counter
    // })
    // if (state.cartPizzaList[state.cartPizzaList.length - 1].name === payload.name) {
    //
    // }
    if (
      state.cartPizzaListNames.includes(
        payload.name + payload.size + payload.type
      )
    ) {
      const el = state.cartPizzaList.find(el => {
        return (
          el.name === payload.name &&
          el.size === payload.size &&
          el.type === payload.type
        )
      })
      el.counter = payload.counter
    } else {
      state.cartPizzaList.push(payload)
      state.cartPizzaListNames.push(payload.name + payload.size + payload.type)
    }
    // state.cartPizzaList.forEach(el => {
    //   if (el.name === payload.name) {
    //     el.counter = payload.counter
    //     state.cartPizzaListNames.push(payload.name)
    //   } else {
    //     state.cartPizzaList.push(payload)
    //     state.cartPizzaListNames.push(payload.name)
    //   }
    // })
  },
  [_.REMOVE_CART_MUTATION](state, payload) {
    if (state.cartQuantity && state.cartCost) {
      state.cartCost -= payload
      state.cartQuantity--
    }
  },
  [_.CLEAR_CART_MUTATION](state) {
    state.cartCost = 0
    state.cartQuantity = 0
    state.cartPizzaList.splice(0)
  },
}
