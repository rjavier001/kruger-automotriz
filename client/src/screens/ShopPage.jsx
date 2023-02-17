import { useDispatch } from "react-redux";
import { useEffect, useMemo, useState } from "react";
import {
  Box,
  Grid,
  Input,
  MenuItem,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
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
  useRefinementList,
  HierarchicalMenu,
  CurrentRefinements,
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
  /*
  useEffect(() => {
    //----------------------------------
    const getList = async () => {
      dispatch(setGlobalLoading(true));
      const { response, err } = await productsApi.getList();
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
  */

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

  /*
    index
    .saveObjects(records, { autoGenerateObjectIDIfNotExist: true })
    .then(({ hits }) => {
      // console.log(hits);
    });
    */

  function CustomHits(props) {
    const { hits, results, sendEvent } = useHits(props);
    <Highlight attribute="description" hit={hits} />;

    return hits.map((item, i) => (
      <Grid key={i} item xs={12} md={4} sm={6} justify="center">
        <CardComp props={item} />
      </Grid>
    ));
  }

  function CustomRefinementList(props) {
    const {
      items,
      hasExhaustiveItems,
      createURL,
      refine,
      sendEvent,
      searchForItems,
      isFromSearch,
      canRefine,
      canToggleShowMore,
      isShowingMore,
      toggleShowMore,
    } = useRefinementList(props);

    console.log(items);

    return <>hola</>;
  }

  //---------------------------------------------------------------------------------
  return (
    <>
      <Container>
        <InstantSearch searchClient={searchClient} indexName="krugermotors">
          <Stack direction="column" justifyContent="center" alignItems="center">
            <SearchBox placeholder="Buscar productos" />
          </Stack>
          <br />
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={{ xs: 1, sm: 2, md: 4 }}
          >
            <Stack>
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                Categorias
              </Typography>
              <RefinementList
                attribute="category.name"
                showMore={true}
                translations={{
                  showMoreButtonText({ isShowingMore }) {
                    return isShowingMore
                      ? "Mostrar menos marcas"
                      : "Mostrar más marcas";
                  },
                }}
              />
            </Stack>

            <Stack>
              <Stack
                paddingLeft="16px"
                direction="row"
                justifyContent="space-between"
              >
                <ClearRefinements
                  translations={{
                    resetButtonText: "Borrar filtros",
                  }}
                />
                <CurrentRefinements />
                <Stack
                  direction="row"
                  justifyContent="flex-end"
                  alignItems="flex-end"
                  paddingRight="16px"
                >
                  <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                    Ordenar por &nbsp;
                  </Typography>
                  <Typography>
                    <SortBy
                      items={[
                        { label: "Más relevantes", value: "krugermotors" },
                        {
                          label: "Menor precio",
                          value: "instant_search_price_asc",
                        },
                        {
                          label: "Mayor precio",
                          value: "instant_search_price_desc",
                        },
                      ]}
                    />
                  </Typography>
                </Stack>
              </Stack>

              <Configure hitsPerPage={12} />
              <Grid item container spacing={2} marginTop="2px">
                <CustomHits {...this} />
              </Grid>
              <br />
              <Pagination />
              <br />
            </Stack>
          </Stack>
        </InstantSearch>
      </Container>
    </>
  );
};

export default Shop;
