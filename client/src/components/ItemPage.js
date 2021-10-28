import React, {useState, useEffect } from 'react'
import { useTheme } from '@mui/material/styles';
import { useParams } from "react-router-dom";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';



const ItemPage = () => {

    let  { id }  = useParams();
    let idNumber = { id }.id;
    const [product, setProduct] = useState({})
    useEffect(() => {
        fetch(`http://localhost:3000/products/${idNumber}`)
          .then((r) => r.json())
          .then(setProduct);
      }, [idNumber, product]);
    //   console.log(product)
      const theme = useTheme();
     
      return (
        <Card sx={{ display: 'flex' }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: "center" }}>
            <CardContent sx={{ flex: '1 0 auto' }}>
              <Typography component="div" variant="h5">
                {product.name}
              </Typography>
              <Typography variant="subtitle1" color="text.secondary" component="div">
                ${[product.price]}.99
              </Typography>
            </CardContent>
            <CardMedia
            component="img"
            sx={{ width: 400}}
            image={product.image}
          />
            <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
            </Box>
                <Typography component="div" variant="body1">
                    {product.description}
                </Typography>
          </Box>
          
        </Card>
      );
    }

export default ItemPage
