import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from '@mui/material';
import CreateModal from './CreateModal';

export default function MyCards({ cardName, cardImage, cardDescription }) {
  const [open, setOpenModel] = useState(false);

  // const startQuiz = () => {
  //   console.log('Quiz started');
  //   alert('Quiz started')
  // }

  const newCardName = cardName.split(' ').join('_').toLowerCase();

  return (
    <>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{
            height: 150,
            width: 150,
          }}
          image={cardImage}
          title={cardName}
        />
        <CardContent>
          <Typography gutterBottom variant='h5' component='div'>
            {cardName}
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            {cardDescription.slice(0, 50)}...
          </Typography>
        </CardContent>
        <CardActions>

          {/* <Button size='small' onClick={startQuiz}>Открыть</Button> */}
          <Button size='small'>
            <Link
            style={{ textDecoration: 'none', color: 'inherit' }}
            to={`/test/${newCardName}`}
            >
              Открыть
            </Link>
          </Button>

          <Button size='small' onClick={() => setOpenModel(true)}>Подробнее</Button>
        </CardActions>
      </Card>
      <CreateModal
        // key={}
        open={open}
        handleOnClose={() => setOpenModel(false)}
        cardName={cardName}
        cardImage={cardImage}
        cardDescription={cardDescription}
      />
    </>
  );
}
