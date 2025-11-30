import React from 'react'
import './Orders.css'
import axios from 'axios'
const Orders = () => {
  const [orders,setOrders] = useState([]);

  const fetchAllOrders = async () =>{
    const response = await axios.get(url+"/api/order/list");
    if(response.data.success)
    {
      setOrders(response.data.success);
      console.log(response.data.data);
    }
    else
    {
      toast.error("Error");
    }
  }
  useEffect(()=>{
    fetchAllOrders();
  },[])
  return (
    <div className='order add'>
        <h2>Order Page</h2>
        <div className="order-list">
          {orders.map((order,index)=>{
            <div  className="order-item" key={index}>
              <img src={assets.parcel_icon} alt="" />
              <div>
                <p className="order-item-food">
                  {order.items.map((item,index)=>{
                    if(index == order.items.length -1)
                    {
                      return item.name + " x " + item.quantity;
                    }
                    else
                    {
                      return item.name + " x " + item.quantity + " , "
                    }
                  })}
                </p>
              </div>
            </div>
          })}
        </div>
    </div>
  )
}
import './Orders.css'
import {toast} from 'react-toastify';
import { useEffect,useState } from 'react';
import { assets } from '../../assets/assets';
export default Orders
