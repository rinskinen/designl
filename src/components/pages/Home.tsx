import React from 'react';
import { Banner } from '../Banner';
import styled from 'styled-components';
import sensu1 from '../../images/TaloSensu2.jpg';
import sensu2 from '../../images/TaloSensu10.jpg';
import sensu3 from '../../images/TaloSensu11.jpg';
import image from '../../images/LatvalahtiDima93.jpg';

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
      <StyledImage src={sensu1} alt="Talo Sensu" width="100%" />
      <StyledImageRow>
        <StyledImage src={sensu2} alt="Talo Sensu" width="50%" />
        <StyledImage src={sensu3} alt="Talo Sensu" width="50%" />
      </StyledImageRow>
      <Banner text="Sisustussuunnittelua yksityiskoteihin ja julkistiloihin." />
      <StyledImage
        src={image}
        alt="Kuva työvälineistä"
        width="100%"
      />
    </StyledHomeDiv>
  );
};
