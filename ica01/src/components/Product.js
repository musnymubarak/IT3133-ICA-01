import React, { useState } from 'react';
import '../assets/CSS/layout.css';

export default function Product({ flower, onAddToCart }) {
    const [quantity, setQuantity] = useState(1);

    const handleAddToCart = () => {
        if (quantity > 0) {
            onAddToCart({ ...flower, quantity: parseInt(quantity) });
        }
    };

    return (
        <div className="grid-item">
            <div className="card">
                <img
                    src={require(`../assets/image/${flower.img}`)}
                    alt={flower.name}
                    className="flower-image"
                />
                <div className="card-body">
                    <h5 className="card-title">
                        {flower.name} - Price: ${flower.price}
                    </h5>
                    <div className="quantity-container">
                        <label htmlFor={`quantity-${flower.id}`}>Quantity:</label>
                        <input
                            type="number"
                            id={`quantity-${flower.id}`}
                            min="1"
                            value={quantity}
                            onChange={(e) => setQuantity(e.target.value)}
                        />
                    </div>
                    <button className="card-button" onClick={handleAddToCart}>
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
}
