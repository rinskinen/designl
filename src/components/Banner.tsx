import React from 'react';
import styled from 'styled-components';

const StyledCard = styled.div`
  align-self: center;
  display: grid;
  align-content: center;
  justify-content: center;
  padding: 50px;
  margin-left: 100px;
  margin-right: 100px;
  margin-top: 50px;
  margin-bottom: 50px;
  border: 1.5px solid black;
  font-family: 'Quicksand';
  font-size: 24px;
`;

interface Props {
  text: string;
}

export const Banner: React.FC<Props> = ({ text }) => {
  return (
    <StyledCard>
      <p>{text}</p>
    </StyledCard>
  );
};
