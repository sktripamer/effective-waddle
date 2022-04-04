import * as React from "react";
import {useState, useEffect } from "react";

import useAuth, { User } from "../hooks/useAuth";


export default function GetSubscriptions() {
  const { user } = useAuth();
  const { jwtAuthToken } = user as User;
  const [methodProcessing, setMethodProcessing] = useState(true);
  const [arrayTest, setArray] = useState({});
  useEffect(() => {
    async function fetchMyAPI() {
      try {
        const request = await fetch('/api/get-subscriptions', {
          method: 'POST',
          body: jwtAuthToken,
        });
        const intent = (await request.json());
        console.log(intent)
        setArray(intent.sublist);
       setMethodProcessing(false);
      } catch (error) {
        console.log('Failed to get cID');
        console.log(error);
        return null;
      }
    
    }
    fetchMyAPI()
  }, []);
  const getButtonId = (e) => {
    console.log(e.target.dataset.id)
  }
  return (
    <div className='sub-list'>
l
    </div>
  );

}
