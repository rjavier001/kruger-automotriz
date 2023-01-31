import { Container, Typography, Stack, Grid } from "@mui/material";
import Image from "mui-image";
import React from "react";

const NotFoundPage = () => {
  return (
    <Grid container alignItems="center" height={"100%"}>
      <Image
        src={require("../assets/notfound2.gif")}
        height={650}
        fit={"contain"}
        duration={1000}
      />
    </Grid>
  );
};

export default NotFoundPage;

export const styles = {
  notFound: {
    flex: 1,
    alignSelf: "center",
    textAlign: "center",
    textJustify: "center",
    fontWeight: "bold",
    fontSize: 40,
  },
};
