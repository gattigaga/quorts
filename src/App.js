import React from "react";
import styled from "styled-components";

import Logo from "./components/Logo";
import QuoteListContainer from "./components/QuoteListContainer";

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background: #2187c9;
  box-sizing: border-box;
  padding: 64px 128px;
`;

export const App = () => (
  <Container>
    <Logo />
    <QuoteListContainer />
  </Container>
);

export default App;
