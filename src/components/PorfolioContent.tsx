import React from 'react';
import styled from 'styled-components';
import image1 from '../images/TaloSensu20.jpg';
import image2 from '../images/Koivui02.jpg';
import image3 from '../images/TaloSensu10.jpg';
import image4 from '../images/TaloSensu05.jpg';
import image5 from '../images/TaloSensu07.jpg';
import image6 from '../images/TaloSensu11.jpg';
import image7 from '../images/TaloSensu43.jpg';
import image8 from '../images/TaloSensu15.jpg';
import image9 from '../images/TaloSensu2.jpg';
import image10 from '../images/TaloSensu19.jpg';
import image11 from '../images/TaloSensu21.jpg';
import image12 from '../images/TaloSensu31.jpg';
import image13 from '../images/TaloSensu36.jpg';
import image14 from '../images/TaloSensu38.jpg';
import image15 from '../images/TaloSensu52.jpg';
import image16 from '../images/TaloSensu53.jpg';
import image17 from '../images/TaloSensu65.jpg';
import image18 from '../images/TaloSensu67.jpg';
import image19 from '../images/TaloSensu70.jpg';
import image20 from '../images/TaloSensu74.jpg';
import image21 from '../images/TaloSensu62.jpg';

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
    padding-right: 20px;
    margin-bottom: 10px;
  }

  @media (min-width: 1200px) {
    padding-right: 50px;
    margin-bottom: 50px;
  }
`;

const StyledImageRow = styled.div`
  display: flex;
  flex-direction: row;

  @media (min-width: 320px) {
    padding-right: 20px;
    margin-bottom: 10px;
  }

  @media (min-width: 1200px) {
    padding-right: 50px;
    margin-bottom: 50px;
  }
`;

interface Props {
  title: string;
  info: string;
}

export const PortfolioContent = ({ title, info }: Props) => {
  return (
    <>
      <StyledCard>
        <StyledLabel>{title}</StyledLabel>
        <StyledLine />
        <p>{info}</p>
      </StyledCard>
      <>
        <StyledImage src={image1} alt="Talo Sensu" width="100%" />
        <StyledImageRow>
          <StyledImage src={image2} alt="Talo Sensu" width="50%" />
          <StyledImage src={image3} alt="Talo Sensu" width="50%" />
        </StyledImageRow>
        <StyledImage src={image4} alt="Talo Sensu" width="100%" />
        <StyledImage src={image5} alt="Talo Sensu" width="100%" />
        <StyledImageRow>
          <StyledImage src={image6} alt="Talo Sensu" width="50%" />
          <StyledImage src={image7} alt="Talo Sensu" width="50%" />
        </StyledImageRow>
        <StyledImage src={image8} alt="Talo Sensu" width="100%" />
        <StyledImage src={image9} alt="Talo Sensu" width="100%" />
        <StyledImage src={image10} alt="Talo Sensu" width="100%" />
        <StyledImage src={image11} alt="Talo Sensu" width="100%" />
        <StyledImageRow>
          <StyledImage src={image12} alt="Talo Sensu" width="50%" />
          <StyledImage src={image13} alt="Talo Sensu" width="50%" />
        </StyledImageRow>
        <StyledImage src={image14} alt="Talo Sensu" width="100%" />
        <StyledImageRow>
          <StyledImage src={image15} alt="Talo Sensu" width="50%" />
          <StyledImage src={image16} alt="Talo Sensu" width="50%" />
        </StyledImageRow>
        <StyledImageRow>
          <StyledImage src={image17} alt="Talo Sensu" width="50%" />
          <StyledImage src={image18} alt="Talo Sensu" width="50%" />
        </StyledImageRow>
        <StyledImage src={image19} alt="Talo Sensu" width="100%" />
        <StyledImage src={image20} alt="Talo Sensu" width="100%" />
        <StyledImageRow>
          <StyledImage src={image21} alt="Talo Sensu" width="50%" />
        </StyledImageRow>
      </>
    </>
  );
};
