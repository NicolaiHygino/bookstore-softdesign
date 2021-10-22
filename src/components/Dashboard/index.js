import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BookCard from 'components/BookCard';
import DetailsModal from 'components/DetailsModal';
import EditModal from 'components/EditModal';
import {
  Header,
  Content,
  IconField,
  Input,
  Grid,
} from './style';
import { AiOutlineSearch } from 'react-icons/ai';
import { BsPencilFill } from 'react-icons/bs';
import { IoMdDoneAll } from 'react-icons/io';
import { Button } from 'globalStyles';

const Dashboard = () => {
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [details, setDetails] = useState(null);
  const [isEditing, setIsEditing] = useState(true);
  const [bookToEdit, setBookToEdit] = useState(null);

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

  const filteredBooks = books
    .filter(book => book.title.toLowerCase().includes(searchTerm));

  useEffect(() => {
    axios.get('books.json').then(({data}) => setBooks(data));
  }, []);

  return (
    <>
      <Header>
        <h1>Bookstore</h1>
          {!isEditing ? (
            <Button 
              onClick={() => setIsEditing(!isEditing)}
              style={{ marginLeft: 'auto'}}
            >
              <BsPencilFill style={{ marginRight: '10px'}} />
              Edit Books
            </Button>
          ) : (
            <Button 
              onClick={() => setIsEditing(!isEditing)}
              style={{ marginLeft: 'auto'}}
            >
              <IoMdDoneAll style={{ marginRight: '10px'}} />
              Done
            </Button>
          )}
      </Header>

      <Content>
        <label htmlFor="search">Search </label>
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
        <DetailsModal
          details={details} 
          rentBook={rentBook}
          setDetails={setDetails}
        />
      }
    </>
  );
};

export default Dashboard;
