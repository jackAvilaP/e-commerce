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
  console.log(purchases)
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
                  <lo className='product-item' key={product.id + 635}>
                    <p className='name'>{product.title}</p>
                    <div className='quantity'>
                      <p className='box'>{product.productsInCart.quantity}</p>
                    </div>
                    <div>$  {product.price}</div>
                  </lo>
                ))}
              </ul>
            </div>
          ))
        }
      </section>
      {/*<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat sit praesentium, illum suscipit recusandae, quod omnis possimus et, eligendi ipsam nobis officiis ullam ipsa? Magnam dolorem quaerat explicabo eos libero.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi voluptatem expedita atque aperiam, harum dolore incidunt quaerat rem vero ullam veritatis dignissimos, recusandae laborum, est dolor architecto. Esse, qui error!
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio non delectus minus voluptas ex neque iure iste nemo accusantium aperiam porro incidunt natus, odit quis harum dolorem, earum quibusdam excepturi.
      </p>*/}

    </div>
  )
}

export default Purchases;