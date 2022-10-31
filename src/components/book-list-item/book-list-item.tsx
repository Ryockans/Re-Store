import React, {FC} from "react";
import bookInfo from "../models/bookInfo";

import styles from './book-list-item.module.css'

interface BookListItemProps {
  data: bookInfo
}

const BookListItem = ({data}: BookListItemProps) => {
  const {id, title, author, price, coverImage: url} = data;

  return (
    <div className={styles.bookListItem}>
      <div className={styles.bookCover}>
        <img src={url} alt="cover" />
      </div>
      <div className={styles.bookDetails}>
        <a href="#" className={styles.bookTitle}>{title}</a>
        <div>{author}</div>
        <div>${price}</div>
        <button className="btn btn-info add-to-cart">Add to cart</button>
      </div>
    </div>

  )
}

export default BookListItem;