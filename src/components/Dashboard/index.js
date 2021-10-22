import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { nanoid } from 'nanoid';
import BookCard from 'components/BookCard';
import BookDetails from 'components/BookDetails';
import EditModal from 'components/EditModal';
import NewBook  from 'components/NewBook';
import Header from 'components/Header';
import {
  Content,
  IconField,
  Input,
  Grid,
} from './style';
import { AiOutlineSearch } from 'react-icons/ai';

const Dashboard = () => {
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [details, setDetails] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [bookToEdit, setBookToEdit] = useState(null);
  const [showNewBook, setShowNewBook] = useState(false);

  const rentBook = (id) => {
    const rentedBooks = books.map(book => {
      if (book.id === id) {
        return {...book, isRented: true}
      }
      return book;
    });
    setBooks(rentedBooks);
  };

  const editBook = (id, editedBook) => {
    const editedBooks = books.map(book => {
      if (book.id === id) {
        return {...book, ...editedBook};
      }
      return book;
    });
    setBooks(editedBooks);
    setBookToEdit(null);
  }

  const addNewBook = (newBook) => {
    newBook.id = nanoid();
    setBooks([newBook, ...books]);
    setShowNewBook(false);
  }

  const filteredBooks = books
    .filter(book => book.title.toLowerCase().includes(searchTerm));

  useEffect(() => {
    axios.get('books.json').then(({data}) => setBooks(data));
  }, []);

  return (
    <>
      <Header
        isEditing={isEditing}
        showNewBook={showNewBook}
        setShowNewBook={setShowNewBook}
        setIsEditing={setIsEditing}
      />
      
      <Content>
        <label htmlFor="search">Search</label>
        <IconField>
          <AiOutlineSearch size="1.5em" />
          <Input
            id="search"
            type="text"
            name="search"
            value={searchTerm} 
            onChange={e => setSearchTerm(e.target.value.toLowerCase())}
          />
        </IconField>

        <Grid>
          {filteredBooks.map(book => 
            <BookCard 
              key={book.id}
              book={book}
              isEditing={isEditing}
              rentBook={rentBook}
              setDetails={setDetails}
              setBookToEdit={setBookToEdit}
            />
          )}
        </Grid>
      </Content>

      {bookToEdit &&
        <EditModal
          book={bookToEdit}
          editBook={editBook}
          setBookToEdit={setBookToEdit}
        />
      }

      {details && 
        <BookDetails
          details={details} 
          rentBook={rentBook}
          setDetails={setDetails}
        />
      }

      {showNewBook && (
        <NewBook
          showNewBook={showNewBook}
          setShowNewBook={setShowNewBook}
          addNewBook={addNewBook}
        />
      )}
    </>
  );
};

export default Dashboard;
