import {
	Box,
	Button,
	Card,
	CardContent,
	Container,
	Grid,
	Typography,
} from "@mui/material";
import { Stack } from "@mui/system";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import productsApi from "../../api/modules/products.api";
import Dashboard from "./Dashboard";
import { Image } from "cloudinary-react";
import uiConfigs from "../../configs/ui.configs";
import FormCreateProduct from "./componentsProduct/FormCreateProduct";

const CreateProduct = () => {
	const [categories, setCategories] = useState([]);
	const [products, setProducts] = useState([]);
	const [categorySelect, setSelectCategory] = useState("");
	const [name, setName] = useState("");
	const [price, setPrice] = useState(0);
	const [salePrice, setSalePrice] = useState(0);
	const [purchasePrice, setPurchasePrice] = useState(0);
	const [stock, setStock] = useState(0);
	const [productImg, setProductImg] = useState("");
	const [saveImg, setSaveImg] = useState("");
	const [description, setDescription] = useState("");

	const navigate = useNavigate();

    //----------------------------------------------------------------------
	useEffect(() => {
		const getListCategories = async () => {
			const { response } = await productsApi.getListCategory();
			if (response) setCategories(response);
		};
		getListCategories();
	}, []);

    //----------------------------------------------------------------------
	const postProducts = async () => {
		const { response } = await productsApi.postProducts(dataProducts);
		if (response) setProducts(response);
	};

    //----------------------------------------------------------------------
	let dataView;
	let dataProducts;

    //----------------------------------------------------------------------
	const saveProduct = (e) => {

        //----------------------------------------------------------------------
		/*Check id*/
		let nombresDataBase = categories.map((category) => category.name);
		let comp = nombresDataBase.includes(categorySelect);
		dataView =
			comp === true && categories.find((c) => c.name === categorySelect);

        //----------------------------------------------------------------------
		/*JSON*/
		let categorys = {};
		categorys.id = dataView.id;
		let category = categorys;

        //----------------------------------------------------------------------
		dataProducts = {
			name,
			description,
			price,
			salePrice,
			purchasePrice,
			stock,
			photoUrl: saveImg,
			category,
		};

        //----------------------------------------------------------------------
		Swal.fire({
			title: "Do you want to save the changes?",
			showDenyButton: true,
			showCancelButton: true,
			confirmButtonText: "Save",
			denyButtonText: `Don't save`,
		}).then((result) => {
			/* Read more about isConfirmed, isDenied below */
			setTimeout(() => {
				if (result.isConfirmed) {
					Swal.fire("Saved!", "", "success");
					postProducts(dataProducts);
					setTimeout(() => {
						navigate("/admin");
						window.location.reload();
					}, 850);
				} else if (result.isDenied) {
					Swal.fire("Changes are not saved", "", "info");
				}
			}, 10);
		});
	};

    //----------------------------------------------------------------------
	const user = process.env.REACT_APP_CLOUDINARY;
	const handleProductImageUpload = async (e) => {
		const file = e.target.files[0];
		const data = new FormData();
		data.append("file", file);
		data.append("upload_preset", "Images");
		return axios
			.post(`https://api.cloudinary.com/v1_1/${user}/upload`, data)
			.then((response) => {
				const data = response.data;
				setProductImg(data);
				setSaveImg(data.url);
			});
	};

    //----------------------------------------------------------------------
	return (
		<Stack>
			<Dashboard />
			<Card style={{ maxWidth: 950, margin: "0 auto" }}>
				<Typography
					gutterBottom
					variant="h5"
					component="div"
					sx={uiConfigs.item}>
					Create Product
				</Typography>

				<Grid container my={4}>
					<Grid item xs={12} sm={12} md={6}>
						<Box p={2}>
							<Card style={{ maxWidth: 650, margin: "0 auto" }}>
								<CardContent>
									<FormCreateProduct
										name={name}
										categories={categories}
										price={price}
										salePrice={salePrice}
										purchasePrice={purchasePrice}
										stock={stock}
										categorySelect={categorySelect}
										description={description}
										handlePriceChange={(e) => setPrice(e.target.value)}
										handleNameChange={(e) => setName(e.target.value)}
										handleSalePriceChange={(e) => setSalePrice(e.target.value)}
										handlePurchaseChange={(e) =>
											setPurchasePrice(e.target.value)
										}
										handleStockChange={(e) => setStock(e.target.value)}
										handleDescriptionChange={(e) =>
											setDescription(e.target.value)
										}
										handleProductImageUpload={handleProductImageUpload}
										handleCategoryChange={(e) =>
											setSelectCategory(e.target.value)
										}
									/>
									<Grid xs={12} item>
										<Button
											variant="contained"
											fullWidth
											color="primary"
											size="medium"
											onClick={(e) => saveProduct(e)}>
											Save
										</Button>
									</Grid>
								</CardContent>
							</Card>
						</Box>
					</Grid>
					<Grid item xs={12} sm={12} md={6}>
						<Box p={2}>
							<Card style={{ maxWidth: 450, margin: "0 auto" }}>
								{productImg ? (
									<Image
										cloudName={`${user}`}
										height="330"
										width="400"
										publicId={`https://res.cloudinary.com/dhaklfydk/image/upload/v1675210950/${productImg.public_id}`}
									/>
								) : (
									<p>Product image upload preview will appear here!</p>
								)}
							</Card>
						</Box>
					</Grid>
				</Grid>
			</Card>
			<Container></Container>
		</Stack>
	);
};

export default CreateProduct;
