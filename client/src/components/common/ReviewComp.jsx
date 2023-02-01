import React, { useState } from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Container, Stack } from "@mui/system";
import ModalPaymentsComp from "./ModalPaymentsComp";

const ReviewComp = () => {
  const [value, setValue] = useState();
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
        <Typography component="legend">Aun no hay Calificaciones </Typography>
        <Rating
          name="simple-controlled"
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        />
        <TextField
          id="outlined-multiline-flexible"
          label="Tu opninion nos interesa"
          multiline
          maxRows={4}
        />
        <Button variant="contained" sx={{ width: 30 }}>
          Enviar
        </Button>
        <ModalPaymentsComp />
      </Stack>
    </Container>
  );
};

export default ReviewComp;
