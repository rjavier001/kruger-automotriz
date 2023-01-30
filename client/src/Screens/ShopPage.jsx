import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { Box, Grid, Input, InputBase } from "@mui/material";
import { alpha, Container } from "@mui/system";
import React from "react";
import CardComp from "../Components/CardComp";
import CarouselComp from "../Components/CarouselComp";
import productApi from "../api/modules/products.api";
import SearchIcon from "@mui/icons-material/Search";
import styled from "@emotion/styled";
import productsApi from "../api/modules/products.api";

const Shop = () => {
  const dispatch = useDispatch();
  const [product, setProduct] = useState([]);

  const [products, setProducts] = useState([]);

  const [name, setName] = useState("");

  const handleSearch = e =>{
    setName(e.target.value);
  }

  useEffect(() => {
    const getList = async () => {
      const { response, err } = await productsApi.getList();
      if (response) setProduct(response);
      // if (err) toast.error(err.message);
      // dispatch(setGlobalLoading(false));
    };
    getList();

    const searchList = async () => {
      const { response } = await productsApi.search(name);   
      if (response) setProducts(response);
    };   
    searchList();


  }, [dispatch]);

  let productsQuery= products.filter(productss => productss.description.toLowerCase().includes(name));


  return (
    <>
      <CarouselComp items={product} />
      <Container>
      <Container sx={cardHeaderStyles.wrapper}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Input sx={{width: '250px', fontSize: '1.1rem'}} placeholder="Search product" onChange={handleSearch}/>
            <SearchIcon/>
          </Box>
        </Container>
        <Grid item container spacing={2} marginTop="2px">
        {name === '' 
          ? 
          <>
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
          </>
          : 
          <>
          {
            productsQuery.length === 0
            ?"No existen products" 
            :
          <>
          {productsQuery.map((items, i) => (
            <Grid
            key={i}
            item
            xs={12}
            md={4}
            sm={6}
            justify="center"
            >
              <CardComp
               props={items}   
               />
            </Grid>
          ))} 
          </>
          }
          </>
          }
        </Grid>
      </Container>
    </>
  );
};

const cardHeaderStyles = {
  wrapper: {
      marginTop: '1rem',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '65px',
  }
}

export default Shop;
