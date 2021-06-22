import React from 'react';
import styled from 'styled-components';
import {PortfolioContent} from '../PorfolioContent'

const data = [{
  id: 1,
  name: "Sensu1",
  image: "https://webdisk.designlatvalahti.fi/public_html/designlatvalahti/images/sensu.jpg"
}, {
  id: 1,
  name: "Sensu1",
  image: "https://webdisk.designlatvalahti.fi/public_html/designlatvalahti/images/sensu.jpg"
}, {
  id: 1,
  name: "Sensu1",
  image: "https://webdisk.designlatvalahti.fi/public_html/designlatvalahti/images/sensu.jpg"
}, {
  id: 1,
  name: "Sensu1",
  image: "https://webdisk.designlatvalahti.fi/public_html/designlatvalahti/images/sensu.jpg"
}, {
  id: 1,
  name: "Sensu1",
  image: "https://webdisk.designlatvalahti.fi/public_html/designlatvalahti/images/sensu.jpg"
},{
  id: 1,
  name: "Sensu1",
  image: "https://webdisk.designlatvalahti.fi/public_html/designlatvalahti/images/sensu.jpg"
},{
  id: 1,
  name: "Sensu1",
  image: "https://webdisk.designlatvalahti.fi/public_html/designlatvalahti/images/sensu.jpg"
},{
  id: 1,
  name: "Sensu1",
  image: "https://webdisk.designlatvalahti.fi/public_html/designlatvalahti/images/sensu.jpg"
}]

const StyledPortfolio = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  position: relative;

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
      <PortfolioContent data={data} targetName='Sensu'/>   
    </StyledPortfolio>
  );
};
