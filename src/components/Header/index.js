import React from 'react';
import { StyledHeader } from './style';
import { BsPencilFill, BsPlusLg } from 'react-icons/bs';
import { IoMdDoneAll } from 'react-icons/io';
import { IconButton } from 'globalStyles';

const Header = ({ isEditing, setIsEditing}) => {
  return (
    <StyledHeader>
      <h1>Bookstore</h1>
      
      <IconButton onClick={() => setIsEditing(!isEditing)}>
        <BsPlusLg />
        New Book
      </IconButton>
      
      {!isEditing ? (
        <IconButton onClick={() => setIsEditing(!isEditing)}>
          <BsPencilFill />
          Edit Books
        </IconButton>
      ) : (
        <IconButton onClick={() => setIsEditing(!isEditing)}>
          <IoMdDoneAll/>
          Done
        </IconButton>
      )}
    </StyledHeader>
  );
};

export default Header;
