import {
	Button,
	Card,
	CardContent,
	Grid,
	TablePagination,
	Typography,
} from "@mui/material";
import { Box, Container } from "@mui/system";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import productsApi from "../../api/modules/products.api";
import uiConfigs from "../../configs/ui.configs";
import CreateDiscount from "./componentsProduct/CreateDiscount";
import EditDiscount from "./componentsProduct/EditDiscount";
import Dashboard from "./Dashboard";

export default function Discounts() {
	//---------------------------------------------------------------------------------
	const [discounts, setDiscounts] = useState([]);
	const [discountsDelete, setDiscountsDelete] = useState([]);
	const [page, setPage] = useState(0);
	const [rowsPerPage, setRowsPerPage] = useState(4);

	//---------------------------------------------------------------------------------
	useEffect(() => {
		//----------------------------------
		const getList = async () => {
			const { response } = await productsApi.getListDiscounts();
			if (response) setDiscounts(response);
		};
		getList();
	}, []);

	//---------------------------------------------------------------------------------
	const handleChangePage = (e, newPage) => {
		setPage(newPage);
	};

	//---------------------------------------------------------------------------------
	const handleDeleteDiscount = (idDiscount) => {
		const deleteDiscount = async () => {
			const { response } = await productsApi.deleteDiscountById(idDiscount);
			if (response) setDiscountsDelete(response);
		};

		let discountProductsId;
		const allItems = discounts;
		const discountIdProduct = allItems.filter((item) => item.id === idDiscount);
		discountProductsId = discountIdProduct;

		console.log(discountProductsId[0].products.length === 0);

		/* A ternary operator. */
		discountProductsId[0].products.length !== 0
			? Swal.fire({
					icon: "error",
					title: "Oops...",
					text: "La categoria tiene productos, así que no se puede eliminar!",
			  })
			: Swal.fire({
					title: "Are you sure?",
					text: "You won't be able to revert this!",
					icon: "warning",
					showCancelButton: true,
					confirmButtonColor: "#3085d6",
					cancelButtonColor: "#d33",
					confirmButtonText: "Yes, delete it!",
			  }).then((result) => {
					if (result.isConfirmed) {
						Swal.fire({
							icon: "success",
							title: "Your discount has been deleted.",
							showConfirmButton: false,
						});
						deleteDiscount(idDiscount);
						setTimeout(() => {
							window.location.reload();
						}, 500);
					}
			  });
	};

	//---------------------------------------------------------------------------------
	console.log(discounts);

	return (
		<Container>
			<Grid container my={4} spacing={4}>
				<Grid item xs={12}>
					<CreateDiscount />
					<Box sx={{ maxWidth: 550, margin: "0 auto" }}>
						<TablePagination
							rowsPerPageOptions={[5]}
							component="div"
							count={discounts.length}
							rowsPerPage={rowsPerPage}
							page={page}
							onPageChange={handleChangePage}
						/>
						<Grid container>
							<Grid container spacing={5}>
								{discounts
									.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
									.map((discount, i) => (
										<Grid item xs={12} sm={12} md={6} spacing={5}>
											<Card sx={uiConfigs.box}>
												<CardContent>
													<Box key={i}>
														<Typography
															gutterBottom
															variant="h4"
															align="center">
															{discount.name.charAt(0).toUpperCase() +
																discount.name.slice(1)}
														</Typography>
														<Grid item xs={12} sm={12}>
															<Typography
																variant="subtitle1"
																color="text.secondary"
																align="center">
																Discount: {discount.price}%
															</Typography>
														</Grid>
														<Grid item xs={12} sm={12}>
															<Typography
																variant="subtitle1"
																color="text.secondary"
																align="center">
																Time: {discount.offerTime}
															</Typography>
														</Grid>
														<div align="center">
															<Grid
																container
																justifyContent="center"
																alignItems="center">
																<EditDiscount id={discount} />
																<Button
																	color="secondary"
																	size="medium"
																	variant="contained"
																	sx={{ margin: "1rem 1rem" }}
																	onClick={() =>
																		handleDeleteDiscount(discount.id)
																	}>
																	Delete
																</Button>
															</Grid>
														</div>
													</Box>
												</CardContent>
											</Card>
										</Grid>
									))}
							</Grid>
						</Grid>
					</Box>
				</Grid>
			</Grid>
		</Container>
	);
}
