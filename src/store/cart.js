export default {
  state: () => ({
    cart: []
  }),
  mutations: {
    addItemToCart(state, payload) {
      const cartItem = state.cart.find(item => item.id === payload.id);

      if (cartItem) {
        cartItem.cartQuantity += 1;
      } else {
        state.cart.push({...payload, cartQuantity: 1});
      }
    },
    deleteItemFromCartById(state, payload) {
      state.cart = state.cart.filter(item => item.id !== payload);
    },
    updateItemQuantityById(state, payload) {
      state.cart.find(item => item.id === payload.id).cartQuantity = payload.value;
    }
  },
  actions: {},
  getters: {}
}
