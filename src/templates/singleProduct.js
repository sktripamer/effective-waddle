import React from 'react';
import { useQuery, gql } from "@apollo/client";
import { useState , useEffect } from "react";
import DOMPurify from 'dompurify';
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import ImageGallery from 'react-image-gallery';
import AuthContent from "../components/AuthContent";
import WriteReview from "../components/WriteReview";
const singleProduct = ( props ) => {
    const [varSelect, varSelector] = useState();

    const [clickedItem, setClickedItem] = useState(0);
    const [count, setCount] = useState(1);
    const [isClicked, setClicked] = useState(false)
    const [addedToCart, setAddedToCart] = useState(false)
    const { pageContext: { id, slug, name, description, cat, type } } = props;
    const [hasBought, setBought] = useState(false)
    const [reviewID, setReviewID] = useState('0')

    const [previousRating, setPreviousRating] = useState('')
    const [previousContent, setPreviousContent] = useState('')

    const sanitizedData = (sendData) => ({
      __html: DOMPurify.sanitize(sendData)
    })
    const email = function() {
        try {
          return JSON.parse(localStorage.auth).authToken;
        } catch {
          return null;
        }
      }
    useEffect(() => {
        
        if (typeof data !== 'undefined' && data !== null) {
            console.log(data.product.variations.nodes[clickedItem].databaseId)
        } 
      }, [clickedItem]);

      useEffect(() => {
        async function fetchMyAPI() {
          try {
            if (email() === null) {
              console.log('nothing')
              return;
            }
           let sendBody = {
                token: email(),
                product: id,
            }

            const request = await fetch('/api/has-bought', {
              method: 'POST',
              body: JSON.stringify(sendBody),
            });
            const intent = (await request.json());
            console.log(intent)
            if (intent.customerID.success === 1) {
                setBought(true)
            }
            if (intent.customerID.success === 1 && typeof intent.customerID.message === 'object') {
                setReviewID(btoa('comment:' + intent.customerID.message.ID))
                setPreviousRating(intent.customerID.message.rating)
                setPreviousContent(intent.customerID.message.content)
            }
          } catch (error) {
            console.log('Failed to get cID');
            console.log(error);
            return null;
          }
        
        }
        fetchMyAPI()
      }, []);

let query;

if (type === "SIMPLE") {
    query = gql`
    query SingleProductQuery($id: ID!) {
        product(id: $id, idType: DATABASE_ID) {
            ... on SimpleProduct {
                name
                databaseId
                price
                description
                shortDescription
                galleryImages {
                  nodes {
                    sourceUrl
                  }
                }
                featuredImage {
                  node {
                    sourceUrl
                  }
                }
                reviews {
                    edges {
                      node {
                        approved
                        author {
                          node {
                            ... on User {
                              firstName
                            }
                          }
                        }
                        dateGmt
                        content
                      }
                      rating
                    }
                    averageRating
                  }
                  reviewCount
              }
          }
    }
    `
} else {
    query = gql`
    query SingleProductQuery($id: ID!) {
        product(id: $id, idType: DATABASE_ID) {
            ... on VariableProduct {
                variations {
                  nodes {
                    databaseId
                    attributes {
                      nodes {
                        value
                      }
                    }
                    name
                    featuredImage {
                      node {
                        sourceUrl
                      }
                    }
                  }
                }
                attributes {
                  nodes {
                    name
                    options
                  }
                }
                price
                name
                description
                shortDescription
                galleryImages {
                  nodes {
                    sourceUrl
                  }
                }
                reviews {
                    edges {
                      node {
                        approved
                        author {
                          node {
                            ... on User {
                              firstName
                            }
                          }
                        }
                        dateGmt
                        content
                      }
                      rating
                    }
                    averageRating
                  }
                  reviewCount
              }
          }
    }
    `
}

const SimpleCart = (e) => {
    let dbID;
     let varName;
     let varImage;
     let varPrice;
        dbID =  data.product.databaseId
        varName =  data.product.name
        varImage =  data.product.featuredImage.node.sourceUrl
        varPrice = Number(data.product.price.replace(/[^0-9.-]+/g,""));
 
    let tempCart = function() {
     try {
     return JSON.parse(localStorage.cart)
     } catch {return []}      
 }
 
   let cartObj = {
     ID: dbID,
     name: varName,
     url: varImage,
     quantity: count,
     price: varPrice,
     total: count * varPrice
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
        setAddedToCart(true)
    }
   const setLocal = function(key, value) {
        
     localStorage.setItem(key, value);
     const event = new Event('itemInserted');
   
     document.dispatchEvent(event);
  
   };
   setLocal('cart', JSON.stringify(cartModifier))
 
 }

const VariationCart = (e) => {
   let dbID;
    let varName;
    let varImage;
    let varPrice;
       dbID =  data.product.variations.nodes[clickedItem].databaseId
       varName =  data.product.variations.nodes[clickedItem].name
       varImage =  data.product.variations.nodes[clickedItem].featuredImage.node.sourceUrl
       varPrice = Number(data.product.price.replace(/[^0-9.-]+/g,""));

   let tempCart = function() {
    try {
    return JSON.parse(localStorage.cart)
    } catch {return []}      
}

  let cartObj = {
    ID: dbID,
    name: varName,
    url: varImage,
    quantity: count,
    price: varPrice,
    total: count * varPrice
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
       setAddedToCart(true)
   }
  const setLocal = function(key, value) {
       
    localStorage.setItem(key, value);
    const event = new Event('itemInserted');
  
    document.dispatchEvent(event);
 
  };
  setLocal('cart', JSON.stringify(cartModifier))

}



const variationClick = (e) => {
    console.log(e.target.dataset.id)
    setClicked(true)
    //find variation and set it
    setClickedItem(parseInt(e.target.dataset.idindex));
    varSelector(data.product.variations.nodes[e.target.dataset.idindex].databaseId)

    let tempCart = function() {
        try {
        return JSON.parse(localStorage.cart)
        } catch {return []}      
    }
    
       let cartModifier = tempCart();
        let alreadyInCart = false;
    
       //search through the localstorage cart array to find if this item youre adding already exists in it. if it does, modify it's quantity.
       tempCart().forEach((cartitem, index) => {
        if (cartitem.ID === data.product.variations.nodes[e.target.dataset.idindex].databaseId) {
           setCount(cartModifier[index].quantity)
           alreadyInCart = true;
            
        }
        
       });

       if (alreadyInCart === true) {
           setAddedToCart(true)
       } else {
           setAddedToCart(false)
           setCount(1)
       }

  }

      const { loading, error, data } = useQuery(query, {
        variables: { id: id },
      });

      if (loading) return <p>Loading ...</p>;
    if (isClicked === false && addedToCart === false) {

        let tempCart = function() {
            try {
            return JSON.parse(localStorage.cart)
            } catch {return []}      
        }
        
           let cartModifier = tempCart();
        
        
           //search through the localstorage cart array to find if this item youre adding already exists in it. if it does, modify it's quantity.
           tempCart().forEach((cartitem, index) => {
            if (type === "SIMPLE") {
                if (cartitem.ID === data.product.databaseId) {
                    setCount(cartModifier[index].quantity)
                    setAddedToCart(true)
                 }
            } else {
                if (cartitem.ID === data.product.variations.nodes[0].databaseId) {
                    setCount(cartModifier[index].quantity)
                    setAddedToCart(true)
                 }
            }

         
           });
    } 
    let images = [];
      data.product.galleryImages.nodes.forEach((galleryImage) => {
        images.push({"original": galleryImage.sourceUrl})
      })


let incrementCount = () => {
    setCount(count + 1);
  };

  let decrementCount = () => {
      if (count >= 1) {
        setCount(count - 1);
      }

  };
  const [tab, setTab] = useState(0)
  const changeTab = (num) => {
      setTab(num)
  }
const renderDescripton = () => {
    return (
        <div>{data.product.description}</div>
    )
}
const renderAddtional = () => {
    return (
        <div>{data.product.shortDescription}</div>
    )
}
const renderWriteReview = () => {
    
    return (
    <>
    {hasBought === true
      ? (
      <AuthContent>
        <WriteReview commentOn={id} previous={previousRating} updateComment={reviewID} previousContent={previousContent} />
      </AuthContent>
      ) 
      :
      ''
    }
    {data.product.reviews.edges.length !== 0
     ? (
         <div class='all-review-container'>
         {renderReviews()}
         </div>
     ) : 
     (
         <p class='no-reviews'>
             Be the first to review! After you purchase this product, you'll be able to review.
        </p>
     )

     }
    </>
    )
}
const renderReviews = () => {
    const reviewEdges = data.product.reviews.edges;
    return (
        <>
        
    {reviewEdges && reviewEdges.map((el) =>
    <>
    {console.log(el)}
    {el.node.approved === true 
        ? (
        <div className='review-cont'>
        <div class='review-header-cont'>
            <div class='review-profile'></div>
            <div class='review-name-date'>
                <div class='review-name'>{el.node.author.node.firstName}</div>
                <div class='review-date'>{el.node.dateGmt}</div>
                <div class={`review-rating rating-${parseInt(el.rating) * 10}`}>{el.rating}</div>
            </div>
        </div>
        <div dangerouslySetInnerHTML={sanitizedData(el.node.content)} class='review-content'></div>
    </div>
    ) :
    (
    ''
    )}
   
   </>
   )}
    </>
    )
}

const renderDelivery = () => {
    return (
        <div className='delivery-section'>
            <h5>Delivery Time</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <h5>Delivery Cost</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <h5>Return Contact Information</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
    )
}
  const changeCount = (e) => {
      setCount(parseInt(e.target.value.replace(/\D/,'')))
  }

    return (
        <Layout htmlClassName={"scroll"}>
        <Navbar />
        <div>
            
        {type === "SIMPLE"
        ? (
            
          
            <div>
            aa
          <div>{data.product.name}</div>
          <div>{data.product.price}</div>
          <div class='gallery-cont'>
          <ImageGallery items={images} showPlayButton={false} showBullets={true} autoPlay={true} showFullscreenButton={false} />
          </div>
          <div>
        <div class="count">
      
     <input type="tel" value={count} onChange={changeCount}/>
          <h3>Count:</h3>
          <h1>{count}</h1>
        </div>
        <div class="buttons">
          <button onClick={decrementCount}>-</button>
          <button onClick={incrementCount}>+</button>
        </div>
      </div>
      
      <button onClick={SimpleCart}>{addedToCart === false ? 'Add to cart' : 'Change item'}</button>
        </div>
        
          )
        : 
        
        <div class="product-container">
          <div class='gallery-cont'>
          <ImageGallery items={images} showPlayButton={false} showBullets={true} autoPlay={true} showFullscreenButton={false} />
          </div>
      <h2>{data.product.name}</h2>
      {data.product.reviewCount === 0
      ? (
        <div class='review-total-cont'>
            <div class='review-total-empty'></div>
            <div class='review-total-text'>No reviews yet!</div>
        </div>
      ) :
      <div class='review-total-cont'>
      <div class={`review-total review-${data.product.reviews.averageRating * 10}`}>{data.product.reviews.averageRating}</div>
      <div class='review-total-text'>{data.product.reviewCount} reviews</div>
  </div>
      }      
      <div>{data.product.attributes.nodes[0].name}</div>
      {data.product.attributes.nodes[0].options && data.product.attributes.nodes[0].options.map((el, index) =><div className={index === clickedItem ? "is-checked" : ""} onClick={variationClick} data-idindex={index} data-id={el}>{el}</div>)}
      <div>
        <div class="count">
      
     <input type="tel" value={count} onChange={changeCount}/>
          <h3>Count:</h3>
          <h1>{count}</h1>
        </div>
        <div class="buttons">
          <button onClick={decrementCount}>-</button>
          <button onClick={incrementCount}>+</button>
        </div>
      </div>
      
      <button onClick={VariationCart}>{addedToCart === false ? 'Add to cart' : 'Change item'}</button>
      
    <div className='product-data-tabs'>
        <div className='product-tabs-cont'>
         <div onClick={(e) => changeTab(0)} className='product-tabs-desc'>Description</div>
         <div onClick={(e) => changeTab(1)} className='product-tabs-advanced'>Additional Information</div>
         <div onClick={(e) => changeTab(2)} className='product-tabs-reviews'>Reviews ({data.product.reviewCount})</div>
         <div onClick={(e) => changeTab(3)} className='product-tabs-delivery'>Delivery and Returns</div>
        </div>
        <div className='render-tab'>
            <>
        {tab === 0 ?
        (
            <>
            {renderDescripton()}
            </>
        ) : 
        (
            ''
        )
      }
      {/* {tab === 1 ?
        (
            <>
            {renderAddtional()}
            </>
        ) : 
        (
            ''
        )
      }
      {tab === 2 ?
        (
            <>
            {renderWriteReview()}
            </>
        ) : 
        (
            ''
        )
      }
      {tab === 3 ?
        (
            <>
            {renderDelivery()}
            </>
        ) : 
        (
            ''
        )
      } */}
            </>
        </div>
    </div>

    </div>
        
        }
    
    </div>
    </Layout>
    );
}

export default singleProduct;

