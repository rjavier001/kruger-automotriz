import { useState } from "react";
import { Box, Button, Modal, TextField, Typography } from "@mui/material";

import uiConfigs from "../../../configs/ui.configs";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import ErrorIcon from '@mui/icons-material/Error';
import productsApi from "../../../api/modules/products.api";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setSaveData, setSaveDiscount } from "../../../redux/features/productsSlice";


export default function CreateDiscount() {


    const navigate = useNavigate();

	const dispatch = useDispatch();
  	const { saveData } = useSelector((state) => state.products);


	//---------------------------------------------------------------------------------
	const [name, setName] = useState("");
	const [offerTime, setOfferTime] = useState("");
	const [discount, setDiscount] = useState("");
	const [modalInsertar, setModalInsertar] = useState(false);

	//---------------------------------------------------------------------------------
	const abrirCerrarModalInsertar = () => {
		setModalInsertar(!modalInsertar);
	};

     //----------------------------------------------------------------------
     const postDiscount = async () => {
        const { response } = await productsApi.postDiscount(dataDiscount);
        if (response) {setDiscount(response)
			dispatch(setSaveData(!saveData))};
      };


	//----------------------------------------------------------------------
	const {
		register,
		handleSubmit,
		control,
		formState: { errors },
	} = useForm({
		defaultValues: {
			Name: "",
			Discount: "",
		},
	});

	//----------------------------------------------------------------------
	let dataOnSumit;
	const onSubmit = (data) => {
		dataOnSumit = data;
		saveDiscount();
	};


	//---------------------------------------------------------------------------------
    let dataDiscount;
    
	const saveDiscount = () => {
        //----------------------------------------------------------------------
		dataDiscount = {
			name: dataOnSumit.Name,
			price: dataOnSumit.Discount,
			offerTime: dataOnSumit.OfferTime,
		};

        setModalInsertar(false);
        Swal.fire({
            title: 'Do you want to save the changes?',
            showDenyButton: true,
            confirmButtonText: 'Save',
            denyButtonText: `Don't save`,
          }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
              Swal.fire({icon: 'success',
              title: 'Your work has been saved',showConfirmButton: false})
              postDiscount(dataDiscount);
              setTimeout(() => {
                //window.location.reload();
            }, 500);
            } else if (result.isDenied) {
                setModalInsertar(true);
              }
          })


        console.log(dataDiscount)
	};

	return (
		<Box sx={uiConfigs.item}>
			<Button
				sx={{ my: 0, mx: 4, mb: 5 }}
				color="primary"
				size="medium"
				variant="contained"
				onClick={abrirCerrarModalInsertar}>
				Insertar
			</Button>
			<Modal
				Modal
				open={modalInsertar}
				onClose={abrirCerrarModalInsertar}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description">
				<Box sx={styleCategory.modal}>
					<Typography align="center" gutterBottom variant="h5" my={2}>
						Add Discount
					</Typography>
					<form onSubmit={handleSubmit(onSubmit)}>
						<Controller
							name={"Name"}
							control={control}
							render={({ field }) => (
								<TextField
                                
									{...field}
									id="name"
									label="Name"
									fullWidth
									name="Name"
                                    required
									control={control}
								/>
							)}
						/>
						<br></br>
						<Controller
                        
							name={"Discount"}
							control={control}
							render={({ field }) => (
								<TextField
                                inputProps={{ type: 'number'}}
									{...field}
									id="discount"
									fullWidth
                                    required
									name="discount"
									margin="normal"
									label="Discount"
									control={control}
								/>
							)}
						/>
						<Controller
							name={"OfferTime"}
							control={control}
							render={({ field }) => (
								<TextField
									{...field}
									id="OfferTime"
									fullWidth
                                    required
									name="OfferTime"
									margin="normal"
									label="OfferTime"
									control={control}
								/>
							)}
						/>
						<div align="right">
							<Button
								color="primary"
								size="medium"
								variant="contained"
                                type="submit"
                                >
								Add
							</Button>
							<Button onClick={abrirCerrarModalInsertar}>Cancelar</Button>
						</div>
					</form>
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
