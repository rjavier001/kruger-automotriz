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

const CardComp = (props) => {
  const { title, subtitle, imageUrl } = props;
  return (
    <Container>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          fit="cover"
          sx={{ height: 240 }}
          image={imageUrl}
          title="product image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {subtitle}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            sx={{ background: "#ff910d" }}
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
