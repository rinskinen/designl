import React from 'react';
import { PortfolioCard } from './Card';
import Grid from '@material-ui/core/Grid';
import styled from 'styled-components';

const StyledPortfolio = styled.div`
  display: grid;
  margin: auto;
`;

interface Props {
  title: string;
  text?: string;
  image?: any;
}

const GridItem: React.FC<Props> = ({ title, text, image }) => {
  return (
    <Grid item>
      <PortfolioCard title={title} text={text} image={image} />
    </Grid>
  );
};

export const Portfolio = () => {
  return (
    <StyledPortfolio>
      <Grid container spacing={2}>
        <GridItem
          title="Lohjan asuntomessut, Talo Sensu"
          text="Pintamateriaalit, kiintokalusteet, irtokalusteet, tekstiilit, stailaus"
        />
        <GridItem title="Kaksikerroksinen omakotitalo Espoo 300m2" />
        <GridItem title="FIT24 Klaukkala kuntosali" />
        <GridItem
          title="CLT-talo Espoo"
          text="pintamateriaalit ja kiintokalusteet"
        />
        <GridItem
          title="Hirsitalo Kajaanissa"
          text="Kylpyhuone, vessa, sauna, kodinhoitohuone: pintamateriaalit ja kiintokalusteet, toimintojen suunnittelu"
        />
        <GridItem
          title="Puutalo Hämeenlinnassa"
          text="Olohuoneen ja keittiön suunnittelu, pintamateriaalit, kiintokalusteet"
        />
        <GridItem
          title="Uudiskohde, Jyväskylä"
          text="Koko talon pintamateriaalit ja kiintokalusteet"
        />
        <GridItem
          title="Uudiskohde, Espoo"
          text="Kolmikerroksinen omakotitalo"
        />
        <GridItem title="Hirsitalo, uudiskohde Kaarinassa" />
        <GridItem
          title="Uudiskohde, Tuusula"
          text="Märkätilat pintamateriaalit ja kiintokalustesuunnittelu"
        />
      </Grid>
    </StyledPortfolio>
  );
};
