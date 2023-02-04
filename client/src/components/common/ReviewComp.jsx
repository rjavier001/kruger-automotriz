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

const ReviewComp = ({ props }) => {
  const [value, setValue] = useState();
  const [rating, setRating] = useState();

  const onImputChange = (e) => {
    setRating({ ...rating, [e.target.name]: e.target.value });
  };

  const handleReview = async (e) => {
    e.preventDefault();
    /* await axios.post("http://localhost:8080/province", provinces); */
    /*   navigate("/"); */
  };

  return (
    <Container>
      <Stack
        sx={{
          marginTop: 2,
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
        {props.review.map((reviews) => (
          <>
            <Rating name="read-only" value={reviews.stars} readOnly />
            <Typography>{reviews.description}</Typography>
            <Divider sx={{ marginY: 2 }} />
          </>
        ))}
        <Typography variant="h6">Dejanos tu opinion: </Typography>
        <Rating
          value={value}
          name={"stars"}
          onChange={(e) => {
            onImputChange(e);
          }}
        />
        <TextField
          id="outlined-multiline-flexible"
          label="Tu opninion nos interesa"
          name="description"
          multiline
          maxRows={4}
          onChange={(e) => onImputChange(e)}
        />
        <Button
          variant="contained"
          sx={{ width: 30 }}
          onClick={() => console.log(rating)}
        >
          Enviar
        </Button>
        {/*         <ModalPaymentsComp /> */}
      </Stack>
    </Container>
  );
};

export default ReviewComp;
