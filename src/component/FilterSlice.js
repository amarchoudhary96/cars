import { createSlice } from "@reduxjs/toolkit";
import { cars } from "./DataBase";

const getLocalStorage = () => {
  let savedLocalStorage = localStorage.getItem("filterproduct");
  if (savedLocalStorage) {
    return JSON.parse(savedLocalStorage);
  } else {
    return [...cars];
  }
};

const initialState = {
  filterproduct: getLocalStorage(),
  allproducts: getLocalStorage(),
  id: "",
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    updatesearch: (state, action) => {
      const text = action.payload;
      if (text) {
        let tempProducts = state.allproducts.filter((product) =>
          product.company.toLowerCase().startsWith(text.toLowerCase())
        );
        state.filterproduct = tempProducts;
      } else {
        state.filterproduct = state.allproducts;
      }
    },
    updatearray: (state, action) => {
      const newProduct = action.payload;
      state.filterproduct.push(newProduct);
      localStorage.setItem(
        "filterproduct",
        JSON.stringify(state.filterproduct)
      );
    },
    updateid: (state, action) => {
      state.id = action.payload;
    },
    updateModelarray: (state, action) => {
      console.log(action.payload);
      let newCarCompany = state.filterproduct.find((item) => item.id == state.id);
      newCarCompany.model.push(action.payload);
      localStorage.setItem(
        "filterproduct",
        JSON.stringify(state.filterproduct)
      );
    },
  },
});

export const { updatesearch, updatearray, updateid, updateModelarray } =
  filterSlice.actions;

export default filterSlice.reducer;
