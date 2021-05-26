import React from 'react';
import { Banner } from './Banner';
import styled from 'styled-components';

const StyledHomeDiv = styled.div`
  display: grid;
  align-content: center;
  justify-content: center;
  background-color: #fdfdfd;
  flex: 1 1 auto;
  p: 3px;
  text-align: center;
`;

export const Home = () => {
  return (
    <StyledHomeDiv>
      <Banner text="Sisustussuunnittelua yksityiskoteihin ja julkitiloihin." />
      <Banner text="Esteettisiä, toimivia ja ajattomia tiloja, joissa on hyvä olla." />
      <Banner
        text="Kuvia kohteistani tulossa pian! Voit tutustua kohteisiini Instagram-tililläni "
        link="https://www.instagram.com/casalautaajabetonia/?hl=fi"
        linkText="@casalautaajabetonia"
      />
    </StyledHomeDiv>
  );
};
