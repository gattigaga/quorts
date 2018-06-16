/* global chrome */

import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import uuid from "uuid/v4";
import styled from "styled-components";

import { getExcerpt } from "../helpers/formatters";
import { removeQuote } from "../store/actions";
import QuoteList from "./QuoteList";

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

export const QuoteListContainer = ({ items, onClickRemove }) =>
  items.length > 0 ? (
    <div>
      <Title>Quote List</Title>
      <QuoteList
        items={items}
        onClickRemove={onClickRemove}
        onClickCopy={async text => {
          await navigator.clipboard.writeText(text);

          const excerpt = getExcerpt(text, 27);
          const notification = {
            type: "basic",
            title: "Successfully copied !",
            message: excerpt,
            iconUrl: "./images/icon-48.png"
          };

          chrome.notifications.create(uuid(), notification);
        }}
      />
    </div>
  ) : (
    <EmptyText>There's no quotes</EmptyText>
  );

QuoteListContainer.propTypes = {
  items: PropTypes.array,
  onClickRemove: PropTypes.func
};

QuoteListContainer.defaultProps = {
  items: []
};

export const mapStateToProps = ({ quotes }) => ({ items: quotes });

export const mapDispatchToProps = dispatch => ({
  onClickRemove: quoteID => dispatch(removeQuote(quoteID))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuoteListContainer);
