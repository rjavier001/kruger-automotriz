import React, { useState } from "react";
import {
	Box,
	Button,
	Modal,
	TextField,
} from "@mui/material";

import Swal from "sweetalert2";

import productsApi from "../../../api/modules/products.api";
import { useNavigate } from "react-router-dom";
import uiConfigs from "../../../configs/ui.configs";
import { setSaveData, setSaveDiscount } from "../../../redux/features/productsSlice";
import { useDispatch, useSelector } from "react-redux";


const CreateCategory = () => {
	//---------------------------------------------------------------------------------
	const [name, setName] = useState("");
	const [description, setDescription] = useState("");
	const [categories, setCategories] = useState([]);
	const [modalInsertar, setModalInsertar] = useState(false);

	const dispatch = useDispatch();
  	const { saveData } = useSelector((state) => state.products);

	//---------------------------------------------------------------------------------
	const navigate = useNavigate();
	let category;

	//---------------------------------------------------------------------------------
	const postCategories = async () => {
		const { response, err } = await productsApi.postCategory(category);
		if (response) {setCategories(response)
			dispatch(setSaveData(!saveData))};
	};

	//---------------------------------------------------------------------------------
	const abrirCerrarModalInsertar = () => {
		setModalInsertar(!modalInsertar);
	};

	//---------------------------------------------------------------------------------
	const saveCategory = (e) => {
		category = { name, description };
		console.log(category);
		setModalInsertar(false);
		Swal.fire({
			title: "Do you want to save the changes?",
			showDenyButton: true,
			showCancelButton: true,
			confirmButtonText: "Save",
			denyButtonText: `Don't save`,
		}).then((result) => {
			setModalInsertar(true);
			setTimeout(() => {
				if (result.isConfirmed) {
					setModalInsertar(false);
					Swal.fire({icon: 'success',
					title: 'Your work has been saved', showConfirmButton: false});
					postCategories(category);
				} else if (result.isDenied) {
					Swal.fire("Changes are not saved", "", "info");
				}
			}, 10);
		});
	};

	//---------------------------------------------------------------------------------
	return (
		<Box sx={uiConfigs.item}>
			<Button sx={{my:0, mx:4, mb:-1}} color="primary" size="medium" variant="contained"  onClick={abrirCerrarModalInsertar}>Insertar</Button>
			<Modal
				Modal
				open={modalInsertar}
				onClose={abrirCerrarModalInsertar}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description">
				<Box sx={styleCategory.modal}>
					<h3>Add Category</h3>
					<TextField
						fullWidth
						label="Nombre"
						defaultValue={name}
						onChange={(e) => setName(e.target.value)}
					/>
					<br></br>
					<TextField
						fullWidth
						multiline
						rows={4}
						sx={{ marginTop: "1.5rem" }}
						defaultValue={description}
						onChange={(e) => setDescription(e.target.value)}
						name="description"
						margin="normal"
						label="Description"
					/>
					<div align="right">
						<Button
							color="primary"
							size="medium"
							variant="contained"
							onClick={(e) => saveCategory(e)}>
							Add
						</Button>
						<Button onClick={abrirCerrarModalInsertar}>Cancelar</Button>
					</div>
				</Box>
			</Modal>
		</Box>
	);
};

const styleCategory = {
	modal: {
		position: "absolute",
		top: "50%",
		left: "50%",
		transform: "translate(-50%, -50%)",
		width: 300,
		bgcolor: "background.paper",
		border: "1px solid #000",
		boxShadow: 24,
		p: 4,
	},
	iconos: {
		cursor: "pointer",
	},
	inputMaterial: {
		width: "100%",
	},
};
export default CreateCategory;
