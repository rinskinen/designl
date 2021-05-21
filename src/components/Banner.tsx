import React from 'react';
import styled from 'styled-components';

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
`;

const link = {
  textAlign: 'center' as 'center',
  paddingTop: 30,
};

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
