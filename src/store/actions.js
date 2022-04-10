import { ADD_COUNTER, ADD_TO_CART } from "store/mutations-type.js";
export default {
  addCart(context, payload) {
    //payload是新添加的商品，判断新加的商品是否存在
    // let oldProduct = null;
    // for (let i of state.cartList) {
    //   if (i.iid === payload.iid) oldProduct = i;
    // }
    return new Promise((resolve, reject) => {
      let oldProduct = context.state.cartList.find((item) => {
        return item.iid === payload.iid;
      });
      if (oldProduct) {
        // oldProduct.count += 1;
        context.commit(ADD_COUNTER, oldProduct);
        resolve("商品数量+1");
      } else {
        payload.count = 1;
        // context.state.cartList.push(payload);
        context.commit(ADD_TO_CART, payload);
        resolve("成功添加新商品");
      }
    });
  },
};
