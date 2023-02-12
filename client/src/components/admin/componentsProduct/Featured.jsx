import {
  Button,
  Card,
  CardContent,
  Grid,
  TablePagination,
  Typography,
} from "@mui/material";
import { Box, Container } from "@mui/system";
import { useState } from "react";
import Swal from "sweetalert2";

import CreateFeatured from "./CreateFatured";
import EditFeatured from "./EditFeatured";
import { useApi } from "../hooks/useApi";
import productsApi from "../../../api/modules/products.api";
import uiConfigs from "../../../configs/ui.configs";
import { useDispatch, useSelector } from "react-redux";
import { setSaveData } from "../../../redux/features/productsSlice";

export default function Featured() {
  //---------------------------------------------------------------------------------
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(4);
  const [featuredDelete, setFeaturedDelete] = useState([]);

  //---------------------------------------------------------------------------------
  const { featured } = useApi();

  const dispatch = useDispatch();
  const { saveData } = useSelector((state) => state.products);

  //---------------------------------------------------------------------------------
  const handleChangePage = (e, newPage) => {
    setPage(newPage);
  };

  //---------------------------------------------------------------------------------
  const handleDeleteFeatured = (idfeaturedData) => {
    const deleteFeatured = async () => {
      const { response } = await productsApi.deleteFeaturedById(idfeaturedData);
      if (response) {
        setFeaturedDelete(response);
        dispatch(setSaveData(!saveData));
      }
    };

    let featuredId;
    const allItems = featured;
    const featuredIdProduct = allItems.filter(
      (item) => item.id === idfeaturedData
    );
    featuredId = featuredIdProduct;

    /* A ternary operator. */
    featuredId[0].products.length !== 0
      ? Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "El descuento tiene productos, así que no se puede eliminar!",
        })
      : Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!",
        }).then((result) => {
          setTimeout(() => {
            if (result.isConfirmed) {
              Swal.fire(
                "Deleted!",
                "Your product has been deleted.",
                "success"
              );
              deleteFeatured(idfeaturedData);
            }
          }, 10);
        });
  };

  const number = featured.length === undefined ? 0 : featured.length;

  //---------------------------------------------------------------------------------

  return (
    <Container>
      <Grid container my={4} spacing={4}>
        <Grid item xs={12}>
          <CreateFeatured />
          <Box sx={{ maxWidth: 550, margin: "0 auto" }}>
            <TablePagination
              rowsPerPageOptions={[5]}
              component="div"
              count={number}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
            />
            <Grid container>
              <Grid container>
                {featured?.status === 204 ? (
                  <p>No data</p>
                ) : (
                  <>
                    {featured
                      .slice(
                        page * rowsPerPage,
                        page * rowsPerPage + rowsPerPage
                      )
                      .map((featuredData, i) => (
                        <Grid key={i} item xs={12} sm={12} md={6} spacing={5}>
                          <Card sx={uiConfigs.box}>
                            <CardContent>
                              <Box key={i}>
                                <Typography
                                  gutterBottom
                                  variant="h4"
                                  align="center"
                                >
                                  {featuredData.featuredTime}
                                </Typography>
                                <div align="center">
                                  <Grid
                                    container
                                    justifyContent="center"
                                    alignItems="center"
                                  >
                                    <EditFeatured id={featuredData.id} />

                                    <Button
                                      color="secondary"
                                      size="medium"
                                      variant="contained"
                                      sx={{ margin: "1rem 1rem" }}
                                      onClick={() =>
                                        handleDeleteFeatured(featuredData.id)
                                      }
                                    >
                                      Delete
                                    </Button>
                                  </Grid>
                                </div>
                              </Box>
                            </CardContent>
                          </Card>
                        </Grid>
                      ))}
                  </>
                )}
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
