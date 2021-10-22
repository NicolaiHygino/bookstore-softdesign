import React from 'react';
import { 
  GridItem,
  Image,
  InfoWrapper,
  Title,
  Price,
  ButtonWrapper,
  EditButton,
  RemoveButton,
} from './style';
import { RentedLabel, Button } from 'globalStyles';
import { BsPencilFill, BsTrashFill } from 'react-icons/bs';

const BookCard = ({
  book,
  isEditing,
  rentBook,
  removeBook,
  setDetails,
  setBookToEdit
}) => {
  return (
    <GridItem>
      {!book.isRented && isEditing ? (
        <>
          <EditButton onClick={() => setBookToEdit(book)}>
            <BsPencilFill size="1.2em"/>
          </EditButton>
          <RemoveButton onClick={() => removeBook(book.id)}>
            <BsTrashFill size="1.2em"/>
          </RemoveButton>
        </>
      ) : null }

      {book.isRented && <RentedLabel>Rented</RentedLabel>}
      
      {typeof book.image === 'string' ? (
        <Image src={require(`assets/images/books/${book.image}`).default} />
      ) : (
        <Image src={URL.createObjectURL(book.image)} />
      )}
      
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