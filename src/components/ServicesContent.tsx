import React from 'react';
import styled from 'styled-components';

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
    margin: 10px;
  }

  @media (min-width: 1200px) {
    padding: 50px;
    margin: 30px;
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

export const ServicesContent = () => {
  return (
    <>
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
    </>
  );
};
