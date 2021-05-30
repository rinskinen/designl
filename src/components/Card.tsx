import React, { useState } from 'react';
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Modal,
} from '@material-ui/core';
import styled from 'styled-components';

interface Props {
  title: string;
  text?: string;
  image?: any;
}

const screenWidth = window.screen.width;
const screenHeight = window.screen.height;

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

const StyledImage = styled.div`
  //   height: 140px;
`;

const StyledTitle = styled.label`
  font-size: 24px;
  padding: 12px;
`;

const StyledText = styled.p`
  font-size: 20px;
  padding: 12px;
`;

const StyledModal = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-height: ${screenHeight}px;
  max-width: ${screenWidth}px;
`;

export const PortfolioCard: React.FC<Props> = ({
  title,
  text,
  image,
}) => {
  const [open, setOpen] = useState(false);
  return (
    <StyledCard onClick={() => setOpen(true)}>
      <Card>
        <CardActionArea>
          <CardMedia>
            <StyledImage>
              <img src={image} alt={title} height={200} />
            </StyledImage>
          </CardMedia>
          <CardContent>
            <StyledTitle>{title}</StyledTitle>
            <StyledText>{text}</StyledText>
          </CardContent>
        </CardActionArea>
      </Card>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        onClick={() => setOpen(false)}
      >
        <StyledModal>
          <img src={image} alt={title} />
        </StyledModal>
      </Modal>
    </StyledCard>
  );
};
