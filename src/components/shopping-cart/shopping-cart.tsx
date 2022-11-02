import React, {FC} from 'react';
import {useSelector} from "react-redux";
import {RootState} from "../../store";
import ShoppingCartItem from "../models/shopping-cart-item";
import ShoppingCartRow from "../shopping-cart-row";

import styles from './shopping-cart.module.css'

interface ShoppingCartProps {
  items: ShoppingCartItem[]
}

const ShoppingCart: FC<ShoppingCartProps> = ({items}) => {

  const total = useSelector((state: RootState) => state.counter.total)

  return (
    <div>
      <h2>Your Order</h2>
      <table className={styles.shoppingCartTable}>
        <col width='5%'></col>
        <col ></col>
        <col width='7%'></col>
        <col width='10%'></col>
        <col width='16%'></col>
        <thead>
        <tr>
          <th>#</th>
          <th>Item</th>
          <th>Count</th>
          <th>Price</th>
          <th>Action</th>
        </tr>
        </thead>
        <tbody>
        {
          items.map((item, index) => {
            return (
              <ShoppingCartRow key={index} item={item} index={index}/>
            )
          })
        }
        </tbody>
      </table>

      <div className={styles.total}>
        Total: ${total}
      </div>
    </div>
  );
}

export default ShoppingCart;