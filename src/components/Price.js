import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from '../Hooks/useForm';
import { filterProductsValue, getProducts } from '../store/slices/products.slice';

const Price = () => {
    const products = useSelector((state) => state.product);
    const dispatch = useDispatch();

    const { formstate, onInputChage, formValue, toValue } = useForm({
        formValue: "",
        toValue: "",
    });

    const filterSearch = (e) => {
        e.preventDefault();
        if (formstate.formValue !== "" && formstate.formstate !== "") {
            dispatch(filterProductsValue(formstate, products));
        } else {
            dispatch(getProducts());
        }
    };

    return (
        <div>
            <div className="accordion-item">
                <div className="accordion-content">
                    <section className='section-price'>
                        <div className='price-input'>
                            <input
                                type="number"
                                placeholder="Form"
                                id="formValue"
                                name="formValue"
                                onChange={onInputChage}
                                value={formValue}
                            />
                            <input
                                type="number"
                                placeholder="To"
                                id="toValue"
                                name="toValue"
                                onChange={onInputChage}
                                value={toValue}
                            />
                        </div>
                        <button onClick={filterSearch}>filter price</button>
                    </section>
                </div>

            </div>
        </div>
    )
}

export default Price;