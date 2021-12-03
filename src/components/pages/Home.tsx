import React from 'react';
import { Banner } from '../Banner';
import styled from 'styled-components';

const StyledHomeDiv = styled.div`
  display: grid;
  align-content: center;
  justify-content: stretch;
  text-align: center;
`;

const StyledImage = styled.img`
  align-self: center;
  display: grid;
  align-content: center;
  justify-content: center;

  @media (min-width: 320px) {
    padding-right: 20px;
    margin-bottom: 10px;
  }

  @media (min-width: 1200px) {
    padding-right: 50px;
    margin-bottom: 50px;
  }
`;

const StyledImageRow = styled.div`
  display: flex;
  flex-direction: row;

  @media (min-width: 320px) {
    padding-right: 20px;
    margin-bottom: 10px;
  }

  @media (min-width: 1200px) {
    padding-right: 50px;
    margin-bottom: 50px;
  }
`;

export const Home = () => {
  return (
    <StyledHomeDiv>
      <StyledImage
        src="https://kuvat.designlatvalahti.fi/images/sensu/Sensu_2.jpg"
        alt="Talo Sensu"
        width="100%"
      />
      <StyledImageRow>
        <StyledImage
          src="https://kuvat.designlatvalahti.fi/images/sensu/Sensu_10.jpg"
          alt="Talo Sensu"
          width="50%"
        />
        <StyledImage
          src="https://kuvat.designlatvalahti.fi/images/sensu/Sensu_11.jpg"
          alt="Talo Sensu"
          width="50%"
        />
      </StyledImageRow>
      <Banner text="Sisustussuunnittelua yksityiskoteihin ja julkistiloihin." />
      <StyledImage
        src="https://kuvat.designlatvalahti.fi/images/misc/LatvalahtiDima93.jpg"
        alt="Kuva työvälineistä"
        width="100%"
      />
    </StyledHomeDiv>
  );
};
