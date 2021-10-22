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
import { RentedLabel } from 'globalStyles';

const BookCard = ({ book, setDetails, rentBook }) => {
  return (
    <GridItem>
      {book.isRented && <RentedLabel>Rented</RentedLabel>}
      <Image src={require(`assets/images/books/${book.image}`).default} />
      <InfoWrapper>
        <Title>{book.title}</Title>
        <Price>$8.99</Price>
        <ButtonWrapper>
          {!book.isRented && (
            <Button onClick={() => rentBook(book.id)}>
              Rent
            </Button>
          )}
          <Button onClick={() => setDetails(book)}>Details</Button>
        </ButtonWrapper>
      </InfoWrapper>
    </GridItem>
  );
};

export default BookCard;