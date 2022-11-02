import BookInfo from "../components/models/book-info";
import BookStoreService from "../components/models/service";

export default class BookstoreService implements BookStoreService{
  data = [
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
    {
      id: 3,
      title: 'Head First. Kotlin',
      author: 'Dawn Griffiths & David Griffiths',
      price: 100,
      coverImage: 'https://static.insales-cdn.com/images/products/1/3390/276098366/large_HeadFirst.png'
    },
    {
      id: 4,
      title: 'Head First. C',
      author: 'Dawn Griffiths & David Griffiths',
      price: 100,
      coverImage: 'https://s1.livelib.ru/boocover/1002894532/o/9ea4/__Head_First_C.jpeg'
    },
    {
      id: 5,
      title: 'Head First. JavaScript Programming',
      author: 'Eric Freeman & Elisabeth Robson',
      price: 60,
      coverImage: 'https://m.media-amazon.com/images/I/51kTKuJSlqS._SX422_BO1,204,203,200_.jpg'
    },
    {
      id: 6,
      title: 'Head First. Java',
      author: 'Kathy Sierra & Bert Bates',
      price: 90,
      coverImage: 'https://cs11.pikabu.ru/post_img/big/2019/11/15/6/1573807273137037650.jpg'
    },
  ];


  getBooks() {
    return new Promise<BookInfo[] | Error>((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() < 0) reject(new Error('Something bad happens'));
        resolve(this.data);
      }, 0)
    })
  }
}