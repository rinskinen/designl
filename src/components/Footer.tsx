import { Link } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';

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

export const Footer = () => {
  return (
    <StyledFooter>
      <div>
        <p>Interior Design Latvalahti</p>
        <p>
          <Link href="mailto: interior@designlatvalahti.fi ">
            interior@designlatvalahti.fi
          </Link>
        </p>
        <p>
          <Link href="tel: 0453565554">0453565554</Link>
        </p>
        <Link href="https://www.instagram.com/casalautaajabetonia/?hl=fi">
          Instagram
        </Link>
        <p>Y-tunnus: 2361455-8</p>
      </div>
    </StyledFooter>
  );
};
