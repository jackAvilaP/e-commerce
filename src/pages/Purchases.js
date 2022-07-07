import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPurchase } from '../store/slices/purchases.slice';
import { setIsOpen } from '../store/slices/viewCartList.slice';
import "../styles/Purchases.css";

const Purchases = () => {
  const firstName = localStorage.getItem('user');
  const purchases = useSelector(state => state.productPurchase);
  const dispatch = useDispatch();
  let fecha = new Date()
  useEffect(() => {
    dispatch(getPurchase())
  }, [dispatch, firstName])

  return (
    <div className='container-purchases' onClick={() => dispatch(setIsOpen(false))}>
      <section className='main-container'>
        <h1>My Purchases</h1>
        {
          purchases.map(purchase => (
            <div className='purchase-item' key={purchase.id + 467}>
              <ul className='purchase-products-list'>
                <div className='header'>
                  <b>{fecha.toDateString(purchase.createdAt)}</b>
                </div>
                {purchase.cart.products.map(product => (
                  <div className='product-item' key={product.id + 635}>
                    <p className='name'>{product.title}</p>
                    <div className='quantity'>
                      <p className='box'>{product.productsInCart.quantity}</p>
                    </div>
                    <div>$  {product.price}</div>
                  </div>
                ))}
              </ul>
            </div>
          ))
        }
      </section>

    </div>
  )
}

export default Purchases;