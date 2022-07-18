const initProduct = {
  products: [
    { id: 1, quantity: 1 },
    { id: 2, quantity: 10 },
    { id: 3, quantity: 0 },
    { id: 4, quantity: 1 },
    { id: 5, quantity: 10 },
    { id: 6, quantity: 0 },
    { id: 7, quantity: 10 },
    { id: 8, quantity: 0 },
  ],
};

function cartReducer(state = initProduct.products, action) {
  switch (action.type) {
    case "ADD_CART":
      return state.map((product) => {
        if (product.id === action.payload) {
          return Object.assign({}, product, {
            quantity: product.quantity + 1,
          });
        } else {
          return product;
        }
      });

    case "DELETE_CART":
      return state.map((product) => {
        if (product.id === action.payload && product.quantity > 0) {
          return Object.assign({}, product, { quantity: product.quantity - 1 });
        } else {
          return product;
        }
      });

    default:
      return state;
  }
}

export default cartReducer;
