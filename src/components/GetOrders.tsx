import * as React from "react";
import { useQuery, gql } from "@apollo/client";
import { useEffect, useState } from "react";
import useAuth, { User } from "../hooks/useAuth";


const GET_ORDERS = gql`
query theorders( $input: Int) {
  orders(where: {customerId:$input}) {
    edges {
      node {
        total
        date
        customerNote
        lineItems {
          nodes {
            product {
              name
              image {
                sourceUrl
              }
            }
            subtotal
          }
        }
        transactionId
        databaseId
        status
        shipping {
          address1
          address2
          city
          country
          email
          firstName
          lastName
          postcode
          state
        }
        hasShippingAddress
      }
    }
  }
}

`;

export default function GetOrders() {
  const [selectedOrder, setSelectedOrder] = useState(null)
  const [loadSearch, setLoadSearch] = useState(false)
  useEffect(() => {
    console.log(window.location.href.indexOf("orders"))
    if (window.location.href.indexOf("orders") === -1) {
      console.log('here')
      window.location.reload();
    }
  });



  const getButtonId = async (e) => {
    setSelectedOrder(newA[e.target.dataset.idx])
    setLoadSearch(true)



  }

  const closeModal = () => {
    setLoadSearch(false)
    setSelectedOrder(null)
  }

  const { user } = useAuth();
  const { id } = user as User;
  let orderOutput: String;
  const { loading, error, data } = useQuery(GET_ORDERS, {
    variables: { input: parseInt(atob(id).split(':')[1]) },
  });

  if (loading) return (
    <div className='sub-list order-page'>
      <h2>Orders</h2>
           <div class='sub-subheader'>View and manage your orders</div>
            <div class='subloading'>Loading orders...</div>

    </div>
  );

  let newA = []
for (let i=0; i < data.orders.edges.length; i++) {
 newA.push(data.orders.edges[i])
}


  return (
    <div className='sub-list'>

<div className={`search-btn-container search-${loadSearch}`}>
              {true == loadSearch
                ? (
                 <div className='search-outer-cont'>
                   <div className="search-bar-title">
                      <div className="search-bar-text">Order</div>
                      <div onClick={closeModal} className='search-bar-close'>X</div>
                   </div>
                   
                      <div class='subscription-section-modal'> 
                      {selectedOrder === null ? (
                          <div class='loading-bought'></div>
                      ): (
                        <>
                        <div class='subscription-modal-head'>Order #{selectedOrder.node.databaseId}</div>
                        <div class='cart-all-items'>
                        {selectedOrder.node.lineItems.nodes.map((el, index) =>
                        <>
                        <div class="cart-cont"><img class="cart-img" height="82" width="82" src={el.product.image.sourceUrl}/><div class="name-total-cart-cont"><div class="cart-name">{el.product.name}</div><div class="cart-item-total">${parseFloat(el.subtotal).toLocaleString('en-us', {minimumFractionDigits: 2})}</div></div></div>
                        </>
                        )}
                        </div>
                        {selectedOrder.node.hasShippingAddress === false ? (
                          <></>
                        ): (
                          <>
                          <div class='subscription-modal-head'>Shipping Info:</div>
                          <div class='show-shipping'>
                          <div class='show-shipping-item'>{selectedOrder.node.shipping.firstName}</div>
                          <div class='show-shipping-item'>{selectedOrder.node.shipping.address1}</div>
                          <div class='show-shipping-item'>{selectedOrder.node.shipping.address2}</div>
                          <div class='show-shipping-cont'>
                          <div class='show-shipping-item'>{selectedOrder.node.shipping.city}</div>
                          <div class='show-shipping-item'>{selectedOrder.node.shipping.state}</div>
                          <div class='show-shipping-item'>{selectedOrder.node.shipping.postcode}</div>
                          </div>
                          </div>
                          </>
                        )}
                        </>
                      )}

                  </div>
                   </div>
                  )
                : ""}
    </div>

      <h2>Orders</h2>
       <div class='sub-subheader'>View and manage your orders</div>
       <div class='subscription-list'>


  {newA && newA.map((el, index) => 
  <>
              <div data-idx={index} onClick={getButtonId} className={'sub-item'}>
                    <div class='planactive-subname'>
                     <div className={`planactive plan-true`}>{el.node.status}</div>
                     <div className='sub-name'>Order #{el.node.databaseId}</div>
                    </div>
                    <div className="next-payment-date">{new Date(el.node.date).toLocaleDateString("en-US", { year: 'numeric', month: 'long', day: 'numeric' })}</div>
                    <div className='plancost'>{el.node.total}</div>
                    <div data-idx={index} className='more-sub-dets'>More Details</div>
                  </div>
  </>
  )}

</div>

</div>
);
}
