import { Container, Typography, Stack, Grid } from "@mui/material";
import React from "react";

const NotFoundPage = () => {
  return (
    <Grid container alignItems="center" height={"100%"}>
      <Typography sx={styles.notFound}>404 Page not found</Typography>
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
