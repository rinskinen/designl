import React from 'react';
import styled from 'styled-components';
import { AboutContent } from '../AboutContent';

const StyledAboutPage = styled.div`
  display: grid;
  align-content: center;
  justify-content: center;
  flex: 1 1 auto;
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
