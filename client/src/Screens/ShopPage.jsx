import { useSelector, useDispatch } from "react-redux";
import { loadProducts } from "../redux/actions";
import { useEffect } from "react";
import { Box, Grid } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import CardComp from "../components/CardComp";
import CarouselComp from "../components/CarouselComp";

const Shop = () => {
  // const { products } = useSelector((state) => state.data);

  // let dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(loadProducts());
  // }, []);
  return (
    <>
      {/* <CarouselComp items={products} />
      <Container>
        <Grid item container spacing={2} marginTop="2px">
          {list.map((item, i) => (
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
                title={item.name}
                subtitle={item.subtitulo}
                imageUrl={item.image}                 
              />
            </Grid>
          ))}
        </Grid>
      </Container> */}
      <div>shop</div>
    </>
  );
};

export default Shop;
