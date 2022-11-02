import React from "react";
import {useDispatch} from "react-redux";
import {increment} from "../../reducers/cart-counter";
import {addToCart} from "../../reducers/shopping-cart";

import BookInfo from "../models/book-info";

import styles from './book-list-item.module.css'

interface BookListItemProps {
  data: BookInfo
}

const BookListItem = ({data}: BookListItemProps) => {

  const {id, title, author, price, coverImage: url} = data;
  const dispatch = useDispatch();

  return (

    <div className={styles.bookListItem}>
      <div className={styles.bookCover}>
        <img src={url} alt="cover" />
      </div>
      <div className={styles.bookDetails}>
        <a href="#" className={styles.bookTitle}>{title}</a>
        <div>{author}</div>
        <div className={styles.bookPrice}>${price}</div>
        <button className={styles.buttonAdd}
        onClick={() => {
          dispatch(increment(price));
          dispatch(addToCart({id, title, count: 1, price}))
        }}>
          Add to cart
        </button>
      </div>
    </div>

  )
}

export default BookListItem;