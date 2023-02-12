import { useEffect, useState } from "react";
import {
	Box,
	Button,
	Card,
	CardContent,
	Grid,
	Modal,
	TextField,
	Typography,
} from "@mui/material";

import uiConfigs from "../../../configs/ui.configs";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import ErrorIcon from "@mui/icons-material/Error";
import productsApi from "../../../api/modules/products.api";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setSaveData, setSaveDiscount } from "../../../redux/features/productsSlice";

export default function EditFeatured({ id }) {

	const navigate = useNavigate();

	const dispatch = useDispatch();
  	const { saveData } = useSelector((state) => state.products);

	//---------------------------------------------------------------------------------
	const [name, setName] = useState("");
	const [modalInsertar, setModalInsertar] = useState(false);
	const [featured, setFeatured] = useState([]);
	const [featuredModal, setFeaturedModal] = useState([]);

	//---------------------------------------------------------------------------------
	const abrirCerrarModalInsertar = () => {
		setModalInsertar(!modalInsertar);
	};

	// ---------------------------------------------------------------------------------
	useEffect(() => {
		const getList = async () => {
			const { response } = await productsApi.getFeaturedById(id);
			if (response) setFeatured(response);
		};
		getList();
		setValues();
	}, [featured?.featuredTime]);

	//---------------------------------------------------------------------------------
	const setValues = () => {
		setName(featured?.featuredTime);
	};

    
	//---------------------------------------------------------------------------------
	let dataFeatured;
	const saveDiscount = () => {
		//-------------------------------------------------------------------
		// Save data edit
		/* A function that is not being called. */
        const editfeatured = async () => {
			const { response } = await productsApi.putFeaturedById(id, dataFeatured);
			if (response) {setFeaturedModal(response)
				dispatch(setSaveData(!saveData))};
		};

		//----------------------------------------------------------------------

		dataFeatured = {
			featuredTime:name
		};

		setModalInsertar(false);
		Swal.fire({
			title: "Do you want to save the changes?",
			showDenyButton: true,
			confirmButtonText: "Save",
			denyButtonText: `Don't save`,
		}).then((result) => {
			/* Read more about isConfirmed, isDenied below */
			if (result.isConfirmed) {
				Swal.fire({
					icon: "success",
					title: "Your work has been saved",
					showConfirmButton: false,
				});
				editfeatured(id, dataFeatured);
			} else if (result.isDenied) {
				setModalInsertar(true);
			}
		});
        console.log(dataFeatured)
	};

	return (
		<Box>
			<Button
				color="primary"
				size="medium"
				variant="contained"
				onClick={abrirCerrarModalInsertar}>
				Edit
			</Button>
			<Modal
				Modal
				open={modalInsertar}
				onClose={abrirCerrarModalInsertar}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description">
				<Box sx={styleCategory.modal}>
					<Typography align="center" gutterBottom variant="h5" my={2}>
						Edit Featured
					</Typography>
					<Grid container my={4}>
						<Grid item xs={12} sm={12} md={12}>
							<Box p={2}>
								<Grid container spacing={1} gap={2}>
									<Grid xs={12} item>
										<TextField
											id="name"
											label="Name"
											fullWidth
											name="name"
											value={name}
											onChange={(e) => setName(e.target.value)}
										/>
									</Grid>
									<Grid xs={6} item>
										<Button
											onClick={(e) => saveDiscount(e)}
											variant="contained"
											color="primary"
											fullWidth>
											Save
										</Button>
									</Grid>
									<Grid xs={5} item>
										<Button
											onClick={abrirCerrarModalInsertar}
											variant="contained"
											color="secondary"
											fullWidth>
											Cancel
										</Button>
									</Grid>
								</Grid>
							</Box>
						</Grid>
					</Grid>
				</Box>
			</Modal>
		</Box>
	);
}

const styleCategory = {
	modal: {
		position: "absolute",
		top: "50%",
		left: "50%",
		transform: "translate(-50%, -50%)",
		width: 400,
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
