import React from 'react';
import { useQuery, gql } from "@apollo/client";
import { useState , useEffect } from "react";
import DOMPurify from 'dompurify';
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import ImageGallery from 'react-image-gallery';
import AuthContent from "../components/AuthContent";
import WriteReview from "../components/WriteReview";


const hatsCat = ( props ) => {
    const { pageContext: { pagedata } } = props;

console.log(pagedata)

return (
    <div>{JSON.stringify(pagedata)}</div>
)


}

export default hatsCat;
