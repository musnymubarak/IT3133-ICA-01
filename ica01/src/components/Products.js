import React, { useState } from 'react';
import '../assets/CSS/layout.css';
import { flowers } from './FlowerDB';
import Product from './Product';
import Cart from './Cart';

export default function Products() {
    const [cart, setCart] = useState([]);

    const handleAddToCart = (flower) => {
        const existingItem = cart.find((item) => item.id === flower.id);
        if (existingItem) {
            setCart(
                cart.map((item) =>
                    item.id === flower.id
                        ? { ...item, quantity: item.quantity + flower.quantity }
                        : item
                )
            );
        } else {
            setCart([...cart, flower]);
        }
    };

    return (
        <>
            <div className="item1">
                <h1>Flower Shop</h1>
            </div>
            <div className="item2">
                <h4 className="card-title">Buy Flowers</h4>
                <div className="grid-container">
                    {flowers.map((flower) => (
                        <Product key={flower.id} flower={flower} onAddToCart={handleAddToCart} />
                    ))}
                </div>
            </div>
            <div className="item3">
                <Cart cart={cart} />
            </div>
        </>
    );
}
