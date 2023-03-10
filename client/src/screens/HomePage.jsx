// import { useSelector, useDispatch } from "react-redux";
// import { loadProducts } from "../redux/actions";
// import { useEffect } from "react";
import HomeIcon from "../assets/items.png";
import Vehicle from "../assets/Vehiculo_portada.png";
import Image from "mui-image";
import { Button, Container, Grid, Stack, Typography } from "@mui/material";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { NavLink } from "react-router-dom";
import PopularCategories from "../components/common/PopularCategoriesComp";
import Logo from "../assets/LOGO_KRUGERMOTORS.png";
import DividerBrand from "../components/common/DividerBrandComp";
import OffersComp from "../components/common/OffersComp";
import CarouselComp from "../components/CarouselComp";
import DeliveryComp from "../components/common/DeliveryComp";

const SERVICES = ["Repuestos", "Manufactura", "Motor"];
const HomePage = () => {
  // const { products } = useSelector((state) => state.data);

  // let dispatch = useDispatch();

  // //LOAD Products WITH REDUX DISPATCH
  // useEffect(() => {
  //   dispatch(loadProducts());
  // }, []);

  const homeSlider = [
    {
      photoUrl:
        "https://res.cloudinary.com/dhaklfydk/image/upload/v1675186357/kruger-products/KrugerHomeSlide_gtvkfr.png",
    },
    {
      photoUrl:
        "https://res.cloudinary.com/dhaklfydk/image/upload/v1675186527/kruger-products/KrugerHomeSlide2_jbfn2w.png",
    },
    {
      photoUrl:
        "https://res.cloudinary.com/dhaklfydk/image/upload/v1675186528/kruger-products/KrugerHomeSlide3_ngggny.png",
    },
  ];

  return (
    <Stack>
      <CarouselComp items={homeSlider} />

      {/* MAIN INFO */}
      {/* <Stack
direction={{ sm: "row", xs: "column" }}
spacing={{ xs: 1, sm: 2, md: 4 }}
justifyContent={"center"}
alignItems={"center"}
paddingX={20}
>
<Stack width={400}>
  <Typography mt={2} variant="h3" sx={{ fontWeight: "bold" }}>
    KRUGER MOTORS
  </Typography>
  <Typography mt={2}>
    Te ofrecemos los mejores productos, 100% confiables y de excelente
    calidad. Contamos con variedad de repuestos para tu veh??culo, en un
    solo lugar!
  </Typography>
  <NavLink to={"/checkout"} style={{ textDecoration: "none" }}>
    <Button
      variant="contained"
      sx={{
        width: 200,
        marginTop: 2,
        backgroundColor: "#00b040",
        "&:hover": {
          backgroundColor: "#fff",
          color: "#3c52b2",
        },
      }}
    >
      Comprar
    </Button>
  </NavLink>
</Stack>
<Image
  src={Vehicle}
  height="60%"
  sx={{
    marginLeft: "auto",
    marginTop: 5,
    padding: "1em 1em 0 1em",
    objectFit: "contain",
  }}
/>
</Stack> */}
      {/* END  MAIN INFO */}

      <OffersComp />

      <DividerBrand />

      <PopularCategories />

      <DeliveryComp />

      {/* <Typography
p={5}
variant="h4"
sx={{
  textAlign: "center",
}}
>
Escoje tu servicio:
</Typography>
<Stack alignItems="center">
<Image width="20%" src={Logo} />
</Stack>
<Typography
sx={{
  textAlign: "center",
  marginX: 15,
}}
>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus,
asperiores, deleniti ex, amet quam nihil natus odit assumenda aut nulla
veritatis. Laborum eum animi cumque vero sapiente error odit aspernatur.
</Typography>

<Stack
direction={{ sm: "row", xs: "column" }}
spacing={{ xs: 1, sm: 2, md: 2 }}
justifyContent={"space-around"}
alignItems={"space-between"}
mt={2}
>
<Tabs>
  <TabList>
    {SERVICES.map((item) => (
      <Tab>
        <Button
          sx={{
            backgroundColor: "#ffb814",
            border: 0,
            borderRadius: 3,
            boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
            "&:hover": {
              backgroundColor: "#fff",
              color: "#3c52b2",
            },
            color: "white",
            height: 48,
            padding: "0 30px",
          }}
        >
          {item}
        </Button>
      </Tab>
    ))}
  </TabList>

  <TabPanel>
    <Typography textAlign="center" variant="h2">
      Any content 1
    </Typography>
  </TabPanel>
  <TabPanel>
    <Typography textAlign="center" variant="h2">
      Any content 2
    </Typography>
  </TabPanel>
  <TabPanel>
    <Typography textAlign="center" variant="h2">
      Any content 3
    </Typography>
  </TabPanel>
</Tabs>
</Stack> */}
    </Stack>
  );
};

export default HomePage;
