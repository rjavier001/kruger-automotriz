import { Box, Grid } from "@mui/material";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import CardComp from "../../CardComp";
import { useApi } from "../hooks/useApi";

export default function EditDeleteProducts() {
	//--------------------------------------------------------------
	const { product } = useApi();
	const [data, setData] = useState(null);
	const [dataFinal, setDataFinal] = useState([]);


    //--------------------------------------------------------------
	useEffect(() => {
		setData(product.slice(0, 12));
		setDataFinal(product.slice(-1));
	}, [data, product]);


	return data === null ? (
		<Box sx={{ display: "flex" }}>
			<div>Loading...</div>
		</Box>
	) : (
		<Grid item container spacing={2} marginTop="0px">
				{product?.status === 204 ? (
					<p>No data</p>
				) : (
					<>
						{dataFinal.map((item, i) => (
							<Grid key={i} item xs={12} md={4} sm={6} justify="center">
								<CardComp props={item} />
							</Grid>
						))}
						{data.map((item, i) => (
							<Grid key={i} item xs={12} md={4} sm={6} justify="center">
								<CardComp props={item} />
							</Grid>
						))}
					</>
				)}
		</Grid>
	);
}
