import { useState } from "react";

const TryOn = () => {
  const [image, setImage] = useState(null);
  const [isCameraOpen, setIsCameraOpen] = useState(false); // Track camera state

  // Handle image upload
  // const handleImageUpload = (event) => {
  //   const file = event.target.files[0];
  //   if (file) {
  //     setImage(URL.createObjectURL(file));
  //   }
  // };

  // Open camera and capture image
  const openCamera = () => {
    setIsCameraOpen(true);
    const video = document.createElement("video");
    video.className = "fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full object-cover";
    video.autoplay = true;
    document.body.appendChild(video);

    navigator.mediaDevices.getUserMedia({ video: true }).then((stream) => {
      video.srcObject = stream;

      // Capture button
      const captureButton = document.createElement("button");
      captureButton.innerText = "Capture";
      captureButton.className =
        "fixed bottom-10 left-1/2 transform -translate-x-1/2 px-6 py-3 bg-black text-white rounded-md shadow-md hover:bg-gray-800";
      document.body.appendChild(captureButton);

       // Back button
       const backButton = document.createElement("button");
       backButton.innerText = "Back";
       backButton.className =
         "fixed top-10 left-5 px-4 py-2 bg-red-600 text-white rounded-md shadow-md hover:bg-red-800";
       document.body.appendChild(backButton);

      captureButton.onclick = () => {
        const canvas = document.createElement("canvas");
        const context = canvas.getContext("2d");
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        context.drawImage(video, 0, 0, canvas.width, canvas.height);
        setImage(canvas.toDataURL("image/png"));

        // Stop the camera and remove elements
        closeCamera(stream, video, captureButton, backButton);
      };
       // Back button functionality
       backButton.onclick = () => {
        closeCamera(stream, video, captureButton, backButton);
       }
    });
  };
  // Close camera function
  const closeCamera = (stream, video, captureButton, backButton) => {
    stream.getTracks().forEach((track) => track.stop()); // Stop camera
    video.remove();
    captureButton.remove();
    backButton.remove();
    setIsCameraOpen(false); // Reset camera state
  };

  return (
    <div className="flex flex-col items-center gap-4 p-6">
      {!isCameraOpen && (
        <>
      {/* Open Camera */}
      <p>Try-on with your camera!</p>
      <button
        onClick={openCamera}
        className="bg-dark text-white py-2 px-6 rounded-lg shadow-md hover:bg-light hover:text-black transition duration-300"
      >
        Open Camera
      </button>
      {/* Upload Image */}
      <p>Or upload your image here...</p>
      <input
        type="file"
        accept="image/*"
        id="fileInput"
        className="hidden"
        onChange={(e) => {
          const file = e.target.files[0];
          if (file) {
            setImage(URL.createObjectURL(file)); // Store image URL in state
          }
        }}
      />
      <button
        onClick={() => document.getElementById("fileInput").click()}
        className="bg-dark text-light py-2 px-6 rounded-lg shadow-md hover:bg-light hover:text-black transition duration-300"
      >
        Upload Your Image
      </button>
      </>
      )}

      

      {/* Display Captured or Uploaded Image */}
       {image && (
              <div className="mt-4 flex flex-col items-center justify-center">
                <h3 className="text-lg font-medium text-center">Preview:</h3>
                <div className="flex items-center justify-center mt-2">
                <img src={image} alt="Uploaded Product" className="w-48 h-auto rounded-lg shadow-md mt-2" />
              </div>
              </div>
            )}
    </div>
  );
};

export default TryOn;
