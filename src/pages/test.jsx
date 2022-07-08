    import React, { useState, useRef, useEffect } from 'react';
    import AuthContent from "../components/AuthContent";
    import Layout from "../components/Layout";
    import { navigate } from 'gatsby';
    import { useQuery, gql, useMutation } from "@apollo/client";
        import {loadStripe} from '@stripe/stripe-js/pure';
        import useAuth, { User } from "../hooks/useAuth";
    import {
        CardElement,
        Elements,
        useStripe,
        useElements,
    } from '@stripe/react-stripe-js'; 

    const CREATE_ORDER = gql` 
    mutation createNewOrder($databaseId: Integer) {
        createOrder(input: {customerId: $databaseId}) {
            order {
            databaseId
            }
        }
    }
    `;


    export default function Test() {
    
    

    

        return (
            <AuthContent>
                <Cool/>
            </AuthContent>
        )
    }

    const Cool = () => {
        const { user } = useAuth();
        const { databaseId } = user;
        const [createNewOrder, { data, loading, error }] = useMutation(CREATE_ORDER);

        const newOrder = () => {
            createNewOrder({
                variables: { databaseId },
            }).catch(error => {
                console.error(error);
            });
        }

        return (
            <>
            <button onClick={newOrder}>new order</button>
            {loading === true ? <div>loading...</div> : ''}
            {data ? (
                <>
                {console.log(data)}
                loaded data
                </>
            ):''}
            </>
        )

    }
