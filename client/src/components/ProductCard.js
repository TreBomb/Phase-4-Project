import React from 'react'
import { Card } from '@mui/material'
import { CardMedia } from '@mui/material'
import { Typography } from '@mui/material'
import { CardActions } from '@mui/material'
import { CardContent } from '@mui/material'
import { Button } from '@mui/material'
import { Link } from 'react-router-dom'
import Rating from '@mui/material/Rating';


const ProductCard = (cloth) => {
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
                      <Button size="small">Edit</Button>
                    </CardActions>
                  </Card>
        </div>
    )
}

export default ProductCard
