export const drawMesh = (prediction, ctx) => {
    if (!prediction) return; // do not draw if there is no mesh
    const keyPoints = prediction.keypoints;
    if (!keyPoints) return; // do not draw if there is no keypoints
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height); //clear the canvas after every drawing

}