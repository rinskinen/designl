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
            Home
          </Link>
          <Link
            color="inherit"
            href="/aboutme"
            onClick={() => console.log('About me')}
          >
            About me
          </Link>
          <Link
            color="inherit"
            href="/gallery"
            onClick={() => console.log('Gallery')}
            aria-current="page"
          >
            Gallery
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
            href="/contact"
            onClick={() => console.log('Contact')}
            aria-current="page"
          >
            Contact
          </Link>
        </Breadcrumbs>
      </Col>
    </HeaderStyled>
  );
};
