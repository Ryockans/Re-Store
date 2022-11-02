import React, {useContext, useEffect, useState} from "react";
import { useSelector, useDispatch } from 'react-redux'
import {RootState} from "../../store";

import BookInfo from "../models/book-info";
import BookListItem from "../book-list-item";
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";
import ServiceContext from "../service-context";
import {booksError, booksLoaded, booksRequired} from "../../reducers/book-list";

import styles from './book-list.module.css'


const BookList = () => {

  const data = useSelector((state: RootState) => state.bookList.books);
  const loading = useSelector((state: RootState) => state.bookList.loading);
  const error = useSelector((state: RootState) => state.bookList.error);

  const dispatch = useDispatch();

  const serviceContext = useContext(ServiceContext);

  const fetchBooks = (service) => {
    dispatch(booksRequired());
    service.getBooks()
      .then((data: BookInfo[]) => {
        dispatch(booksLoaded(data));
      })
      .catch((error: Error) => {
        dispatch(booksError(error));
      });
  };

  // ComponentDidMount
  useEffect(() => {
    fetchBooks(serviceContext);
  }, []);

  const renderList = () => {
    return data.map((item: BookInfo, index: number) => {
      return (
        <li key={index}>
          <BookListItem data={item} />
        </li>
      );
    });
  }

  if (loading) {
    return (
      <Spinner/>
    )
  }

  if (error) {
    return (
      <ErrorIndicator/>
    )
  }

  return (
    <ul className={styles.bookList}>
    {
      renderList()
    }
    </ul>
  )
}

export default BookList;