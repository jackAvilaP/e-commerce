import React from 'react';
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import '../styles/SearchBar.css';
const SearchBar = () => {
    return (
        <div className='search-box '>
            <form className='form-search'>
                <input type="text" name="search" id="search" placeholder='...Search ' />
                <button>
                    <FontAwesomeIcon icon={faMagnifyingGlass} id="iconGlass" />
                </button>
            </form>
        </div>
    )
}

export default SearchBar