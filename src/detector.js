import * as faceLandmarksDetection from "@tensorflow-models/face-landmarks-detection";
import { drawMesh } from "./drawMesh";

export const runDetector = async (video, canvas) => {
    const model = faceLandmarksDetection.SupportedModels.MediaPipeFaceMesh;
    const detectorConfig = {
        runtime: 'tfjs', // or 'tfjs',
        maxFaces: '2',
    };

    const detector = await faceLandmarksDetection.createDetector(
        model,
        detectorConfig
    );

    const detect = async (net) => {
        // const estimationConfig = { flipHorizontal: false };
        const faces = await net.estimateFaces(video);
        const ctx = canvas.getContext("2d");
        // console.log(faces[0])
        requestAnimationFrame(() => drawMesh(faces[0], ctx));
        detect(detector);
    };
    detect(detector);
}

