import { createSelector } from "reselect";

const selectCart = (state) => state.cart;


export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems 
);
export const selectCartTotal = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce(
    (accumalulatedQuantity, cartItem) => accumalulatedQuantity + cartItem.quantity,
    0
  )
);
