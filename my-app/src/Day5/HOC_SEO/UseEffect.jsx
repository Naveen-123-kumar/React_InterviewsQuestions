import React, { useEffect, useState } from "react";

const UseEffect = () => {
  const [name, setName] = useState(0);
  useEffect(() => {
    let count=setTimeout(() => {
      setName((name) => name + 1);
    }, 1000);
    return ()=>clearTimeout(count)
  });
  return <>{name}</>;
};

export default UseEffect;
