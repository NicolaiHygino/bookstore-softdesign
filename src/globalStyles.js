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

  @media screen and (max-width: 850px) {
    padding: .6em .8em;
    font-size: .7em;
  }
`;

export const IconButton = styled(Button)`
  margin-right: 20px;
  
  & svg {
    margin-right: 10px;
  }

  @media screen and (max-width: 450px) {
    margin-right: 8px;
  }
`;
