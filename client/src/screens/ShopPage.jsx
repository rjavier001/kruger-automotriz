import { useDispatch } from "react-redux";
import { useEffect, useMemo, useState } from "react";
import { Box, Grid, Input, MenuItem, Stack, TextField } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import CardComp from "../components/CardComp";
import SearchIcon from "@mui/icons-material/Search";
import { toast } from "react-toastify";
import productsApi from "../api/modules/products.api";
import ProductSelected from "../components/common/ProductSelected";
import { useApi } from "../components/admin/hooks/useApi";
import { setGlobalLoading } from "../redux/features/globalLoadingSlice";

import algoliasearch from "algoliasearch";
// import { InstantSearch, SearchBox, Hits } from "react-instantsearch-dom";
import {
  InstantSearch,
  SearchBox,
  Hits,
  Highlight,
  Pagination,
  Configure,
  ClearRefinements,
  RefinementList,
  SortBy,
  useHits,
} from "react-instantsearch-hooks-web";

const Shop = () => {
  //---------------------------------------------------------------------------------
  const dispatch = useDispatch();
  const [productI, setProductI] = useState([]);
  const [products, setProducts] = useState([]);

  const [name, setName] = useState("");
  const [categorySelect, setSelectCategory] = useState("");

  //---------------------------------------------------------------------------------
  const { categories } = useApi();

  //---------------------------------------------------------------------------------
  /*
  const handleSearch = (e) => {
    setName(e.target.value);
  };
  */
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const searchProducts = useMemo(() => {
    console.log("MEmo");
    return productI.filter((product) =>
      product.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [productI, searchTerm]);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    setSearchResults(searchProducts);
  };

  //---------------------------------------------------------------------------------

  useEffect(() => {
    //----------------------------------
    const getList = async () => {
      dispatch(setGlobalLoading(true));
      const { response, err } = await productsApi.getList();
      console.log(response);
      if (response) {
        setProducts(response);
        setProductI(response);
        setSearchResults(response);
      }
      if (err) toast.error(err.message);
      dispatch(setGlobalLoading(false));
    };
    getList();
  }, []);

  //---------------------------------------------------------------------------------
  const handleCategory = (e) => {
    setSelectCategory(e.target.value);
  };

  const searchClient = algoliasearch(
    "STF3VI4F0V",
    "ebafaf8b16373dded67356b9e639bc2a"
  );
  const index = searchClient.initIndex("krugermotors");
  const fetchDataFromDatabase = () => {
    const productos = products;
    return productos;
  };
  const records = fetchDataFromDatabase();
  // console.log(records);
  /*
  index.then(({ hits }) => {
    // console.log(hits);
  });
  */

  index
    .saveObjects(records, { autoGenerateObjectIDIfNotExist: true })
    .then(({ hits }) => {
      // console.log(hits);
    });

  function CustomHits(props) {
    const { hits, results, sendEvent } = useHits(props);
    // console.log(hits);
    <Highlight attribute="description" hit={hits} />;

    return hits.map((item, i) => (
      <Grid key={i} item xs={12} md={4} sm={6} justify="center">
        {/* <Highlight attribute="description" hit={item} /> */}
        <CardComp props={item} />
      </Grid>
    ));

    // return <CardComp props={hits} />;
  }

  //---------------------------------------------------------------------------------
  return (
    <>
      <Container>
        <Stack>{/* SEARCH */}</Stack>

        <Grid container my={4}>
          <Grid
            item
            xs={12}
            sm={6}
            container
            direction="row"
            style={{ display: "flex", justifyContent: "center" }}
            my={4}
          >
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Input
                sx={{ width: "250px", fontSize: "1.1rem" }}
                placeholder="Search product"
                onChange={handleSearch}
              />
              <SearchIcon />
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            container
            direction="row"
            style={{ display: "flex", justifyContent: "center" }}
            my={4}
          >
            <Container>
              <TextField
                fullWidth
                select
                label="Select Category"
                defaultValue={categorySelect}
                onChange={handleCategory}
              >
                {categories.map((category, item) => (
                  <MenuItem key={item} value={category.name}>
                    {category.name}
                  </MenuItem>
                ))}
              </TextField>
            </Container>
          </Grid>
        </Grid>

        <InstantSearch searchClient={searchClient} indexName="krugermotors">
          <SearchBox />
          <ClearRefinements />
          <h2>Brands</h2>
          <RefinementList attribute="category.description" />
          <SortBy
            items={[
              { label: "Featured", value: "krugermotors" },
              { label: "Price (asc)", value: "instant_search_price_asc" },
              { label: "Price (desc)", value: "instant_search_price_desc" },
            ]}
          />
          <Configure hitsPerPage={12} />

          {/* <Hits hitComponent={Hit} /> */}
          <Grid item container spacing={2} marginTop="2px">
            <CustomHits {...this} />
          </Grid>

          <Pagination />
        </InstantSearch>

        {/* <Grid item container spacing={2} marginTop="2px">
          {searchResults.slice(0, 12).map((item, i) => (
            <Grid key={i} item xs={12} md={4} sm={6} justify="center">
              <CardComp props={item} />
            </Grid>
          ))}
        </Grid> */}
      </Container>
    </>
  );
};

export default Shop;
