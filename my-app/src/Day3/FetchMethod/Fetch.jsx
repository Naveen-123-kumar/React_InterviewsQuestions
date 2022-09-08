import React from "react";

export const Fetch = () => {
  let data = fetch("https://api.github.com/users") //api for the get request
    .then((response) => response.json())
    .then((data) => console.log(data));
  return (
    <>
    <h3>In fetch method server respond with data that should be converted to JSON to get understand.</h3>
    </>
  );
};