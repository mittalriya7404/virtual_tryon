import React, { useState } from 'react';
import img1 from '../assets/models/images/cloth2.jpg';
import img2 from '../assets/models/images/cloth3.png';
import img3 from '../assets/models/images/cloth4.jpg';
import img4 from '../assets/models/images/cloth5.webp';
import img5 from '../assets/models/images/cloth6.webp';
import img6 from '../assets/models/images/cloth7.jpeg';
import img7 from '../assets/models/images/shoes.jpg';
import TryOn from '../components/TryOn';
import PreProductImgs from '../components/preProductImgs';



const Home = () => {
  const [productImage, setProductImage] = useState(null);
  //const { productImage } = useContext(ProductImageContext)
  

  return (
    <div className="w-full">
      <div className="w-screen h-full bg-third">
        <div className="w-screen min-h-screen text-gray-800">
          {/* Hero Section */}
          <div className="text-center w-screen h-28 text-light bg-dark">
            <h1 className="text-3xl font-serif">Virtual Try-On</h1>
            <p className="mt-2 text-lg">Try outfits, glasses, and more from the comfort of your home!</p>
          </div>

          {/* Some example section */}
          <div className="mx-8 my-10 bg-seclight rounded-lg text-center overflow-auto scrollbar-hide">
            <h2 className="text-2xl font-medium text-center pt-4">See the Magic of Virtual Styling!</h2>
            <div className="mt-6 flex gap-4 p-4 scrollbar-hide">
              {[img1, img2, img3, img4, img5, img6, img7].map((img, index) => (
                <img key={index} src={img} alt="Example" className="w-72 h-56 object-fill rounded-lg shadow-md" />
              ))}
            </div>
          </div>

          {/* Look Trying Section */}
          <div className="px-6 py-6 bg-light shadow-md rounded-lg mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-semibold">Try Your Own Look!</h2>
            <p className="text-gray-600 mt-2">Upload an image of the product</p>

            {/* Upload Image */}
            <div className="grid place-items-center h-16">
              <input
                type="file"
                accept="image/*"
                id="fileInput1"
                className="hidden"
                onChange={(e) => {
                  const file = e.target.files[0];
                  if (file) {
                    setProductImage(URL.createObjectURL(file)); // Store image URL in state
                  }
                }}
              />
              <button
                onClick={() => document.getElementById("fileInput1").click()}
                className="mt-0 bg-dark text-white py-2 px-6 rounded-lg shadow hover:bg-third hover:text-black"
              >
                Upload Product Image
              </button>
            </div>

            {/* Show Preview of Uploaded Product Image */}
            {productImage && (
              <div className="mt-4 flex flex-col items-center justify-center">
                <h3 className="text-lg font-medium text-center">Product Preview:</h3>
                <div className="flex items-center justify-center mt-2">
                <img src={productImage} alt="Uploaded Product" className="w-48 h-auto rounded-lg shadow-md mt-2" />
              </div>
              </div>
            )}

            {/* Try on the clothes */}
            <div className="mt-4 px-4 py-4 bg-third shadow-sm rounded-md">
              <TryOn productImage={productImage} />
            </div>
          </div>

          {/* Predefined Product Images */}
          <div className="mx-6 my-6 bg-seclight h-80">
            <PreProductImgs />
          </div>

          {/* Categories Section */}
          <div className="px-6 py-10">
            <h2 className="text-2xl font-semibold text-center">Explore Categories</h2>
            <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
              {["Shirts", "Dresses", "Glasses", "Jackets"].map((category, index) => (
                <div key={index} className="bg-gray-200 p-4 rounded-lg text-center shadow-md">
                  <h3 className="text-lg font-medium">{category}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
