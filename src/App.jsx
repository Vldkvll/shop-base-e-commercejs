import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { commerce } from './lib/commerce';

// import Navbar from './components/NavBar/NavBar'
// import Products from './components/Products/Products'

import { Products, Navbar, Cart } from './components';

const App = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState({})

    const fetchProducts = async () => {
        const { data } = await commerce.products.list();

        setProducts(data);
    }

    const fetchCart = async () => {
        // const cart = await commerce.cart.retrive();

        setCart(await commerce.cart.retrieve())
    }

    const handleAddToCart = async (productId, quantity) => {
        const item = await commerce.cart.add(productId, quantity);

        setCart(item.cart)
    }

    useEffect(()=> {
        fetchProducts();
        fetchCart();
    }, []);


    return (    
        <div>
            <Navbar totalItems={cart.total_items}/>
            {/* <Products 
            products={products}
            onAddToCart={handleAddToCart}
            /> */}
            {/* { !cart.length ? undefined : <Cart cart={cart} /> } */}
            <Cart cart={cart} />
        </div>
    )
}

export default App;
