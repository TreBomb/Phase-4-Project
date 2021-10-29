import React from 'react'
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography'
import { makeStyles } from "@material-ui/core/styles";
import { Container } from '@mui/material'
import { Grid } from '@mui/material'
import ProductCard from './ProductCard';
import { CircularProgress } from '@mui/material';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';

const useStyles = makeStyles((theme) => ({
    header: {
      display: "flex",
      marginTop: "50px",
      flexDirection: "column",
      alignItems: "center"
    }, 
    root: {
        width: "0",
        display: "flex",
        flexDirection: "row",
        flexWrap: "nowrap",
        justifyContent: "center",
        marginTop: "50px"
    },
    button: {
        marginRight: "20px"
    }
  }));
  const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  });
  

const BrandSelect = (brands) => {
    const classes = useStyles();
    return (
        <div>
            
            <Typography
                  component="h1"
                  variant="h2"
                  align="center"
                  color="text.primary"
                  gutterBottom
                >
                  We-Commerce
                </Typography>
                <Grid container spacing={2} className={classes.root}>
                    {brands.brands.map((brand) => (
                        <Link to={`/brand/${brand.id}`}>
                        <Grid item xs={12} sm={6} md={4}>
                        <ButtonBase className={classes.button} sx={{ width: 128, height: 128 }} 
                            {...{
                                key: brand.name,
                                color: "inherit",
                                to: `/brand/${brand.id}`,
                                component: Link,
                             }}>
                            <Img alt="complex" src={brand.image}/>
                         </ButtonBase>
                    </Grid>
                    </Link>
                    ))}  
                </Grid>
        </div>
    )
}

export default BrandSelect
