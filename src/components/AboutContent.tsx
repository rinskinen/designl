import React from 'react';
import styled from 'styled-components';
import image1 from '../images/LatvalahtiDima28.jpg';

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

  @media (min-width: 320px) {
    padding: 20px;
    margin-bottom: 10px;
  }

  @media (min-width: 1200px) {
    padding: 0 50px 50px 50px;
    margin-bottom: 50px;
  }
`;

const StyledLabel = styled.label`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 10px;
`;

export const StyledLine = styled.div`
  align-self: center;
  width: 50px;
  height: 1px;
  background-color: inherit;
  margin: 8px auto;
  border: 1px solid #ddd;
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
      <StyledImage src={image1} alt="Dima Latvalahti" width="50%" />
      <StyledCard>
        <StyledLabel>Tervetuloa sivuilleni!</StyledLabel>
        <StyledLine />
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
