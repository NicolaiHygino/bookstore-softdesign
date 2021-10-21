import React, { useState, useEffect } from 'react';
import axios from 'axios';
import * as S from './style';
import { AiOutlineSearch } from 'react-icons/ai';

const Dashboard = () => {
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredBooks = books
    .filter(book => book.title.toLowerCase().includes(searchTerm));

  useEffect(() => {
    axios.get('books.json').then(({data}) => setBooks(data));
  }, []);

  return (
    <>
      <S.Header>
        <h1>Bookstore</h1>
      </S.Header>

      <S.Content>
        <label htmlFor="search">Search </label>
        <S.IconField>
          <AiOutlineSearch size="1.5em" />
          <S.Input
            id="search"
            type="text"
            name="search"
            value={searchTerm} 
            onChange={e => setSearchTerm(e.target.value.toLowerCase())}
          />
        </S.IconField>
        

        <S.Grid>
          {filteredBooks.map(book => (
            <S.GridItem key={book.author + book.title}>
              <S.Image src={require(`assets/images/books/${book.image}`).default} />
              <S.InfoWrapper>
                <S.Title>{book.title}</S.Title>
                <S.Price>$8.99</S.Price>
                <S.ButtonWrapper>
                  <S.Button>Rent</S.Button>
                  <S.Button>Details</S.Button>
                </S.ButtonWrapper>
              </S.InfoWrapper>
            </S.GridItem>
          ))}
        </S.Grid>
      </S.Content>
    </>
  );
};

export default Dashboard;
