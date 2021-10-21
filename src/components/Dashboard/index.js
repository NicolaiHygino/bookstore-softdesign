import React, { useState, useEffect } from 'react';
import axios from 'axios';
import * as S from './style';

const Dashboard = () => {
  const [books, setBooks] = useState([]);
  
  useEffect(() => {
    axios.get('books.json').then(({data}) => setBooks(data));
  }, []);

  return (
    <>
      <S.Header>
        <h1>Bookstore</h1>
      </S.Header>

      <S.Grid>
        {books.map(book => (
          <S.GridItem key={book.author + book.title}>
            <S.Image src={require(`../../assets/images/books/${book.image}`).default} />
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
    </>
  );
};

export default Dashboard;
