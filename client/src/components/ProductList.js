import React, { useState, useEffect } from 'react'
import { Container } from '@mui/material'
import { Grid } from '@mui/material'
import ProductCard from './ProductCard'
import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
    loader: {
      margin: "200px auto 0 auto",
      display: "flex",
      justifyContent: "center",
    }
  }));

const ProductList = (clothes) => {
    const arrayClothes = clothes.clothes
    const classes = useStyles();
    console.log(arrayClothes)
    if (Object.keys(clothes).length !== 0) {
    return (
        <div>
            <Container sx={{ py: 8 }} maxWidth="md">
            {/* End hero unit */}
            <Grid container spacing={4}>
              {arrayClothes.map((cloth) => (
                <Grid item key={cloth.id} xs={12} sm={6} md={4}>
                    <ProductCard cloth={cloth}/>
                </Grid>
              ))}
            </Grid>
          </Container>
        </div>
    )}
    else{
        return (
            <div className={classes.loader}>
              <CircularProgress />
            </div>
          );
    }
}

export default ProductList
