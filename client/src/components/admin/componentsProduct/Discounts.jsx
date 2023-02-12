import {
	Button,
	Card,
	CardContent,
	Grid,
	TablePagination,
	Typography,
} from "@mui/material";
import { Box, Container } from "@mui/system";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import productsApi from "../../../api/modules/products.api";
import uiConfigs from "../../../configs/ui.configs";
// import { useApi } from "../hooks/useApi";
import CreateDiscount from "./CreateDiscount";
import EditDiscount from "./EditDiscount";
import { setSaveData } from "../../../redux/features/productsSlice";





export default function Discounts() {
	//---------------------------------------------------------------------------------
	const [discountsDelete, setDiscountsDelete] = useState([]);
	const [page, setPage] = useState(0);
	const [rowsPerPage, setRowsPerPage] = useState(4);
	const [discounts, setDiscounts] = useState([]);

	const dispatch = useDispatch();
  	const { saveData } = useSelector((state) => state.products);

	//---------------------------------------------------------------------------------
	// const {discounts} = useApi();

	//---------------------------------------------------------------------------------
	const handleChangePage = (e, newPage) => {
		setPage(newPage);
	};


	//---------------------------------------------------------------------------------
	const handleDeleteDiscount = (idDiscount) => {
		const deleteDiscount = async () => {
			const { response } = await productsApi.deleteDiscountById(idDiscount);
			if (response) {setDiscountsDelete(response)
				dispatch(setSaveData(!saveData))
			};
		};

		//---------------------------------------------------------------------------------
		let discountProductsId;
		const allItems = discounts;
		const discountIdProduct = allItems.filter((item) => item.id === idDiscount);
		discountProductsId = discountIdProduct;

		//---------------------------------------------------------------------------------
		/* A ternary operator. */
		discountProductsId[0].products.length !== 0
			? Swal.fire({
					icon: "error",
					title: "Oops...",
					text: "El duescuento tiene productos, así que no se puede eliminar!",
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
							
						});
						deleteDiscount(idDiscount);
					}
			  });
	};

	//---------------------------------------------------------------------------------
	useEffect(()=>{
		const getListDiscounts = async () => {
			const { response } = await productsApi.getListDiscounts();
			setDiscounts(response);
		};
		getListDiscounts();
	},[saveData])


	//---------------------------------------------------------------------------------
	const number = discounts.length === undefined ? 0 : discounts.length

	return (
		<Container>
			<Grid container spacing={4}>
				<Grid item xs={12}>
					<CreateDiscount />
					<Box sx={{ maxWidth: 550, margin: "0 auto" }}>
						<TablePagination
							rowsPerPageOptions={[5]}
							component="div"
							count={number}
							rowsPerPage={rowsPerPage}
							page={page}
							onPageChange={handleChangePage}
						/>
						<Grid container>
							<Grid container>
								{
									discounts.status === 204 
									? <p>No data</p>
									:
									<>
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
																<EditDiscount id={discount.id} />
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
									</>
								}
								
							</Grid>
						</Grid>
					</Box>
				</Grid>
			</Grid>
		</Container>
	);
}
