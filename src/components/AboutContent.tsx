import React from 'react';
import styled from 'styled-components';

const StyledContent = styled.div`
  display: flex;

  @media (min-width: 320px) {
    flex-direction: column;
  }

  @media (min-width: 1200px) {
    flex-direction: row;
  }
`;

const StyledCard = styled.div`
  align-self: center;
  display: grid;
  align-content: center;
  justify-content: center;
  font-size: 24px;
  @media (min-width: 320px) {
    padding: 20px;
    margin-bottom: 10px;
  }

  @media (min-width: 1200px) {
    padding: 0 50px 50px 50px;
    margin-bottom: 50px;
  }
`;

const StyledHeader = styled.h1`
  font-size: 24px;
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

export const AboutContent = () => {
  return (
    <StyledContent>
      <StyledImage
        src="https://webdisk.designlatvalahti.fi/public_html/designlatvalahti/images/LatvalahtiDima.jpg"
        alt="Dima Latvalahti"
        width="50%"
      />
      <StyledCard>
        <StyledHeader>Tervetuloa sivuilleni!</StyledHeader>
        <p>
          Olen Dima Latvalahti ja valmistuin huhtikuussa 2021
          sisustussuunnittelijaksi Helsinki Design Schoolista.
        </p>
        <p>
          Ryhdyin yrittäjäksi tammikuussa 2021 ja perustin
          sisustussuunnittelutoimiston.
        </p>
        <p>
          Suunnittelutyöni lähtökohta on aina asiakkaani kuuntelu.
        </p>
        <p>
          Moni kysyy minulta minkälainen sisustustyyli minulla on.
          Kerron, mutta se ei kerro muusta kuin mistä minä pidän.
          Mutta työssäni on kyse siitä miten saan tehtyä asiakkaalleni
          hänen toiveidensa ja tarpeittensa mukainen koti.
        </p>
        <p>
          Tarkoitus ei ole tehdä kohteesta itselleni käyntikorttia.
          Asiakkaalla on usein paljon toiveita ja ideoita mitä hän
          kotiinsa haluaa. Minun tehtävä on suunnittella näiden
          perusteella kaunis yhtenäinen kokonaisuus, joka palvelee
          kaikkia asiakkaan tarpeita.
        </p>
        <p>
          Jokainen koti on asujansa henkilökohtainen maailmansa; sen
          pitää olla myös asujansa näköinen.
        </p>
      </StyledCard>
    </StyledContent>
  );
};
