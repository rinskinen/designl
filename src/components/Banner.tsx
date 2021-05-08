import { Link } from '@material-ui/core';
import React from 'react';

const banner = {
  alignSelf: 'center',
  backgroundColor: '#dbdbdb',
  fontFamily: 'Quicksand',
  fontSize: 24,
  display: 'grid',
  aligContent: 'center',
  justifyContent: 'center',
  padding: 50,
  margin: 100,
  borderRadius: 8,
};

const link = {
  textAlign: 'center' as 'center',
  paddingTop: 30,
};

interface Props {
  text: string;
}

export const Banner: React.FC<Props> = ({ text }) => {
  return (
    <div style={banner}>
      <p>{text}</p>
      <Link href="/aboutme" style={link}>
        Lisää minusta
      </Link>
    </div>
  );
};
