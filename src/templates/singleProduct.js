import React from 'react';
import { useQuery, gql } from "@apollo/client";
import { useState , useEffect } from "react";
import DOMPurify from 'dompurify';
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ImageGallery from 'react-image-gallery';
import AuthContent from "../components/AuthContent";
import WriteReview from "../components/WriteReview";
import {Link, navigate } from "gatsby";
const singleProduct = ( props ) => {
    const [varSelect, varSelector] = useState();
    const [tab, setTab] = useState(0)
    const [clickedItem, setClickedItem] = useState(0);
    const [clickedItem2, setClickedItem2] = useState(0);
    const [count, setCount] = useState(1);
    const [isClicked, setClicked] = useState(false)
    const [addedToCart, setAddedToCart] = useState(false)
    const { pageContext: { id, slug, name, description, cat, type, image } } = props;
    const [hasBought, setBought] = useState(false)
    const [loadingBought, setLoadingBought] = useState(true)
    const [reviewID, setReviewID] = useState('0')
    const [variationPrice, setVariationPrice] = useState('0')
    const [variationNoStock, setVariationNoStock] = useState(false)
    const [previousRating, setPreviousRating] = useState('')
    const [previousContent, setPreviousContent] = useState('')
    const [openCart, setOpenCart] = useState(false)
    let [relatedFull, setRelatedFull] = useState([])
    const sanitizedData = (sendData) => ({
      __html: DOMPurify.sanitize(sendData)
    })


    const changePage = (e) => {

      navigate(`/shop/${e.target.dataset.idlink}`)
  }


    const email = function() {
        try {
          return JSON.parse(localStorage.auth).authToken;
        } catch {
          return null;
        }
      }
    useEffect(() => {
        
        if (typeof data !== 'undefined' && data !== null) {
           // console.log(data.product.variations.nodes[clickedItem].databaseId)
        } 
      }, [clickedItem]);

      useEffect(() => {
        async function fetchMyAPI() {
          try {
            if (email() === null) {
              console.log('nothing')
              setLoadingBought(false)
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
                setLoadingBought(false)
            }
            if (intent.customerID.success === 1 && typeof intent.customerID.message === 'object') {
                setReviewID(btoa('comment:' + intent.customerID.message.ID))
                setPreviousRating(intent.customerID.message.rating)
                setPreviousContent(intent.customerID.message.content)
            }
            setLoadingBought(false)
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
                productCategories {
                  nodes {
                    slug
                  }
                }
                related {
                  edges {
                    node {
                      name
                      ... on SimpleProduct {
                        name
                        productCategories {
                          nodes {
                            name
                          }
                        }
                        featuredImage {
                          node {
                            sourceUrl
                          }
                        }
                        price
                      }
                      ... on VariableProduct {
                        name
                        productCategories {
                          nodes {
                            name
                          }
                        }
                        featuredImage {
                          node {
                            sourceUrl
                          }
                        }
                        price
                      }
                    }
                  }
                }
                databaseId
                stockStatus
                price
                virtual
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
          variations(first: 100) {
            nodes {
              databaseId
              virtual
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
              stockStatus
              price
            }
          }
          attributes {
            nodes {
              name
              options
            }
          }
          price
          productCategories {
            nodes {
              slug
            }
          }
          related {
            edges {
              node {
                name
                ... on SimpleProduct {
                  name
                  featuredImage {
                    node {
                      sourceUrl
                    }
                  }
                  price
                  productCategories {
                    nodes {
                      name
                    }
                  }
                }
                ... on VariableProduct {
                  name
                  featuredImage {
                    node {
                      sourceUrl
                    }
                  }
                  price
                  productCategories {
                    nodes {
                      name
                    }
                  }
                }
              }
            }
          }
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

const goToShop = () => {
  navigate('/shop')
}
const goToHome = () => {
  navigate('/')
}

const goToCat = (e) => {
  navigate('/shop/' + e.target.dataset.idindex)
}

function slugify(text) {
  return text
    .toString()                           // Cast to string (optional)
    .normalize('NFKD')            // The normalize() using NFKD method returns the Unicode Normalization Form of a given string.
    .toLowerCase()                  // Convert the string to lowercase letters
    .trim()    
      .replace('×', 'x')
      .replace(/\./g, '-')
    .replace(/\//ig, '-') 
    .replace(/\s+/g, '-')            // Replace spaces with -
    .replace(/[^\w\-]+/g, '')     // Remove all non-word chars
    .replace(/\-\-+/g, '-');        // Replace multiple - with single -
}

const SimpleCart = (e) => {
    let dbID;
     let varName;
     let varImage;
     let varPrice;
     let virt;
        dbID =  data.product.databaseId
        varName =  data.product.name
        varImage =  data.product.featuredImage.node.sourceUrl
        varPrice = Number(data.product.price.replace(/[^0-9.-]+/g,""));
        virt = data.product.virtual
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
     total: count * varPrice,
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
    let selectedItem;
    let virt;
    let attr1 = data.product.attributes.nodes[0].options[clickedItem]

   if (data.product.attributes.nodes[1] === undefined) {
    data.product.variations.nodes.forEach(el => {
      if (slugify(el.attributes.nodes[0].value) === attr1) {
                   selectedItem = el;
      }
    })
   } else {
    let attr2 = data.product.attributes.nodes[1].options[clickedItem2]
    data.product.variations.nodes.forEach(el => {
      if (slugify(el.attributes.nodes[0].value) === attr1) {
           if (slugify(el.attributes.nodes[1].value) === attr2) {
                   selectedItem = el;
           }
      }
    })
   }
  

       virt = selectedItem.virtual
       dbID = selectedItem.databaseId
       varName =  selectedItem.name
       varImage =  selectedItem.featuredImage.node.sourceUrl
       varPrice = Number(selectedItem.price.replace(/[^0-9.-]+/g,""));

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
    total: count * varPrice,
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

    let attr1 = data.product.attributes.nodes[0].options[parseInt(e.target.dataset.idindex)]
    let selectedItem;
    if (data.product.attributes.nodes[1] === undefined) {
      data.product.variations.nodes.forEach(el => {
        if (slugify(el.attributes.nodes[0].value) === attr1) {

                     selectedItem = el.databaseId
                     setVariationPrice(el.price);
                           if (el.stockStatus === "IN_STOCK") {
                            setVariationNoStock(false)
                           } else {
                            setVariationNoStock(true)
                           }
             
        }
      })

    } else {
      let attr2 = data.product.attributes.nodes[1].options[clickedItem2]
      data.product.variations.nodes.forEach(el => {
        if (slugify(el.attributes.nodes[0].value) === attr1) {
             if (slugify(el.attributes.nodes[1].value) === attr2) {
                     selectedItem = el.databaseId
                     setVariationPrice(el.price);
                           if (el.stockStatus === "IN_STOCK") {
                            setVariationNoStock(false)
                           } else {
                            setVariationNoStock(true)
                           }
             }
        }
      })
    }

   





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
        if (cartitem.ID === selectedItem) {
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

  const variationClick2 = (e) => {
    console.log(e.target.dataset.id)
    setClicked(true)
    //find variation and set it
    setClickedItem2(parseInt(e.target.dataset.idindex));


    let attr1 = data.product.attributes.nodes[0].options[clickedItem]
    let selectedItem;

    if (data.product.attributes.nodes[1] === undefined) {
      data.product.variations.nodes.forEach(el => {
        if (slugify(el.attributes.nodes[0].value) === attr1) {
                     selectedItem = el.databaseId
                     setVariationPrice(el.price);
                           if (el.stockStatus === "IN_STOCK") {
                            setVariationNoStock(false)
                           } else {
                            setVariationNoStock(true)
                           }
             
        }
      })

    } else {
      let attr2 = data.product.attributes.nodes[1].options[parseInt(e.target.dataset.idindex)]
      data.product.variations.nodes.forEach(el => {
        if (slugify(el.attributes.nodes[0].value) === attr1) {
             if (slugify(el.attributes.nodes[1].value) === attr2) {
                     selectedItem = el.databaseId
                     setVariationPrice(el.price);
                           if (el.stockStatus === "IN_STOCK") {
                            setVariationNoStock(false)
                           } else {
                            setVariationNoStock(true)
                           }
             }
        }
      })
    }
   
    



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
        if (cartitem.ID === selectedItem) {
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

      useEffect(() => {
        
        if (typeof data !== 'undefined' && data !== null) {
          let relatedData = [];
          console.log(data)
          data.product.related.edges.forEach((el, index) => {
            if (el.node.productCategories.nodes[0].name !== 'Uncategorized') {
                relatedData.push(el)
            }
        })
        setRelatedFull(relatedData);

      if (type !== "SIMPLE"){
        let attr1 = data.product.attributes.nodes[0].options[clickedItem]
        if (data.product.attributes.nodes[1] === undefined) {
        data.product.variations.nodes.forEach(el => {
          if (slugify(el.attributes.nodes[0].value) === attr1) {
                       setVariationPrice(el.price);
                       if (el.stockStatus === "IN_STOCK") {
                        setVariationNoStock(false)
                       } else {
                        setVariationNoStock(true)
                       }
               
          }
    })
        } else {
          let attr2 = data.product.attributes.nodes[1].options[clickedItem2]
          let selectedItem;
      
          data.product.variations.nodes.forEach(el => {
            if (slugify(el.attributes.nodes[0].value) === attr1) {
                 if (slugify(el.attributes.nodes[1].value) === attr2) {
                         setVariationPrice(el.price);
                         if (el.stockStatus === "IN_STOCK") {
                          setVariationNoStock(false)
                         } else {
                          setVariationNoStock(true)
                         }
                 }
            }
      })
        }

      } else {
        if (data.product.stockStatus === "IN_STOCK") {
          setVariationNoStock(false)
         } else {
          setVariationNoStock(true)
         }
      }
        } 
      }, [data]);
      if (loading) return (
        <Layout htmlClassName={"scroll"} seoTitle={name} seoTitleTemplate="Amazing Courses to give you a Revival of Revenue" seoDescription="Pre-order PK's book today to learn how you can start maximizing your time and earning more money!" seoImage={image}>
          <Navbar  />
        <div class="product-preload">
          
        
       
</div>
</Layout>
      );
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
        images.push({"original": galleryImage.sourceUrl, "thumbnail": galleryImage.sourceUrl})
      })


let incrementCount = () => {
    setCount(count + 1);
  };

  let decrementCount = () => {
      if (count >= 1) {
        setCount(count - 1);
      }

  };

  const changeTab = () => {
      setTab(0)
  }
  const changeTab1 = () => {
    setTab(1)
}
const changeTab2 = () => {
    setTab(2)
}
const changeTab3 = () => {
    setTab(3)
}
const renderDescripton = () => {
    console.log('render')
    return (
        <div dangerouslySetInnerHTML={sanitizedData(data.product.description)} ></div>
    )
}
const renderAddtional = () => {
    return (
      <div dangerouslySetInnerHTML={sanitizedData(data.product.shortDescription)} ></div>
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
        <Layout htmlClassName={"scroll"} seoTitle={name} seoTitleTemplate="Amazing Courses to give you a Revival of Revenue" seoDescription="Pre-order PK's book today to learn how you can start maximizing your time and earning more money!" seoImage={image}>
        <Navbar changeCart={openCart => setOpenCart(openCart)} viewCart={openCart} />
        <div>
            
        {type === "SIMPLE"
        ? (
          <div class="product-container">

                <div class='breadcrumbs-cont'>
                    <div onClick={goToHome} class='bread-item bread-home'>Home</div>
                    <div onClick={goToShop} class='bread-item'>Shop</div>
                    <div onClick={goToCat} data-idindex={data.product.productCategories.nodes[0].slug} class='bread-item'>{data.product.productCategories.nodes[0].slug}</div>
                    <div class='bread-item bread-active'>{data.product.name}</div>
                </div>

                <div class='mobile-cont'>
          <h2>{data.product.name}</h2>
      {data.product.reviewCount === 0
      ? (
        <div class='review-total-cont'>
            <div class='review-total-empty'></div>
            <div class='review-total-text'>No reviews yet!</div>
        </div>
      ) :
      <div class='review-total-cont'>
        {data.product.reviews.averageRating === 0 ?
        (
          <div className='rating-cont'>
            <div className='star-no-select'></div>
            <div className='star-no-select'></div>
            <div className='star-no-select'></div>
            <div className='star-no-select'></div>
            <div className='star-no-select'></div>
          </div>
        ) : ''

        }
              {data.product.reviews.averageRating === 1 ?
        (
          <div className='rating-cont'>
          <div className='star-select'></div>
          <div className='star-no-select'></div>
          <div className='star-no-select'></div>
          <div className='star-no-select'></div>
          <div className='star-no-select'></div>
        </div>
        ) : ''

        }
              {data.product.reviews.averageRating === 1.5 ?
        (
          <div className='rating-cont'>
          <div className='star-select'></div>
          <div className='star-half-select'></div>
          <div className='star-no-select'></div>
          <div className='star-no-select'></div>
          <div className='star-no-select'></div>
        </div>
        ) : ''

        }
              {data.product.reviews.averageRating === 2 ?
        (
          <div className='rating-cont'>
          <div className='star-select'></div>
          <div className='star-select'></div>
          <div className='star-no-select'></div>
          <div className='star-no-select'></div>
          <div className='star-no-select'></div>
        </div>
        ) : ''

        }
              {data.product.reviews.averageRating === 2.5 ?
        (
          <div className='rating-cont'>
          <div className='star-select'></div>
          <div className='star-select'></div>
          <div className='star-half-select'></div>
          <div className='star-no-select'></div>
          <div className='star-no-select'></div>
        </div>
        ) : ''

        }
              {data.product.reviews.averageRating === 3 ?
        (
          <div className='rating-cont'>
          <div className='star-select'></div>
          <div className='star-select'></div>
          <div className='star-select'></div>
          <div className='star-no-select'></div>
          <div className='star-no-select'></div>
        </div>
        ) : ''

        }
              {data.product.reviews.averageRating === 3.5 ?
        (
          <div className='rating-cont'>
          <div className='star-select'></div>
          <div className='star-select'></div>
          <div className='star-select'></div>
          <div className='star-half-select'></div>
          <div className='star-no-select'></div>
        </div>
        ) : ''

        }
              {data.product.reviews.averageRating === 4 ?
        (
          <div className='rating-cont'>
          <div className='star-select'></div>
          <div className='star-select'></div>
          <div className='star-select'></div>
          <div className='star-select'></div>
          <div className='star-no-select'></div>
        </div>
        ) : ''

        }
              {data.product.reviews.averageRating === 4.5 ?
        (
          <div className='rating-cont'>
          <div className='star-select'></div>
          <div className='star-select'></div>
          <div className='star-select'></div>
          <div className='star-select'></div>
          <div className='star-half-select'></div>
        </div>
        ) : ''

        }
              {data.product.reviews.averageRating === 5 ?
        (
          <div className='rating-cont'>
          <div className='star-select'></div>
          <div className='star-select'></div>
          <div className='star-select'></div>
          <div className='star-select'></div>
          <div className='star-select'></div>
        </div>
        ) : ''

        }
     {data.product.reviewCount === 1 ?
     (
      <div class='review-total-text'>{data.product.reviewCount} review</div>
     ) : 
     (
      <div class='review-total-text'>{data.product.reviewCount} reviews</div>
     )
       
     

     }

  </div>
      }      
 <div className='product-pricer'><h3>{data.product.price}</h3></div>
 </div>


              <div class='gallery-info-cont'>
              
          <div class='gallery-cont'>
          <ImageGallery items={images} showNav={false} showPlayButton={false} showFullscreenButton={false} />
          </div>
          <div className='product-info-cont'>
            <div class='desktop-cont'>
          <h2>{data.product.name}</h2>
      {data.product.reviewCount === 0
      ? (
        <div class='review-total-cont'>
            <div class='review-total-empty'></div>
            <div class='review-total-text'>No reviews yet!</div>
        </div>
      ) :
      <div class='review-total-cont'>
        {data.product.reviews.averageRating === 0 ?
        (
          <div className='rating-cont'>
            <div className='star-no-select'></div>
            <div className='star-no-select'></div>
            <div className='star-no-select'></div>
            <div className='star-no-select'></div>
            <div className='star-no-select'></div>
          </div>
        ) : ''

        }
              {data.product.reviews.averageRating === 1 ?
        (
          <div className='rating-cont'>
          <div className='star-select'></div>
          <div className='star-no-select'></div>
          <div className='star-no-select'></div>
          <div className='star-no-select'></div>
          <div className='star-no-select'></div>
        </div>
        ) : ''

        }
              {data.product.reviews.averageRating === 1.5 ?
        (
          <div className='rating-cont'>
          <div className='star-select'></div>
          <div className='star-half-select'></div>
          <div className='star-no-select'></div>
          <div className='star-no-select'></div>
          <div className='star-no-select'></div>
        </div>
        ) : ''

        }
              {data.product.reviews.averageRating === 2 ?
        (
          <div className='rating-cont'>
          <div className='star-select'></div>
          <div className='star-select'></div>
          <div className='star-no-select'></div>
          <div className='star-no-select'></div>
          <div className='star-no-select'></div>
        </div>
        ) : ''

        }
              {data.product.reviews.averageRating === 2.5 ?
        (
          <div className='rating-cont'>
          <div className='star-select'></div>
          <div className='star-select'></div>
          <div className='star-half-select'></div>
          <div className='star-no-select'></div>
          <div className='star-no-select'></div>
        </div>
        ) : ''

        }
              {data.product.reviews.averageRating === 3 ?
        (
          <div className='rating-cont'>
          <div className='star-select'></div>
          <div className='star-select'></div>
          <div className='star-select'></div>
          <div className='star-no-select'></div>
          <div className='star-no-select'></div>
        </div>
        ) : ''

        }
              {data.product.reviews.averageRating === 3.5 ?
        (
          <div className='rating-cont'>
          <div className='star-select'></div>
          <div className='star-select'></div>
          <div className='star-select'></div>
          <div className='star-half-select'></div>
          <div className='star-no-select'></div>
        </div>
        ) : ''

        }
              {data.product.reviews.averageRating === 4 ?
        (
          <div className='rating-cont'>
          <div className='star-select'></div>
          <div className='star-select'></div>
          <div className='star-select'></div>
          <div className='star-select'></div>
          <div className='star-no-select'></div>
        </div>
        ) : ''

        }
              {data.product.reviews.averageRating === 4.5 ?
        (
          <div className='rating-cont'>
          <div className='star-select'></div>
          <div className='star-select'></div>
          <div className='star-select'></div>
          <div className='star-select'></div>
          <div className='star-half-select'></div>
        </div>
        ) : ''

        }
              {data.product.reviews.averageRating === 5 ?
        (
          <div className='rating-cont'>
          <div className='star-select'></div>
          <div className='star-select'></div>
          <div className='star-select'></div>
          <div className='star-select'></div>
          <div className='star-select'></div>
        </div>
        ) : ''

        }
     {data.product.reviewCount === 1 ?
     (
      <div class='review-total-text'>{data.product.reviewCount} review</div>
     ) : 
     (
      <div class='review-total-text'>{data.product.reviewCount} reviews</div>
     )
       
     

     }

  </div>
      }      
 <div className='product-pricer'><h3>{data.product.price}</h3></div>
 </div>
<div dangerouslySetInnerHTML={sanitizedData(data.product.description)} className='product-short-desc'></div>
{addedToCart === true ? (
         <div class='added-cart-cont'> <div class='added-to-cart-text'>Product added to cart!</div><button onClick={() => setOpenCart(true)} class='viewcart'>View Cart</button></div>
        ): (
        <></>
        )}
<div className='buttons-addtocart'>
          {data.product.productCategories.nodes[0].slug === 'courses' ?
          (
            <></>
          )
          :
          (
            <div class="buttons">
            <button onClick={decrementCount}>-</button>
            <input type="tel" value={count} onChange={changeCount}/>
            <button onClick={incrementCount}>+</button>
          </div>
          )}


        {variationNoStock===true ? 
        (
        <div class='no-stock-text'>This product is out of stock! Try selecting a different one.</div>
        ):''}
        
        {data.product.productCategories.nodes[0].slug === 'courses' && hasBought === true ?
              (<>
        {data.product.databaseId === 1735 ? (
              <div class='acc-page-link'>This subscription is already active. Manage it at your <Link to="/dashboard" className="account-page-link">
              Account page.
            </Link></div>
        ):(
            <div class='acc-page-link'>You've already purchased this course. See your courses at your <Link to="/dashboard" className="account-page-link">
            Account page.
          </Link></div>
        )}
              </>):
              (<>
        {data.product.productCategories.nodes[0].slug === 'courses' ? (
          <>
          {loadingBought === false ? (
            <>
            <button disabled={addedToCart} className={`addcart-btn added-${addedToCart}`} onClick={SimpleCart}>{addedToCart === false ? 'Add to cart' : 'Added to cart'}</button>
            </>
          ): (
            <>
            <div class='loading-bought'></div>
            </>
          )}
          
          </>
          ): (
        <button disabled={variationNoStock} className={`addcart-btn added-${addedToCart}`} onClick={SimpleCart}>{addedToCart === false ? 'Add to cart' : 'Change item'}</button>
     
        )}   
              </>)}
        
        
     
      </div>    
         



          </div>
          </div>



          <div className='product-data-tabs'>
        <div className={`product-tabs-cont idx-${tab}`}>
         <div onClick={(e) => changeTab()} className='product-tabs-desc'>Description</div>
         <div onClick={(e) => changeTab1()} className='product-tabs-advanced'>Additional Information</div>
         <div onClick={(e) => changeTab2()} className='product-tabs-reviews'>Reviews ({data.product.reviewCount})</div>
         <div onClick={(e) => changeTab3()} className='product-tabs-delivery'>Delivery and Returns</div>
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
      {tab === 1 ?
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
      }
            </>
        </div>
    </div>
        </div>
        



          )
        : 
        
        <div class="product-container">
                    <div class='breadcrumbs-cont'>
                    <div onClick={goToHome} class='bread-item bread-home'>Home</div>
                    <div onClick={goToShop} class='bread-item'>Shop</div>
                    <div onClick={goToCat} data-idindex={data.product.productCategories.nodes[0].slug} class='bread-item'>{data.product.productCategories.nodes[0].name}</div>
                    <div class='bread-item bread-active'>Shirts</div>
                </div>
                <div class='mobile-cont'>
      <h2>{data.product.name}</h2>
      {data.product.reviewCount === 0
      ? (
        <div class='review-total-cont'>
            <div class='review-total-empty'></div>
            <div class='review-total-text'>No reviews yet!</div>
        </div>
      ) :
      <div class='review-total-cont'>
        {data.product.reviews.averageRating === 0 ?
        (
          <div className='rating-cont'>
            <div className='star-no-select'></div>
            <div className='star-no-select'></div>
            <div className='star-no-select'></div>
            <div className='star-no-select'></div>
            <div className='star-no-select'></div>
          </div>
        ) : ''

        }
              {data.product.reviews.averageRating === 1 ?
        (
          <div className='rating-cont'>
          <div className='star-select'></div>
          <div className='star-no-select'></div>
          <div className='star-no-select'></div>
          <div className='star-no-select'></div>
          <div className='star-no-select'></div>
        </div>
        ) : ''

        }
              {data.product.reviews.averageRating === 1.5 ?
        (
          <div className='rating-cont'>
          <div className='star-select'></div>
          <div className='star-half-select'></div>
          <div className='star-no-select'></div>
          <div className='star-no-select'></div>
          <div className='star-no-select'></div>
        </div>
        ) : ''

        }
              {data.product.reviews.averageRating === 2 ?
        (
          <div className='rating-cont'>
          <div className='star-select'></div>
          <div className='star-select'></div>
          <div className='star-no-select'></div>
          <div className='star-no-select'></div>
          <div className='star-no-select'></div>
        </div>
        ) : ''

        }
              {data.product.reviews.averageRating === 2.5 ?
        (
          <div className='rating-cont'>
          <div className='star-select'></div>
          <div className='star-select'></div>
          <div className='star-half-select'></div>
          <div className='star-no-select'></div>
          <div className='star-no-select'></div>
        </div>
        ) : ''

        }
              {data.product.reviews.averageRating === 3 ?
        (
          <div className='rating-cont'>
          <div className='star-select'></div>
          <div className='star-select'></div>
          <div className='star-select'></div>
          <div className='star-no-select'></div>
          <div className='star-no-select'></div>
        </div>
        ) : ''

        }
              {data.product.reviews.averageRating === 3.5 ?
        (
          <div className='rating-cont'>
          <div className='star-select'></div>
          <div className='star-select'></div>
          <div className='star-select'></div>
          <div className='star-half-select'></div>
          <div className='star-no-select'></div>
        </div>
        ) : ''

        }
              {data.product.reviews.averageRating === 4 ?
        (
          <div className='rating-cont'>
          <div className='star-select'></div>
          <div className='star-select'></div>
          <div className='star-select'></div>
          <div className='star-select'></div>
          <div className='star-no-select'></div>
        </div>
        ) : ''

        }
              {data.product.reviews.averageRating === 4.5 ?
        (
          <div className='rating-cont'>
          <div className='star-select'></div>
          <div className='star-select'></div>
          <div className='star-select'></div>
          <div className='star-select'></div>
          <div className='star-half-select'></div>
        </div>
        ) : ''

        }
              {data.product.reviews.averageRating === 5 ?
        (
          <div className='rating-cont'>
          <div className='star-select'></div>
          <div className='star-select'></div>
          <div className='star-select'></div>
          <div className='star-select'></div>
          <div className='star-select'></div>
        </div>
        ) : ''

        }
     {data.product.reviewCount === 1 ?
     (
      <div class='review-total-text'>{data.product.reviewCount} review</div>
     ) : 
     (
      <div class='review-total-text'>{data.product.reviewCount} reviews</div>
     )
       
     

     }

  </div>
      }      
      <div className='product-pricer'><h3>{variationPrice}</h3></div>
      </div>
          <div class='gallery-info-cont'>
          <div class='gallery-cont'>
          <ImageGallery items={images} showNav={false} showPlayButton={false} showFullscreenButton={false} />
          </div>
          <div className='product-info-cont'>
        <div class='desktop-cont'>
      <h2>{data.product.name}</h2>
      {data.product.reviewCount === 0
      ? (
        <div class='review-total-cont'>
            <div class='review-total-empty'></div>
            <div class='review-total-text'>No reviews yet!</div>
        </div>
      ) :
      <div class='review-total-cont'>
        {data.product.reviews.averageRating === 0 ?
        (
          <div className='rating-cont'>
            <div className='star-no-select'></div>
            <div className='star-no-select'></div>
            <div className='star-no-select'></div>
            <div className='star-no-select'></div>
            <div className='star-no-select'></div>
          </div>
        ) : ''

        }
              {data.product.reviews.averageRating === 1 ?
        (
          <div className='rating-cont'>
          <div className='star-select'></div>
          <div className='star-no-select'></div>
          <div className='star-no-select'></div>
          <div className='star-no-select'></div>
          <div className='star-no-select'></div>
        </div>
        ) : ''

        }
              {data.product.reviews.averageRating === 1.5 ?
        (
          <div className='rating-cont'>
          <div className='star-select'></div>
          <div className='star-half-select'></div>
          <div className='star-no-select'></div>
          <div className='star-no-select'></div>
          <div className='star-no-select'></div>
        </div>
        ) : ''

        }
              {data.product.reviews.averageRating === 2 ?
        (
          <div className='rating-cont'>
          <div className='star-select'></div>
          <div className='star-select'></div>
          <div className='star-no-select'></div>
          <div className='star-no-select'></div>
          <div className='star-no-select'></div>
        </div>
        ) : ''

        }
              {data.product.reviews.averageRating === 2.5 ?
        (
          <div className='rating-cont'>
          <div className='star-select'></div>
          <div className='star-select'></div>
          <div className='star-half-select'></div>
          <div className='star-no-select'></div>
          <div className='star-no-select'></div>
        </div>
        ) : ''

        }
              {data.product.reviews.averageRating === 3 ?
        (
          <div className='rating-cont'>
          <div className='star-select'></div>
          <div className='star-select'></div>
          <div className='star-select'></div>
          <div className='star-no-select'></div>
          <div className='star-no-select'></div>
        </div>
        ) : ''

        }
              {data.product.reviews.averageRating === 3.5 ?
        (
          <div className='rating-cont'>
          <div className='star-select'></div>
          <div className='star-select'></div>
          <div className='star-select'></div>
          <div className='star-half-select'></div>
          <div className='star-no-select'></div>
        </div>
        ) : ''

        }
              {data.product.reviews.averageRating === 4 ?
        (
          <div className='rating-cont'>
          <div className='star-select'></div>
          <div className='star-select'></div>
          <div className='star-select'></div>
          <div className='star-select'></div>
          <div className='star-no-select'></div>
        </div>
        ) : ''

        }
              {data.product.reviews.averageRating === 4.5 ?
        (
          <div className='rating-cont'>
          <div className='star-select'></div>
          <div className='star-select'></div>
          <div className='star-select'></div>
          <div className='star-select'></div>
          <div className='star-half-select'></div>
        </div>
        ) : ''

        }
              {data.product.reviews.averageRating === 5 ?
        (
          <div className='rating-cont'>
          <div className='star-select'></div>
          <div className='star-select'></div>
          <div className='star-select'></div>
          <div className='star-select'></div>
          <div className='star-select'></div>
        </div>
        ) : ''

        }
     {data.product.reviewCount === 1 ?
     (
      <div class='review-total-text'>{data.product.reviewCount} review</div>
     ) : 
     (
      <div class='review-total-text'>{data.product.reviewCount} reviews</div>
     )
       
     

     }

  </div>
      }      
      <div className='product-pricer'><h3>{variationPrice}</h3></div>
      </div>
      <div dangerouslySetInnerHTML={sanitizedData(data.product.description)} className='product-short-desc'></div>
      <div className='attr-cont'>
      <div class='node-attr-cont'>
      <div className='node-name'>{data.product.attributes.nodes[0].name}:</div>
      {data.product.attributes.nodes[0].options && data.product.attributes.nodes[0].options.map((el, index) =><div className={index === clickedItem ? `attr-option is-checked attr-` + el: "attr-option attr-" + el} onClick={variationClick} data-idindex={index} data-id={el}></div>)}
     </div>
     {data.product.attributes.nodes.length > 1 ? 
      (
<>
<div class='node-attr-cont'>
      <div className='node-name'>{data.product.attributes.nodes[1].name}:</div>
      {data.product.attributes.nodes[1].options && data.product.attributes.nodes[1].options.map((el, index) =><div className={index === clickedItem2 ? `attr-option is-checked attr-` + el: "attr-option attr-" + el} onClick={variationClick2} data-idindex={index} data-id={el}></div>)}
     </div>
</>
      ) :('')
    }
      </div>
      {addedToCart === true ? (
         <div class='added-cart-cont'> <div class='added-to-cart-text'>Product added to cart!</div><button onClick={() => setOpenCart(true)} class='viewcart'>View Cart</button></div>
        ): (
        <></>
        )}
      <div className='buttons-addtocart'>
        <div class="buttons">
          <button onClick={decrementCount}>-</button>
          <input type="tel" value={count} onChange={changeCount}/>
          <button onClick={incrementCount}>+</button>
        </div>
        {variationNoStock===true ? 
        (
          <div class='no-stock-text'>This item variation is out of stock! Try selecting a different one.</div>
        ):''}
        <button disabled={variationNoStock} className={`addcart-btn added-${addedToCart}`} onClick={VariationCart}>{addedToCart === false ? 'Add to cart' : 'Change item'}</button>
      </div>
      </div>
     </div>
      
    <div className='product-data-tabs'>
        <div className={`product-tabs-cont idx-${tab}`}>
         <div onClick={(e) => changeTab()} className='product-tabs-desc'>Description</div>
         <div onClick={(e) => changeTab1()} className='product-tabs-advanced'>Additional Information</div>
         <div onClick={(e) => changeTab2()} className='product-tabs-reviews'>Reviews ({data.product.reviewCount})</div>
         <div onClick={(e) => changeTab3()} className='product-tabs-delivery'>Delivery and Returns</div>
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
      {tab === 1 ?
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
      }
            </>
        </div>
    </div>

    </div>
        
        }
    
{relatedFull.length > 2 ?

(
  <div class='you-might-like-cont'>
  <h4>Related Products</h4>
  <div onClick={changePage} data-idlink={`${slugify(relatedFull[0].node.productCategories.nodes[0].name)}/${slugify(relatedFull[0].node.name)}`} className='mini-product-cont'>
    <img src={relatedFull[0].node.featuredImage.node.sourceUrl}></img>
    <div className='mini-title'>{relatedFull[0].node.name}</div>
    <div className='mini-price'>{relatedFull[0].node.price}</div>
  </div>
  <div onClick={changePage} data-idlink={`${slugify(relatedFull[1].node.productCategories.nodes[0].name)}/${slugify(relatedFull[1].node.name)}`} className='mini-product-cont'>
    <img src={relatedFull[1].node.featuredImage.node.sourceUrl}></img>
    <div className='mini-title'>{relatedFull[1].node.name}</div>
    <div className='mini-price'>{relatedFull[1].node.price}</div>
  </div>
  <div onClick={changePage} data-idlink={`${slugify(relatedFull[2].node.productCategories.nodes[0].name)}/${slugify(relatedFull[2].node.name)}`} className='mini-product-cont'>
    <img src={relatedFull[2].node.featuredImage.node.sourceUrl}></img>
    <div className='mini-title'>{relatedFull[2].node.name}</div>
    <div className='mini-price'>{relatedFull[2].node.price}</div>
  </div>
  </div>
): ('')}

<Footer/>
    </div>
   
    </Layout>
    );
}

export default singleProduct;

