import {
	Button,
	Card,
	CardActions,
	CardContent,
	CardHeader,
	CardMedia,
	Divider,
	Grid,
	IconButton,
	Step,
	StepConnector,
	stepConnectorClasses,
	StepLabel,
	Stepper,
	Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import SettingsIcon from "@mui/icons-material/Settings";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import VideoLabelIcon from "@mui/icons-material/VideoLabel";
import styled from "@emotion/styled";
import ReceiptIcon from "@mui/icons-material/Receipt";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import PaymentIcon from "@mui/icons-material/Payment";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";

import userApi from "../api/modules/users.api";

import { useSelector } from "react-redux";
import { userData } from "../redux/features/userSlice";
import ordersApi from "../api/modules/orders.api";
import productsApi from "../api/modules/products.api";

export const ProgressOrder = () => {
	const steps = [
		{ name: "Order Placed", icon: <ReceiptIcon /> },
		{ name: "Pick Up", icon: <DirectionsCarIcon /> },
		{ name: "Laundry", icon: <PaymentIcon /> },
		{ name: "DropOff", icon: <LocalShippingIcon /> },
	];

	const userState = useSelector((state) => state.user.user);
	const [products, setProducts] = useState([]);

	useEffect(() => {
		if (userState) userById();
		getList();
	}, []);

	const userById = async () => {
		const userData = await userApi.getInfo(userState?.userId);
	};

	const getList = async () => {
		const { response } = await productsApi.getList();
		if (response) setProducts(response);
	};

	let arrayProduct = products.slice(0, 5);

	return (
		<Box
			sx={{
				display: "flex",
				justifyContent: "center",
				alignContent: "center",
				margin: "5rem",
			}}>
			<Card sx={{ minWidth: "20rem" }}>
				<CardContent sx={{ my: 1 }}>
					<Typography>Order Id 1234564</Typography>
					<Typography>Place On 12, February 2023</Typography>
				</CardContent>
				<Divider variant="middle"></Divider>
				<CardContent>
					<Typography gutterBottom variant="h5" component="div">
						Productos Comprados
					</Typography>
					{arrayProduct.map((product, id) => (
						<div key={id}>
							<Grid>
								<Typography variant="body2" color="text.secondary">
									* Name: {product.name}
								</Typography>
								<Typography variant="body2" color="text.secondary">
									Precio ${product.price}
								</Typography>
								<Typography
									sx={{ marginTop: 2 }}
									variant="body2"
									color="text.secondary"></Typography>
							</Grid>
						</div>
					))}
				</CardContent>
				<Divider variant="middle"></Divider>
				<Stepper sx={{ marginTop: 4 }} alternativeLabel activeStep={0}>
					{steps.map((label, i) => (
						<Step key={i}>
							<StepLabel>
								<Grid container rowSpacing={1}>
									<Grid item xs={12}>
										<Typography variant="caption" display="block" gutterBottom>
											{label.name}
										</Typography>
									</Grid>
									<Grid item xs={12}>
										{label.icon}
									</Grid>
								</Grid>
							</StepLabel>
						</Step>
					))}
				</Stepper>
				<CardActions></CardActions>
			</Card>
		</Box>
	);
};
