import React from 'react';
import { StyledHeader, Logo, Nav } from './style';
import { BsPencilFill, BsPlusLg } from 'react-icons/bs';
import { IoMdDoneAll } from 'react-icons/io';
import { IconButton } from 'globalStyles';
import { useMediaQuery } from 'hooks/useMediaQuery';

const Header = ({
  isEditing,
  showNewBook,
  setShowNewBook,
  setIsEditing,
}) => {
  const isMobile = useMediaQuery('(max-width: 450px)');
  return (
    <StyledHeader>
      <Logo>Bookstore</Logo>
      <Nav>
        <IconButton onClick={() => setShowNewBook(!showNewBook)}>
          {!isMobile && <BsPlusLg />}
          New Book
        </IconButton>
        
        {!isEditing ? (
          <IconButton onClick={() => setIsEditing(!isEditing)}>
            {!isMobile && <BsPencilFill />}
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
