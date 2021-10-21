import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BookCard from 'components/BookCard';
import DetailsModal from 'components/DetailsModal';
import {
  Header,
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

  const filteredBooks = books
    .filter(book => book.title.toLowerCase().includes(searchTerm));

  useEffect(() => {
    axios.get('books.json').then(({data}) => setBooks(data));
  }, []);

  return (
    <>
      {details && <DetailsModal details={details} setDetails={setDetails} />}
      <Header>
        <h1>Bookstore</h1>
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
              setDetails={setDetails}
            />
          )}
        </Grid>
      </Content>
    </>
  );
};

export default Dashboard;
