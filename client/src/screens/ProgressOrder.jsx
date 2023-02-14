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
import React from "react";
import SettingsIcon from "@mui/icons-material/Settings";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import VideoLabelIcon from "@mui/icons-material/VideoLabel";
import styled from "@emotion/styled";
import ReceiptIcon from "@mui/icons-material/Receipt";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import PaymentIcon from "@mui/icons-material/Payment";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";

export const ProgressOrder = () => {
	const steps = [
		{ name: "Order Placed", icon: <ReceiptIcon /> },
		{ name: "Pick Up", icon: <DirectionsCarIcon /> },
		{ name: "Laundry", icon: <PaymentIcon /> },
		{ name: "DropOff", icon: <LocalShippingIcon /> },
	];


    console.log(name.map((i)=>i.id))

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
					<Button>View More</Button>
				</CardContent>
				<Divider variant="middle"></Divider>
				<CardContent>
					<Typography gutterBottom variant="h5" component="div">
						Productos Comprados
					</Typography>
					<Typography variant="body2" color="text.secondary">
						1.
					</Typography>
					<Typography variant="body2" color="text.secondary">
						2.
					</Typography>
					<Typography variant="body2" color="text.secondary">
						3.
					</Typography>
				</CardContent>
				<Divider variant="middle"></Divider>
				<Stepper sx={{ marginTop: 4 }} alternativeLabel activeStep={1}>
					{steps.map((label,i) => (
						<Step key={i}>
							<StepLabel>
								<Grid container rowSpacing={1}>
									<Grid item xs={12}>
										<Typography variant="caption" display="block" gutterBottom>{label.name}</Typography>
									</Grid>
									<Grid item xs={12}>
										{label.icon}
									</Grid>
								</Grid>
							</StepLabel>
						</Step>
					))}
				</Stepper>
				<CardActions>
					<Button size="small">Share</Button>
					<Button size="small">Learn More</Button>
				</CardActions>
			</Card>
		</Box>
	);
};
