import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import {
  Box,
  Button,
  Chip,
  Divider,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";

import { Link } from "react-router-dom";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Vehicle from "../../assets/Vehicle_engineering.jpg";
// import { toast } from "react-toastify";

import themeConfigs from "../../configs/theme.configs";

const HeroSlide = () => {
  const autoOffersBanner = [
    {
      id: 1,
      name: "offer1",
      Description: "Off 50%",
      img: "",
    },
  ];

  return (
    <Box
      sx={{
        position: "relative",
        color: "primary.contrastText",
        "&::before": {
          content: '""',
          width: "100%",
          height: "30%",
          position: "absolute",
          bottom: 0,
          left: 0,
          zIndex: 2,
          pointerEvents: "none",
          backgroundImage:
            "linear-gradient(to top, rgba(245,245,245,1), rgba(0,0,0,0))",
        },
      }}
    >
      <Swiper
        grabCursor={true}
        style={{ width: "100%", height: "max-content" }}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <Box
            sx={{
              paddingTop: {
                xs: "130%",
                sm: "80%",
                md: "60%",
                lg: "45%",
              },
              backgroundPosition: "top",
              backgroundSize: "cover",
              backgroundImage: `url(${Vehicle})`,
            }}
          />
          <Box
            sx={{
              width: "100%",
              height: "100%",
              position: "absolute",
              top: 0,
              left: 0,
              //   backgroundImage:
              //     "linear-gradient(to right, rgba(245,245,245,1), rgba(0,0,0,0))",
            }}
          />
          <Box
            sx={{
              width: "100%",
              height: "100%",
              position: "absolute",
              top: 0,
              left: 0,
              paddingX: { sm: "10px", md: "5rem", lg: "10rem" },
            }}
          >
            <Box
              sx={{
                height: "100%",
                display: "flex",
                alignItems: "center",
                paddingX: "30px",
                color: "text.primary",
                width: { sm: "unset", md: "30%", lg: "40%" },
              }}
            >
              <Stack spacing={4} direction="column">
                <Typography
                  variant="h4"
                  fontSize={{ xs: "2rem", md: "2rem", lg: "4rem" }}
                  fontWeight="700"
                >
                  "Titulo Name"
                </Typography>
              </Stack>
            </Box>
          </Box>
        </SwiperSlide>
      </Swiper>
    </Box>
  );
};

export default HeroSlide;
