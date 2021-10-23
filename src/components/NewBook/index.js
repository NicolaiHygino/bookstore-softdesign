import React, { useState } from 'react';
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

const NewBook = ({ addNewBook, setShowNewBook }) => {
  const [preview, setPreview] = useState();
  const isMobile = useMediaQuery('(max-width: 550px)');
  
  return (
    <Background onClick={() => setShowNewBook(false)}>
      <Modal onClick={e => e.stopPropagation()}>
        <ExitButton onClick={() => setShowNewBook(false)}>X</ExitButton>
        <ModalContent>
          {isMobile && (
            <ImageWrapper>
              {preview ? (
                <Image 
                  src={URL.createObjectURL(preview)}
                  alt="preview"
                />
              ) : (
                <Image 
                  src={`images/books/default-image-bookstore.jpg`}
                  alt="default book preview"
                />
              )}
            </ImageWrapper>
          )}
          <DetailsWrapper>
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
              )}
            </Formik>
          </DetailsWrapper>
          {!isMobile && (
            <ImageWrapper>
              {preview ? (
                <Image 
                  src={URL.createObjectURL(preview)}
                  alt="preview"
                />
              ) : (
                <Image 
                  src={`images/books/default-image-bookstore.jpg`}
                  alt="default book preview"
                />
              )}
            </ImageWrapper>
          )}
        </ModalContent>
      </Modal>
    </Background>
  );
};

export default NewBook;
