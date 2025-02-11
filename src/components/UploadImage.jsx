// src/components/UploadImage.js
import React, { useState } from 'react';

const UploadImage = ({ onImageUpload }) => {
  const [image, setImage] = useState(null);

  const handleUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
      onImageUpload(file);
    }
  };

  return (
    <div>
      <h2>Upload Product Image</h2>
      <input type="file" accept="image/*" onChange={handleUpload} />
      {image && <img src={image} alt="Uploaded" style={{ width: '200px', marginTop: '10px' }} />}
    </div>
  );
};

export default UploadImage;
