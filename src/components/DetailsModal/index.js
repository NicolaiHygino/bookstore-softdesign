import React from 'react';
import { BsCalendar4, BsBookmark} from 'react-icons/bs';
import { IoEarthOutline } from 'react-icons/io5';
import {
  Background,
  Modal,
  InformationDetail,
  Title,
  Author,
  IconsWrapper,
  InfoIcon,
  IconText,
  Button,
  ExitButton,
  LabelWrapper,
} from './style';
import { RentedLabel } from 'globalStyles';

const DetailsModal = ({ details, setDetails, rentBook }) => {
  return (
    <Background onClick={() => setDetails(null)}>
      <Modal onClick={e => e.stopPropagation()}>
        {details.isRented && (
          <LabelWrapper>
            <RentedLabel>Rented</RentedLabel>
          </LabelWrapper>
        )}
        <ExitButton onClick={() => setDetails(null)}>X</ExitButton>
        <InformationDetail>
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
        </InformationDetail>
        <img 
          src={require(`assets/images/books/${details.image}`).default}
          alt={details.title}  
        />
      </Modal>
    </Background>
  );
};

export default DetailsModal;
