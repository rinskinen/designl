import React from 'react';
import { PortfolioCard } from './Card';

export const Portfolio = () => {
  return (
    <div>
      <PortfolioCard
        title="Lohjan asuntomessut, Talo Sensu"
        text="Pintamateriaalit, kiintokalusteet, irtokalusteet, tekstiilit, stailaus"
      />
      <PortfolioCard title="Kaksikerroksinen omakotitalo Espoo 300m2" />
      <PortfolioCard title="FIT24 Klaukkala kuntosali" />
      <PortfolioCard
        title="CLT-talo Espoo"
        text="pintamateriaalit ja kiintokalusteet"
      />
      <PortfolioCard
        title="Hirsitalo Kajaanissa"
        text="Kylpyhuone, vessa, sauna, kodinhoitohuone: pintamateriaalit ja kiintokalusteet, toimintojen suunnittelu"
      />
      <PortfolioCard
        title="Puutalo Hämeenlinnassa"
        text="Olohuoneen ja keittiön suunnittelu, pintamateriaalit, kiintokalusteet"
      />
      <PortfolioCard
        title="Uudiskohde, Jyväskylä"
        text="Koko talon pintamateriaalit ja kiintokalusteet"
      />
      <PortfolioCard
        title="Uudiskohde, Espoo"
        text="Kolmikerroksinen omakotitalo"
      />
      <PortfolioCard title="Hirsitalo uudiskohde Kaarinassa" />
      <PortfolioCard
        title="Uudiskohde, Tuusula"
        text="Märkätilat pintamateriaalit ja kiintokalustesuunnittelu"
      />
    </div>
  );
};
