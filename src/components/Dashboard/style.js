import styled from 'styled-components';

export const Header = styled.header`
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

export const Content = styled.section`
  margin: 30px auto;  
  max-width: 1000px;
`;

export const IconField = styled.div`
  display: flex;
  align-items: center;  
  position: relative;

  & svg {
    position: absolute;
    margin: 0 .5em;
    left: 0;
  }
`;

export const Input = styled.input`
  width: 300px;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: .8em 1em .8em 3em;
`;

export const Grid = styled.div`
  display: grid;
  padding: 10px;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 30px;
`;
