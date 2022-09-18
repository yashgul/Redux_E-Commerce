export const increment = (payload) => {
  return {
    type: "INCREMENT",
    payload,
  };
};

export const decrement = () => {
  return {
    type: "DECREMENT",
  };
};

export const reset = () => {
  return {
    type: "RESET",
  };
};

export function GetNumberCart() {
  return {
    type: "GET_NUMBER_CART",
  };
}

export function AddCart(payload) {
  return {
    type: "ADD_CART",
    payload,
  };
}

export function DeleteCart(payload) {
  return {
    type: "DELETE_CART",
    payload,
  };
}
export function ChooseSelectedItem(payload) {
  return {
    type: "CHOOSE_SELECTED_ITEM",
    payload,
  };
}
export function ChangeFilter(payload) {
  return {
    type: "CHANGE_FILTER",
    payload,
  };
}

export function GetProducts(payload) {
  return {
    type: "GET_PRODUCTS",
    payload,
  };
}
