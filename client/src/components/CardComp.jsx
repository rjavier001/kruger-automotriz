import {
	Button,
	Card,
	CardActions,
	CardContent,
	Stack,
	Typography,
	IconButton,
	CardHeader,
	Avatar,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { CardMedia } from "@mui/material";
import { Container } from "@mui/system";
import uiConfigs from "../configs/ui.configs";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import { addToCart, getTotal } from "../redux/features/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import productsApi from "../api/modules/products.api";
import Swal from "sweetalert2";

const CardComp = ({ props }) => {
	const [product, setProduct] = useState([]);
	const navigate = useNavigate();
	const location = useLocation();
	const [discounts, setDiscounts] = useState([]);

	//---------------------------------------------------------------------------------
	const {
		name,
		price,
		photoUrl,
		stock,
		description,
		id,
		category,
		discountId,
	} = props;
	const dispatch = useDispatch();
	const cart = useSelector((state) => state.cart);

	console.log(discountId === null);
	//---------------------------------------------------------------------------------
	useEffect(() => {
		dispatch(getTotal());

		//----------------------------------
		const getListDiscounts = async () => {
			const { response } = await productsApi.getListDiscounts();
			if (response) setDiscounts(response);
		};
		getListDiscounts();
	}, [cart, dispatch]);

	//---------------------------------------------------------------------------------
	const handleAddtoCart = (props) => {
		props = { ...props, quantity: 1 };
		dispatch(addToCart(props));
	};

	//---------------------------------------------------------------------------------
	const deletProduct = async () => {
		const { response, err } = await productsApi.deleteProductById(id);
		if (response) setProduct(response);
	};

	//---------------------------------------------------------------------------------
	const handleDeleteProduct = (id) => {
		Swal.fire({
			title: "Are you sure?",
			text: "You won't be able to revert this!",
			icon: "warning",
			showCancelButton: true,
			confirmButtonColor: "#3085d6",
			cancelButtonColor: "#d33",
			confirmButtonText: "Yes, delete it!",
		}).then((result) => {
			setTimeout(() => {
				if (result.isConfirmed) {
					Swal.fire("Deleted!", "Your product has been deleted.", "success");
					deletProduct(id);
					setTimeout(() => {
						window.location.reload();
					}, 25);
				}
			}, 10);
		});
	};

	let selectDiscount;
	const allItemsDiscount = discounts;
	const discountsItems = allItemsDiscount.filter(
		(item) => item.id === discountId
	);
	selectDiscount = discountsItems;

	console.log(selectDiscount[0]?.price);

	//---------------------------------------------------------------------------------
	return (
		<Container>
			{discountId === null ? (
				<Card raised sx={uiConfigs.box}>
					<CardHeader
						avatar={
							<Avatar
								sx={{
									bgcolor: "primary.light",
									marginLeft: 27,
									width: 60,
									height: 60,
									alignContent: "center",
									justifyContent: "center",
									display: "flex",
									justifyItems: "center",
									color: "primary",
								}}>
								{`${selectDiscount[0]?.price}%`
									? "0%"
									: `${selectDiscount[0]?.price}%`}
							</Avatar>
						}
					/>
					<CardMedia
						component="img"
						height="250"
						sx={{ padding: "1em 1em 0 1em", objectFit: "contain" }}
						image={photoUrl}
						title="product image"
					/>
					<CardContent>
						<Typography
							gutterBottom
							variant="h5"
							component="div"
							sx={uiConfigs.item}>
							{name}
						</Typography>
						<Typography variant="body2" color="text.secondary">
							{description}
						</Typography>
						<Stack
							direction="row"
							spacing={15}
							alignItems="center"
							sx={uiConfigs.card}>
							<Typography
								variant="body2"
								color="text.secondary"
								sx={uiConfigs.text}>
								Price: ${price}
							</Typography>
							<Typography
								variant="body2"
								color="text.secondary"
								sx={uiConfigs.text}>
								Stock: {stock}
							</Typography>
						</Stack>
						<Typography
							variant="body2"
							color="text.secondary"
							sx={uiConfigs.text}>
							Category: {category.name ? category.name : "Actualizar categoria"}
						</Typography>
					</CardContent>
					<CardActions sx={uiConfigs.button}>
						<Stack direction={"row"} spacing={12}>
							{location.pathname === "/admin" ? (
								<>
									<NavLink
										to={{ pathname: `/admin/products/edit/${id}` }}
										state={{ props }}
										style={{ textDecoration: "none" }}>
										<Button color="primary" size="medium" variant="contained">
											Edit
										</Button>
									</NavLink>
									<Button
										onClick={() => handleDeleteProduct(id)}
										color="secondary"
										size="medium">
										Delete
									</Button>
								</>
							) : (
								<>
									<NavLink
										to={{ pathname: "/details" }}
										state={{ props }}
										style={{ textDecoration: "none" }}>
										<Button color="secondary" size="medium" variant="contained">
											View More
										</Button>
									</NavLink>
									<IconButton
										color="primary"
										variant="contained"
										onClick={() => handleAddtoCart(props)}>
										<ShoppingCartCheckoutIcon />
									</IconButton>
								</>
							)}
						</Stack>
					</CardActions>
				</Card>
			) : (
				<Card raised sx={uiConfigs.box}>
					<CardHeader
						avatar={
							<Avatar
								sx={{
									bgcolor: "primary.light",
									marginLeft: 27,
									width: 60,
									height: 60,
									alignContent: "center",
									justifyContent: "center",
									display: "flex",
									justifyItems: "center",
									color: "primary",
								}}>{`${selectDiscount[0]?.price}%`}</Avatar>
						}
					/>
					<CardMedia
						component="img"
						height="250"
						sx={{ padding: "1em 1em 0 1em", objectFit: "contain" }}
						image={photoUrl}
						title="product image"
					/>
					<CardContent>
						<Typography
							gutterBottom
							variant="h5"
							component="div"
							sx={uiConfigs.item}>
							{name}
						</Typography>
						<Typography variant="body2" color="text.secondary">
							{description}
						</Typography>
						<Stack
							direction="row"
							spacing={15}
							alignItems="center"
							sx={uiConfigs.card}>
							<Typography
								variant="body2"
								color="text.secondary"
								sx={uiConfigs.text}>
								Price: ${price}
							</Typography>
							<Typography
								variant="body2"
								color="text.secondary"
								sx={uiConfigs.text}>
								Stock: {stock}
							</Typography>
						</Stack>
						<Typography
							variant="body2"
							color="text.secondary"
							sx={uiConfigs.text}>
							Category: {category.name ? category.name : "Actualizar categoria"}
						</Typography>
					</CardContent>
					<CardActions sx={uiConfigs.button}>
						<Stack direction={"row"} spacing={12}>
							{location.pathname === "/admin" ? (
								<>
									<NavLink
										to={{ pathname: `/admin/products/edit/${id}` }}
										state={{ props }}
										style={{ textDecoration: "none" }}>
										<Button color="primary" size="medium" variant="contained">
											Edit
										</Button>
									</NavLink>
									<Button
										onClick={() => handleDeleteProduct(id)}
										color="secondary"
										size="medium">
										Delete
									</Button>
								</>
							) : (
								<>
									<NavLink
										to={{ pathname: "/details" }}
										state={{ props }}
										style={{ textDecoration: "none" }}>
										<Button color="secondary" size="medium" variant="contained">
											View More
										</Button>
									</NavLink>
									<IconButton
										color="primary"
										variant="contained"
										onClick={() => handleAddtoCart(props)}>
										<ShoppingCartCheckoutIcon />
									</IconButton>
								</>
							)}
						</Stack>
					</CardActions>
				</Card>
			)}
		</Container>
	);
};

export default CardComp;
