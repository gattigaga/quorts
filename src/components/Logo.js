import React from "react";
import styled from "styled-components";

import imgLogo from "../assets/images/logo-inverse.png";

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const Image = styled.img`
  width: 48px;
  height: 48px;
`;

const Title = styled.h1`
  font-size: 32px;
  font-family: Roboto;
  color: white;
  margin: 0px;
  margin-left: 16px;
`;

const Logo = () => {
  return (
    <Container>
      <Image src={imgLogo} />
      <Title>Quorts</Title>
    </Container>
  );
};

export default Logo;
