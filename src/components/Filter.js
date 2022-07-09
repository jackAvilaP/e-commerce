import "../styles/AccordionFilter.css";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import Acoordion from "../components/Acoordion";

import { getCategorys } from "../store/slices/category.slice";


import {
  faFilter
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Filter = () => {
  const [active, setActive] = useState("")
  const [first, setFirst] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategorys());
  }, []);

  return (
    <div className="menu-filter">
      <div className="icon-filter">
        <FontAwesomeIcon icon={faFilter} />
        <p>Filter</p>
      </div>
      <Acoordion title="Price" active={active} setActive={setActive} busqueda="price" first={first} setFirst={setFirst} />
      <Acoordion title="Category" active={active} setActive={setActive} first={first} setFirst={setFirst} />
    </div>
  );
};

export default Filter;
