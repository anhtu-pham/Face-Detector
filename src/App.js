import React, { useRef, useState } from "react";
import * as tf from "@tensorflow/tfjs";
import * as facemesh from "@tensorflow-models/face-landmarks-detection";
import Webcam from "react-webcam";

const inputResolution = {
  width: 1280,
  height: 720,
};
const videoConstraints = {
  width: inputResolution.width,
  height: inputResolution.height,
};

function App() {

  const webcamRef = useRef(null);
  const canvasRef = useRef(null);
  const [loaded, setLoaded] = useState(false);

  const handleVideoLoad = (videoNode) => {
    const video = videoNode.target;
    if (video.readyState !== 4) return;
    if (loaded) return;
    //detect here
    setLoaded(true);
  };

  return (
    <div>
      <Webcam
        ref={webcamRef}
        audio={false}
        width={inputResolution.width}
        height={inputResolution.height}
        videoConstraints={videoConstraints}
        onLoadedData={handleVideoLoad}
        style={{
          position: 'absolute',
          marginLeft: 'auto',
          marginRight: 'auto',
          left: 0, right: 0,
          zIndex: 9,
          width: 640,
          height: 480


        }}
      />
      {/* <canvas
        ref={canvasRef}
        width={inputResolution.width}
        height={inputResolution.height}
        style={{ position: "absolute" }}
      /> */}
      {!loaded && <header>Loading...</header>}
    </div>
  );
}

export default App;