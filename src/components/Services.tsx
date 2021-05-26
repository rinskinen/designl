import React from 'react';
import styled from 'styled-components';

const StyledLabel = styled.label`
  font-family: Quicksand;
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 10px;
`;

const StyledCard = styled.div`
  align-self: center;
  display: grid;
  align-content: center;
  justify-content: center;
  padding: 50px;
  margin: 100px;
  border: 1.5px solid black;
  text-align: center;
`;

export const StyledLine = styled.div`
  align-self: center;
  width: 50px;
  height: 1px;
  background-color: inherit;
  margin: 8px auto;
  border: 1px solid #ddd;
`;

export const Services = () => {
  return (
    <div>
      <StyledCard>
        <StyledLabel>Pintamateriaali</StyledLabel>
        <StyledLine />
        <p>
          Kohteen kaikkien lattia-seinä ja kattopintojen väri-ja
          materiaalisuunnittelu.
        </p>
      </StyledCard>
      <StyledCard>
        <StyledLabel>Kokonaisvaltainen suunnittelu</StyledLabel>
      </StyledCard>
      <StyledCard>
        <StyledLabel>Valaistussuunnittelu</StyledLabel>
      </StyledCard>
      <StyledCard>
        <StyledLabel>Tilasuunnittelu</StyledLabel>
        <StyledLine />
        <p>
          Suunnittelen pohjan sekä uudiskohteisiin, että
          remontoitaviin kohteisiin. Palvelu sisältää
          toiminnallisuuden ja tilaratkaisujen suunnittelun
        </p>
      </StyledCard>
      <StyledCard>
        <StyledLabel>Sisustuskonsultaatio</StyledLabel>
      </StyledCard>
      <StyledCard>
        <StyledLabel>Stailaus</StyledLabel>
      </StyledCard>
      <StyledCard>
        <StyledLabel>Kiintokalustesuunnittelu</StyledLabel>
        <StyledLine />
        <p>
          Keittiön, kylpuhuoneiden allaskalusteet ja hanat/suihkut,
          vaatehuoneen, kodinhoitohuoneen ja muiden kiinteideen
          kalusteiden suunnittelu. Suunnittelen myös uniikkeja
          kalusteita, jotka esimerkiksi puuseppä toteuttaa.
        </p>
      </StyledCard>
      <StyledCard>
        <StyledLabel>Mitä sisustussuunnittelu maksaa?</StyledLabel>
        <StyledLine />
        <p>
          Hinta riippuu työn sisällöstä ja laajuudesta. Annan
          mielleläni tarjouksen työstäni. Hinta ja sisältö ovat
          räätälöitävissä juuri sinun tarpeittesi mukaan.
        </p>
      </StyledCard>
    </div>
  );
};
