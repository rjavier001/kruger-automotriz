import { Box, Button, Card, CardContent, Grid, Modal, TextField } from '@mui/material'
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import productsApi from '../../../api/modules/products.api';
import uiConfigs from '../../../configs/ui.configs'

export default function EditFieldsCategoty() {

    let {id} = useParams();

    console.log(id)

    const navigate = useNavigate();

    //---------------------------------------------------------------------------------
	const [name, setName] = useState("");
	const [description, setDescription] = useState("");
	const [categories, setCategories] = useState([]);
	const [modalInsertar, setModalInsertar] = useState(false);

    //---------------------------------------------------------------------------------
	useEffect(() => {
        const getList = async () => {
			const { response } = await productsApi.getCategoryById(id);
			if (response) setCategories(response);
		};
		getList();
		setValues();
	}, [categories.name,id]);

    

    //---------------------------------------------------------------------------------
	const setValues = () => {
		setName(categories?.name);
		setDescription(categories?.description);
	};

    //---------------------------------------------------------------------------------
	const abrirCerrarModalInsertar = () => {
		setModalInsertar(!modalInsertar);
	};


    //---------------------------------------------------------------------------------

	let dataProducts;
	const handleChange = () => {
		//-------------------------------------------------------------------
		// Save data edit
		const editCategory = async () => {
			const { response, err } = await productsApi.putCategoryById(
				id,
				dataProducts
			);
			if (response) setCategories(response);
		};
		//---------------------------------------------------------------------------------
		dataProducts = {
			name,
			description,
		};
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
					editCategory(id, dataProducts);
					setTimeout(() => {
						navigate("/admin/products/category-edit");
					}, 850);
				} else if (result.isDenied) {
					Swal.fire("Changes are not saved", "", "info");
				}
			}, 10);
		});

		console.log(dataProducts);
	};

  return (
    <div>
      <Box sx={uiConfigs.item}>
			
			<Grid item xs={12} sm={12} md={6}>
						<Box p={2}>
							<Card style={{ maxWidth: 650, margin: "0 auto" }}>
								<CardContent>
									<form>
										<Grid container spacing={1}>
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
												<Button
													variant="contained"
													color="primary"
													fullWidth
													onClick={(e) => handleChange(e)}>
													Save
												</Button>
											</Grid>
										</Grid>
									</form>
								</CardContent>
							</Card>
						</Box>
					</Grid>
		</Box>
    </div>
  )
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