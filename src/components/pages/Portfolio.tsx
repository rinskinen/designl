import React from 'react';
import styled from 'styled-components';
import { PortfolioContent } from '../PorfolioContent';

const StyledPortfolio = styled.div`
  display: grid;
  align-content: center;
  justify-content: center;
  p: 3px;
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

export const Portfolio = () => {
  return (
    <StyledPortfolio>
      <PortfolioContent
        title="Talo Sensu"
        info="Asuntomessut 2021 Lohja"
      />
    </StyledPortfolio>
  );
};
