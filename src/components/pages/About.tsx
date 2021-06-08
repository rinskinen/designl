import React from 'react';
import styled from 'styled-components';
import { AboutContent } from '../AboutContent';

const StyledAboutPage = styled.div`
  display: grid;
  align-content: center;
  justify-content: stretch;
  p: 3px;
  text-align: center;
`;

export const About = () => {
  return (
    <StyledAboutPage>
      <AboutContent />
    </StyledAboutPage>
  );
};
