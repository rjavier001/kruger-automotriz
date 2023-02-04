import React, { useState } from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import { Container, Stack } from "@mui/system";
import ModalPaymentsComp from "./ModalPaymentsComp";
import axios from "axios";
import productsApi from "../../api/modules/products.api";
import { toast } from "react-toastify";

const ReviewComp = ({ props }) => {
  const [rating, setRating] = useState({ stars: 0, description: "" });
  const [frontReviews, setFrontReviews] = useState(props.review);
  const onImputChange = (e) => {
    setRating({ ...rating, [e.target.name]: e.target.value });
  };

  const postReview = async () => {
    const { response } = await productsApi.putReview(props.id, rating);

    setFrontReviews([...frontReviews, rating]);
    setRating({ stars: 0, description: "" });
    toast.success("Gracias por tu opinión", {
      position: "bottom-left",
    });
  };

  return (
    <Container>
      <Stack
        sx={{
          marginY: 2,
        }}
        direction={"column"}
        spacing={2}
      >
        <Typography component="legend" variant="h6">
          Calificaciones:
        </Typography>
        {props.review.length === 0 && (
          <Typography component="legend">Aun no hay Calificaciones </Typography>
        )}
        {frontReviews.map((reviews) => (
          <div class="animate__animated animate__fadeIn">
            <Rating name="read-only" value={reviews.stars} readOnly />
            <Typography>{reviews.description}</Typography>
            <Divider sx={{ marginY: 2 }} />
          </div>
        ))}
        <Typography variant="h6">Dejanos tu opinion: </Typography>
        <Rating
          value={rating.stars}
          name={"stars"}
          onChange={(e) => {
            onImputChange(e);
          }}
        />
        <TextField
          id="outlined-multiline-flexible"
          label="Tu opninion nos interesa"
          name="description"
          value={rating.description}
          multiline
          maxRows={4}
          onChange={(e) => onImputChange(e)}
        />
        <Button
          variant="contained"
          sx={{ width: 30 }}
          onClick={() => postReview()}
        >
          Enviar
        </Button>
        {/*         <ModalPaymentsComp /> */}
      </Stack>
    </Container>
  );
};

export default ReviewComp;
