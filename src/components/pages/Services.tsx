import React from 'react';
import styled from 'styled-components';
import { ServicesContent } from '../ServicesContent';

const StyledServicesPage = styled.div`
  display: grid;
  align-content: center;
  justify-content: center;
  flex: 1 1 auto;
  p: 3px;
  text-align: center;
`;

export const StyledLine = styled.div`
  align-self: center;
  width: 50px;
  height: 1px;
  background-color: inherit;
  margin: 8px auto;
  border: 1px solid #ddd;
`;

export const Services = () => {
  return (
    <StyledServicesPage>
      <ServicesContent />
    </StyledServicesPage>
  );
};
