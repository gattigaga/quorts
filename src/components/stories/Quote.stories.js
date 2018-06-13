import React from "react";
import { storiesOf, action } from "@storybook/react";
import styled from "styled-components";

import Quote from "../Quote";

const Container = styled.div`
  width: 320px;
`;

storiesOf("Quote", module)
  .addDecorator(story => <Container>{story()}</Container>)
  .add("default", () => (
    <Quote
      text="React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes."
      onClickCopy={action("clicked")}
      onClickRemove={action("clicked")}
    />
  ));
