import React from 'react';

import {
    faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Cards = () => {

    return (
        <div>
            <li>
                <img />
                <div className="info"></div>
                <button className='cards-button'>
                    <FontAwesomeIcon
                        className="FontAwesomeIcon"
                        icon={faCartShopping}
                    />
                </button>
            </li>
        </div>
    )
}

export default Cards;