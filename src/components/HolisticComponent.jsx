import React, { useEffect, useRef } from "react";
import { Camera } from '@mediapipe/camera_utils';


function HolisticComponent() {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const loadHolistic = async () => {
      const videoElement = videoRef.current;
      const canvasElement = canvasRef.current;
      const canvasCtx = canvasElement.getContext("2d");
      const crownImg = new Image();
crownImg.src = "/crowwn.png"; // Make sure this image is in your public folder


      const onResults = (results) => {
        canvasCtx.save();
        canvasCtx.clearRect(0, 0, canvasElement.width, canvasElement.height);
        canvasCtx.drawImage(
          results.image,
          0,
          0,
          canvasElement.width,
          canvasElement.height
        );

        // Draw pose landmarks
        // if (results.poseLandmarks) {
        //   window.drawConnectors(canvasCtx, results.poseLandmarks, window.POSE_CONNECTIONS, {
        //     color: "#00FF00",
        //     lineWidth: 4
        //   });
        //   window.drawLandmarks(canvasCtx, results.poseLandmarks, {
        //     color: "#FF0000",
        //     lineWidth: 2
        //   });
        // }
        // Add crown on top of head



        // Draw face landmarks
        // if (results.faceLandmarks) {
        //   window.drawConnectors(canvasCtx, results.faceLandmarks, window.FACEMESH_TESSELATION, {
        //     color: "#C0C0C0",
        //     lineWidth: 1
        //   });
        //   window.drawLandmarks(canvasCtx, results.faceLandmarks, {
        //     color: "#FF3030",
        //     lineWidth: 1
        //   });
        // }
//         if (results.faceLandmarks) {
//   const head = results.faceLandmarks[10]; // Top of head
//   if (head) {
//     const x = head.x * canvasElement.width - 135; // Adjust for image center
//     const y = head.y * canvasElement.height - 100;
//     canvasCtx.drawImage(crownImg, x, y, 300, 120); // width and height of crown
//   }
// }
if (results.faceLandmarks) {
  const leftEar = results.faceLandmarks[7];
  const rightEar = results.faceLandmarks[8];
  const headTop = results.faceLandmarks[10];

  if (leftEar && rightEar && headTop) {
    // Get head width (distance between ears)
    const headWidth = Math.sqrt(
      Math.pow((rightEar.x - leftEar.x) * canvasElement.width, 2) +
      Math.pow((rightEar.y - leftEar.y) * canvasElement.height, 2)
    );

    // Set crown width slightly bigger than head
    const crownWidth = headWidth * 5.0;
    const crownHeight = headWidth * 2.6; // Adjust proportionally

    // Position the crown
    const x = (headTop.x * canvasElement.width) - crownWidth / 2;
    const y = (headTop.y * canvasElement.height) - crownHeight;

    canvasCtx.drawImage(crownImg, x, y, crownWidth, crownHeight);
  }
}


        // Draw left hand
        if (results.leftHandLandmarks) {
          window.drawConnectors(canvasCtx, results.leftHandLandmarks, window.HAND_CONNECTIONS, {
            color: "#00FF00",
            lineWidth: 3
          });
          window.drawLandmarks(canvasCtx, results.leftHandLandmarks, {
            color: "#FFFFFF",
            lineWidth: 2
          });
        }

        // Draw right hand
        if (results.rightHandLandmarks) {
          window.drawConnectors(canvasCtx, results.rightHandLandmarks, window.HAND_CONNECTIONS, {
            color: "#FF0000",
            lineWidth: 3
          });
          window.drawLandmarks(canvasCtx, results.rightHandLandmarks, {
            color: "#FFFFFF",
            lineWidth: 2
          });
        }

        canvasCtx.restore();
      };

      const holistic = new window.Holistic({
        locateFile: (file) =>
          `https://cdn.jsdelivr.net/npm/@mediapipe/holistic/${file}`
      });

      holistic.setOptions({
        modelComplexity: 1,
        smoothLandmarks: true,
        enableSegmentation: false,
        refineFaceLandmarks: true,
        minDetectionConfidence: 0.5,
        minTrackingConfidence: 0.5
      });

      holistic.onResults(onResults);

     const camera = new Camera(videoRef.current, {
  onFrame: async () => {
    await holistic.send({ image: videoRef.current });
  },
  width: 780,
  height: 680,
});


      camera.start();
    };

    loadHolistic();
  }, []);

  return (
    <div>
      <video
        ref={videoRef}
        style={{
          display: "none",
        }}
        playsInline
      ></video>
      <canvas
        ref={canvasRef}
        width="780"
        height="680"
        style={{
          border: "1px solid black",
        }}
      ></canvas>
    </div>
  );
}

export default HolisticComponent;
