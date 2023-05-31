import { useRef, useState } from "react";
import Webcam from "react-webcam";
import "./App.css"
import '@mediapipe/face_mesh';
import '@tensorflow/tfjs-core';
// Register WebGL backend.
import '@tensorflow/tfjs-backend-webgl';
import {runDetector} from "./detector"

// const inputResolution = {
//   width: 1280,
//   height: 720,
// };

function App() {

  const webcamRef = useRef(null);
  const canvasRef = useRef(null);
  const [loaded, setLoaded] = useState(false);

  const handleVideoLoad = (videoNode) => {
    const video = videoNode.target;
    if (video.readyState !== 4) return;
    if (loaded) return;
    runDetector(video, canvasRef.current); //running detection on video
    setLoaded(true)
  };

  // useEffect(handleVideoLoad(), []);

  return (
    <div className="App">
    <header className="App-header">
      <Webcam
          ref={webcamRef}
          audio={false}
          onLoadedData={handleVideoLoad}
          style={{
            position: "absolute",
            marginLeft: "auto",
            marginRight: "auto",
            left: 0,
            right: 0,
            textAlign: "center",
            zindex: 9,
            width: 640,
            height: 480,
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
            width: 640,
            height: 480,
          }}
        />
      </header>
    </div>
  );
}

export default App;