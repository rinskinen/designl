import React from 'react';
import styled from 'styled-components';
import image from '../../images/LatvalahtiDima93.jpg';

const StyledContent = styled.div`
  display: flex;

  @media (min-width: 320px) {
    flex-direction: column;
  }

  @media (min-width: 1200px) {
    flex-direction: row;
  }
`;

const StyledImage = styled.img`
  align-self: center;
  display: grid;
  align-content: center;
  justify-content: center;

  @media (min-width: 320px) {
    padding-right: 20px;
    margin-bottom: 20px;
  }

  @media (min-width: 1200px) {
    padding-right: 50px;
    margin-bottom: 50px;
  }
`;

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
    <StyledContent>
      <StyledImage src={image} alt="Kuva työvälineistä" width="50%" />
      <ContactStyled>
        <StyledCard>
          <StyledLabel>Ota yhteyttä</StyledLabel>
          <StyledLine />
          <p>
            Ota yhteyttä ja jutellaan lisää toiveistasi! Minuun voi
            olla yhteydessä{' '}
            <StyledLink href="mailto: interior@designlatvalahti.fi ">
              sähköpostitse
            </StyledLink>
            ,
            <StyledLink href="tel: 0453565554">
              {' '}
              soittamalla{' '}
            </StyledLink>
            tai jopa WhatsApp-viestein!
          </p>
        </StyledCard>
      </ContactStyled>
    </StyledContent>
  );
};
