import React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin-top: 20vh;
  align-items: center;
  justify-content: center;
  text-align: center;
  text-transform: uppercase;
  width: 100%;
  font-weight: 900;
  font-size: 5vh;
`;

const NotFound = () => {
  return (
    <Container>
      <h1>Sorry! This page can't be found.</h1>
    </Container>
  );
};

export default NotFound;
