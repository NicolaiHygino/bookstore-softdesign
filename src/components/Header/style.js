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
`;

export const Nav = styled.div`
  margin-left: auto;
`;
