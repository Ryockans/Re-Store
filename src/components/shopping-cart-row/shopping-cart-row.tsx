import React, {FC} from "react";
import styles from './shopping-cart-row.module.css'
import {useDispatch} from "react-redux";
import {increment, decrement, clean} from "../../reducers/cart-counter";
import {addToCart, removeFromCart, removeAll} from "../../reducers/shopping-cart";

import ShoppingCartItem from "../../types/shopping-cart-item";

interface ShoppingCartRowProps {
  item: ShoppingCartItem,
  index: number
}

const ShoppingCartRow: FC<ShoppingCartRowProps> = (props) => {
  const {item: {id, title, count, price}, index} = props;

  const dispatch = useDispatch();

  const total = count * price

  return (
    <tr key={id}>
      <td>{index + 1}</td>
      <td>{title}</td>
      <td>{count}</td>
      <td>${total}</td>
      <td>
        <button className={styles.button + ' ' + styles.increase}
                onClick={() => {
                  dispatch(increment(price));
                  dispatch(addToCart({id, title, count: 1, price}))
                }}
        >
          +
        </button>

        <button className={styles.button + ' ' +  styles.decrease}
                onClick={() => {
                  dispatch(decrement(price));
                  dispatch(removeFromCart({id, title, count: 1, price}))
                }}
        >
          -
        </button>

        <button className={styles.button + ' ' +  styles.delete}
                onClick={() => {
                  dispatch(clean({count, total}))
                  dispatch(removeAll({id, title, count: 1, price}))
                }}
        >
          Delete
        </button>
      </td>
    </tr>
  )
}

export default ShoppingCartRow