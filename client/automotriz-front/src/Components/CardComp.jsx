import { Button, Card, CardActions, CardContent, CardHeader, Grid, Typography } from '@mui/material'
import React from 'react'
import { Avatar, IconButton,CardMedia } from "@mui/material";
import { Container } from '@mui/system';

const CardComp = (props) => {
  
  const { avatarUrl, title, subtitle, description, imageUrl } = props;
  return (
    <Container>
      <Card sx={{ maxWidth: 345 }} >
        <CardMedia
          sx={{ height: 140 }}
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
          <Button size="medium" variant="contained">View More</Button>
        </CardActions>
      </Card>
    </Container>
  )
}

export default CardComp