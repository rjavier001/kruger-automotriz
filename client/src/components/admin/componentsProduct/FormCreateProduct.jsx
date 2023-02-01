import { Grid, MenuItem, TextField } from "@mui/material";

export default function FormCreateProduct({name, ...props}) {
    console.log(props)
	return (
		<form>
			<Grid container spacing={1}>
				<Grid xs={12} sm={6} item>
					<TextField
						id="name"
						label="Name"
						fullWidth
						name="name"
						defaultValue={props.name}
						onChange={props.handleNameChange}
					/>
				</Grid>
				<Grid xs={12} sm={6} item>
					<TextField
						id="Price"
						label="Price"
						fullWidth
						name="Price"
						defaultValue={props.price}
						onChange={props.handlePriceChange}
					/>
				</Grid>
				<Grid xs={12} sm={6} item>
					<TextField
						id="salePrice"
						label="Sale Price"
						fullWidth
						name="SalePrice"
						defaultValue={props.salePrice}
						onChange={props.handleSalePriceChange}
					/>
				</Grid>
				<Grid xs={12} sm={6} item>
					<TextField
						id="purchasePrice"
						label="Purchase Price"
						fullWidth
						name="PurchasePrice"
						defaultValue={props.purchasePrice}
						onChange={props.handlePurchaseChange}
					/>
				</Grid>
				<Grid xs={12} sm={6} item>
					<TextField
						id="stock"
						label="Stock"
						fullWidth
						name="Stock"
						defaultValue={props.stock}
						onChange={props.handleStockChange}
					/>
				</Grid>
				<Grid xs={12} item>
					<TextField
						fullWidth
						select
						label="Select Category"
						defaultValue={props.categorySelect}
						onChange={props.handleCategoryChange}>
						{props.categories.map((category, item) => (
							<MenuItem key={item} value={category.name}>
								{category.name}
							</MenuItem>
						))}
					</TextField>
				</Grid>
				<Grid xs={12} item>
					<TextField
						id="description"
						fullWidth
						multiline
						rows={4}
						label="Description"
						name="description"
						value={props.description}
						onChange={props.handleDescriptionChange}
					/>
				</Grid>

				<Grid xs={12} item>
					<input
						id="imgUpload"
						accept="image/*"
						type="file"
						required
						onChange={props.handleProductImageUpload}
					/>
				</Grid>

			</Grid>
		</form>
	);
}
