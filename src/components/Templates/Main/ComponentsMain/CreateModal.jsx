import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';

import {
  Card,
  CardMedia,
  Button,
  Typography,
  CardContent,
} from '@mui/material';

export default function CreatModal({
  open,
  handleOnClose,
  cardName,
  cardImage,
  cardDescription,
}) {
  return (
    <div>

      <Dialog
        open={open}
        onClose={handleOnClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <Card sx={{ maxWidth: 525 }}>
          <CardMedia
            sx={{
              height: 225,
              width: 225,
            }}
            image={cardImage}
            title={cardName}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {cardName}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {cardDescription}
            </Typography>
          </CardContent>

        </Card>
        <DialogActions>
          <Button onClick={handleOnClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
