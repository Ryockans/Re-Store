import BookInfo from "./book-info";

export default interface BookStoreService {
  data: BookInfo[],
  getBooks: () => Promise<BookInfo[] | Error>
}