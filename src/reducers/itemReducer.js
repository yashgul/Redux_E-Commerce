var selectedItem = {
  id: null,
  quantity: null,
};

const itemReducer = (state = selectedItem, action) => {
  switch (action.type) {
    case "CHOOSE_SELECTED_ITEM":
      state.id = action.payload.id;
      state.quantity = action.payload.quantity;
      return state;

    default:
      return state;
  }
};
export default itemReducer;
