import React from 'react';
import { StyledHeader, Nav } from './style';
import { BsPencilFill, BsPlusLg } from 'react-icons/bs';
import { IoMdDoneAll } from 'react-icons/io';
import { IconButton } from 'globalStyles';

const Header = ({
  isEditing,
  showNewBook,
  setShowNewBook,
  setIsEditing,
}) => {
  return (
    <StyledHeader>
      <h1>Bookstore</h1>
      <Nav>
        <IconButton onClick={() => setShowNewBook(!showNewBook)}>
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
      </Nav>
    </StyledHeader>
  );
};

export default Header;
