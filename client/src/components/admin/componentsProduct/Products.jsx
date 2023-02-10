import {
	Button,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
} from "@mui/material";
import { Container, Stack } from "@mui/system";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useApi } from "../hooks/useApi";
import Dashboard from "./Dashboard";


const Products = () => {

	//---------------------------------------------------------------------------------
	const { categories } = useApi();

	//---------------------------------------------------------------------------------
	const navigate = useNavigate();

	//---------------------------------------------------------------------------------
	return (
		<Stack>
			<Dashboard />
			<Container>
				<h3>Products</h3>
				{
					categories.status === 204 || categories.length === 0
					? 
						<TableContainer>
						<Table aria-label="simple table">
							<TableHead>
								<TableRow>
									<TableCell>Category</TableCell>
								</TableRow>
							</TableHead>
							<TableBody>
								<TableRow>
									<TableCell>
										<Button
											onClick={() => navigate("/admin/products/category-edit")}
											color="primary"
											size="medium"
											variant="contained">
											Create
										</Button>
									</TableCell>
								</TableRow>
								<TableRow></TableRow>
							</TableBody>
						</Table>
						</TableContainer>
					:
						<TableContainer>
						<Table aria-label="simple table">
							<TableHead>
								<TableRow>
									<TableCell>Products</TableCell>
									<TableCell>Category</TableCell>
									<TableCell>Discounts</TableCell>
									<TableCell>Feature</TableCell>
								</TableRow>
							</TableHead>
							<TableBody>
								<TableRow>
									<TableCell>
										<Button
											onClick={() => navigate("/admin/products/create")}
											color="primary"
											size="medium"
											variant="contained">
											Create
										</Button>
									</TableCell>
									<TableCell>
										<Button
											onClick={() => navigate("/admin/products/category-edit")}
											color="primary"
											size="medium"
											variant="contained">
											Create
										</Button>
									</TableCell>
									<TableCell>
										<Button
											onClick={() => navigate("/admin/products/discounts")}
											color="primary"
											size="medium"
											variant="contained">
											Create
										</Button>
									</TableCell>
									<TableCell>
										<Button
											onClick={() => navigate("/admin/products/featured")}
											color="primary"
											size="medium"
											variant="contained">
											Create
										</Button>
									</TableCell>
								</TableRow>
								<TableRow></TableRow>
							</TableBody>
						</Table>
						</TableContainer>
				}
			</Container>
		</Stack>
	);
};

export default Products;
