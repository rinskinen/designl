import { Link } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';
import {
  SocialProvider,
  SocialLink,
} from '@mui-treasury/components/socialLink';
import { usePoofSocialLinkStyles } from '@mui-treasury/styles/socialLink/poof';

const StyledFooter = styled.footer`
  background-color: #fdfdfd;
  font-family: Quicksand;
  display: grid;
  align-content: center;
  justify-content: center;
  padding-bottom: 100px;
  p: 3px;
  text-align: center;
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
    </StyledFooter>
  );
};
