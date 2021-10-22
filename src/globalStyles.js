import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --main-color: #6c5ce7;
    --error: #e74c3c;
    --second-text: #636e72;
  }

  * {
    box-sizing: border-box;
  }

  html, body {
    padding: 0;
    margin: 0;
  }

  body {
    font-family: 'Ubuntu', sans-serif;
  }

  h1, h2, h3, h4, h5, h6, p {
    margin: 0;
  }
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

export const Button = styled.button`
  background-color: var(--main-color);
  border: 0;
  border-radius: 3px;
  color: white;
  padding: .6em 1em;
  letter-spacing: 1px;
  cursor: pointer;
`;

export const IconButton = styled(Button)`
  margin-right: 20px;
  
  & svg {
    margin-right: 10px;
  }
`;

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
  max-height: 600px;
  background-color: white;
  border-radius: 5px;
`;
