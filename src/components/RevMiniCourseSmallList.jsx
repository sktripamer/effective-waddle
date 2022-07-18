import * as React from "react";
import { useState, useEffect } from "react";
import Layout from "../components/Layout";
import CourseOverview from '../components/CourseOverview';


export default function RevMiniCourseSmallList({preReveal, prePreReveal, changeCart, courseData, changeCartVis, changeDetails}) {

    const [addedToCarts, setAddedToCarts] = useState([])
    useEffect(() => {
        document.addEventListener("itemInserted", localStorageSetHandler, false);
        let tempCart = function() {
            try {
            return JSON.parse(localStorage.cart)
            } catch {return []}      
        }
        let addedToCart = []
        tempCart().forEach((cartitem, index) => {
                    addedToCart.push(cartitem.ID)

        })
        console.log(addedToCart)
        setAddedToCarts(addedToCart);

    }, []);

    const localStorageSetHandler = () => {
        let tempCart = function() {
            try {
            return JSON.parse(localStorage.cart)
            } catch {return []}      
        }
        let addedToCart = []
        tempCart().forEach((cartitem, index) => {
                    addedToCart.push(cartitem.ID)

        })
        console.log(addedToCart)
        setAddedToCarts(addedToCart);
    }

    const buyNow = (cart) => {
        console.log('herea')
       changeCart([cart])
        preReveal()
    }

    const viewMore = (details) => {
        console.log('herea')
       changeDetails(details)
        prePreReveal()
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
            const newCart = parseInt(e.target.dataset.cartid)
              
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
    console.log(courseData)

    return (
        <>

        {courseData?.owned?.length > 0 ? (
          <CourseOverview sectionImg={'revminicourseimg'} sectionTitle={'All My Mini Courses'} sectionDescription={'Continue where you left off on your unlocked Mini Courses'} cat='Mini Course' courseData={courseData.owned} />
         ) :
          ( null)}


        {courseData?.available?.map((el, index) =>
            <>
            
               {el.cat === "Mini Course" ? (<>
                {parseInt(el.featured) === highestVal ? (
                    <>
                    <div className='course-subhead'>{el.sub}</div>
                    <div className='course-infobuy singledisplay'>{el.title}</div>
                    <div class='course-singledisplay-cont revmini'>
                        <div class='course-singledisplay-left'>
                        <div class='coursebox-imagesqaure-cont'>
                                    <div style={Object.assign({'background-image': `url(${el.square})` })} class='courseboximgsquare'></div>
                                </div>
                            
                        </div>
                        <div class='course-singledisplay-right'>

                            
                        <div dangerouslySetInnerHTML={sanitizedData(el.long)} className='course-infocontent'></div>
                            {addedToCarts.includes(index) === true ? (
                                    <div onClick={() => changeCartVis(true)} className='course-addedtocart'>View Cart</div>
                                ): (
                                    <div class='popup-buttons'>
                                    <button onClick={SimpleCart} data-idx={index} data-img={el.image} data-cartid={el.cart} data-price={el.price} data-name={el.title} class='popup-quickadd'>Quick Add</button>
                                    <button onClick={() => buyNow({i: el.cart, q: 1, p: el.price, t: el.price})} class='popup-buynow'>Buy Me!</button>
                        </div>
                                )}

                            
                        </div>
                          
                           
                    </div>
                    </>
                ) :(
                  <></>
                )}
               </>)
               
               :(<></>)}
                  
            </>
            
            )}



            <div class='smallcourse-head'>Locked Mini Courses</div>
            <div class='course-display-cont'>
            {courseData?.available?.map((el, index) =>
            <>
               {el.cat === "Mini Course" ? (<>
                <div class='courseboxfullcont-cont'>
                {el.tag === 'new' ? <div class='selltag-new'></div> : ''}
                <div class={`courseboxbuy-cont ind-${index}`}>
                   
                    <div class={addedToCarts.includes(el.cart) === true ? "courseboxall-cont filled" : 'courseboxall-cont' }>
                        <div class='coursebox-top'>
                            <div class='coursebox-image-cont'>
                                <div style={Object.assign({'background-image': `url(${el.image})` })} class='courseboximg'></div>
                            </div>
                        </div>
                        <div class='coursebox-bot'>
                            <div className='course-infobuy'>{el.title}</div>
                            
                            {addedToCarts.includes(el.cart) === true ? (
                                <div onClick={() => changeCartVis(true)} className='course-addedtocart'>View Cart</div>
                            ): (
                                <div className='course-infopopup'>Get Access</div>
                            )}
                          
                           
                        </div>
                    </div>
                    <div class='course-popup'>
                                <div class='top-partpop'>
                                    <div class='popup-description'>{el.description}</div>
                                    <button onClick={() => viewMore({sub: el.sub, img: el.square, desc: el.long, price:el.price, title: el.title, cart: {i: el.cart, q: 1, p: el.price, t: el.price}})} class='learn-more-btn'>Learn More</button>
                                    <div class='popup-price'>${el.price}</div>
                                </div>
                                <div class='popup-buttons'>
                                    <button onClick={SimpleCart} data-idx={index} data-img={el.image} data-cartid={el.cart} data-price={el.price} data-name={el.title} class='popup-quickadd'>Quick Add</button>
                                    <button onClick={() => buyNow({i: el.cart, q: 1, p: el.price, t: el.price})} class='popup-buynow'>Buy Me!</button>
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

