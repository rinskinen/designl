import React from 'react';
import styled from 'styled-components';

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

const StyledLabel = styled.label`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 10px;
`;

export const StyledLine = styled.div`
  align-self: center;
  width: 50px;
  height: 1px;
  background-color: inherit;
  margin: 8px auto;
  border: 1px solid #ddd;
`;

const StyledImage = styled.img`
  align-self: center;
  display: grid;
  align-content: center;
  justify-content: center;

  @media (min-width: 320px) {
    margin: 10px;
  }

  @media (min-width: 1200px) {
    margin: 50px;
  }
`;

interface Props {
  title: string;
}

export const Fajo = ({ title }: Props) => {
  return (
    <>
      <StyledCard>
        <StyledLabel>{title}</StyledLabel>
      </StyledCard>
      <>
        <StyledImage
          src="https://kuvat.designlatvalahti.fi/images/fajo/Fajo_05.jpg"
          alt="Wihuri Metro-tukku"
          width="100%"
        />
        <StyledImage
          src="https://kuvat.designlatvalahti.fi/images/fajo/Fajo_45.jpg"
          alt="Wihuri Metro-tukku"
          width="100%"
        />
        <StyledImage
          src="https://kuvat.designlatvalahti.fi/images/fajo/Fajo_41.jpg"
          alt="Wihuri Metro-tukku"
          width="100%"
        />
        <StyledImage
          src="https://kuvat.designlatvalahti.fi/images/fajo/Fajo_32.jpg"
          alt="Wihuri Metro-tukku"
          width="100%"
        />
        <StyledImage
          src="https://kuvat.designlatvalahti.fi/images/fajo/Fajo_35.jpg"
          alt="Wihuri Metro-tukku"
          width="100%"
        />
        <StyledImage
          src="https://kuvat.designlatvalahti.fi/images/fajo/Fajo_25.jpg"
          alt="Wihuri Metro-tukku"
          width="100%"
        />
        <StyledImage
          src="https://kuvat.designlatvalahti.fi/images/fajo/Fajo_26.jpg"
          alt="Wihuri Metro-tukku"
          width="100%"
        />
        <StyledImage
          src="https://kuvat.designlatvalahti.fi/images/fajo/Fajo_50.jpg"
          alt="Wihuri Metro-tukku"
          width="100%"
        />
        <StyledImage
          src="https://kuvat.designlatvalahti.fi/images/fajo/Fajo_11.jpg"
          alt="Wihuri Metro-tukku"
          width="100%"
        />
        <StyledImage
          src="https://kuvat.designlatvalahti.fi/images/fajo/Fajo_51.jpg"
          alt="Wihuri Metro-tukku"
          width="100%"
        />
        <StyledImage
          src="https://kuvat.designlatvalahti.fi/images/fajo/Fajo_06.jpg"
          alt="Wihuri Metro-tukku"
          width="100%"
        />
      </>
    </>
  );
};
