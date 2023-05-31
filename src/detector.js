import * as faceLandmarksDetection from "@tensorflow-models/face-landmarks-detection";

export const runDetector = async (video, canvas) => {
    const model = faceLandmarksDetection.SupportedModels.MediaPipeFaceMesh;
    const detectorConfig = {
        runtime: "tfjs",
    };
    const detector = await faceLandmarksDetection.createDetector(
        model,
        detectorConfig
    );
    const detect = async (net) => {
        const estimationConfig = { flipHorizontal: false };
        const faces = await net.estimateFaces(video, estimationConfig);
        detect(detector)
    };
    detect(detector);
}

