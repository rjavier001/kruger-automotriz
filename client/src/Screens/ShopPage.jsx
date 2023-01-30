import { useSelector, useDispatch } from "react-redux";
import { useEffect,useState } from "react";
import { Box, Grid, InputBase } from "@mui/material";
import { alpha, Container } from "@mui/system";
import React from "react";
import CardComp from "../Components/CardComp";
import CarouselComp from "../Components/CarouselComp";
import productApi from "../api/modules/products.api";
import SearchIcon from "@mui/icons-material/Search";
import styled from "@emotion/styled";

const Shop = () => {
  const dispatch = useDispatch();
  const [product, setProduct] = useState([]);
  useEffect(() => {
    const getList = async () => {
      const { response, err } = await productApi.getList();      
      if (response) setProduct(response);
      // if (err) toast.error(err.message);
      // dispatch(setGlobalLoading(false));
    };   
    getList();
    
  }, [dispatch]);
  return (
    <>
      <CarouselComp items={product} />
      <Container>
        <Grid item container spacing={2} marginTop="2px">
          {product.map((item, i) => (
            <Grid
              key={i}
              item
              xs={12}
              md={4}
              sm={6}
              
              justify="center"
            >
              <CardComp
               props={item}   
              />
            </Grid>
          ))}
        </Grid>
      </Container>      
    </>
  );
};


export default Shop;
