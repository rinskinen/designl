import React from 'react';
import styled from 'styled-components';
import { Image } from './Image';

const StyledTarget = styled.div`
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

interface Props {
    data: Array<{
        id: number;
        image: string;
        name: string;
    }>
}

export const PortfolioContent = ({data}: Props) => {
    return (
    <StyledTarget>
      {data.map((image) => {
          return (
            <Image image={image.image} name={image.name} open={false}/>
          )
      })}      
    </StyledTarget>)
}