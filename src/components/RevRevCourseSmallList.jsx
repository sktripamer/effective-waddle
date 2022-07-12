import * as React from "react";
import { useState, useEffect } from "react";
import Layout from "../components/Layout";



export default function RevRevCourseSmallList(props) {

    const [addedToCarts, setAddedToCarts] = useState([])
    useEffect(() => {
        let tempCart = function() {
            try {
            return JSON.parse(localStorage.cart)
            } catch {return []}      
        }
        let addedToCart = []
        tempCart().forEach((cartitem, index) => {
            props.courseData.forEach((propitem, index2) => {
                if (cartitem.ID === propitem.cart) {
                    addedToCart.push(index2)
                }
            })

        })
        console.log(addedToCart)
        setAddedToCarts(addedToCart);

    }, []);

    const buyNow = (cart) => {
        props.changeCart(cart)
        props.preReveal
    }
    const SimpleCart = (e) => {
        let dbID;
         let varName;
         let varImage;
         let varPrice;
         let virt;
            dbID = parseInt(e.target.dataset.cartid)
            varName =  e.target.dataset.name
            varImage =  e.target.dataset.img
            varPrice = parseInt(e.target.dataset.price);
            virt = true
        let tempCart = function() {
         try {
         return JSON.parse(localStorage.cart)
         } catch {return []}      
     }
     
       let cartObj = {
         ID: dbID,
         name: varName,
         url: varImage,
         quantity: 1,
         price: varPrice,
         total: varPrice,
         v: virt
        }
        console.log(cartObj)
        let cartModifier = tempCart();
        let cartItemFound = false;
     
     
        //search through the localstorage cart array to find if this item youre adding already exists in it. if it does, modify it's quantity.
        tempCart().forEach((cartitem, index) => {
         if (cartitem.ID === cartObj.ID) {
            if (cartObj.quantity === 0) {
             cartModifier.splice(index, 1)
             cartItemFound = true;
             setAddedToCart(false)
            } else {
             cartModifier[index].quantity = cartObj.quantity
             cartModifier[index].total = cartObj.total
             cartItemFound = true;
            }
     
     
         }
      
        });
     
     
        //if no duplicate cart item is found to already exist in localstorage cart array, simply add it to the array.
        if (cartItemFound === false && cartObj.quantity !== 0) {
            cartModifier.push(cartObj)
            const newCart = parseInt(e.target.dataset.idx)
              
              const updatedCartsArray = [...addedToCarts, newCart];
                console.log(updatedCartsArray)
              setAddedToCarts(updatedCartsArray);
        }
       const setLocal = function(key, value) {
            
         localStorage.setItem(key, value);
         const event = new Event('itemInserted');
       
         document.dispatchEvent(event);
      
       };
       setLocal('cart', JSON.stringify(cartModifier))
     
     }
    

    return (
        <>
            <div class='course-display-cont'>
            {props.courseData.map((el, index) =>
            <>
               {el.cat === "RevRev Course" ? (<>
                <div class='courseboxfullcont-cont'>
                {el.tag === 'new' ? <div class='selltag-new'></div> : ''}
                <div class={`courseboxbuy-cont ind-${index}`}>
                   
                    <div class={addedToCarts.includes(index) === true ? "courseboxall-cont filled" : 'courseboxall-cont' }>
                        <div class='coursebox-top'>
                            <div class='coursebox-image-cont'>
                                <div style={Object.assign({'background-image': `url(${el.image})` })} class='courseboximg'></div>
                            </div>
                        </div>
                        <div class='coursebox-bot'>
                            <div className='course-infobuy'>{el.title}</div>
                            
                            {addedToCarts.includes(index) === true ? (
                                <div className='course-addedtocart'>View Cart</div>
                            ): (
                                <div className='course-infopopup'>Get Access</div>
                            )}
                          
                           
                        </div>
                    </div>
                    <div class='course-popup'>
                                <div class='top-partpop'>
                                    <div class='popup-description'>{el.description}</div>
                                    <div class='popup-price'>${el.price}</div>
                                </div>
                                <div class='popup-buttons'>
                                    <button onClick={SimpleCart} data-idx={index} data-img={el.image} data-cartid={el.cart} data-price={el.price} data-name={el.title} class='popup-quickadd'>Quick Add</button>
                                    <button onClick={buyNow(el.cart)} class='popup-buynow'>Buy Me!</button>
                                </div>
                            </div>
                </div>
                </div>
               
               </>)
               
               :(<></>)}
            </>
            )}
        
        </div>
        </>
    )

}

