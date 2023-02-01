import {
	Box,
	Button,
	Card,
	CardContent,
	Grid,
	Modal,
	Table,
	TableBody,
	TableCell,
	TableHead,
	TablePagination,
	TableRow,
	TextField,
	Typography,
} from "@mui/material";
import { Container} from "@mui/system";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import productsApi from "../../api/modules/products.api";
import Dashboard from "./Dashboard";
import uiConfigs from "../../configs/ui.configs";
import CreateCategory from "./componentsProduct/CreateCategory";



const EditCategory = () => {

    const navigate = useNavigate();

    //---------------------------------------------------------------------------------
	const [categories, setCategories] = useState([]);
	const [categorysPost, setCategorysPost] = useState([]);
	const [deleteCategory, setDeleteCategories] = useState([]);
	const [name, setName] = useState("");
	const [description, setDescription] = useState("");
	const [page, setPage] = useState(0);
	const [rowsPerPage, setRowsPerPage] = useState(3);

    //---------------------------------------------------------------------------------
	useEffect(() => {
		const getListCategories = async () => {
			const { response } = await productsApi.getListCategory();
			if (response) setCategories(response);
		};
		getListCategories();
		setValues();
	}, []);

    //---------------------------------------------------------------------------------
	const setValues = () => {
		setName(categories.name);
		setDescription(categories.description);
	};

    //---------------------------------------------------------------------------------
	const handleChange = () => {
		console.log("save");
	};

    //---------------------------------------------------------------------------------
	const handleChangePage = (e, newPage) => {
		setPage(newPage);
	};


    //---------------------------------------------------------------------------------
	let category;
	const postCategories = async () => {
		const { response} = await productsApi.postCategory(category);
		if (response) setCategorysPost(response);
	};


    //---------------------------------------------------------------------------------
	const handleDelete = (idCategory) => {
		const deleteCategories = async () => {
			const { response } = await productsApi.deleteCategory(idCategory);
			if (response) setDeleteCategories(response);
		};

         //---------------------------------------------------------------------------------
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
					deleteCategories(idCategory);
					setTimeout(() => {
						navigate("/admin");
					}, 10);
				}
			}, 10);
		});
	};




    //---------------------------------------------------------------------------------
	return (
		<div>
			<Dashboard />
			<Container>	
				<TablePagination
					rowsPerPageOptions={[5]}
					component="div"
					count={categories.length}
					rowsPerPage={rowsPerPage}
					page={page}
					onPageChange={handleChangePage}
				/>
				<Card style={{ maxWidth: 950, margin: "0 auto" }}>
                <CreateCategory/>
					<Typography
						gutterBottom
						variant="h5"
						component="div"
						sx={uiConfigs.item}>
						Categories
					</Typography>

					<Grid container my={0}>
						<Box p={2}>
							<CardContent>
								<form>
									<Grid container spacing={1}>
										{categories
											.slice(
												page * rowsPerPage,
												page * rowsPerPage + rowsPerPage
											)
											.map((category, i) => (
												<>
													<Grid item xs={12} sm={12} md={6}>
														<Box
															p={2}
															sx={{
																boxSizing: "border-box",
																margin: 2,
																borderRadius: "1rem",
																boxShadow:
																	"rgba(217,183,123,0.5) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px",
															}}>
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
																<Button
																	color="primary"
																	size="medium"
																	variant="contained"
																	sx={{ margin: "1rem 1rem" }}
																	onClick={(e) => handleChange(e)}>
																	Save
																</Button>
																<Button
																	color="primary"
																	size="medium"
																	variant="contained"
																	sx={{ margin: "1rem 1rem" }}
																	onClick={() => handleDelete(category.id)}>
																	Delete
																</Button>
															</div>
														</Box>
													</Grid>
												</>
											))}
									</Grid>
								</form>
							</CardContent>
						</Box>
					</Grid>
				</Card>
			</Container>
		</div>
	);
};


export default EditCategory;
