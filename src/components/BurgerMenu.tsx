import React from 'react';
import { Link, MenuList } from '@material-ui/core';
import styled from 'styled-components';

interface Props {
  open: boolean;
}

const StyledMenuItem = styled.div`
  color: grey;
  padding-bottom: 20px;
  text-align: center;
  font-size: 24px;
`;

export const BurgerMenu: React.FC<Props> = ({ open }) => {
  return (
    <>
      {open && (
        <MenuList>
          <StyledMenuItem>
            <Link color="inherit" href="/">
              Etusivu
            </Link>
          </StyledMenuItem>
          <StyledMenuItem>
            <Link color="inherit" href="/suunnittelija">
              Suunnittelija
            </Link>
          </StyledMenuItem>
          <StyledMenuItem>
            <Link
              color="inherit"
              href="/palvelut"
              aria-current="page"
            >
              Palvelut
            </Link>
          </StyledMenuItem>
          <StyledMenuItem>
            <Link
              color="inherit"
              href="/otayhteyttä"
              aria-current="page"
            >
              Ota yhteyttä
            </Link>
          </StyledMenuItem>
        </MenuList>
      )}
    </>
  );
};
