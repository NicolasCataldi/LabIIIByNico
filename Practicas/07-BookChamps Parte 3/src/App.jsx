import { useState } from "react";
import Books from "./components/Books";
import NewBook from "./components/NewBook";
import BookItem from "./components/bookItem/BookItem";
import './App.css';

const App = () => {

  const [books,setBooks] = useState([
    {

      bookTitle: "100 años de soledad",
      bookAuthor: "Gabriel García Marquez",
      bookRating: Array(5).fill("*"),
      pageCount: 410,
      imageUrl:
        "https://images.cdn3.buscalibre.com/fit-in/360x360/61/8d/618d227e8967274cd9589a549adff52d.jpg",
    },
    {
      bookTitle: "Asesinato en el Orient Express",
      bookAuthor: "Agatha Christie",
      bookRating: Array(4).fill("*"),
      pageCount: 256,
      imageUrl:
        "https://m.media-amazon.com/images/I/71RFyM95qwL._AC_UF1000,1000_QL80.jpg",
    },
    {
      bookTitle: "Las dos torres",
      bookAuthor: "J.R.R Tolkien",
      bookRating: Array(5).fill("*"),
      pageCount: 352,
      imageUrl:
        "https://m.media-amazon.com/images/I/A1y0jd28riL._AC_UF1000,1000_QL80.jpg",
    },
    {
      bookTitle: "50 sombras de Grey",
      bookAuthor: "E.L James",
      bookRating: Array(1).fill("*"),
      pageCount: 514,
      imageUrl:
        "https://i.ytimg.com/vi/MfksyvBxeQc/hqdefault.jpg",
    },
  ])


  return (


    <div>
      
        <h2>¡Bienvenidos a Books Champion!</h2>
        <p>¡Quiero leer libros!</p>
        <NewBook books={books} setBooks={setBooks}/>
        <Books BookItem={BookItem} books={books} setBooks={setBooks}></Books>
    </div>
  );
};

export default App;
