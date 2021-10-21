import React from 'react';
import { 
  GridItem,
  Image,
  InfoWrapper,
  Title,
  Price,
  ButtonWrapper,
  Button,
} from './style';

const BookCard = ({ book, setDetails }) => {
  return (
    <GridItem onClick={() => setDetails(book)}>
      <Image src={require(`assets/images/books/${book.image}`).default} />
      <InfoWrapper>
        <Title>{book.title}</Title>
        <Price>$8.99</Price>
        <ButtonWrapper>
          <Button>Rent</Button>
          <Button>Details</Button>
        </ButtonWrapper>
      </InfoWrapper>
    </GridItem>
  );
};

export default BookCard;