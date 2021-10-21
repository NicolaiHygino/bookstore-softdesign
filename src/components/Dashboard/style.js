import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 10px 20px;
  height: 60px;
  background-color: #ecf0f1;
`;

export const Grid = styled.div`
  display: grid;
  max-width: 1000px;
  padding: 10px;
  margin: 30px auto;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 20px;
`;

export const GridItem = styled.div`
  border: 1px solid #ecf0f1;
  border-radius: 5px;
  overflow: hidden;
`;

export const Image = styled.div`
  width: 100%;
  height: 300px;
  background-color: palevioletred;
`;

export const InfoWrapper = styled.div`
  padding: 15px;
`;

export const Title = styled.h2`
  font-size: 1.3em;
  font-weight: 800;
`;

export const Price = styled.p`
  font-size: 1em;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

export const Button = styled.button`
  background-color: var(--main-color);
  border: 0;
  border-radius: 3px;
  color: white;
  padding: .6em 1em;
  cursor: pointer;
`;
