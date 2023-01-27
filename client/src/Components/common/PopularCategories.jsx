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
import Piston from "../../Assets/Pistons2.jpg";
import KitDist1 from "../../Assets/KitDist2.jpg";
import KitEmbrague2 from "../../Assets/kitEm2.jpg";
import Vehicle from "../../Assets/Vehicle_engineering.jpg";
import Image from "mui-image";

const PopularCategories = () => {
  return (
    <Stack>
      <Typography textAlign="center" variant="h5" component="div">
        <h3>Popular Categories</h3>
      </Typography>
      <Stack
        direction={{ sm: "row", xs: "column" }}
        spacing={{ xs: 1, sm: 2, md: 4 }}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="340"
              image={KitEmbrague2}
              alt="green iguana"
            />
            <CardContent>
              <Typography
                textAlign="center"
                gutterBottom
                variant="h5"
                component="div"
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
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="max-content"
              image={Piston}
              alt="green iguana"
            />
            <CardContent>
              <Typography
                textAlign="center"
                gutterBottom
                variant="h5"
                component="div"
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
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="max-content"
              image={KitDist1}
              alt="green iguana"
            />
            <CardContent>
              <Typography
                textAlign="center"
                gutterBottom
                variant="h5"
                component="div"
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
