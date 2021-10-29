import React from 'react'
import { Card } from '@mui/material'
import { CardMedia } from '@mui/material'
import { Typography } from '@mui/material'
import { CardActions } from '@mui/material'
import { CardContent } from '@mui/material'
import { Button } from '@mui/material'
import { Link } from 'react-router-dom'
import Rating from '@mui/material/Rating';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';



const ProductCard = (cloth) => {

  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
  setOpen(true);
};
  const handleSubmit = () => {
    
  }
  const handleClose = () => {
    setOpen(false);
  };
  // console.log(cloth)
    return (
        <div>
            <Card
                    sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                  >
                    <CardMedia
                      component="img"
                      sx={{
                        // 16:9
                        pt: '0%',
                      }}
                      image={cloth.cloth.image}
                      alt="random"
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography gutterBottom variant="h5" component="h2">
                        {cloth.cloth.name}
                      </Typography>
                      <Typography gutterBottom variant="h6" component="h2">
                      ${cloth.cloth.price}.99
                      </Typography>
                      <Typography>
                        <Rating name="read-only" value={cloth.cloth.rating} readOnly />
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Link to={`/product/${cloth.cloth.id}`}>
                        <Button size="small">View</Button>
                      </Link>
                      <Button size="small" onClick={handleClickOpen}>Edit</Button>
                    </CardActions>
                  </Card>
                  <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Change the rating of your favorite pieces!</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Slecet a number between 1 and 5
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Rating"
            type="email"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Submit</Button>
        </DialogActions>
      </Dialog>
        </div>
    )
}

export default ProductCard
