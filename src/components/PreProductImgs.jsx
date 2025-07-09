import React, { useContext, useState } from 'react';
import { DataContext } from "../context/ProductContextProvide";

const PreProductImgs = ({ onImageSelect }) => {  // ✅ Renamed prop to reflect purpose
  const { product1, product2, product3, product4, product5, product6, product7, product8, product9, product10, product11, product12, product13 } = useContext(DataContext);
  
  const [selectedImg, setSelectedImg] = useState(null);

  const handleImageSelect = (img) => {
    setSelectedImg(img);  // ✅ Update state to show the selected image
    onImageSelect(img);   // ✅ Pass the selected image to parent component
  };

  return (
    <div>
      <h3 className="text-lg font-medium text-center p-4">Select a Product from Our Collection:</h3>
      
      {/* Product Image Collection */}
      <div className="mx-4 my-6 flex gap-4 overflow-auto">
        {[product1, product11, product2, product3, product12, product4, product10, product5, product9, product7, product8, product6, product13].map((img, index) => (
          <img 
            key={index} 
            src={img} 
            alt={`Product ${index + 1}`}
            className={`w-48 h-44 object-cover cursor-pointer border-2 ${
              selectedImg === img ? 'border-blue-500' : 'border-transparent'
            } hover:border-blue-500`}
            onClick={() => handleImageSelect(img)}
          />
        ))}
      </div>

      {/* Display Selected Image
      {selectedImg && (
        <div className="text-center mt-4">
          <h4 className="text-lg font-semibold">Selected Image:</h4>
          <img src={selectedImg} alt="Selected" className="w-52 h-48 border-2 border-gray-400 mx-auto" />
        </div>
      )} */}
    </div>
  );
};

export default PreProductImgs;
