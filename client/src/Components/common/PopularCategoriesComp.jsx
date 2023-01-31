import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Stack,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import { TabList } from "react-tabs";
import Piston from "../../assets/Pistons2.jpg";
import KitDist1 from "../../assets/KitDist2.jpg";
import KitEmbrague2 from "../../assets/kitEm2.jpg";
import Vehicle from "../../assets/Vehicle_engineering.jpg";
import Image from "mui-image";

const PopularCategories = () => {
  return (
    <Stack>
      <Typography
        textAlign="center"
        variant="h3"
        component="div"
        sx={{ paddingTop: "20px", fontFamily: "Staatliches" }}
      >
        Más Vendidos
      </Typography>
      <Stack
        direction={{ sm: "row", xs: "column" }}
        spacing={{ xs: 1, sm: 2, md: 4 }}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Card sx={{ maxWidth: 345, boxShadow: 0 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="350"
              sx={{ padding: "1em 1em 0 1em", objectFit: "contain" }}
              image="https://res.cloudinary.com/dhaklfydk/image/upload/v1674796014/kruger-products/dicofreno7_gtqw69.png"
              alt="green iguana"
            />
            <CardContent>
              <Typography
                textAlign="center"
                gutterBottom
                variant="h5"
                component="div"
                color="primary"
                sx={{ fontFamily: "Staatliches" }}
              >
                Kit de Embrague
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card sx={{ maxWidth: 345, boxShadow: 0 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="350"
              sx={{ padding: "1em 1em 0 1em", objectFit: "contain" }}
              image="https://res.cloudinary.com/dhaklfydk/image/upload/v1674796027/kruger-products/discoembrague2_qwptfj.png"
              alt="green iguana"
            />
            <CardContent>
              <Typography
                textAlign="center"
                gutterBottom
                variant="h5"
                component="div"
                color="primary"
                sx={{ fontFamily: "Staatliches" }}
              >
                Pistones
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card sx={{ maxWidth: 345, boxShadow: 0 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="350"
              sx={{ padding: "1em 1em 0 1em", objectFit: "contain" }}
              image="https://res.cloudinary.com/dhaklfydk/image/upload/v1674796026/kruger-products/bujia4_ceuhzd.png"
              alt="green iguana"
            />
            <CardContent>
              <Typography
                textAlign="center"
                gutterBottom
                variant="h5"
                component="div"
                color="primary"
                sx={{ fontFamily: "Staatliches" }}
              >
                Kit de Dsitribucion
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Stack>
    </Stack>
  );
};

export default PopularCategories;
