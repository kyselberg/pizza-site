export default {
  pizzaList: [],
  sortItems: [
    { name: 'популярности', type: 'popular' },
    { name: 'цене', type: 'price' },
    { name: 'алфавиту', type: 'alphabet' },
  ],
  categoriesItems: [
    { name: 'Мясные', category: 0 },
    { name: 'Вегетарианские', category: 1 },
    { name: 'Гриль', category: 2 },
    { name: 'Острые', category: 3 },
    { name: 'Закрытые', category: 4 },
  ],
  sizesList: [26, 30, 40],
  typesList: ['тонкое', 'традиционное'],
  cartQuantity: 0,
  cartCost: 0,
  cartPizzaList: [],
  cartPizzaListNames: [],
}
