import React from 'react';
import Form from './Form';
import styled from 'styled-components';

const ContactStyled = styled.div`
  background-color: #fdfdfd;
  display: flex;
  align-content: center;
  justify-content: center;

  @media (min-width: 320px) {
    margin: 10px;
  }

  @media (min-width: 1200px) {
    margin: 100px;
  }
`;

export const Contact = () => {
  return (
    <ContactStyled>
      <Form />
    </ContactStyled>
  );
};
