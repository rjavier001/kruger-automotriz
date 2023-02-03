import {
	Box,
	Button,
	Card,
	CardContent,
	Grid,
	MenuItem,
	TextField,
	Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import productsApi from "../../api/modules/products.api";
import Dashboard from "./Dashboard";
import { Image } from "cloudinary-react";
import axios from "axios";
import Swal from "sweetalert2";
import uiConfigs from "../../configs/ui.configs";


export const EditProduct = () => {
	let { id } = useParams();
	const navigate = useNavigate();

    //---------------------------------------------------------------------------------
	const [product, setProduct] = useState([]);
	const [saveProduct, setSaveProduct] = useState([]);
	const [categories, setCategories] = useState([]);
	const [name, setName] = useState([]);
	const [price, setPrice] = useState(0);
	const [stock, setStock] = useState(0);
	const [description, setDescription] = useState("");
	const [productImg, setProductImg] = useState("");
	const [categorySelect, setSelectCategory] = useState("");
	const [descuentoSelect, setDescuentoSelect] = useState("");
	const [featuredSelect, setFeaturedSelect] = useState("");
	const [saveImg, setSaveImg] = useState("");
	const [discounts, setDiscounts] = useState([]);
	const [featured, setFeatured] = useState([]);

    //---------------------------------------------------------------------------------
	useEffect(() => {
		const getList = async () => {
			const { response } = await productsApi.getProductById(id);
			if (response) setProduct(response);
		};
		getList();

		//----------------------------------
		const getListCategories = async () => {
			const { response } = await productsApi.getListCategory();
			if (response) setCategories(response);
		};
		getListCategories();
		setValues();
		setProductImg(product.photoUrl);

		//----------------------------------
		const getListDiscounts = async () => {
			const { response } = await productsApi.getListDiscounts();
			if (response) setDiscounts(response);
		};
		getListDiscounts();

		//----------------------------------
		const getFeaturedLis = async () => {
			const { response } = await productsApi.getFeaturedList();
			if (response) setFeatured(response);
		};
		getFeaturedLis();
		
	}, [product.name,id]);


    //---------------------------------------------------------------------------------
	let nameSelect;
	const setValues = () => {
		setName(product.name);
		setDescription(product.description);
		setStock(product.stock);
		setPrice(product.price);
		nameSelect = product.category?.name
		setSelectCategory(product.category?.name);
		setDescuentoSelect(product.discountId?.price);
		setFeaturedSelect(product.featuredId?.featuredTime)
	};

    //---------------------------------------------------------------------------------
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


	//-------------------------------------------------------------------
	// Save data edit
	const editProducts = async () => {
		const { response, err } = await productsApi.putProductById(
			id,
			dataProducts
		);
		if (response) setProduct(response);
	};


    //---------------------------------------------------------------------------------
	let dataView;
	let dataProducts;
	const photoSave = saveImg ? saveImg : productImg;
	const handleChange = () => {
		handleProductImageUpload();

		//---------------------------------------------------------------------------------
		let selectDiscount;
		const allItemsDiscount = discounts;
		const discountsItems = allItemsDiscount.filter((item) => item.name === descuentoSelect);
		selectDiscount = discountsItems;


		//---------------------------------------------------------------------------------
		let selectFeatured;
		const allItemsFeatured = featured;
		const featuredItems = allItemsFeatured.filter((item) => item.featuredTime === featuredSelect);
		selectFeatured = featuredItems;


        //---------------------------------------------------------------------------------
		let productsCategory;
		const allItems = categories;
		const categoryItems = allItems.filter((item) => item.name === categorySelect);
		productsCategory = categoryItems;

		//---------------------------------------------------------------------------------
		let categorys = {};
		categorys.id = productsCategory[0].id;
		let category = categorys;

        //---------------------------------------------------------------------------------
		dataProducts = {
			name,
			description,
			price,
			stock,
			salePrice: product.salePrice,
			purchasePrice: product.purchasePrice,
			photoUrl: photoSave,
			category,
			discountId: selectDiscount[0]?.id,
			featuredId: selectFeatured[0]?.id,

		};
		console.log(dataProducts);

        //---------------------------------------------------------------------------------

		Swal.fire({
			title: "Do you want to save the changes?",
			showDenyButton: true,
			showCancelButton: true,
			confirmButtonText: "Save",
			denyButtonText: `Don't save`,
		}).then((result) => {
			setTimeout(() => {
				if (result.isConfirmed) {
					Swal.fire("Saved!", "", "success");
					editProducts(id, dataProducts);
					setTimeout(() => {
						navigate("/admin");
					}, 850);
				} else if (result.isDenied) {
					Swal.fire("Changes are not saved", "", "info");
				}
			}, 10);
		});
	};


    //---------------------------------------------------------------------------------
	return (
		<div>
			<Dashboard />
			<Card style={{ maxWidth: 950, margin: "0 auto" }}>
				<Typography
					gutterBottom
					variant="h5"
					component="div"
					sx={uiConfigs.item}>
					EditProduct
				</Typography>
				<Grid container my={1}>
					<Grid item xs={12} sm={12} md={6}>
						<Box p={2}>
							<Card style={{ maxWidth: 650, margin: "0 auto" }}>
								<CardContent>
									<form>
										<Grid container spacing={1}>
											<Grid xs={12} sm={6} item>
												<TextField
													id="name"
													label="Name"
													fullWidth
													name="name"
													value={name}
													onChange={(e) => setName(e.target.value)}
												/>
											</Grid>

											<Grid xs={12} sm={6} item>
												<TextField
													id="stock"
													fullWidth
													label="Stock"
													name="stock"
													value={stock}
													onChange={(e) => setStock(e.target.value)}
												/>
											</Grid>
											<Grid xs={12} item>
												<TextField
													id="price"
													fullWidth
													label="Price"
													name="price"
													value={price}
													onChange={(e) => setPrice(e.target.value)}
												/>
											</Grid>
											<Grid xs={12} item>
												<TextField
													id="description"
													fullWidth
													multiline
													rows={4}
													label="Description"
													name="description"
													value={description}
													onChange={(e) => setDescription(e.target.value)}
												/>
											</Grid>
											<Grid xs={12} item>
											<TextField
												fullWidth
												select
												label="Select Category"
												value={categorySelect}
												onChange={(e)=>setSelectCategory(e.target.value)}>
												{categories.map((category, item) => (
													<MenuItem key={item} value={category.name}>
														{category.name}
													</MenuItem>
												))}
											</TextField>
											</Grid>
											<Grid xs={6} item>
											<TextField
												fullWidth
												select
												label="Select Discount"
												value={descuentoSelect}
												onChange={(e)=>setDescuentoSelect(e.target.value)}>
												{discounts.map((discount, item) => (
													<MenuItem key={item} value={discount.name}>
														{discount.price}
													</MenuItem>
												))}
											</TextField>
											</Grid>
											<Grid xs={6} item>
											<TextField
												fullWidth
												select
												label="Select Featured"
												value={featuredSelect}
												onChange={(e)=>setFeaturedSelect(e.target.value)}>
												{featured.map((featuredData, item) => (
													<MenuItem key={item} value={featuredData.featuredTime}>
														{featuredData.featuredTime}
													</MenuItem>
												))}
											</TextField>
											</Grid>
											<Grid xs={12} item>
												<input
													id="imgUpload"
													accept="image/*"
													type="file"
													required
													onChange={handleProductImageUpload}
												/>
											</Grid>
											<Grid xs={6} item>
												<Button
													variant="contained"
													color="primary"
													fullWidth
													onClick={ handleChange}>
													Save
												</Button>
											</Grid>
											<Grid xs={6} item>
												<Button
													variant="contained"
													color="secondary"
													fullWidth
													onClick={()=>navigate('/admin')}>
													Exit
												</Button>
											</Grid>
										</Grid>
									</form>
								</CardContent>
							</Card>
						</Box>
					</Grid>
					<Grid item xs={12} sm={12} md={6}>
						<Box p={2}>
								{productImg ? (
									<Image
										cloudName={`${user}`}
										publicId={`${photoSave}`}
										height="330"
										width="400"
									/>
								) : (
									<p>Product image upload preview will appear here!</p>
								)}
						</Box>
					</Grid>
				</Grid>
			</Card>
			{/* Discount: {product.discount ? product.discount : 'This product no have discount'} */}
		</div>
	);
};
