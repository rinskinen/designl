import React from 'react';
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  CardActions,
  Button,
} from '@material-ui/core';

interface Props {
  title: string;
  text?: string;
}

export const PortfolioCard: React.FC<Props> = ({ title, text }) => {
  return (
    <div>
      <Card>
        <CardActionArea>
          <CardMedia image="../images/kuva1.jpg" title="Kuva1" />
          <CardContent>
            <h2>{title}</h2>
            {text && <p>{text}</p>}
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Lisää
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};
