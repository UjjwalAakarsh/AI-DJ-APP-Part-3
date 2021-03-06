leftWristX=0
leftWristY=0
rightWristX=0
rightWristY=0
song=""
function preload(){
song=loadSound("music.mp3")
}
function setup(){
canvas=createCanvas(600,500)
canvas.center()
video=createCapture(VIDEO)
video.hide()
video.size(600,500)
//Code for initializing posenet
poseNet=ml5.poseNet(video,check_model_loaded)
//Code for executing posenet
poseNet.on("pose",gotPoses)
}
function gotPoses(results){
    if (results.length>0) {
        console.log(results)
        leftWristX=results[0].pose.leftWrist.x
        leftWristY=results[0].pose.leftWrist.y
        console.log("leftWristX= "+leftWristX)
        console.log("leftWristY= "+leftWristY)
        rightWristX=results[0].pose.rightWrist.x
        rightWristY=results[0].pose.rightWrist.y
        console.log("rightWristX= "+rightWristX)
        console.log("rightWristY= "+rightWristY)
    }
}
function check_model_loaded(){
    console.log("Model Loaded")
}
function draw(){
image(video,0,0,600,500)
}
function play(){
    song.play()
    song.setVolume(1)
    song.rate(1)
}