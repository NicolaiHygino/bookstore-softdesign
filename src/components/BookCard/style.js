import styled from 'styled-components';

export const GridItem = styled.div`
  position: relative;
  border: 1px solid #ecf0f1;
  border-radius: 5px;
  overflow: hidden;
`;

export const Image = styled.img`
  margin: auto;
  display: block;
  height: 230px;
  background-color: palevioletred;
`;

export const InfoWrapper = styled.div`
  padding: 15px;
`;

export const Title = styled.h2`
  font-size: 1em;
  font-weight: 800;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
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

export const RentedLabel = styled.div`
  position: absolute;
  top: 10px;
  right: -60px;
  background-color: #ff6b6b;
  text-align: center;
  color: white;
  transform: rotate(45deg);
  padding: 20px;
  width: 200px;
`;
