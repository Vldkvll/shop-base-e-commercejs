import React, { useEffect, useState } from 'react';

import { commerce } from './lib/commerce';

// import Navbar from './components/NavBar/NavBar'
// import Products from './components/Products/Products'

import { Products, Navbar } from './components';

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

        console.log("cart handleAddToCart", quantity)
        console.log( item)
        console.log( item.cart.total_items)

        // console.log(cart)

        setCart(item.cart)
    }

    useEffect(()=> {
        fetchProducts();
        fetchCart();
    }, [])

    // console.log(products)
    console.log("cart")
    console.log(cart)

    return (    
        <div>
            <Navbar totalItems={cart.total_items}/>
            <Products 
            products={products}
            onAddToCart={handleAddToCart}
            />
        </div>
    )
}

export default App;
