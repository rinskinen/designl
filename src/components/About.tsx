import React from 'react';
import Dima from '../images/dima.jpeg';

const about = {
  backgroundColor: '#fdfdfd',
  display: 'flex',
  alignContent: 'center',
  justifyContent: 'center',
};

const text = {
  fontFamily: 'Quicksand',
  fontSize: 28,
  paddingLeft: 50,
};

export const About = () => {
  return (
    <div style={about}>
      <img src={Dima} alt="self portrait" />
      <div style={text}>
        <p>Hei! Tervetuloa sivuilleni!</p>
        <br />
        <p>
          Olen Dima Latvalahti ja valmistuin huhtikuussa 2021
          sisustussuunnittelijaksi Helsinki Design Schoolista.
        </p>
        <br />
        <p>
          Ryhdyin yrittäjäksi tammikuussa 2021 ja perustin
          sisustussuunnittelutoimiston.
        </p>
        <br />
        <p>
          Suunnittelutyöni lähtökohta on aina asiakkaani kuuntelu.
        </p>
        <br />
        <p>
          Moni kysyy minulta minkälainen sisustustyyli minulla on.
          Kerron, mutta se ei kerro muusta kuin mistä minä pidän.
          Mutta työssäni on kyse siitä miten saan tehtyä asiakkaalleni
          hänen toiveidensa ja tarpeittensa mukainen koti.
        </p>
        <br />
        <p>
          Tarkoitus ei ole tehdä kohteesta itselleni käyntikorttia.
          Asiakkaalla on usein paljon toiveita ja ideoita mitä hän
          kotiinsa haluaa. Minun tehtävä on suunnittella näiden
          perusteella kaunis yhtenäinen kokonaisuus, joka palvelee
          kaikkia asiakkaan tarpeita.
        </p>
        <br />
        <p>
          Jokainen koti on asujansa henkilökohtainen maailmansa; sen
          pitää olla myös asujansa näköinen.
        </p>
      </div>
    </div>
  );
};
