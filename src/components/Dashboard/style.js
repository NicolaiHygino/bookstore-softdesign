import styled from 'styled-components';

export const Content = styled.section`
  margin: 30px auto;
  padding: 30px;
  max-width: 1000px;
  @media screen and (max-width: 850px) {
    padding: 10px;
  }
`;

export const IconField = styled.div`
  display: flex;
  align-items: center;  
  position: relative;

  & svg {
    position: absolute;
    margin: 0 .5em;
    left: 0;
    color: var(--main-color);
  }
`;

export const Input = styled.input`
  width: 300px;
  border: 1px solid #ccc;
  border-left: 3px solid var(--main-color);
  border-radius: 5px;
  padding: .8em 1em .8em 3em;
`;

export const Grid = styled.div`
  display: grid;
  padding: 10px;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 30px;

  @media screen and (max-width: 850px) {
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 10px;
  }

  @media screen and (max-width: 450px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
