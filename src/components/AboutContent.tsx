import React from 'react';
import styled from 'styled-components';
import { StyledLine } from './pages/Services';

const StyledCard = styled.div`
  align-self: center;
  display: grid;
  align-content: center;
  justify-content: center;
  border: 1.5px solid black;
  font-size: 24px;
  @media (min-width: 320px) {
    padding: 20px;
    margin-bottom: 10px;
  }

  @media (min-width: 1200px) {
    padding: 50px;
    margin-bottom: 50px;
  }
`;

const StyledHeader = styled.h1`
  font-size: 24px;
  text-align: center;
`;

export const AboutContent = () => {
  return (
    <StyledCard>
      <StyledHeader>Tervetuloa sivuilleni!</StyledHeader>
      <StyledLine />
      <p>
        Olen Dima Latvalahti ja valmistuin huhtikuussa 2021
        sisustussuunnittelijaksi Helsinki Design Schoolista.
      </p>
      <p>
        Ryhdyin yrittäjäksi tammikuussa 2021 ja perustin
        sisustussuunnittelutoimiston.
      </p>
      <p>Suunnittelutyöni lähtökohta on aina asiakkaani kuuntelu.</p>
      <p>
        Moni kysyy minulta minkälainen sisustustyyli minulla on.
        Kerron, mutta se ei kerro muusta kuin mistä minä pidän. Mutta
        työssäni on kyse siitä miten saan tehtyä asiakkaalleni hänen
        toiveidensa ja tarpeittensa mukainen koti.
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
  );
};
