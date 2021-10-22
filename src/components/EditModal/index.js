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
  ExitButton,
} from '../styledForm';
import { Background, Modal } from 'globalStyles';

const EditModal = ({ book, setBookToEdit, editBook }) => {
  return (
    <Background onClick={() => setBookToEdit(null)}>
      <Modal onClick={e => e.stopPropagation()}>
        <ExitButton onClick={() => setBookToEdit(null)}>X</ExitButton>
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
        <img 
          src={require(`assets/images/books/${book.image}`).default}
          alt={book.title}  
        />
      </Modal>
    </Background>
  );
};

export default EditModal;
