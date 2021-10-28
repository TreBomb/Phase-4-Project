import React, {useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles } from "@material-ui/styles";
import ProductList from './ProductList';


const useStyles = makeStyles((theme) => ({
    loader: {
      margin: "200px auto 0 auto",
      display: "flex",
      justifyContent: "center",
    }
  }));

const Brand = () => {
    const classes = useStyles();
    let  { id }  = useParams();
    let idNumber = { id }.id;
    const [products, setProducts] = useState({})
    useEffect(() => {
        fetch(`http://localhost:3000/brands/${idNumber}`)
          .then((r) => r.json())
          .then(setProducts);
      }, [idNumber, products]);

    //   console.log(products.products)

    if (Object.keys(products).length !== 0) {
     return (
            <div>
                <ProductList clothes={products.products}/>
            </div>
    )} else {
        return (
          <div className={classes.loader}>
            <CircularProgress />
          </div>
        );
      }
}

export default Brand
