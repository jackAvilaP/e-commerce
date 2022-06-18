import React, { useEffect, useId, useState } from 'react';
import axios from 'axios';
import { Cards, Filter } from '../components';

import '../styles/Home.css';

const Home = () => {

    const [products, setProducts] = useState([])
    const id = useId();

    useEffect(() => {
        axios.get(`https://ecommerce-api-react.herokuapp.com/api/v1/products`)
            .then(res => setProducts(res.data.data.products));
    }, []);

    return (
        <div className='home'>
           <Filter/>
            <section className="home-products">
                {
                    products.map((product) => (
                        <Cards product={product} key={id + product.id} />
                    ))
                }
            </section>
        </div>
    )
}

export default Home