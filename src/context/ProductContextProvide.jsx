import React, { createContext, useState } from "react";

// Importing product images
import product1 from "../assets/models/images/product1.jpg";
import product2 from "../assets/models/images/product2.jpg";
import product3 from "../assets/models/images/product3.webp";
import product4 from "../assets/models/images/product4.jpeg";
import product5 from "../assets/models/images/product5.jpg";
import product6 from "../assets/models/images/product6.webp";
import product7 from "../assets/models/images/product7.webp";
import product8 from "../assets/models/images/product8.jpg";
import product9 from "../assets/models/images/product9.webp";
import product10 from "../assets/models/images/product10.webp";
import product11 from "../assets/models/images/product11.avif";
import product12 from "../assets/models/images/product12.jpg";
import product13 from "../assets/models/images/product13.webp";

// Creating Context
export const DataContext = createContext();

// Creating Context Provider Component
export const ProductContextProvider = ({ children }) => {
  const [productImage, setProductImage] = useState(null); 
  const imgData = {
    product1,
    product2,
    product3,
    product4,
    product5,
    product6,
    product7,
    product8,
    product9,
    product10,
    product11,
    product12,
    product13,
    productImage, // ✅ Exposing state in context
    setProductImage, // ✅ Exposing state updater
  };

  return (
    <DataContext.Provider value={imgData}>
      {children}
    </DataContext.Provider>
  );
};

export default ProductContextProvider;