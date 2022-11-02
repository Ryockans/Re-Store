import React from "react";
import ShoppingCart from "../shopping-cart/shopping-cart";
import {useSelector} from "react-redux";
import {RootState} from "../../store";

const CartPage = () => {

  const cartItems = useSelector(((state: RootState) => state.cart.items))

  return (
    <ShoppingCart items={cartItems}/>
  )
}

export default CartPage;
