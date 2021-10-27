import React, { useState, useEffect } from 'react'
import Typography from '@mui/material/Typography'
import { makeStyles } from "@material-ui/core/styles";
import { Container } from '@mui/material'
import { Grid } from '@mui/material'
import ProductCard from './ProductCard';
import { CircularProgress } from '@mui/material';

const useStyles = makeStyles((theme) => ({
    header: {
      display: "flex",
      marginTop: "70px",
      flexDirection: "column",
      alignItems: "center"
    }
  }));
  

const Main = () => {
    const [clothes, setClothes] = useState({})
  useEffect(() => {
      fetch("http://localhost:3000/products")
        .then((r) => r.json())
        .then(setClothes);
    }, []);
    console.log(clothes)
    const classes = useStyles();
    if (Object.keys(clothes).length !== 0) {
    return (
        <div className={classes.header}>
            <Typography variant="h1" component="div" gutterBottom>
                We-Commerce
            </Typography>
            <Container sx={{ py: 8 }} maxWidth="md">
            {/* End hero unit */}
            <Grid container spacing={4}>
              {clothes.map((cloth) => (
                <Grid item key={cloth.id} xs={12} sm={6} md={4}>
                    <ProductCard cloth={cloth}/>
                </Grid>
              ))}
            </Grid>
          </Container>


        </div>)} else {
            return (
                <div>
                    <CircularProgress />
                </div>
            )
        }
}

export default Main
