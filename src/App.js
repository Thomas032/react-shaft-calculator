import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import Header from "./components/Header";
import Form from "./components/Form";

function App() {
  return (
    <React.Fragment>
      <Global />
      <Box>
        <Header />
        <Form />
      </Box>
    </React.Fragment>
  );
}

const Global = createGlobalStyle`
  *{
    padding: 0;
    margin:0;
    border-size: border-box;
    font-family: 'Josefin Sans', sans-serif;
    scroll-behavior: smooth;
  }

`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2rem;
  align-items: center;
  justify-items: center;

  @media only screen and (max-width: 575px) {
    margin: 1rem 0 0 0;
  }
`;

export default App;
