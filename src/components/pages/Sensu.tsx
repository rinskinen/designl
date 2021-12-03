import React from 'react';
import styled from 'styled-components';

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
    margin-bottom: 10px;
  }

  @media (min-width: 1200px) {
    padding: 50px;
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
    margin-bottom: 10px;
  }

  @media (min-width: 1200px) {
    margin-bottom: 50px;
  }
`;

const StyledImageRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

interface Props {
  title: string;
  info: string;
}

export const Sensu = ({ title, info }: Props) => {
  return (
    <>
      <StyledCard>
        <StyledLabel>{title}</StyledLabel>
        <StyledLine />
        <p>{info}</p>
      </StyledCard>
      <>
        <StyledImage
          src="https://kuvat.designlatvalahti.fi/images/sensu/Sensu_20.jpg"
          alt="Talo Sensu"
          width="100%"
        />
        <StyledImageRow>
          <StyledImage
            src="https://kuvat.designlatvalahti.fi/images/sensu/Koivui02.jpg"
            alt="Talo Sensu"
            width="50%"
          />
          <StyledImage
            src="https://kuvat.designlatvalahti.fi/images/sensu/Sensu_10.jpg"
            alt="Talo Sensu"
            width="50%"
          />
        </StyledImageRow>
        <StyledImage
          src="https://kuvat.designlatvalahti.fi/images/sensu/Sensu_05.jpg"
          alt="Talo Sensu"
          width="100%"
        />
        <StyledImage
          src="https://kuvat.designlatvalahti.fi/images/sensu/Sensu_07.jpg"
          alt="Talo Sensu"
          width="100%"
        />
        <StyledImageRow>
          <StyledImage
            src="https://kuvat.designlatvalahti.fi/images/sensu/Sensu_11.jpg"
            alt="Talo Sensu"
            width="50%"
          />
          <StyledImage
            src="https://kuvat.designlatvalahti.fi/images/sensu/Sensu_43.jpg"
            alt="Talo Sensu"
            width="50%"
          />
        </StyledImageRow>
        <StyledImage
          src="https://kuvat.designlatvalahti.fi/images/sensu/Sensu15.jpg"
          alt="Talo Sensu"
          width="100%"
        />
        <StyledImage
          src="https://kuvat.designlatvalahti.fi/images/sensu/SENSU_olohuone.jpg"
          alt="Talo Sensu"
          width="100%"
        />
        <StyledImage
          src="https://kuvat.designlatvalahti.fi/images/sensu/Sensu_19.jpg"
          alt="Talo Sensu"
          width="100%"
        />
        <StyledImage
          src="https://kuvat.designlatvalahti.fi/images/sensu/Sensu_21.jpg"
          alt="Talo Sensu"
          width="100%"
        />
        <StyledImageRow>
          <StyledImage
            src="https://kuvat.designlatvalahti.fi/images/sensu/Sensu_31.jpg"
            alt="Talo Sensu"
            width="50%"
          />
          <StyledImage
            src="https://kuvat.designlatvalahti.fi/images/sensu/Sensu_36.jpg"
            alt="Talo Sensu"
            width="50%"
          />
        </StyledImageRow>
        <StyledImage
          src="https://kuvat.designlatvalahti.fi/images/sensu/Sensu_38.jpg"
          alt="Talo Sensu"
          width="100%"
        />
        <StyledImageRow>
          <StyledImage
            src="https://kuvat.designlatvalahti.fi/images/sensu/Sensu_52.jpg"
            alt="Talo Sensu"
            width="50%"
          />
          <StyledImage
            src="https://kuvat.designlatvalahti.fi/images/sensu/Sensu_53.jpg"
            alt="Talo Sensu"
            width="50%"
          />
        </StyledImageRow>
        <StyledImageRow>
          <StyledImage
            src="https://kuvat.designlatvalahti.fi/images/sensu/Sensu_65.jpg"
            alt="Talo Sensu"
            width="50%"
          />
          <StyledImage
            src="https://kuvat.designlatvalahti.fi/images/sensu/Sensu_67.jpg"
            alt="Talo Sensu"
            width="50%"
          />
        </StyledImageRow>
        <StyledImage
          src="https://kuvat.designlatvalahti.fi/images/sensu/Sensu_70.jpg"
          alt="Talo Sensu"
          width="100%"
        />
        <StyledImage
          src="https://kuvat.designlatvalahti.fi/images/sensu/Portaat.jpg"
          alt="Talo Sensu"
          width="100%"
        />
        <StyledImage
          src="https://kuvat.designlatvalahti.fi/images/sensu/Poyta.jpg"
          alt="Talo Sensu"
          width="100%"
        />
        <StyledImage
          src="https://kuvat.designlatvalahti.fi/images/sensu/Makuuhuone_2.jpg"
          alt="Talo Sensu"
          width="100%"
        />
        <StyledImage
          src="https://kuvat.designlatvalahti.fi/images/sensu/Keittio.jpg"
          alt="Talo Sensu"
          width="100%"
        />
        <StyledImage
          src="https://kuvat.designlatvalahti.fi/images/sensu/Suihkut.jpg"
          alt="Talo Sensu"
          width="100%"
        />
        <StyledImage
          src="https://kuvat.designlatvalahti.fi/images/sensu/Sensu_70.jpg"
          alt="Talo Sensu"
          width="100%"
        />
        <StyledImage
          src="https://kuvat.designlatvalahti.fi/images/sensu/Sensu_makuuhuone.jpg"
          alt="Talo Sensu"
          width="100%"
        />
      </>
    </>
  );
};
