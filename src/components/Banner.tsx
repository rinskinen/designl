import React from 'react';
import styled from 'styled-components';

const StyledCard = styled.div`
  align-self: center;
  display: grid;
  align-content: center;
  justify-content: center;
  border: 1.5px solid black;
  font-size: 24px;
  @media (min-width: 320px) {
    padding: 20px;
    margin-bottom: 10px;
  }

  @media (min-width: 1200px) {
    padding: 50px;
    margin-left: 100px;
    margin-right: 100px;
    margin-top: 50px;
    margin-bottom: 50px;
  }
`;

const StyledLink = styled.a`
  color: grey;
  text-decoration: none;
`;
interface Props {
  text: string;
  link?: string;
  linkText?: string;
}

export const Banner: React.FC<Props> = ({ text, link, linkText }) => {
  return (
    <StyledCard>
      <p>
        {text}
        {link && <StyledLink href={link}>{linkText}</StyledLink>}
      </p>
    </StyledCard>
  );
};
