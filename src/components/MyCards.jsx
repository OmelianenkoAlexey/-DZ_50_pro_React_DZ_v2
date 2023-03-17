import React, { useState } from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@mui/material';
import CreateModal from './Dialogs/CreateModal';


export default function MyCards({ cardName, cardImage, cardDescription }) {
  const [open, setOpenModel] = useState(false);

  const startQuiz = () => {
    console.log("Quiz started");
    alert("Quiz started")
}

  return (
    <>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{
            height: 150,
            width: 150
          }}
          image={cardImage}
          title={cardName}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {cardName}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {cardDescription.slice(0, 50)}...
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={startQuiz}>Start quiz</Button>
          <Button size="small" onClick={() => setOpenModel(true)}>Show More</Button>
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