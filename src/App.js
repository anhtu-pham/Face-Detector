import { useRef, useState } from "react";
import Webcam from "react-webcam";
import "./App.css"
import '@mediapipe/face_mesh';
import '@tensorflow/tfjs-core';
// Register WebGL backend.
import '@tensorflow/tfjs-backend-webgl';
import { runDetector } from "./detector"

const inputResolution = {
  width: 1280,
  height: 720,
};
const videoConstraints = {
  width: inputResolution.width,
  height: inputResolution.height,
};

function App() {
  const canvasRef = useRef(null);
  const [loaded, setLoaded] = useState(false);

  const handleVideoLoad = (videoNode) => {
    const video = videoNode.target;
    if (video.readyState !== 4) return;
    if (loaded) return;
    const imageElement = new Image(inputResolution.width, inputResolution.height);
    imageElement.crossOrigin = "anonymous";
    imageElement.srcObject = video;
    runDetector(video, canvasRef.current); //running detection on video
    setLoaded(true)
  };

  return (
    <div className="App">
      <header className="App-header">
        <Webcam
          onLoadedData={handleVideoLoad}
          width={inputResolution.width}
          height={inputResolution.height}
          videoConstraints={videoConstraints}
          style={{
            position: "absolute",
            marginLeft: "auto",
            marginRight: "auto",
            left: 0,
            right: 0,
            textAlign: "center",
            zindex: 9,
          }}
        />

        <canvas
          ref={canvasRef}
          style={{
            position: "absolute",
            marginLeft: "auto",
            marginRight: "auto",
            left: 0,
            right: 0,
            textAlign: "center",
            zindex: 9,
          }}
          width={inputResolution.width}
          height={inputResolution.height}
        />
      </header>
    </div>
  );
}

export default App;