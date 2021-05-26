import React from 'react';
import styled from 'styled-components';
import { StyledLine } from './Services';

const StyledCard = styled.div`
  align-self: center;
  display: grid;
  align-content: center;
  justify-content: center;
  padding: 50px;
  margin: 100px;
  border: 1.5px solid black;
  font-family: 'Quicksand';
  font-size: 24px;
  text-align: center;
`;

const StyledHeader = styled.h1`
  font-family: 'Quicksand';
  font-size: 30px;
  text-align: center;
`;

export const About = () => {
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
