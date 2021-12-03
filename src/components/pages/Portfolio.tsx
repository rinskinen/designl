import React, { useState } from 'react';
import styled from 'styled-components';
import { Fajo } from './Fajo';
import { Sensu } from './Sensu';

const StyledCardButton = styled.div`
  align-self: center;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  border: 1.5px solid black;
  text-align: center;
  font-family: Quicksand !important;
  cursor: pointer;

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
  cursor: pointer;
`;

export const Portfolio = () => {
  const [page, setPage] = useState('');
  return (
    <>
      {page === '' ? (
        <>
          <StyledCardButton onClick={() => setPage('Sensu')}>
            <StyledLabel>Talo Sensu</StyledLabel>
          </StyledCardButton>
          <StyledCardButton onClick={() => setPage('Wihuri')}>
            <StyledLabel>Wihuri Metro-tukku</StyledLabel>
          </StyledCardButton>
        </>
      ) : page === 'Sensu' ? (
        <Sensu
          title="Talo Sensu"
          info="Asuntomessut 2021 Lohja - kiintokalusteet, pintamateriaalit, irtokalusteet, tekstiilit, valaistus ja stailaus"
        />
      ) : (
        <Fajo title="Wihuri Metro-tukku" />
      )}
    </>
  );
};
