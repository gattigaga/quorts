import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { connect } from "react-redux";

import Logo from "./components/Logo";
import Quote from "./components/Quote";

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background: #2187c9;
  box-sizing: border-box;
  padding: 64px 128px;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 16px;
`;

const GridItem = styled.div`
  margin-bottom: 16px;
`;

const Title = styled.h1`
  font-size: 64px;
  font-family: Roboto;
  color: white;
  margin-top: 96px;
`;

const EmptyText = styled.p`
  font-size: 48px;
  font-family: Roboto;
  font-weight: bold;
  color: white;
  text-align: center;
  margin-top: 15%;
`;

const App = ({ quotes }) => (
  <Container>
    <Logo />
    {quotes.length > 0 ? (
      [
        <Title>Quote List</Title>,
        <GridContainer>
          {[...Array(3)].map((_, index) => (
            <div key={index}>
              {quotes
                .filter((_, quoteIndex) => quoteIndex % 3 === index)
                .map(quote => (
                  <GridItem>
                    <Quote key={quote.id} text={quote.text} />
                  </GridItem>
                ))}
            </div>
          ))}
        </GridContainer>
      ]
    ) : (
      <EmptyText>There's no quotes</EmptyText>
    )}
  </Container>
);

App.propTypes = {
  quotes: PropTypes.array
};

App.defaultProps = {
  quotes: []
};

const mapStateToProps = ({ quotes }) => ({ quotes });

export default connect(mapStateToProps)(App);
