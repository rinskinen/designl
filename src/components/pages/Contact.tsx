import React from 'react';
import styled from 'styled-components';

const ContactStyled = styled.div`
  display: grid;
  p: 3px;
  text-align: center;
`;

const StyledLabel = styled.label`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 10px;
`;

const StyledCard = styled.div`
  align-self: center;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  border: 1.5px solid black;
  text-align: center;
  @media (min-width: 320px) {
    padding: 20px;
    margin-bottom: 10px;
  }

  @media (min-width: 1200px) {
    padding: 50px;
    margin-bottom: 50px;
  }
`;

export const StyledLine = styled.div`
  align-self: center;
  width: 50px;
  height: 1px;
  background-color: inherit;
  margin: 8px auto;
  border: 1px solid #ddd;
`;

const StyledLink = styled.a`
  color: grey;
  text-decoration: none;
`;

export const Contact = () => {
  return (
    <ContactStyled>
      <StyledCard>
        <StyledLabel>Ota yhteyttä</StyledLabel>
        <StyledLine />
        <p>
          Ota yhteyttä ja jutellaan lisää sinun toiveistasi ja kuinka
          voin sinua auttaa.
        </p>
        <p>
          Minuun voi olla yhteydessä{' '}
          <StyledLink href="mailto: interior@designlatvalahti.fi ">
            sähköpostitse
          </StyledLink>
          ,
          <StyledLink href="tel: 0453565554">
            {' '}
            soittamalla{' '}
          </StyledLink>
          tai WhatsApp-viestein.
        </p>
      </StyledCard>
    </ContactStyled>
  );
};
