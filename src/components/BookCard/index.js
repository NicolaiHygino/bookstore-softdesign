import React from 'react';
import { 
  GridItem,
  Image,
  InfoWrapper,
  Title,
  Price,
  ButtonWrapper,
  EditButton,
} from './style';
import { RentedLabel, Button } from 'globalStyles';
import { BsPencilFill } from 'react-icons/bs';

const BookCard = ({ book, isEditing, rentBook, setDetails, setBookToEdit }) => {
  return (
    <GridItem>
      {!book.isRented && isEditing ? (
        <EditButton onClick={() => setBookToEdit(book)}>
          <BsPencilFill size="1.2em"/>
        </EditButton>
      ) : null }

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