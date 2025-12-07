import React, { useContext, useEffect, useState } from "react";
import "./MyOrders.css";
import { StoreContext } from "../../context/StoreContext";
import axios from "axios";
import { assets } from "../../assets/assets";

const MyOrders = () => {
  const { url, token } = useContext(StoreContext);
  const [data, setData] = useState([]);

  const fetchOrders = async () => {
    try {
      const response = await axios.post(
        url + "/api/order/userorders",
        {},
        { headers: { token } }
      );
      console.log("Full response:", response);
      console.log("Response data:", response.data);
      if (response.data.success) {
        setData(response.data.data || []);
      } else {
        setData([]);
        console.log("API returned success:false");
      }
    } catch (error) {
      console.log("Error fetching orders:", error);
      setData([]);
    }
  };

  useEffect(() => {
    if (token) {
      fetchOrders();
    }
  }, [token]);

  return (
    <div className="my-orders">
      <h2>My Orders</h2>
      <div className="container">
        {data && data.length > 0 ? (
          data.map((order) => {
            return (
              <div key={order._id} className="my-orders-order">
                <img src={assets.parcel_icon} alt="" />
                <p>
                  {order.items.map((item, itemIndex) => {
                    if (itemIndex === order.items.length - 1) {
                      return item.name + " x " + item.quantity;
                    } else {
                      return item.name + " x " + item.quantity + " , ";
                    }
                  })}
                </p>
                <p>₹{order.amount}.00</p>
                <p>Items : {order.items.length}</p>
                <p>
                  <span>&#x25cf;</span>
                  <b>{order.status}</b>
                </p>
                <button onClick={fetchOrders}>Track Order</button>
              </div>
            );
          })
        ) : (
          <p>No orders found</p>
        )}
      </div>
    </div>
  );
};

export default MyOrders;
