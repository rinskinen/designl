import React from 'react';
import styled from 'styled-components';
import Form from '../Form';

const ContactStyled = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
  @media (min-width: 320px) {
    margin: 10px;
  }

  @media (min-width: 1200px) {
    margin: 10px;
  }
`;

export const Contact = () => {
  return (
    <ContactStyled>
      <Form />
    </ContactStyled>
  );
};
