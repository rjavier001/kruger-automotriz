import {
	Box,
	Button,
	Card,
	Grid,
	MenuItem,
	Stack,
	TextField,
} from "@mui/material";
import axios from "axios";
import { Image } from "cloudinary-react";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import productsApi from "../../../api/modules/products.api";

export default function FormCreateProduct() {
	const [datas, setDatas] = useState([]);
	const [products, setProducts] = useState([]);
	const [categories, setCategories] = useState([]);
	const [productImg, setProductImg] = useState("");
	const [saveImg, setSaveImg] = useState("");

	const navigate = useNavigate();


    //----------------------------------------------------------------------
	const {
		register,
		handleSubmit,
		control,
		formState: { errors },
	} = useForm({
		defaultValues: {
			Name: "",
			Price: "",
		},
	});

	//----------------------------------------------------------------------
	useEffect(() => {
		const getListCategories = async () => {
			const { response } = await productsApi.getListCategory();
			if (response) setCategories(response);
		};
		getListCategories();
	}, []);

	const postProducts = async () => {
		const { response } = await productsApi.postProducts(dataProducts);
		if (response) setProducts(response);
	};
	//----------------------------------------------------------------------

	let dataOnSumit;
	const onSubmit = (data) => {
		dataOnSumit = data;
		saveProduct();
	};

	//----------------------------------------------------------------------
	let dataView;
	let dataProducts;


	//----------------------------------------------------------------------
	const saveProduct = () => {
		//----------------------------------------------------------------------
		/*Check id*/
		let nombresDataBase = categories.map((category) => category.name);
		let comp = nombresDataBase.includes(dataOnSumit.SelectCategory);
		dataView =
			comp === true &&
			categories.find((c) => c.name === dataOnSumit.SelectCategory);

		console.log(dataView);

		//----------------------------------------------------------------------
		/*JSON*/
		let categorys = {};
		categorys.id = dataView.id;
		let category = categorys;

		//----------------------------------------------------------------------
		dataProducts = {
			name: dataOnSumit.Name,
			description: dataOnSumit.Description,
			price: dataOnSumit.Price,
			salePrice: dataOnSumit.SalePrice,
			purchasePrice: dataOnSumit.PurchasePrice,
			stock: dataOnSumit.Stock,
			photoUrl: saveImg,
			category: category,
		};

		console.log(dataProducts);

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
			<Grid container my={4}>
				<Grid item xs={12} sm={12} md={6}>
					<form onSubmit={handleSubmit(onSubmit)}>
						<Grid container spacing={1}>
							<Grid xs={12} sm={6} item>
								<Controller
									name={"Name"}
									control={control}
									render={({ field }) => (
										<TextField
											{...field}
											id="name"
											required
											label="Name"
											fullWidth
											name="Name"
											control={control}
										/>
									)}
								/>
							</Grid>
							<Grid xs={12} sm={6} item>
								<Controller
									name={"Price"}
									control={control}
									render={({ field }) => (
										<TextField
											{...field}
											id="Price"
											label="Price"
											fullWidth
											required
											name="Price"
										/>
									)}
								/>
							</Grid>
							<Grid xs={12} sm={6} item>
								<Controller
									name={"SalePrice"}
									control={control}
									render={({ field }) => (
										<TextField
											{...field}
											id="salePrice"
											label="Sale Price"
											fullWidth
											required
											name="SalePrice"
										/>
									)}
								/>
							</Grid>
							<Grid xs={12} sm={6} item>
								<Controller
									name={"PurchasePrice"}
									control={control}
									render={({ field }) => (
										<TextField
											{...field}
											id="purchasePrice"
											label="Purchase Price"
											fullWidth
											required
											name="PurchasePrice"
										/>
									)}
								/>
							</Grid>
							<Grid xs={12} sm={6} item>
								<Controller
									name={"Stock"}
									control={control}
									render={({ field }) => (
										<TextField
											{...field}
											id="stock"
											label="Stock"
											fullWidth
											required
											name="Stock"
										/>
									)}
								/>
							</Grid>
							<Grid xs={12} item>
								<Controller
									name={"SelectCategory"}
									control={control}
									render={({ field }) => (
										<TextField
											{...field}
											fullWidth
											required
											select
											initialValue={7}
											name="SelectCategory"
											label="Select Category">
											{categories.map((category, item) => (
												<MenuItem key={item} value={category.name}>
													{category.name}
												</MenuItem>
											))}
										</TextField>
									)}
								/>
							</Grid>
							<Grid xs={12} item>
								<Controller
									name={"Description"}
									control={control}
									render={({ field }) => (
										<TextField
											{...field}
											id="description"
											fullWidth
											multiline
											rows={4}
											label="Description"
											name="description"
											required
										/>
									)}
								/>
							</Grid>

							<Grid xs={12} item>
								<Controller
									name={"Image"}
									control={control}
									render={({ field }) => (
										<TextField
											{...field}
											id="imgUpload"
											accept="image/*"
											type="file"
											name="Image"
											required
											onChange={handleProductImageUpload}
										/>
									)}
								/>
							</Grid>
							<Grid xs={12} item>
								<Button
									variant="contained"
									fullWidth
									color="primary"
									size="medium"
									type="submit">
									Save
								</Button>
							</Grid>
						</Grid>
					</form>
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
		</Stack>
	);
}
