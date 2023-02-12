import { Box, Button, Grid, Modal, TextField, Typography } from "@mui/material";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import userApi from "../../../api/modules/users.api";
import { useEffect } from "react";
import Swal from "sweetalert2";
import { WifiFind } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { setSaveData } from "../../../redux/features/productsSlice";

export default function EditUser({ id }) {
	// const navigate = useNavigate();

	//---------------------------------------------------------------------------------
	const [name, setName] = useState("");
	const [lastName, setLastName] = useState("");
	const [phone, setPhone] = useState("");
	const [email, setEmail] = useState("");
	const [age, setAge] = useState("");
	const [address, setAddress] = useState("");
	const [modalInsertar, setModalInsertar] = useState(false);
	const [userById, setUserById] = useState([]);
	const [updateUsers, setUpdateUser] = useState([]);

	//---------------------------------------------------------------------------------
	const abrirCerrarModalInsertar = () => {
		setModalInsertar(!modalInsertar);
	};

	const dispatch = useDispatch();
  	const { saveData } = useSelector((state) => state.products);

	//---------------------------------------------------------------------------------
	useEffect(() => {
		//----------------------------------
		const getListUsers = async () => {
			const { response } = await userApi.usersById(id);
			if (response) {setUserById(response)
				dispatch(setSaveData(!saveData))};
		};
		getListUsers();
		setValue();
	}, [id, userById?.name]);

	//---------------------------------------------------------------------------------
	const setValue = () => {
		setName(userById?.name);
		setLastName(userById?.lastName);
		setEmail(userById?.email);
		setAge(userById?.age);
		setPhone(userById?.phone);
		setAddress(userById?.address);
	};

	//---------------------------------------------------------------------------------

	const saveUsers = () => {
		//-------------------------------------------------------------------
		// Save data edit
		const editUsers = async () => {
			const { response } = await userApi.updateUserById(id, user);
			if (response) setUpdateUser(response);
		};

		const user = {
			name:name,
			lastName:lastName,
			age:age,
			email:email,
			phone:phone,
			address:address,
		};

		console.log("before", id);
        console.log('comparation', user === null)
        console.log(typeof user)
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
                setModalInsertar(false);
				if (result.isConfirmed) {
                    if((name && lastName && age && email && phone && address !== null)){
                        Swal.fire({
                            icon: 'success',
                            title: 'Save data',
                            showConfirmButton: false,
                        })
                        editUsers(id, user);
                        setTimeout(() => {
                            setModalInsertar(false);
                        }, 600);
                    } else {
                        Swal.fire({
                            icon: 'error',
                            title: 'Oops...',
                            text: 'Debes llenar todos los campos para guardar',
                            showConfirmButton: false,
                        })
                        setModalInsertar(false);
                    }
				} else if (result.isDenied) {
					Swal.fire("Changes are not saved", "", "info");
				}
			}, 10);
		});

		
	};

	return (
		<Box>
			<EditOutlinedIcon
				sx={{ cursor: "pointer" }}
				onClick={abrirCerrarModalInsertar}
			/>
			<Modal
				Modal
				open={modalInsertar}
				onClose={abrirCerrarModalInsertar}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description">
				<Box sx={styleCategory.modal}>
					<Typography align="center" gutterBottom variant="h5" my={2}>
						Edit User
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
                                            required
											name="name"
											value={name}
											onChange={(e) => setName(e.target.value)}
										/>
									</Grid>
									<Grid xs={12} item>
										<TextField
											id="LastName"
											label="LastName"
											fullWidth
											name="LastName"
                                            required
											value={lastName}
											onChange={(e) => setLastName(e.target.value)}
										/>
									</Grid>
									<Grid item sx={{ display: "flex", gap: 2 }}>
										<Grid xs={6} item>
											<TextField
												id="Age"
												label="Age"
												name="Age"
                                                required
												value={age}
												inputProps={{ type: "number" }}
												onChange={(e) => setAge(e.target.value)}
											/>
										</Grid>
										<Grid xs={12} item>
											<TextField
												id="phone"
												label="Phone"
												name="phone"
                                                required
												value={phone}
												inputProps={{ type: "number" }}
												onChange={(e) => setPhone(e.target.value)}
											/>
										</Grid>
									</Grid>
									<Grid xs={12} item>
										<TextField
											id="Email"
											label="Email"
											fullWidth
                                            required
											name="Email"
											value={email}
											onChange={(e) => setEmail(e.target.value)}
										/>
									</Grid>
									<Grid xs={12} item>
										<TextField
											id="Address"
											label="Address"
											name="Address"
											multiline
                                            required
											rows={2}
											fullWidth
											value={address}
											onChange={(e) => setAddress(e.target.value)}
										/>
									</Grid>
									<Grid item sx={{ display: "flex", gap: 2 }}>
										<Grid xs={12} item>
											<Button
												onClick={saveUsers}
												variant="contained"
												color="primary"
												fullWidth>
												Save
											</Button>
										</Grid>
										<Grid xs={12} item>
											<Button
												sx={{ border: 1 }}
												onClick={abrirCerrarModalInsertar}
												color="secondary"
												fullWidth>
												Exit
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
		width: 350,
		bgcolor: "background.paper",
		border: "1px solid #000",
		p: 2,
	},
	iconos: {
		cursor: "pointer",
	},
	inputMaterial: {
		width: "100%",
	},
};
