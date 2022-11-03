import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import BookInfo from "../types/book-info";

interface BookListState {
  books: BookInfo[],
  loading: boolean,
  error: Error | null
}

const initialState: BookListState = {
  books: [],
  loading: false,
  error: null
}

export const bookListSlice = createSlice({
    name: 'bookList',
    initialState,
    reducers: {
      booksRequired: (state) => {
        state.books = []
        state.error = null;
        state.loading = true;
      },
      booksLoaded: (state, action: PayloadAction<BookInfo[]>) => {
        state.books = [...action.payload];
        state.error = null;
        state.loading = false;
      },
      booksError: (state, action: PayloadAction<Error>) => {
        state.books = [];
        state.error = action.payload;
        state.loading = false;
      },
    }
  }
)

export const {booksRequired, booksLoaded, booksError} = bookListSlice.actions

export default bookListSlice.reducer