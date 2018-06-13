import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import IconClose from "react-icons/lib/md/close";
import IconCopy from "react-icons/lib/md/content-copy";

import "typeface-roboto";

const Container = styled.div`
  padding: 16px;
  padding-top: 32px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.3);
  position: relative;
`;

const Text = styled.p`
  margin-top: 0px;
  margin-bottom: 24px;
  font-family: Roboto;
  font-size: 16px;
  color: #333;
  line-height: 1.5em;
`;

export const Button = styled.span`
  margin: 0px;
  font-family: Roboto;
  font-size: 16px;
  color: #aaa;
  cursor: pointer;
  user-select: none;
`;

export const StyledClose = styled(IconClose)`
  color: #aaa;
  font-size: 20px;
  padding: 4px;
  position: absolute;
  top: 4px;
  right: 4px;
  cursor: pointer;
`;

const StyledCopy = styled(IconCopy)`
  font-size: 20px;
`;

const Quote = ({ text, onClickCopy, onClickRemove }) => (
  <Container>
    <StyledClose onClick={onClickRemove} />
    <Text>{text}</Text>
    <Button onClick={onClickCopy}>
      <StyledCopy /> COPY
    </Button>
  </Container>
);

Quote.propTypes = {
  text: PropTypes.string,
  onClickCopy: PropTypes.func,
  onClickRemove: PropTypes.func
};

export default Quote;
