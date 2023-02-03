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
import CreateFeatured from "./componentsProduct/CreateFatured";
import EditDiscount from "./componentsProduct/EditDiscount";
import EditFeatured from "./componentsProduct/EditFeatured";
import Dashboard from "./Dashboard";

export default function Featured() {
	//---------------------------------------------------------------------------------
	const [page, setPage] = useState(0);
	const [rowsPerPage, setRowsPerPage] = useState(4);
	const [featured, setFeatured] = useState([]);
	const [featuredDelete, setFeaturedDelete] = useState([]);

	//---------------------------------------------------------------------------------
	useEffect(() => {
		const getFeaturedLis = async () => {
			const { response } = await productsApi.getFeaturedList();
			if (response) setFeatured(response);
		};
		getFeaturedLis();
	}, []);

	console.log(featured);

	//---------------------------------------------------------------------------------
	const handleChangePage = (e, newPage) => {
		setPage(newPage);
	};

	//---------------------------------------------------------------------------------
	const handleDeleteDiscount = (idfeaturedData) => {
		const deleteDiscount = async () => {
			const { response } = await productsApi.deleteFaturedById(idfeaturedData);
			if (response) setFeaturedDelete(response);
		};

		let featuredId;
		const allItems = featured;
		const featuredIdProduct = allItems.filter(
			(item) => item.id === idfeaturedData
		);
		featuredId = featuredIdProduct;

		/* A ternary operator. */
		featuredId[0].products.length !== 0
			? Swal.fire({
					icon: "error",
					title: "Oops...",
					text: "El descuento tiene productos, así que no se puede eliminar!",
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
						deleteDiscount(idfeaturedData);
						setTimeout(() => {
							window.location.reload();
						}, 500);
					}
			  });
	};

	//---------------------------------------------------------------------------------

	return (
		<Container>
			<Grid container my={4} spacing={4}>
				<Grid item xs={12}>
					<CreateFeatured />
					<Box sx={{ maxWidth: 550, margin: "0 auto" }}>
						<TablePagination
							rowsPerPageOptions={[5]}
							component="div"
							count={featured.length}
							rowsPerPage={rowsPerPage}
							page={page}
							onPageChange={handleChangePage}
						/>
						<Grid container>
							<Grid container spacing={5}>
								{featured
									.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
									.map((featuredData, i) => (
										<Grid item xs={12} sm={12} md={6} spacing={5}>
											<Card sx={uiConfigs.box}>
												<CardContent>
													<Box key={i}>
														<Typography
															gutterBottom
															variant="h4"
															align="center">
															{featuredData.featuredTime}
														</Typography>
														<div align="center">
															<Grid
																container
																justifyContent="center"
																alignItems="center">
																<Button>
																	<EditFeatured id={featuredData.id} />
																</Button>
																<Button
																	color="secondary"
																	size="medium"
																	variant="contained"
																	sx={{ margin: "1rem 1rem" }}
																	onClick={() =>
																		handleDeleteDiscount(featuredData.id)
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
