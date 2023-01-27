import { Box } from '@mui/system';
import React from 'react'

// import Carousel from 'react-material-ui-carousel'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay} from "swiper";
import 'swiper/css';

const CarouselComp = ({items}) => {
    
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
        },
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
      }}>
          {
            items.map((item,i)=> (
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
                backgroundRepeat:"no-repeat",
                backgroundSize: "40% 25rem",
                backgroundImage: `url(${item.photoUrl})`,
              }}
              />
            </SwiperSlide>
          ))}
      </Swiper>
    </Box>
  )
}

export default CarouselComp
