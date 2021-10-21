import React from 'react';
import {
  Background,
  Modal,
  InformationDetail,
  Title,
  Author,
  IconsWrapper,
  InfoIcon,
  IconText,
  Image,
  Button,
  ExitButton,
} from './style';
import { BsCalendar4, BsBookmark} from 'react-icons/bs';
import { IoEarthOutline } from 'react-icons/io5';

const DetailsModal = ({ details, setDetails }) => {
  return (
    <Background onClick={() => setDetails(null)}>
      <Modal onClick={e => e.stopPropagation()}>
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
          <Button>Rent</Button>
        </InformationDetail>
        <Image 
          src={require(`assets/images/books/${details.image}`).default}
          alt={details.title}  
        />
      </Modal>
    </Background>
  );
};

export default DetailsModal;
