import React from 'react';
import styled from 'styled-components';
import {
  SocialProvider,
  SocialLink,
} from '@mui-treasury/components/socialLink';
import { usePoofSocialLinkStyles } from '@mui-treasury/styles/socialLink/poof';

const StyledFooter = styled.footer`
  display: grid;
  align-content: center;
  justify-content: center;

  p: 3px;
  text-align: center;
  @media (min-width: 320px) {
    padding-bottom: 20px;
    padding-top: 40px;
  }

  @media (min-width: 1200px) {
    padding-bottom: 100px;
  }
`;

const StyledLink = styled.a`
  color: grey;
  text-decoration: none;
`;

export const Footer = () => {
  return (
    <StyledFooter>
      <div>
        <p>Interior Design Latvalahti</p>
        <p>
          <StyledLink href="mailto: interior@designlatvalahti.fi ">
            interior@designlatvalahti.fi
          </StyledLink>
        </p>
        <p>
          <StyledLink href="tel: 0453565554">0453565554</StyledLink>
        </p>
        <SocialProvider useStyles={usePoofSocialLinkStyles}>
          <SocialLink
            brand={'Instagram'}
            href="https://www.instagram.com/casalautaajabetonia/?hl=fi"
          />
        </SocialProvider>
        <p>Y-tunnus: 2361455-8</p>
      </div>
      <div>
        Kuvat:{' '}
        <StyledLink href="http://ateljeemantyniemi.fi/">
          Mikko Mäntyniemi
        </StyledLink>
      </div>
    </StyledFooter>
  );
};
