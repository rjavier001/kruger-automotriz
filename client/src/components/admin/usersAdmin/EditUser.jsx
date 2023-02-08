import { Box, Button, Grid, Modal, TextField, Typography } from '@mui/material';
import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";

export default function EditUser() {


	const navigate = useNavigate();

	//---------------------------------------------------------------------------------
	const [name, setName] = useState("");
	const [offerTime, setOfferTime] = useState("");
	const [price, setPrice] = useState("");
	const [modalInsertar, setModalInsertar] = useState(false);

	//---------------------------------------------------------------------------------
	const abrirCerrarModalInsertar = () => {
		setModalInsertar(!modalInsertar);
	};


  return (
    <Box>
        <EditOutlinedIcon sx={{cursor:'pointer'}}  onClick={abrirCerrarModalInsertar}/>
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