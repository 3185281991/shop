export default {
  CartLength(state) {
    return state.cartList.length;
  },
  totalPrice(state) {
    let total = 0;
    for (let i of state.cartList) {
      if (i.checked) {
        total += i.price * i.count;
      }
    }
    return total.toFixed(2);
  },
  checkLength(state) {
    let length = 0;
    for (let i of state.cartList) {
      if (i.checked) {
        length += i.count;
      }
    }
    return length;
  },
};
