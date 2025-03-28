import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";

function Orders() {
    const { orders } = useContext(GlobalContext);
    return (
        <div className="cart-list">
            {orders.map((orders) => (
                <div className="checkout-container" key={orders.orderId}>
                    <h3>#ID-62Z-{orders.orderId}</h3>
                    {orders.items.map((item) => (
                        <div className="cart-item" key={item.id}>
                            <div className="item-price">₹{item.price}</div>
                            <div className="item-name">{item.name}</div>
                            <div className="item-expectedDelivery">
                                (Excepted cash on delivery 3 -6 days)
                            </div>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
}

export default Orders;