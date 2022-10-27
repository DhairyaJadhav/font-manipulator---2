function canvas()
{
    canvas = createCanvas(300,300);
    canvas.center()
}

function setup()
{
    video = createCapture(VIDEO);
    video.size(300,300);
    video.position(10,50)

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function modelLoaded()
{
    console.log("PoseNet is initialized and loaded");
}

function draw()
{
    background("#5196e3");
}

function gotPoses(result,error);
{
    if(error)
    {
        console.log(error);
    }

    if(result.length > 0)
    {
        console.log(results)
        console.log("rightwrist_x = "+results[0].pose.rightWrist.x+"rightwrist_y = "+results[0].pose.rightWrist.y)
        console.log("lefttwrist_x = "+results[0].pose.lefttWrist.x+"leftwrist_y = "+results[0].pose.lefttWrist.y)
    }

}