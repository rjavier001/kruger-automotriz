import { Box, useTheme } from "@mui/system";
import React from "react";
import uiConfigs from "../configs/ui.configs";
// import Carousel from 'react-material-ui-carousel'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import { Stack, Typography } from "@mui/material";

const CarouselComp = ({ items }) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        position: "relative",
        // color: "primary.contrastText",
        // "&::before": {
        //   content: '""',
        //   width: "100%",
        //   height: "40%",
        //   position: "absolute",
        //   bottom: 0,
        //   left: 0,
        //   zIndex: 2,
        //   pointerEvents: "none",
        //   ...uiConfigs.style.gradientBgImage[theme.palette.mode],
        // },
        paddingTop: {
          xs: "2.5%",
        },
      }}
    >
      <Swiper
        grabCursor={true}
        loop={true}
        modules={[Autoplay]}
        style={{ width: "100%", height: "max-content" }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
      >
        {items.map((item, i) => (
          <SwiperSlide key={i}>
            <Box
              sx={{
                paddingTop: {
                  xs: "100%",
                  sm: "60%",
                  md: "45%",
                  lg: "25%",
                },
                backgroundPosition: "top",
                backgroundRepeat: "no-repeat",
                backgroundSize: "80% 20rem",
                objectFit: "contain",
                backgroundImage: `url(${item.photoUrl})`,
              }}
            />

            {/* <Box
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

                <Stack spacing={0} direction="column"> 
                  <Typography variant="h4"
                    fontSize={{ xs: "2rem", md: "2rem", lg: "4rem" }}
                    fontWeight="700">
                      {item.name}
                  </Typography>
                  <Typography variant="h5">
                      Price: ${item.purchasePrice}
                  </Typography>
                  <Typography variant="h5">
                      Stock: {item.stock}
                  </Typography>
                </Stack>
              </Box>

            </Box> */}
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default CarouselComp;
