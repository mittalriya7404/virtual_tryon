import React, { useContext } from 'react';
// import product1 from '../assets/models/images/product1.jpg'
// import product2 from '../assets/models/images/product2.jpg'
// import product3 from '../assets/models/images/product3.webp'
// import product4 from '../assets/models/images/product4.jpeg'
// import product5 from '../assets/models/images/product5.jpg'
// import product6 from '../assets/models/images/product6.webp'
// import product7 from '../assets/models/images/product7.webp'
// import product8 from '../assets/models/images/product8.jpg'
// import product9 from '../assets/models/images/product9.webp'
// import product10 from '../assets/models/images/product10.webp'
// import product11 from '../assets/models/images/product11.avif'
// import product12 from '../assets/models/images/product12.jpg'
// import product13 from '../assets/models/images/product13.webp'
import { DataContext } from "../context/ProductContextProvide";
const PreProductImgs = () => {
  const { product1, product2, product3, product4, product5, product6, product7, product8, product9, product10, product11, product12, product13 } = useContext(DataContext); // ✅ Extracting data from context

  const handleImageClick = (img) => {
    console.log("Selected Image:", img);
  };


  return (
    <div>
    <h3 className="text-lg font-medium text-center p-4">You can Select the Product from our Collection:</h3>
          <div className="mx-4 my-6 flex gap-4 overflow-auto">
            {[product1,product11,product2,product3,product12,product4,product10,product5,product9,product7,product8,product6,product13].map((img, index) => (
              <img key={index} src={img} alt={`Product ${index + 1}`}
                className="w-48 h-44 object-cover cursor-pointer border-2 border-transparent hover:border-blue-500"
                onClick={() =>handleImageClick(img)}
              />
            ))}
          </div>
          </div>
  )
}

export default PreProductImgs