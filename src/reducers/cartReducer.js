const initProduct = {
  products: [
    {
      id: 1,
      quantity: 1,
      img: "https://img.freepik.com/free-photo/dessert-fruitcake_144627-10454.jpg?size=626&ext=jpg",
    },
    {
      id: 2,
      quantity: 10,
      img: "https://img.freepik.com/free-photo/crispy-french-fries-with-ketchup-mayonnaise_1150-26588.jpg?size=626&ext=jpg",
    },
    {
      id: 3,
      quantity: 0,
      img: "https://img.freepik.com/premium-photo/chicken-biriyani-using-jeera-rice-arranged-earthenware-with-raitha-grey-background_527904-8.jpg?size=626&ext=jpg",
    },
    {
      id: 4,
      quantity: 1,
      img: "https://img.freepik.com/free-photo/aloo-paratha-gobi-paratha-also-known-as-potato-cauliflower-stuffed-flatbread-dish-originating-from-indian-subcontinent_466689-76173.jpg?size=626&ext=jpg",
    },
    {
      id: 5,
      quantity: 10,
      img: "https://img.freepik.com/free-photo/top-close-up-view-chicken-with-herbs-chicken-legs-with-herbs-lemon-brown-plate-center-table_140725-110684.jpg?size=626&ext=jpg",
    },
    {
      id: 6,
      quantity: 0,
      img: "https://img.freepik.com/premium-photo/chocolate-pyramid-with-blurred-background_23-2148238716.jpg?size=626&ext=jpg",
    },
    {
      id: 7,
      quantity: 10,
      img: "https://img.freepik.com/free-photo/schezwan-noodles-szechwan-vegetable-hakka-noodles-chow-mein-is-popular-indo-chinese-recipes-served-bowl-plate-with-wooden-chopsticks_466689-74642.jpg?size=626&ext=jpg",
    },
    {
      id: 8,
      quantity: 0,
      img: "https://img.freepik.com/free-photo/crispy-fried-chicken-plate-with-salad-carrot_1150-20212.jpg?size=626&ext=jpg",
    },
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
