import React from 'react';
import { Banner } from '../Banner';
import styled from 'styled-components';
import sensu1 from '../../images/TaloSensu2.jpg';
import sensu2 from '../../images/TaloSensu10.jpg';
import sensu3 from '../../images/TaloSensu11.jpg';
import image1 from '../../images/LatvalahtiDima2.jpg';

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
      <Banner text="Sisustussuunnittelua yksityiskoteihin ja julkitiloihin." />
      <StyledImage src={image1} alt="Dima Latvalahti" width="100%" />
    </StyledHomeDiv>
  );
};
