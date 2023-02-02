import { Alert, AlertTitle, Grid } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import CardComp from "../CardComp";

export default function ProductSelected({ products, categorySelect }) {
	let productsCategory;
	const allItems = products;
	const categoryItems = allItems.filter(
		(item) => item.category.name === categorySelect
	);
	productsCategory = categoryItems;

    console.log(productsCategory)


	return (
		<>
        
			{productsCategory.length === 0 ?  (
                <Container>
                <Alert severity="error">
                <AlertTitle>Error</AlertTitle>
                There is no information, the page will be updated.<strong>!</strong>
              </Alert>
              {setTimeout(() => {
                    window.location.reload();
                }, 1000)}
                </Container>

			) : (
				<>
					{productsCategory.map((item, i) => (
						<Grid key={i} item xs={12} md={4} sm={6} justify="center">
							<CardComp props={item} />
						</Grid>
					))}
                    
				</>
			)}
		</>
	);
}
