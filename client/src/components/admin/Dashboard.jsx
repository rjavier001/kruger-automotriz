import { Button, Container, Grid, Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import React, { useEffect, useState } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import productsApi from "../../api/modules/products.api";
import CardComp from "../CardComp";

const Dashboard = () => {
	let location = useLocation();

	const [product, setProduct] = useState([]);
	const [categories, setCategories] = useState([]);

	//--------------------------------------------------------------
	/* A hook that is called after every render. */
	useEffect(() => {
		const getList = async () => {
			const { response, err } = await productsApi.getList();
			if (response) setProduct(response);
		};
		getList();

		const getListCategories = async () => {
			const { response, err } = await productsApi.getListCategory();
			if (response) setCategories(response);
		};
		getListCategories();
	}, []);

	//--------------------------------------------------------------
	/**
	 * It returns a Stack component with three NavLink components.
	 * @returns A function that returns a Stack component with three NavLink components.
	 */
	const LinksforAdmin = () => {
		return (
			<Box sx={{}}>
				<NavLink
					className={({ isActive }) =>
						isActive ? "link-active" : "link-inactive"
					}
					to="/admin">
					Home
				</NavLink>
				<NavLink
					className={({ isActive }) =>
						isActive ? "link-active" : "link-inactive"
					}
					to="/admin/products">
					Products
				</NavLink>
				<NavLink
					className={({ isActive }) =>
						isActive ? "link-active" : "link-inactive"
					}
					to="/admin/users">
					Users
				</NavLink>
			</Box>
		);
	};

	//--------------------------------------------------------------
	return (
		<>
			{location.pathname !== "/admin" ? (
				<Stack>
					<Box>
						<h3>Links</h3>
						<LinksforAdmin />
						<Outlet />
					</Box>
				</Stack>
			) : (
				<Stack>
					<Box>
						<h3>Links</h3>
						<LinksforAdmin />
						<Outlet />
					</Box>

					<Container>
						<Grid item container spacing={2} marginTop="2px">
							{product.map((item, i) => (
								<Grid key={i} item xs={12} md={4} sm={6} justify="center">
									<CardComp props={item} />
								</Grid>
							))}
						</Grid>
					</Container>
				</Stack>
			)}
		</>
	);
};

export default Dashboard;
