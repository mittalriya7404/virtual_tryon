// src/components/CameraView.js
import React, { useRef, useEffect } from 'react';

const CameraView = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((stream) => {
        videoRef.current.srcObject = stream;
        video.onloadedmetadata = () => {
          video.play();
      }})
      .catch((err) => console.error(err));
  }, []);
  // async function getMedia(constraints) {
  //   let stream = null;
  
  //   try {
  //     stream = await navigator.mediaDevices.getUserMedia(constraints);
  //     /* use the stream */
  //   } catch (err) {
  //     /* handle the error */
  //   }
  // }

  return (
    <div>
      <h2>Your Camera</h2>
      {/* <video ref={videoRef} style={{ width: '100%', height: 'auto', border: '2px solid black' }}></video> */}
    </div>
  );
};

export default CameraView;
