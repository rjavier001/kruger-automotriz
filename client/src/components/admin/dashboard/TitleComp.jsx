import * as React from "react";
import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";
const TitleComp=(props)=>{
  return (
    <Typography component="h2" variant="h6" color="primary" gutterBottom>
      {props.children}
    </Typography>
  );
}

TitleComp.propTypes = {
  children: PropTypes.node,
};

export default TitleComp;
