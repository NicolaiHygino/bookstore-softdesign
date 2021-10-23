import React from 'react';
import { BsCalendar4, BsBookmark} from 'react-icons/bs';
import { IoEarthOutline } from 'react-icons/io5';
import {
  Title,
  Author,
  IconsWrapper,
  InfoIcon,
  IconText,
  Button,
  LabelWrapper,
} from './style';
import {
  Modal,
  Background,
  ModalContent,
  DetailsWrapper,
  ImageWrapper,
  Image,
  ExitButton,
} from '../modalStyles';
import { RentedLabel } from 'globalStyles';
import { useMediaQuery } from 'hooks/useMediaQuery';

const BookDetails = ({ details, setDetails, rentBook }) => {
  const isMobile = useMediaQuery('(max-width: 550px)');
  return (
    <Background onClick={() => setDetails(null)}>
      <Modal onClick={e => e.stopPropagation()}>
        {details.isRented && (
          <LabelWrapper>
            <RentedLabel>Rented</RentedLabel>
          </LabelWrapper>
        )}
        <ExitButton onClick={() => setDetails(null)}>X</ExitButton>
        <ModalContent>
          {isMobile && (
            <ImageWrapper>
              {typeof details.image === 'string' ? (
                <Image
                  src={`/images/books/${details.image}`}
                  alt={details.title}
                />
              ) : (
                <Image 
                  src={URL.createObjectURL(details.image)}
                  alt={details.title}
                />
              )}
            </ImageWrapper>
          )}
          <DetailsWrapper>
            <Title>{details.title}</Title>
            <Author>by {details.author} (Author)</Author>

            <p>{details.description}</p>

            <IconsWrapper>
              <InfoIcon>
                <p>Print Length</p>
                <BsBookmark size="1.5em"/>
                <IconText>
                  {details.pages} pages
                </IconText>
              </InfoIcon>

              <InfoIcon>
                <p>Publication</p>
                <BsCalendar4 size="1.5em"/>
                <IconText>
                  {details.year}
                </IconText>
              </InfoIcon>

              <InfoIcon>
                <p>Language</p>
                <IoEarthOutline size="1.5em"/>
                <IconText>
                  {details.language}
                </IconText>
              </InfoIcon>
            </IconsWrapper>
            {!details.isRented && (
              <Button onClick={() => rentBook(details.id)}>
                Rent
              </Button>
            )}
          </DetailsWrapper>
          {!isMobile && (
            <ImageWrapper>
              {typeof details.image === 'string' ? (
                <Image
                  src={`/images/books/${details.image}`}
                  alt={details.title}
                />
              ) : (
                <Image 
                  src={URL.createObjectURL(details.image)}
                  alt={details.title}
                />
              )}
            </ImageWrapper>
          )}
        </ModalContent>
      </Modal>
    </Background>
  );
};

export default BookDetails;
