import { useEffect, useState } from "react";
import productsApi from "../../../api/modules/products.api";
import { useDispatch, useSelector } from "react-redux";
import { setSaveDiscount } from "../../../redux/features/productsSlice";

export const useApi = () => {
  //---------------------------------------------------------------------------------
  const [discounts, setDiscounts] = useState([]);
  const [featured, setFeatured] = useState([]);
  const [categories, setCategories] = useState([]);
  const [product, setProduct] = useState([]);

  const dispatch = useDispatch();
  const { saveData } = useSelector((state) => state.products);

  //---------------------------------------------------------------------------------
  useEffect(() => {
    //----------------------------------
    const getListDiscounts = async () => {
      const { response } = await productsApi.getListDiscounts();
      if (response) setDiscounts(response);
    };
    getListDiscounts();

    //----------------------------------
    const getFeaturedLis = async () => {
      const { response } = await productsApi.getFeaturedList();
      if (response) setFeatured(response);
    };
    getFeaturedLis();

    //----------------------------------
    const getListCategories = async () => {
      const { response } = await productsApi.getListCategory();
      if (response) setCategories(response);
    };
    getListCategories();

    //--------------------------------------------------------
    const getList = async () => {
      const { response } = await productsApi.getList();
      if (response) setProduct(response);
    };
    getList();
  }, [saveData]);

  return { discounts, featured, categories, product };
};
