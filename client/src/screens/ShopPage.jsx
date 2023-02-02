import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import {
	Box,
	Grid,
	Input,
	InputBase,
	MenuItem,
	TextField,
} from "@mui/material";
import { alpha, Container } from "@mui/system";
import React from "react";
import CardComp from "../components/CardComp";
import CarouselComp from "../components/CarouselComp";
import SearchIcon from "@mui/icons-material/Search";
import styled from "@emotion/styled";
import { toast } from "react-toastify";
import productsApi from "../api/modules/products.api";
import Swal from "sweetalert2";

const Shop = () => {
	//---------------------------------------------------------------------------------
	const dispatch = useDispatch();
	const [product, setProduct] = useState([]);
	const [products, setProducts] = useState([]);
	// const [productsCategory, setProductsCategory] = useState([]);
	const [name, setName] = useState("");
	const [categorySelect, setSelectCategory] = useState("");
	const [categories, setCategories] = useState([]);

	//---------------------------------------------------------------------------------
	const handleSearch = (e) => {
		setName(e.target.value);
	};

	//---------------------------------------------------------------------------------
	useEffect(() => {
		//----------------------------------
		const getList = async () => {
			const { response, err } = await productsApi.getList();
			if (response) setProduct(response);
			if (err) toast.error(err.message);
			// dispatch(setGlobalLoading(false));
		};
		getList();

		//----------------------------------
		const searchList = async () => {
			const { response } = await productsApi.search(name);
			if (response) setProducts(response);
		};
		searchList();

		//----------------------------------
		const getListCategories = async () => {
			const { response } = await productsApi.getListCategory();
			if (response) setCategories(response);
		};
		getListCategories();
	}, [dispatch]);

	//---------------------------------------------------------------------------------
	let productsQuery = products.filter((productss) =>
		productss.description.toLowerCase().includes(name)
	);

	//---------------------------------------------------------------------------------

	const allItems = products;
	const categoryItems = allItems.filter(
		(item) => item.category.name === categorySelect
	);
	let productsCategory = categoryItems;

	const handleCategory = (e) => {
		setSelectCategory(e.target.value);
	};

	console.log(productsCategory);
	console.log(productsCategory.length);

	const productsName = () => {
		Swal.fire({
			icon: "error",
			title: "Oops...",
			text: "Something went wrong!",
			footer: '<a href="">Why do I have this issue?</a>',
		});
	};

	//---------------------------------------------------------------------------------
	return (
		<>
			<Container>
				<Grid container my={4}>
					<Grid
						item
						xs={12}
						sm={6}
						direction="row"
						style={{ display: "flex", justifyContent: "center" }}
						my={4}>
						<Box sx={{ display: "flex", alignItems: "center" }}>
							<Input
								sx={{ width: "250px", fontSize: "1.1rem" }}
								placeholder="Search product"
								onChange={handleSearch}
							/>
							<SearchIcon />
						</Box>
					</Grid>
					<Grid item xs={12} sm={6} direction="row"
						style={{ display: "flex", justifyContent: "center" }}
						my={4}>
						<Container>
							<TextField
								fullWidth
								select
								label="Select Category"
								defaultValue={categorySelect}
								onChange={handleCategory}>
								{categories.map((category, item) => (
									<MenuItem key={item} value={category.name}>
										{category.name}
									</MenuItem>
								))}
							</TextField>
						</Container>
					</Grid>
				</Grid>

				<Grid item container spacing={2} marginTop="2px">
					{productsCategory.length !== 0 ? (
						<>
							{productsCategory.map((item, i) => (
								<Grid key={i} item xs={12} md={4} sm={6} justify="center">
									<CardComp props={item} />
								</Grid>
							))}
						</>
					) : (
						<>
							{name === "" ? (
								<>
									{product.map((item, i) => (
										<Grid key={i} item xs={12} md={4} sm={6} justify="center">
											<CardComp props={item} />
										</Grid>
									))}
								</>
							) : (
								<>
									{productsQuery.length === 0 ? (
										"No existen products"
									) : (
										<>
											{productsQuery.map((items, i) => (
												<Grid
													className="animate__animated animate__zoomInDown"
													key={i}
													item
													xs={12}
													md={4}
													sm={6}
													justify="center">
													<CardComp props={items} />
												</Grid>
											))}
										</>
									)}
								</>
							)}
						</>
					)}
				</Grid>
			</Container>
		</>
	);
};

const cardHeaderStyles = {
	wrapper: {
		marginTop: "1rem",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		height: "65px",
	},
};

export default Shop;
