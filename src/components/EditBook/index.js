import React from 'react';
import { Formik, Field } from 'formik';
import {
  StyledForm,
  Label,
  FieldWrapper,
  StyledField,
  Row,
  RowLabel,
  RowField,
  Button,
} from '../styledForm';
import {
  Modal,
  Background,
  ModalContent,
  DetailsWrapper,
  ImageWrapper,
  Image,
  ExitButton,
} from '../modalStyles';
import { useMediaQuery } from 'hooks/useMediaQuery';

const EditBook = ({ book, setBookToEdit, editBook }) => {
  const isMobile = useMediaQuery('(max-width: 550px)');
  
  return (
    <Background onClick={() => setBookToEdit(null)}>
      <Modal onClick={e => e.stopPropagation()}>
        <ExitButton onClick={() => setBookToEdit(null)}>X</ExitButton>
        <ModalContent>
          {isMobile && (
            <ImageWrapper>
                <Image 
                  src={`/images/books/${book.image}`}
                  alt={book.title}  
                />
            </ImageWrapper>
          )}
          <DetailsWrapper>
            <Formik
              initialValues={{
                title: book.title,
                author: book.author,
                description: book.description,
                pages: book.pages,
                publication: book.year,
                language: book.language,
              }}
              onSubmit={values => editBook(book.id, values)}
            >
              <StyledForm>
                <FieldWrapper> 
                  <Label htmlFor="title">Title</Label>
                  <StyledField id="title" name="title" type="text" />
                </FieldWrapper>
                
                <FieldWrapper> 
                  <Label htmlFor="author">Author</Label>
                  <StyledField id="author" name="author" type="text" />
                </FieldWrapper>

                <FieldWrapper> 
                  <Label htmlFor="description">Description</Label>
                  <Field id="description" name="description" as="textarea" />
                </FieldWrapper>

                <Row>
                  <FieldWrapper> 
                    <RowLabel htmlFor="pages">Pages</RowLabel>
                    <RowField id="pages" name="pages" type="text" />
                  </FieldWrapper>
                  
                  <FieldWrapper> 
                    <RowLabel htmlFor="publication">Publication</RowLabel>
                    <RowField id="publication" name="publication" type="text" />
                  </FieldWrapper>
                  
                  <FieldWrapper> 
                    <RowLabel htmlFor="language">Language</RowLabel>
                    <RowField id="language" name="language" type="text" />
                  </FieldWrapper>
                </Row>

                <Button type="submit">
                  Save
                </Button>
              </StyledForm>
            </Formik>
          </DetailsWrapper>
          {!isMobile && (
            <ImageWrapper>
              <Image 
                src={`/images/books/${book.image}`}
                alt={book.title}  
              />
            </ImageWrapper>
          )}
        </ModalContent>
      </Modal>
    </Background>
  );
};

export default EditBook;
