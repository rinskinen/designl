import { Link } from '@material-ui/core';
import Breadcrumbs from '@material-ui/core/Breadcrumbs/Breadcrumbs';
import React from 'react';
import { ReactComponent as Logo } from '../images/Interior design Latvalahti_logo.svg';
import styled from 'styled-components';

const HeaderStyled = styled.h1`
  backgroundcolor: #fdfdfd;
  font-family: Quicksand;
  display: flex;
  aligncontent: center;
  padding: 100;
  p: 3;
`;

type ColProps = {
  size: number;
};

const Col = styled.div<ColProps>`
  flex: ${(props) => props.size};
`;

const text = {
  fontFamily: 'Quicksand',
};

export const Header = () => {
  return (
    <HeaderStyled>
      <Col size={2}>
        <Logo height={300} width={300} />
      </Col>
      <Col size={1}>
        <Breadcrumbs aria-label="breadcrumb" style={text}>
          <Link
            color="inherit"
            href="/"
            onClick={() => console.log('Kotisivulle')}
          >
            Koti
          </Link>
          <Link
            color="inherit"
            href="/suunnittelija"
            onClick={() => console.log('Suunnittelija')}
          >
            Suunnittelija
          </Link>
          <Link
            color="inherit"
            href="/palvelut"
            onClick={() => console.log('Palvelut')}
            aria-current="page"
          >
            Palvelut
          </Link>
          <Link
            color="inherit"
            href="/portfolio"
            onClick={() => console.log('Portfolio')}
            aria-current="page"
          >
            Portfolio
          </Link>
          <Link
            color="inherit"
            href="/otayhteyttä"
            onClick={() => console.log('Ota yhteyttä')}
            aria-current="page"
          >
            Ota yhteyttä
          </Link>
        </Breadcrumbs>
      </Col>
    </HeaderStyled>
  );
};
