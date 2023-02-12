/* eslint-disable no-unused-vars */
import {
	Box,
	Button,
	Card,
	CardContent,
	Grid,
	Stack,
	TablePagination,
	TextField,
	Typography,
} from "@mui/material";
import { Container } from "@mui/system";
import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import productsApi from "../../../api/modules/products.api";
import uiConfigs from "../../../configs/ui.configs";
import CreateCategory from "./CreateCategory";
import { useApi } from "../hooks/useApi";
import { useDispatch, useSelector } from "react-redux";
import { setSaveData } from "../../../redux/features/productsSlice";

const Category = () => {
	const navigate = useNavigate();

	//---------------------------------------------------------------------------------
	const [deleteCategory, setDeleteCategories] = useState([]);
	const [name, setName] = useState("");
	const [description, setDescription] = useState("");
	const [page, setPage] = useState(0);
	const [rowsPerPage, setRowsPerPage] = useState(2);


	//---------------------------------------------------------------------------------
	const { categories, product } = useApi();

	const dispatch = useDispatch();
  	const { saveData } = useSelector((state) => state.products);

	
	//---------------------------------------------------------------------------------

	let dataProducts;
	const handleChange = (idCategory) => {
		console.log(idCategory);
		navigate(`/admin/category/edit/${idCategory}`)
	};


	//---------------------------------------------------------------------------------
	const handleChangePage = (e, newPage) => {
		setPage(newPage);
	};

	//---------------------------------------------------------------------------------
	const handleDelete = (idCategory) => {
		const deleteCategories = async () => {
			const { response } = await productsApi.deleteCategory(idCategory);
			if (response) {setDeleteCategories(response)
				dispatch(setSaveData(!saveData))};
		};

		//---------------------------------------------------------------------------------
		let productsCategory;
		const allItems = product.status === 204 ? null : product;
		const categoryItems = allItems?.filter(
			(item) => item.category.id === idCategory
		);
		productsCategory = categoryItems;


		//---------------------------------------------------------------------------------
		productsCategory === undefined
		? Swal.fire({
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
					Swal.fire(
						"Deleted!",
						"Your product has been deleted.",
						"success"
					);
					deleteCategories(idCategory);
				}
			}, 10);
	  })
	  :
		productsCategory.length !== 0
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
					width: '20rem',
					position: 'center'
			  }).then((result) => {
					setTimeout(() => {
						if (result.isConfirmed) {
							Swal.fire(
								"Deleted!",
								"Your product has been deleted.",
								"success"
							);
							deleteCategories(idCategory);
						}
					}, 10);
			  });
	};

	const number = categories.length === undefined ? 0 : categories.length

	//---------------------------------------------------------------------------------
	return (
		<div>
			<Box style={{ maxWidth: 850, margin:'0 auto'}}>
				<Container>
					<TablePagination
						rowsPerPageOptions={[5]}
						component="div"
						count={number}
						rowsPerPage={rowsPerPage}
						page={page}
						onPageChange={handleChangePage}
					/>
					<Stack>
						<Typography
							gutterBottom
							variant="h5"
							component="div"
							sx={uiConfigs.item}>
							Categories
						</Typography>
						<CreateCategory />
					</Stack>
					<Grid container>
						<Box p={2}>
							<CardContent>
								<form>
									<Grid container>
										{
											categories?.status === 204 
											? <p>no data</p>
											:
											<>
											{categories
											.slice(
												page * rowsPerPage,
												page * rowsPerPage + rowsPerPage
											)
											.map((category, i) => (
												<>
													<Grid item xs={12} sm={12} md={6} mx={0}>
														<Card sx={uiConfigs.box} >
														<CardContent>
															<TextField
																id="name"
																label="Name"
																name="name"
																fullWidth
																margin="normal"
																value={category.name}
																onChange={(e) => setName(e.target.value)}
															/>
															<TextField
																id="description"
																label="Description"
																multiline
																fullWidth
																rows={4}
																name="description"
																margin="normal"
																value={category.description}
																onChange={(e) => setDescription(e.target.value)}
																/>
															<div align="right">
																<Button  color="primary" size="medium" variant="contained" onClick={() => handleChange(category.id)}>
																	Edit
																</Button>
																
																<Button
																	color="secondary"
																	size="medium"
																	variant="contained"
																	sx={{ margin: "1rem 1rem" }}
																	onClick={() => handleDelete(category.id)}>
																	Delete
																</Button>
															</div>
														</CardContent>
														</Card>
													</Grid>
												</>
											))}
											</>
										}
										
									</Grid>
								</form>
							</CardContent>
						</Box>
					</Grid>
				</Container>
			</Box>
		</div>
	);
};

export default Category;
