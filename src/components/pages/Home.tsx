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
        src="https://webdisk.designlatvalahti.fi/public_html/designlatvalahti/images/sensu/TaloSensu2.jpg"
        alt="Talo Sensu"
        width="100%"
      />
      <StyledImageRow>
        <StyledImage
          src="https://webdisk.designlatvalahti.fi/public_html/designlatvalahti/images/sensu/TaloSensu10.jpg"
          alt="Talo Sensu"
          width="50%"
        />
        <StyledImage
          src="https://webdisk.designlatvalahti.fi/public_html/designlatvalahti/images/sensu/TaloSensu11.jpg"
          alt="Talo Sensu"
          width="50%"
        />
      </StyledImageRow>
      <Banner text="Sisustussuunnittelua yksityiskoteihin ja julkitiloihin." />
      <StyledImage
        src="https://webdisk.designlatvalahti.fi/public_html/designlatvalahti/images/LatvalahtiDima2.jpg"
        alt="Dima Latvalahti"
        width="100%"
      />
    </StyledHomeDiv>
  );
};
