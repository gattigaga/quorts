import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { format } from "date-fns";

import Quote from "./Quote";

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 16px;
`;

const GridItem = styled.div`
  margin-bottom: 16px;
`;

const QuoteList = ({ items, onClickCopy, onClickRemove }) => (
  <GridContainer>
    {[...Array(3)].map((_, index) => (
      <div key={index}>
        {items.filter((_, itemIndex) => itemIndex % 3 === index).map(item => (
          <GridItem key={item.id}>
            <Quote
              text={item.text}
              date={format(item.date, "MMM DD, YYYY - HH:mm A")}
              onClickRemove={() => onClickRemove(item.id)}
              onClickCopy={() => onClickCopy(item.text)}
            />
          </GridItem>
        ))}
      </div>
    ))}
  </GridContainer>
);

QuoteList.propTypes = {
  items: PropTypes.array,
  onClickCopy: PropTypes.func,
  onClickRemove: PropTypes.func
};

QuoteList.defaultProps = {
  items: []
};

export default QuoteList;
