import React from "react";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useForm } from "../Hooks/useForm";
import "../styles/SearchBar.css";

import { searchTitle, getProducts } from "../store/slices/products.slice";
import { useDispatch } from "react-redux";

const SearchBar = () => {
  const dispatch = useDispatch();
  const { formstate, onResetForm, onInputChage, title } = useForm({
    title: "",
  });

  const searchTitleProduct = (e) => {
    e.preventDefault();
    if(formstate.title !==""){
     dispatch(searchTitle(formstate.title));   
    }else{
        dispatch(getProducts());
    }
    
    onResetForm();
  };

  return (
    <div className="search-box ">
      <form className="form-search">
        <input
          type="text"
          name="title"
          id="title"
          placeholder="...Search "
          onChange={onInputChage}
          value={title}
        />
        <button onClick={searchTitleProduct}>
          <FontAwesomeIcon icon={faMagnifyingGlass} id="iconGlass" />
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
