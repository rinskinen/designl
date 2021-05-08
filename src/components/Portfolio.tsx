import React from 'react';
import { PortfolioCard } from './Card';
import kuva1 from '../images/kuva1.jpg';
import kuva2 from '../images/kuva2.jpg';
import kuva3 from '../images/kuva3.jpg';
import kuva4 from '../images/kuva4.jpg';
import kuva5 from '../images/kuva5.jpg';
import kuva6 from '../images/kuva6.jpg';
import kuva7 from '../images/kuva7.jpg';
import kuva8 from '../images/kuva8.jpg';
import kuva9 from '../images/kuva9.jpg';
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
          image={kuva1}
        />
        <GridItem
          title="Kaksikerroksinen omakotitalo Espoo 300m2"
          image={kuva2}
        />
        <GridItem title="FIT24 Klaukkala kuntosali" image={kuva7} />
        <GridItem
          title="CLT-talo Espoo"
          text="pintamateriaalit ja kiintokalusteet"
          image={kuva3}
        />
        <GridItem
          title="Hirsitalo Kajaanissa"
          text="Kylpyhuone, vessa, sauna, kodinhoitohuone: pintamateriaalit ja kiintokalusteet, toimintojen suunnittelu"
          image={kuva4}
        />
        <GridItem
          title="Puutalo Hämeenlinnassa"
          text="Olohuoneen ja keittiön suunnittelu, pintamateriaalit, kiintokalusteet"
          image={kuva5}
        />
        <GridItem
          title="Uudiskohde, Jyväskylä"
          text="Koko talon pintamateriaalit ja kiintokalusteet"
          image={kuva6}
        />
        <GridItem
          title="Uudiskohde, Espoo"
          text="Kolmikerroksinen omakotitalo"
          image={kuva8}
        />
        <GridItem
          title="Hirsitalo, uudiskohde Kaarinassa"
          image={kuva1}
        />
        <GridItem
          title="Uudiskohde, Tuusula"
          text="Märkätilat pintamateriaalit ja kiintokalustesuunnittelu"
          image={kuva9}
        />
      </Grid>
    </StyledPortfolio>
  );
};
