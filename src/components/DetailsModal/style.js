import styled from 'styled-components';

export const Background = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, .5);
  z-index: 1;
`;

export const Modal = styled.section`
  display: flex;
  position: relative;
  max-width: 800px;
  padding: 30px 20px;
  width: 100%;
  height: auto;
  background-color: white;
  border-radius: 5px;
`;

export const InformationDetail = styled.div`
  margin-right: 30px;
`;

export const Image = styled.img`

`;

export const Title = styled.h2`
  font-size: 2em;
`;

export const Author = styled.p`
  font-size: .9em;
  color: #7f8c8d;
`;

export const IconsWrapper = styled.div`
  display: flex;
  margin: 30px 0;
  `; 

export const InfoIcon = styled.div`
  display: flex;
  margin: 10px;
  width: 100px;
  flex-direction: column;
  align-items: center;
`;

export const IconText = styled.p`
  font-size: .9em;
  font-weight: 600;
  text-align: center;
  margin-top: 5px;
`;

export const Button = styled.button`
  font-size: 1em;
  background-color: var(--main-color);
  border: 0;
  border-radius: 3px;
  color: white;
  padding: .6em 1em;
  cursor: pointer;
`;

export const ExitButton = styled.button`
  display: flex;
  align-items: center;
  justify-content:center;
  position: absolute;
  top:-1.5em;
  right: -1.5em;
  width: 3em;
  height: 3em;
  background-color: var(--main-color);
  border: 0;
  border-radius: 50%;
  color: white;
  padding: 1em;
  cursor: pointer;
`;
