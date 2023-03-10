import {
	Card,
	Container,
	Typography,
} from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import Dashboard from "./Dashboard";
import FormCreateProduct from "./FormCreateProduct";
import uiConfigs from "../../../configs/ui.configs";

const CreateProduct = () => {

    //----------------------------------------------------------------------
	return (
		<Stack>
			<Dashboard />
			<Card style={{ maxWidth: 950, margin: "0 auto" }}>
				<Typography
					gutterBottom
					variant="h5"
					component="div"
					sx={uiConfigs.item}>
					Create Product
				</Typography>

                <FormCreateProduct/>
			</Card>
			<Container></Container>
		</Stack>
	);
};

export default CreateProduct;
