import React, { useEffect, useState } from "react";
import Cards from "./cards";

const Products = () => {
  const [data, setData] = useState([]);
  console.log(data);

  useEffect(() => {
    storeData();
  }, []);

  const storeData = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="flex flex-wrap justify-center">
      {data.map((item) => (
        <Cards
          key={item.id}
          title={item.title}
          description={item.description}
          price={item.price}
          image={item.image}
        />
      ))}
    </div>
  );
};

export default Products;
