import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import React from "react";
import { CardMedia } from "@mui/material";
import { Container } from "@mui/system";

const CardComp = ({ props }) => {
  const { name, price, photoUrl } = props;
  return (
    <Container>
      <Card
        raised
        sx={{
          maxWidth: 345,
          margin: "0 auto",
          padding: "0.1em",
        }}
      >
        <CardMedia
          component="img"
          height="250"
          sx={{ padding: "1em 1em 0 1em", objectFit: "contain" }}
          image={photoUrl}
          title="product image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Price: {price}$
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            color="secondary"
            size="medium"
            variant="contained"
          >
            View More
          </Button>
        </CardActions>
      </Card>
    </Container>
  );
};

export default CardComp;
