function preload(){

}

function setup(){
    canvas = createCanvas(700,400);
    canvas.position(570, 400);
    canvas.parent("canvas");

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);

}

function modelLoaded(){
    console.log("Model Loaded!")
}

function draw(){
  image(video, 0, 0, 700, 400);
}

function gotPoses(){

}

function startGame(){

}