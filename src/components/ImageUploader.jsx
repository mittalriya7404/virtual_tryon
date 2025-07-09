import React, { useState } from 'react';
import UploadImage from './UploadImage';
import PreProductImgs from './PreProductImgs';

const ImageUploader = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div>
      <UploadImage image={selectedImage} setImage={setSelectedImage} />
      <PreProductImgs setImage={setSelectedImage} />
    </div>
  );
};

export default ImageUploader;
