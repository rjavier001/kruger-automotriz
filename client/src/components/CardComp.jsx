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
	Box,
	Rating,
	Menu,
	Grid,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import { CardMedia } from "@mui/material";
import { Container } from "@mui/system";
import uiConfigs from "../configs/ui.configs";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import { addToCart, getTotal } from "../redux/features/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import productsApi from "../api/modules/products.api";
import Swal from "sweetalert2";
import { useApi } from "./admin/hooks/useApi";
import { setAuthModalOpen } from "../redux/features/authModalSlice";

const CardComp = ({ props }) => {
	const [product, setProduct] = useState([]);
	const navigate = useNavigate();
	const location = useLocation();

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
		featuredId,
	} = props;
	const dispatch = useDispatch();
	const cart = useSelector((state) => state.cart);

	//---------------------------------------------------------------------------------
	useEffect(() => {
		dispatch(getTotal());
	}, [cart, dispatch]);

	const { discounts, featured } = useApi();

	//---------------------------------------------------------------------------------
	const handleAddtoCart = (props) => {
		dispatch(setAuthModalOpen(true));
		/* props = { ...props, quantity: 1 };
		dispatch(addToCart(props)); */
	};

	//---------------------------------------------------------------------------------
	const deletProduct = async () => {
		const { response } = await productsApi.deleteProductById(id);
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
					Swal.fire({title :"Deleted, Your product has been deleted.",
           icon: 'success',
          showConfirmButton: false});
					deletProduct(id);
					setTimeout(() => {
						window.location.reload();
					}, 25);
				}
			}, 10);
		});
	};

	//---------------------------------------------------------------------------------
	let selectDiscount;
	const allItemsDiscount = discounts?.status === 204 ? null : discounts;
	const discountsItems = allItemsDiscount?.filter(
		(item) => item.id === discountId
	);
	selectDiscount = discountsItems;

	const selectDiscountInCard = selectDiscount?.map((select) => select.price);
	let discountSave =
		selectDiscountInCard === undefined ? "0" : selectDiscountInCard[0];
	const selectDiscountIdGet = selectDiscount === undefined ? "0" : discountSave;


	// //---------------------------------------------------------------------------------
	// let selectFeatured;
	// const allItemsFeatured = featured?.status === 204 ? null : featured;
	// const FeaturedItems = allItemsFeatured?.filter(
	// 	(item) => item.id === featuredId
	// );
	// selectFeatured = FeaturedItems;

	// const selectFeaturedInForm = selectFeatured?.map(
	// 	(featured) => featured.featuredTime
	// );
	// let featuredSave =
	// 	selectFeaturedInForm === undefined ? "0" : selectFeaturedInForm[0];
	// const selectFeaturedIdGet = selectFeatured === undefined ? "0" : featuredSave;

	// Styled Grid component
	// const StyledGrid = styled(Grid)(({ theme }) => ({
	// 	display: "flex",
	// 	alignItems: "center",
	// 	justifyContent: "center",
	// 	[theme.breakpoints.down("md")]: {
	// 		borderBottom: `1px solid ${theme.palette.divider}`,
	// 	},
	// 	[theme.breakpoints.up("md")]: {
	// 		borderRight: `1px solid ${theme.palette.divider}`,
	// 	},
	// }));

	//---------------------------------------------------------------------------------
	return (
		<>
			{/* {discountId === null ? ( */}
			<Card raised sx={uiConfigs.box}>
				<CardMedia
					component="img"
					height="200"
					sx={{
						padding: "1em 1em 0 1em",
						objectFit: "contain",
						backgroundColor: "#FBAB7E",
						backgroundImage: "linear-gradient(62deg, #FBAB7E 0%, #F7CE68 100%)",
					}}
					image={photoUrl}
					title="product image"
				/>
				<Box sx={{ display: "flex", justifyContent: "center" }}>
					{(selectDiscountIdGet === '0' || selectDiscountIdGet === undefined) ? null : (
						<Avatar
							alt="Price"
							sx={{
								width: 75,
								height: 75,
								top: "10.28125rem",
								position: "absolute",
								border: (theme) =>
									`0.25rem solid ${theme.palette.common.white}`,
								backgroundColor: "#FBAB7E",
								backgroundImage:
									"linear-gradient(0deg, #FBAB7E 0%, #FBAB7E 100%)",
							}}>
							{`${selectDiscountIdGet}%`}
						</Avatar>
					)}
				</Box>
				<CardContent>
					<Box
						sx={{
							mt: 1.75,
							display: "flex",
							flexWrap: "wrap",
							alignItems: "center",
							justifyContent: "center",
						}}>
						<Box
							sx={{ mr: 2, mb: 1, display: "flex", flexDirection: "column" }}>
							<Typography
								gutterBottom
								variant="h5"
								component="div"
								sx={uiConfigs.item}>
								{name.charAt(0).toUpperCase() + name.slice(1)}
							</Typography>
							<Typography variant="body2" color="text.secondary">
								{description}
							</Typography>
						</Box>
					</Box>
					<Box
						sx={{
							display: "flex",
							flexWrap: "wrap",
							alignItems: "center",
							gap: 4,
							justifyContent: "center",
						}}>
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
					</Box>
					<Stack
						direction="row"
						spacing={15}
						alignItems="center"
						sx={uiConfigs.card}></Stack>
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
		</>
	);
};

export default CardComp;
