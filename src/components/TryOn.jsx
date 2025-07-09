import { useRef, useEffect, useState } from "react";
// import { Pose } from "@mediapipe/pose";
// import { Camera } from "@mediapipe/camera_utils";
import HolisticComponent from "./HolisticComponent";

const TryOn = () => {
  const [image, setImage] = useState(null); // overlay image (shirt/t-shirt)
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [cameraActive, setCameraActive] = useState(false);
  const cameraInstance = useRef(null);

  const startCamera = async () => {
    if (!image) {
      alert("Please upload a product image first.");
      return;
    }
      setCameraActive(true);

   
    

  };


  return (
    <div className="flex flex-col items-center gap-4 p-6">
      <p>Upload your product image (like a shirt):</p>
      <input
        type="file"
        accept="image/*"
        id="fileInput"
        className="hidden"
        onChange={(e) => {
          const file = e.target.files[0];
          if (file) {
            setImage(URL.createObjectURL(file));
          }
        }}
      />
      <button
        onClick={() => document.getElementById("fileInput").click()}
        className="bg-dark text-light py-2 px-6 rounded-lg shadow-md hover:bg-light hover:text-black transition duration-300"
      >
        Upload Product Image
      </button>

      <button
        onClick={startCamera}
        className="bg-dark text-white py-2 px-6 rounded-lg shadow-md hover:bg-light hover:text-black transition duration-300"
      >
        Open Camera
      </button>

      {cameraActive && <HolisticComponent/>}
    </div>
  );
};

export default TryOn;
