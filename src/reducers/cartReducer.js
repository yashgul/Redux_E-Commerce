function compare(a, b) {
  if (a.id > b.id) return 1;
  else return -1;
}

let products;
let productToUpdate;
let finalstate;
const initProduct = {
  filter_val: "",
  filter_cat: "",
  products: [
    {
      id: 1,
      quantity: 1,
      img: "https://img.freepik.com/free-photo/dessert-fruitcake_144627-10454.jpg?size=626&ext=jpg",
      cost: 30,
      title: "Chocolate Crumble",
      desc: "Signature Chocolate cake coasted with crushed cookies and slathered in chocolate cream garnished with fruits",
    },
    {
      id: 2,
      quantity: 10,
      img: "https://img.freepik.com/free-photo/crispy-french-fries-with-ketchup-mayonnaise_1150-26588.jpg?size=626&ext=jpg",
      cost: 12,
      title: "French Fries",
      desc: "Twice fried thinly cut french fries with a crispy outside and fluffy on the inside served with customisable sauces",
    },
    {
      id: 3,
      quantity: 0,
      img: "https://img.freepik.com/premium-photo/chicken-biriyani-using-jeera-rice-arranged-earthenware-with-raitha-grey-background_527904-8.jpg?size=626&ext=jpg",
      cost: 22,
      title: "Chicken Biryani",
      desc: "Slow cooked biryani with layers of long grained basmati saffron rice and aromatic chicken falling off the bone",
    },
    {
      id: 4,
      quantity: 1,
      img: "https://img.freepik.com/free-photo/aloo-paratha-gobi-paratha-also-known-as-potato-cauliflower-stuffed-flatbread-dish-originating-from-indian-subcontinent_466689-76173.jpg?size=626&ext=jpg",
      cost: 11,
      title: "Paneer Paratha",
      desc: "A famous north indian flat bread made with whole wheat flour and stuffed with grated cottage cheese garnished with green chillies",
    },
    {
      id: 5,
      quantity: 10,
      img: "https://img.freepik.com/free-photo/top-close-up-view-chicken-with-herbs-chicken-legs-with-herbs-lemon-brown-plate-center-table_140725-110684.jpg?size=626&ext=jpg",
      cost: 18,
      title: "Grilled Chicken",
      desc: "Boneless Grilled Chicken roasted fresh and covered in tangy sauce garnished with cilantro and lemon wedges",
    },
    {
      id: 6,
      quantity: 0,
      img: "https://img.freepik.com/premium-photo/chocolate-pyramid-with-blurred-background_23-2148238716.jpg?size=626&ext=jpg",
      cost: 24,
      title: "Choclate Stack",
      desc: "A chocolate lovers dream featuring various european chocolates alongside smores, brownies, wine and ice-cream !",
    },
    {
      id: 7,
      quantity: 10,
      img: "https://img.freepik.com/free-photo/schezwan-noodles-szechwan-vegetable-hakka-noodles-chow-mein-is-popular-indo-chinese-recipes-served-bowl-plate-with-wooden-chopsticks_466689-74642.jpg?size=626&ext=jpg",
      cost: 16,
      title: "Hakka Noodles",
      desc: "Perfect amalgamtion of indian and chinese cuisine containing noodles stir fried with vegetables sautéed in a soy based sauce",
    },
    {
      id: 8,
      quantity: 0,
      img: "https://img.freepik.com/free-photo/crispy-fried-chicken-plate-with-salad-carrot_1150-20212.jpg?size=626&ext=jpg",
      cost: 25,
      title: "Fried Chicken",
      desc: "Flavourful chicken marinated in buttermilk and served alongside a creamy caesar salad perfect after a day of tiring work",
    },
  ],
};

function cartReducer(state = initProduct, action) {
  switch (action.type) {
    case "SORT":
      console.log(state);

      if (state.filter_val !== "") {
        products = initProduct.products.filter((item) => {
          console.log(item);
          item.title.toLowerCase().includes(state.filter_val.toLowerCase());
        });
      } else products = initProduct.products;
      return {
        ...state,
        filter_cat: action.payload,
        products: products,
      };

    case "CHANGE_FILTER":
      console.log(state);
      products = initProduct.products.filter((item) =>
        item.title.toLowerCase().includes(action.payload.toLowerCase())
      );
      return {
        ...state,
        filter_val: action.payload,
        products: products,
      };

    case "ADD_CART":
      productToUpdate = state.products.find(
        (item) => item.id === action.payload
      );
      productToUpdate = {
        ...productToUpdate,
        quantity: productToUpdate.quantity + 1,
      };
      console.log(productToUpdate);
      products = state.products.filter((item) => item.id != productToUpdate.id);
      console.log(products);
      finalstate = { ...state, products: [...products, productToUpdate] };
      finalstate.products.sort(compare);
      console.log(finalstate.products);
      return finalstate;

    case "DELETE_CART":
      productToUpdate = state.products.find(
        (item) => item.id === action.payload
      );
      productToUpdate = {
        ...productToUpdate,
        quantity: productToUpdate.quantity - 1,
      };
      console.log(productToUpdate);
      products = state.products.filter((item) => item.id != productToUpdate.id);
      console.log(products);
      finalstate = { ...state, products: [...products, productToUpdate] };
      finalstate.products.sort(compare);
      return finalstate;

    default:
      return state;
  }
}

export default cartReducer;
