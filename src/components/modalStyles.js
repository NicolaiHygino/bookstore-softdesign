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
  margin: 30px;
  max-width: 800px;
  padding: 30px 20px;
  width: 100%;
  max-height: 600px;
  background-color: white;
  border-radius: 5px;
`;

export const ModalContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 30px 10px;
  width: 100%;
  max-height: 600px;
  overflow-y: scroll;

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
