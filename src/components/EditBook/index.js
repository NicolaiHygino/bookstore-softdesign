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
          <ImageWrapper>
            {isMobile && (
              <Image 
                src={require(`assets/images/books/${book.image}`).default}
                alt={book.title}  
              />
            )}
          </ImageWrapper>
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
                  <StyledField name="title" type="text" />
                </FieldWrapper>
                
                <FieldWrapper> 
                  <Label htmlFor="author">Author</Label>
                  <StyledField name="author" type="text" />
                </FieldWrapper>

                <FieldWrapper> 
                  <Label htmlFor="description">Description</Label>
                  <Field name="description" as="textarea" />
                </FieldWrapper>

                <Row>
                  <FieldWrapper> 
                    <RowLabel htmlFor="pages">Pages</RowLabel>
                    <RowField name="pages" type="text" />
                  </FieldWrapper>
                  
                  <FieldWrapper> 
                    <RowLabel htmlFor="publication">Publication</RowLabel>
                    <RowField name="publication" type="text" />
                  </FieldWrapper>
                  
                  <FieldWrapper> 
                    <RowLabel htmlFor="language">Language</RowLabel>
                    <RowField name="language" type="text" />
                  </FieldWrapper>
                </Row>

                <Button type="submit">
                  Save
                </Button>
              </StyledForm>
            </Formik>
          </DetailsWrapper>
          <ImageWrapper>
            {!isMobile && (
              <Image 
                src={require(`assets/images/books/${book.image}`).default}
                alt={book.title}  
              />
            )}
          </ImageWrapper>
        </ModalContent>
      </Modal>
    </Background>
  );
};

export default EditBook;
