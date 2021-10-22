import React, { useState } from 'react';
import { Formik, Field } from 'formik';
import {
  Background,
  Modal,
  StyledForm,
  Label,
  FieldWrapper,
  StyledField,
  Row,
  RowLabel,
  RowField,
  Button,
  ExitButton,
} from './style';

const NewBook = ({ addNewBook, showNewBook, setShowNewBook }) => {
  const [preview, setPreview] = useState();
  
  return (
    <Background onClick={() => setShowNewBook(false)}>
      <Modal onClick={e => e.stopPropagation()}>
        <ExitButton onClick={() => setShowNewBook(false)}>X</ExitButton>
        <Formik
          initialValues={{
            title: '',
            author: '',
            description: '',
            pages: '',
            publication: '',
            language: '',
            image: '',
          }}
          onSubmit={values => addNewBook(values)}
        >
          {({ setFieldValue }) => (
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
              
              <FieldWrapper>
                <Label htmlFor="image">Image</Label>
                <input id="image" name="image" type="file" onChange={e => {
                  setPreview(e.currentTarget.files[0]);
                  setFieldValue('image', e.currentTarget.files[0]);
                }} />
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
          )}
        </Formik>
        {preview ? (
          <img 
            src={URL.createObjectURL(preview)}
          />
        ) : (
          <img 
            src={require(`assets/images/books/default-image-bookstore.jpg`).default}
          />
        )}
      </Modal>
    </Background>
  );
};

export default NewBook;
