import { useSelector, useDispatch } from "react-redux";
import { loadProducts } from "../redux/actions";
import { useEffect } from "react";
import { Box, Grid } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import CardComp from "../components/CardComp";
import CarouselComp from "../components/CarouselComp";

const Shop = () => {
  useEffect(() => {
    const getMedias = async () => {
      const { response, err } = await mediaApi.getList({
        mediaType,
        mediaCategory,
        page: 1,
      });

      if (response) setMovies(response.results);
      if (err) toast.error(err.message);
      dispatch(setGlobalLoading(false));
    };

    const getGenres = async () => {
      dispatch(setGlobalLoading(true));
      const { response, err } = await genreApi.getList({ mediaType });

      if (response) {
        setGenres(response.genres);
        getMedias();
      }
      if (err) {
        toast.error(err.message);
        setGlobalLoading(false);
      }
    };

    getGenres();
  }, [mediaType, mediaCategory, dispatch]);
  return (
    <>
      <CarouselComp items={products} />
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
