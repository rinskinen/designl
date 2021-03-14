import * as React from "react";
import Form from "./Form";
import styled from "styled-components";

const ContactStyled = styled.div`
  background-color: #fdfdfd;
  display: flex;
  align-content: center;
  justify-content: center;
`;

export const Contact = () => {
  return (
    <ContactStyled>
      <Form />
    </ContactStyled>
  );
};
