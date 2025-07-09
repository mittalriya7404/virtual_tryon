import React, { useRef, useEffect, useState } from "react";
import { Pose } from "@mediapipe/pose";
import { Camera } from "@mediapipe/camera_utils";
const glassesImg = new Image();
glassesImg.src = "/glasses.png";

const PoseDetection = () => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [cameraActive, setCameraActive] = useState(false);
  const cameraInstance = useRef(null); // Store camera instance to prevent re-initialization

  const startCamera = async () => {
    if (cameraActive || cameraInstance.current) return; // Prevent multiple instances

    setCameraActive(true);

    if (videoRef.current) {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      videoRef.current.srcObject = stream;
      videoRef.current.play();
    }
  };

  useEffect(() => {
    if (!cameraActive || !videoRef.current) return;

    const pose = new Pose({
      locateFile: (file) => `https://cdn.jsdelivr.net/npm/@mediapipe/pose/${file}`,
    });

    pose.setOptions({
      modelComplexity: 1,
      smoothLandmarks: true,
      enableSegmentation: false,
      minDetectionConfidence: 0.5,
      minTrackingConfidence: 0.5,
    });

    pose.onResults((results) => {
      drawPose(results);
    });

    cameraInstance.current = new Camera(videoRef.current, {
      onFrame: async () => {
        await pose.send({ image: videoRef.current });
      },
      width: 640,
      height: 480,
    });

    cameraInstance.current.start();
  }, [cameraActive]);

  const drawPose = (results) => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(results.image, 0, 0, canvas.width, canvas.height);
  
    if (results.poseLandmarks) {
      const lm = results.poseLandmarks;
  
      const leftEye = lm[2];
      const rightEye = lm[5];
      const nose = lm[0]; // or lm[4]
  
      if (leftEye && rightEye && nose) {
        const x1 = leftEye.x * canvas.width;
        const y1 = leftEye.y * canvas.height;
        const x2 = rightEye.x * canvas.width;
        const y2 = rightEye.y * canvas.height;
  
        const centerX = (x1 + x2) / 2;
        const centerY = (y1 + y2) / 2;
  
        const glassesWidth = Math.abs(x2 - x1) * 2;
        const glassesHeight = glassesWidth / 3;
  
        ctx.drawImage(glassesImg, centerX - glassesWidth / 2, centerY - glassesHeight / 2, glassesWidth, glassesHeight);
      }
  
      // Optional: draw points
      ctx.fillStyle = "red";
      lm.forEach((landmark) => {
        ctx.beginPath();
        ctx.arc(landmark.x * canvas.width, landmark.y * canvas.height, 5, 0, 2 * Math.PI);
        ctx.fill();
      });
    }
  };

  return (
    <div>
      {!cameraActive && <button onClick={startCamera}>Open Camera</button>}
      <video ref={videoRef} autoPlay playsInline style={{ display: "none" }} />
      <canvas ref={canvasRef} width="640" height="480" />
    </div>
  );
};

export default PoseDetection;
