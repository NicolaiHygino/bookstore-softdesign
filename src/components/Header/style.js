import styled from 'styled-components';

export const StyledHeader = styled.header`
  position: sticky;
  top: 0;
  z-index: 1;
  border-top: 3px solid var(--main-color);
  display: flex;
  align-items: center;
  width: 100%;
  padding: 10px 20px;
  height: 60px;
  background-color: rgba(236, 240, 241, .8);
  backdrop-filter: blur(8px);

  @media screen and (max-width: 850px) {
    padding: 8px;
  }
`;

export const Logo = styled.h1`
  @media screen and (max-width: 850px) {
    font-size: 1em;
  }
`;

export const Nav = styled.div`
  margin-left: auto;
`;
