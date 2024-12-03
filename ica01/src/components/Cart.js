import React from 'react';

export default function Cart({ cart }) {
    const calculateTotal = () => {
        return cart.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    return (
        <div className="table-container">
            <h4 className="card-title">Cart</h4>
            <table>
                <thead>
                    <tr>
                        <td>Product</td>
                        <td>QTY</td>
                        <td>Price</td>
                    </tr>
                </thead>
                <tbody>
                    {cart.map((item) => (
                        <tr key={item.id}>
                            <td>{item.name}</td>
                            <td>{item.quantity}</td>
                            <td>${item.price * item.quantity}</td>
                        </tr>
                    ))}
                    <tr>
                        <td><strong>Grand Total:</strong></td>
                        <td colSpan={2}><strong>${calculateTotal()}</strong></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
