import { Box, Grid } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import CardComp from "../Components/CardComp";
import CarouselComp from "../Components/CarouselComp";

const list = [
  {
    id: 1,
    name: "test",
    subtitulo: "esto es un subtitulo",
    image:
      "https://res.cloudinary.com/dhaklfydk/image/upload/v1674796029/kruger-products/correa3_arlmh5.png",
  },
  {
    id: 2,
    name: "test1",
    subtitulo: "esto es un subtitulo2",
    image:
      "https://res.cloudinary.com/dhaklfydk/image/upload/v1674796027/kruger-products/bujia3_p3bn0e.png",
  },
  {
    id: 3,
    name: "test2",
    subtitulo: "esto es un subtitulo2",
    image:
      "https://res.cloudinary.com/dhaklfydk/image/upload/v1674796022/kruger-products/alevas1_aelyxq.png",
  },
  {
    id: 4,
    name: "test3",
    subtitulo: "esto es un subtitulo2",
    image:
      "https://res.cloudinary.com/dhaklfydk/image/upload/v1674796017/kruger-products/faro12_ucdlcv.png",
  },
];

let ima = list.map((item) => item.image);
console.log(ima);

const Shop = () => {
  return (
    <>
      <CarouselComp items={ima} />

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
      </Container>
    </>
  );
};

export default Shop;
