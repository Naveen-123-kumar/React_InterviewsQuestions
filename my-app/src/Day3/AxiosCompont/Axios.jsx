import axios from 'axios';
import React from 'react';
export const Axios = () => {
    const getCustomersData = () => {
        axios.get("https://api.github.com/users")
        .then(data => console.log(data))
        .catch(error => console.log(error));
        };
       getCustomersData();
  return (
    <>
  <h4>
  It gives the response in Json form that will be easy for user to read
  </h4>
    </>
  )
  }
