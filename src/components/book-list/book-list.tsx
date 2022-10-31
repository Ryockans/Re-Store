import React from "react";
import bookInfo from "../models/bookInfo";
import BookListItem from "../book-list-item";

import styles from './book-list.module.css'

const localData: bookInfo[] = [
  {
    id: 1,
    title: 'Production-Ready Microservices',
    author: 'Susan J. Fowler',
    price: 32,
    coverImage: 'https://images-na.ssl-images-amazon.com/images/I/41yJ75gpV-L._SX381_BO1,204,203,200_.jpg'
  },
  {
    id: 2,
    title: 'Release It!',
    author: 'Michael T. Nygard',
    price: 45,
    coverImage: 'https://images-na.ssl-images-amazon.com/images/I/414CRjLjwgL._SX403_BO1,204,203,200_.jpg'
  },
];

const BookList = () => {

  return (
    <ul className={styles.bookList}>
    {
      localData.map((item: bookInfo, index: number) => {
        return (
          <li>
            <BookListItem data={item} key={index}/>
          </li>
        );
      })
    }
    </ul>
  )
}

export default BookList;