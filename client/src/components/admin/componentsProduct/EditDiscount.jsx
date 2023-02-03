import { useEffect, useState } from "react";
import {
	Box,
	Button,
	Grid,
	Modal,
	TextField,
	Typography,
} from "@mui/material";

import productsApi from "../../../api/modules/products.api";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

export default function EditDiscount({ id }) {

    console.log(id)
	const navigate = useNavigate();

	//---------------------------------------------------------------------------------
	const [name, setName] = useState("");
	const [offerTime, setOfferTime] = useState("");
	const [price, setPrice] = useState("");
	const [discount, setDiscount] = useState("");
	const [discountUpdated, setDiscountUpdated] = useState("");
	const [modalInsertar, setModalInsertar] = useState(false);

	//---------------------------------------------------------------------------------
	const abrirCerrarModalInsertar = () => {
		setModalInsertar(!modalInsertar);
	};

	// ---------------------------------------------------------------------------------
	useEffect(() => {
		const getList = async () => {
			const { response } = await productsApi.getDiscountById(id);
			if (response) setDiscount(response);
		};
		getList();
		setValues();
	}, [discount?.name, id]);

	//---------------------------------------------------------------------------------
	const setValues = () => {
		setName(discount?.name);
		setPrice(discount?.price);
		setOfferTime(discount?.offerTime);
	};

	//---------------------------------------------------------------------------------
	let dataDiscount;
	const saveDiscount = () => {
		//-------------------------------------------------------------------
		// Save data edit
		const editDiscount = async () => {
			const { response } = await productsApi.putDiscountById(id, dataDiscount);
			if (response) setDiscountUpdated(response);
		};

		//----------------------------------------------------------------------

		dataDiscount = {
			name,
			price,
			offerTime,
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
                editDiscount(id, dataDiscount);
				setTimeout(() => {
					window.location.reload();
				}, 850);
			} else if (result.isDenied) {
				setModalInsertar(true);
			}
		});

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
						Edit Discount
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
									<Grid xs={12} item>
										<TextField
											id="DiscountPrice"
											label="DiscountPrice"
											fullWidth
											name="discountPrice"
											value={price}
											inputProps={{ type: "number" }}
											onChange={(e) => setPrice(e.target.value)}
										/>
									</Grid>
									<Grid xs={12} item>
										<TextField
											id="offerTime"
											fullWidth
											label="OfferTime"
											name="OfferTime"
											value={offerTime}
											onChange={(e) => setOfferTime(e.target.value)}
										/>
									</Grid>
									<Grid xs={12} item>
										<Grid xs={12} item>
											<Button
												onClick={(e) => saveDiscount(e)}
												variant="contained"
												color="primary"
												fullWidth>
												Save
											</Button>
										</Grid>
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
