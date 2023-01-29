import { useSelector, useDispatch } from "react-redux";
import { useEffect,useState } from "react";
import { Box, Grid } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import CardComp from "../components/CardComp";
import CarouselComp from "../components/CarouselComp";
import productApi from "../api/modules/products.api";

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
              spacing={2}
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
