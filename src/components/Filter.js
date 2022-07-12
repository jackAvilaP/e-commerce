import "../styles/AccordionFilter.css";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import Acoordion from "../components/Acoordion";

import { getCategorys } from "../store/slices/category.slice";

import { faFilter } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Filter = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [show, setShow] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategorys());
  }, []);

  return (
    <div className="menu-filter">
      <div className="icon-filter" onClick={() => setShow(!show)}>
        <FontAwesomeIcon icon={faFilter} />
        <p>Filter</p>
      </div>
      <div className={(show ? "viewsOn" : "") + " showFilter"}>
        <Acoordion
          title="Price"
          active={active}
          setActive={setActive}
          busqueda="price"
          toggle={toggle}
          setToggle={setToggle}
        />
        <Acoordion
          title="Category"
          active={active}
          setActive={setActive}
          toggle={toggle}
          setToggle={setToggle}
        />
      </div>
    </div>
  );
};

export default Filter;
