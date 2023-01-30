import {
  Container,
  Grid,
  Stack,
  Typography,
  Button,
  IconButton,
} from "@mui/material";
import React, { useState } from "react";
import Image from "mui-image";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import CompanyBenefitsComp from "../Components/CompanyBenefitsComp";

const ProductDetailPage = () => {
  const [counter, setCounter] = useState(1);
  /* Control de counter no sea menor a 0 */
  const addCouter = () => {
    if (counter >= 0) {
      setCounter(counter + 1);
    }
  };

  const resCounter = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };
  return (
    <Container>
      <Grid
        container
        spacing={2}
        marginTop="2px"
        sx={{ minHeight: 450, paddingTop: 5 }}
      >
        <Grid item xs={12} md={8} sm={6}>
          <Image
            alt="product"
            showLoading={false}
            errorIcon={true}
            fit={"cover"}
            height={450}
            width={"100%"}
            src="https://picsum.photos/id/674/2000"
          />
          {/* RIGHT PANEL */}
        </Grid>
        <Grid item xs={12} md={4}>
          Kruger Motors
          <Stack
            direction={"column"}
            sx={{
              flex: 1,
              height: 450,
              alignItems: "space-around",
              justifyContent: "space-around",
            }}
          >
            <Typography variant="h6">Nombre de Parte</Typography>
            <Typography variant="h7">255.30$</Typography>
            <Typography variant="h7">Nro de serie: 1745646</Typography>
            <Typography variant="h7">Stock: 25</Typography>

            <Stack direction={"row"} sx={styles.add}>
              <IconButton size="small" onClick={() => resCounter()}>
                <RemoveIcon />
              </IconButton>
              <Typography>{counter}</Typography>
              <IconButton size="small" onClick={() => addCouter()}>
                <AddIcon />
              </IconButton>
            </Stack>
            <Stack
              direction={{ md: "row", sx: "column" }}
              spacing={2}
              sx={{ justifyContent: "space-around" }}
            >
              <Button variant="contained">Agregar al carrito</Button>
              <Button variant="contained" color="secondary">
                Comprar
              </Button>
            </Stack>
          </Stack>
        </Grid>
        <CompanyBenefitsComp />
      </Grid>
    </Container>
  );
};

export default ProductDetailPage;

export const styles = {
  add: {
    alignItems: "center",
  },
  rightPanel: {},
};
