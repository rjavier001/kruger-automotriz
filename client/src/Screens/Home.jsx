import React from "react";
import HomeIcon from "../Assets/items.png";
import Vehicle from "../Assets/Vehicle_engineering.jpg";
import Image from "mui-image";
import { Button, Stack, Typography } from "@mui/material";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { NavLink } from "react-router-dom";
import HeroSlide from "../Components/common/HeroSlide";
import PopularCategories from "../Components/common/PopularCategories";
import Footer from "../Components/common/Footer";

const SERVICES = ["Repuestos", "Manufactura", "Motor"];
const Home = () => {
  return (
    <Stack>
      <Stack
        direction={{ sm: "row", xs: "column" }}
        spacing={{ xs: 1, sm: 2, md: 4 }}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Stack width={400}>
          <Typography
            sx={{
              marginRight: "auto",
            }}
          >
            Mejora el rendimiento de tu Auto
          </Typography>
          <Typography mt={2} variant="h3">
            Para un mejor rendimiento de tu motor
          </Typography>
          <Typography mt={2}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
            corrupti obcaecati dolores voluptatum ratione cupiditate numquam.
            Magni, consequuntur! Placeat esse sit, magni sequi pariatur corrupti
            perspiciatis officia illum fugiat omnis.
          </Typography>
          <NavLink to={"/checkout"} className="navlink">
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
          width="60%"
          fit="cover"
          sx={{ marginLeft: "auto", marginTop: 5 }}
        />
      </Stack>
      <PopularCategories />

      <Typography
        p={5}
        variant="h4"
        sx={{
          textAlign: "center",
        }}
      >
        Escoje tu servicio:
      </Typography>
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
            <h2>Any content 1</h2>
          </TabPanel>
          <TabPanel>
            <h2>Any content 2</h2>
          </TabPanel>
        </Tabs>
      </Stack>
      <Footer />
    </Stack>
  );
};

export default Home;
