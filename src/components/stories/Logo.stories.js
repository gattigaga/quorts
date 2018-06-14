import React from "react";
import { storiesOf } from "@storybook/react";
import styled from "styled-components";

import Logo from "../Logo";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: #2187c9;
  box-sizing: border-box;
  padding: 16px;
`;

storiesOf("Logo", module)
  .addDecorator(story => <Container>{story()}</Container>)
  .add("default", () => <Logo />);
