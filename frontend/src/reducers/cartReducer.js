const initialState = {
  
  products: [
    { product_id: "12", price: 1200, name: "Apple phone", qty: 1 },
    { product_id: "13", price: 1600, name: "SAMSUNG phone", qty: 2 },
    { product_id: "14", price: 1450, name: "NOKIA phone", qty: 3 },
    { product_id: "15", price: 780, name: "MI phone", qty: 4 }
  ]
};

const cartReducer = (state = initialState, action) => {
  return state;
};

export default cartReducer;
