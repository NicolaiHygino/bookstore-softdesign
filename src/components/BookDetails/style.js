import styled from 'styled-components';

export const LabelWrapper = styled.div`
  position: absolute;
  overflow: hidden;
  top: 0;
  right: 0;
  width: 200px;
  height: 200px;
`;

export const ModalContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 30px 10px;
  width: 100%;
  max-height: 600px;
  overflow: scroll;

  @media screen and (max-width: 550px) {
    display: block;
  }
`;

export const ImageWrapper = styled.div`
  flex: 1;
  width: 100%;
  max-width: 300px;
  max-height: 500px;
  @media screen and (max-width: 550px) {
    margin: 0 auto;
    margin-bottom: 30px;
  }
`;

export const Image = styled.img`
  display: block;
  width: 100%;
`;

export const DetailsWrapper = styled.div`
  flex: 1;
  margin-right: 20px;
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
  flex-wrap: wrap;
  margin: 30px 0;
`; 

export const InfoIcon = styled.div`
  display: flex;
  flex-wrap: wrap;
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
  top: 0;
  left: 0;
  width: 3em;
  height: 3em;
  background-color: var(--main-color);
  border: 0;
  border-bottom-right-radius: 3px;
  color: white;
  padding: 1em;
  cursor: pointer;
`;
