import { Link } from '@material-ui/core';
import Breadcrumbs from '@material-ui/core/Breadcrumbs/Breadcrumbs';
import React, { useState } from 'react';
import { ReactComponent as Logo } from '../images/Interior design Latvalahti_logo.svg';
import styled from 'styled-components';
import { BurgerMenu } from './BurgerMenu';
import MenuIcon from '@material-ui/icons/Menu';

const HeaderStyled = styled.div`
  background-color: #fdfdfd;
  display: flex;
  align-content: center;
  justify-content: space-between;
  p: 3;
`;

const LogoStyled = styled.div`
  @media (min-width: 320px) {
    padding-left: 10px;
    width: 200px;
    height: 200px;
  }

  @media (min-width: 1200px) {
    padding-left: 60px;
    width: 300px;
    height: 300px;
  }
`;

const BreadcrumbsStyled = styled.div`
  @media (min-width: 320px) {
    display: none;
  }

  @media (min-width: 1200px) {
    display: block;
    padding-top: 50px;
    padding-right: 60px;
  }
`;

const MenuIconStyled = styled.div`
  @media (min-width: 320px) {
    display: block;
    padding-top: 70px;
    padding-right: 20px;
    height: 50px;
    width: 50px;
  }

  @media (min-width: 1200px) {
    display: none;
  }
`;

export const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <HeaderStyled>
        <LogoStyled>
          <Link href="/">
            <Logo height="100%" width="100%" />
          </Link>
        </LogoStyled>
        <BreadcrumbsStyled>
          <Breadcrumbs
            aria-label="breadcrumb"
            style={{
              fontFamily: 'Quicksand',
            }}
          >
            <Link color="inherit" href="/">
              Etusivu
            </Link>
            <Link color="inherit" href="/suunnittelija">
              Suunnittelija
            </Link>
            <Link
              color="inherit"
              href="/palvelut"
              aria-current="page"
            >
              Palvelut
            </Link>
            {/* <Link
            color="inherit"
            href="/portfolio"
            aria-current="page"
          >
            Portfolio
          </Link> */}
            <Link
              color="inherit"
              href="/otayhteyttä"
              aria-current="page"
            >
              Ota yhteyttä
            </Link>
          </Breadcrumbs>
        </BreadcrumbsStyled>
        <MenuIconStyled onClick={() => setOpen(!open)}>
          <MenuIcon
            style={{
              color: '#808080',
              height: '100%',
              width: '100%',
            }}
          />
        </MenuIconStyled>
      </HeaderStyled>
      <BurgerMenu open={open} />
    </>
  );
};
