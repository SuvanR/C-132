img = " ";
status = " ";

function preload(){
    img = loadImage('dog_cat.jpg');
}

function setup(){
    canvas = createCanvas(640,420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "status : detecting objects";
}

function modelLoaded(){
    console.log("model is loaded!");
    status = true;
    objectDetector.detect(img, gotResults);
}

function draw(){
    image(img,0,0,640,420);
    fill('#FFA500');
    text("dog",30,70);
    noFill();
    stroke('#FFA500');
    rect(30,60,350,450);

    fill('#FFA500');
    text("cat",290,80);
    noFill();
    stroke('#FFA500');
    rect(290,70,250,250);
}

function gotResults(error, Results){
    if(error){
        console.error(error);
    }
    
    console.log(Results);
}
