import { HeartBroken, Twitter } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { Container, Stack } from "@mui/system";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useApi } from "../hooks/useApi";
import Dashboard from "./Dashboard";
// ** MUI Imports
import Tab from "@mui/material/Tab";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import TabContext from "@mui/lab/TabContext";
import { useState } from "react";

import AddBusinessIcon from "@mui/icons-material/AddBusiness";
import CategoryIcon from "@mui/icons-material/Category";
import DiscountIcon from "@mui/icons-material/Discount";
import FilterNoneIcon from "@mui/icons-material/FilterNone";

const Products = () => {
  //---------------------------------------------------------------------------------
  const { categories } = useApi();

  //---------------------------------------------------------------------------------
  const navigate = useNavigate();

  // ** State
  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  //---------------------------------------------------------------------------------
  return (
    <Box>
      <>
        <h3>CRUD</h3>
      </>
      {categories.status === 204 || categories.length === 0 ? (
        <Card sx={{ width: "20rem" }}>
          <TabContext value={value}>
            <TabList
              onChange={handleChange}
              aria-label="card navigation example"
            >
              <Tab value="1" label={<CategoryIcon />} />
            </TabList>
            <CardContent>
              <TabPanel value="1" sx={{ p: 0 }}>
                <Typography variant="h6" sx={{ marginBottom: 2 }}>
                  Category
                </Typography>
                <Typography variant="body2" sx={{ marginBottom: 4 }}>
                  Add a category for your products
                </Typography>
                <Button
                  onClick={() => navigate("/admin/products/category-edit")}
                  color="primary"
                  size="medium"
                  variant="contained"
                >
                  Create
                </Button>
              </TabPanel>
            </CardContent>
          </TabContext>
        </Card>
      ) : (
        <Grid
          container
          xs={12}
          sx={{ display: "flex", justifyContent: "center", gap: 4 }}
        >
          <Card sx={{ width: "20rem" }}>
            <TabContext value="1">
              <TabList
                onChange={handleChange}
                aria-label="card navigation example"
              >
                <Tab value="1" label={<AddBusinessIcon />} />
              </TabList>
              <CardContent>
                <TabPanel value="1" sx={{ p: 0 }}>
                  <Typography variant="h6" sx={{ marginBottom: 2 }}>
                    Products
                  </Typography>
                  <Grid container xs={12}>
                    <Typography variant="body2" sx={{ marginBottom: 4 }}>
                      Create products and share them with your customers.
                    </Typography>
                  </Grid>
                  <Button
                    onClick={() => navigate("/admin/products/create")}
                    color="primary"
                    size="medium"
                    variant="contained"
                  >
                    Create
                  </Button>
                  <Button
                    onClick={() => navigate("/admin/products/viewAll")}
                    color="primary"
                    size="medium"
                    variant="contained"
                  >
                    Edit
                  </Button>
                </TabPanel>
              </CardContent>
            </TabContext>
          </Card>
          <Card sx={{ width: "20rem" }}>
            <TabContext value="1">
              <TabList
                onChange={handleChange}
                aria-label="card navigation example"
              >
                <Tab value="1" label={<CategoryIcon />} />
              </TabList>
              <CardContent>
                <TabPanel value="1" sx={{ p: 0 }}>
                  <Typography variant="h6" sx={{ marginBottom: 2 }}>
                    Category
                  </Typography>
                  <Typography variant="body2" sx={{ marginBottom: 4 }}>
                    Add a category for your products
                  </Typography>
                  <Button
                    onClick={() => navigate("/admin/products/category-edit")}
                    color="primary"
                    size="medium"
                    variant="contained"
                  >
                    Create
                  </Button>
                </TabPanel>
              </CardContent>
            </TabContext>
          </Card>
          <Card sx={{ width: "20rem" }}>
            <TabContext value={2}>
              <TabList
                onChange={handleChange}
                aria-label="card navigation example"
              >
                <Tab value={2} label={<DiscountIcon />} />
              </TabList>
              <CardContent>
                <TabPanel value={2} sx={{ p: 0 }}>
                  <Typography variant="h6" sx={{ marginBottom: 2 }}>
                    Discount
                  </Typography>
                  <Typography variant="body2" sx={{ marginBottom: 4 }}>
                    Manage the discounts of each of your products
                  </Typography>
                  <Button
                    onClick={() => navigate("/admin/products/discounts")}
                    color="primary"
                    size="medium"
                    variant="contained"
                  >
                    Create
                  </Button>
                </TabPanel>
              </CardContent>
            </TabContext>
          </Card>
          <Card sx={{ width: "20rem" }}>
            <TabContext value={value}>
              <TabList
                onChange={handleChange}
                aria-label="card navigation example"
              >
                <Tab value="1" label={<FilterNoneIcon />} />
              </TabList>
              <CardContent>
                <TabPanel value="1" sx={{ p: 0 }}>
                  <Typography variant="h6" sx={{ marginBottom: 2 }}>
                    Featured
                  </Typography>
                  <Typography variant="body2" sx={{ marginBottom: 4 }}>
                    Manage your featured products
                  </Typography>
                  <Button
                    onClick={() => navigate("/admin/products/featured")}
                    color="primary"
                    size="medium"
                    variant="contained"
                  >
                    Create
                  </Button>
                </TabPanel>
              </CardContent>
            </TabContext>
          </Card>
        </Grid>
      )}
    </Box>
  );
};

export default Products;
