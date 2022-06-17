import React from 'react';
import '../styles/Cards.css';
import {
    faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Cards = ({ product }) => {

    return (

        <li>
            <div className='image'>
                <img src={product.productImgs[0]} />
            </div>
            <div className="info">
                <h5>{product.title}</h5>
            </div>
            <div className='prices-pruducts'>
                {product.price > 300 ? (
                    <div>
                        $ <b>{product.price}</b>
                        <p className="shipping">free shipping</p>{" "}
                    </div>
                ) : (
                    <p>
                        $ <b>{product.price}</b>
                    </p>
                )}
                <button className='cards-button'>
                    <FontAwesomeIcon
                        className="FontAwesomeIcon"
                        icon={faCartShopping}
                    />
                </button>
            </div>

        </li>

    )
}

export default Cards;