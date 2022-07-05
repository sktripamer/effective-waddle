import React, { useEffect } from 'react';
import Layout from "../components/Layout";

import Navbar from "../components/Navbar";

  
export default function Successful() {

    useEffect(() => {
        
       localStorage.removeItem('cart');

      }, []);

    return (
    <Layout htmlClassName={"scroll"}>
       <Navbar  />

        <div class='payment-succes-page'>

            <div class='succes-msg-cont'>
                <div className='result-message-success'>Payment succeeded!</div>
                <p className='result-message-text'>{["1. Please check your email for more details on your order. Go to your ", <a href={'/dashboard/#orders'}>Order Page</a>, " to see your orders."]}</p>
            </div>

        </div>

    </Layout>
    )
}
