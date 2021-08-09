img1="";
img2="";
img3="";
img4="";
img5="";

status="";
objects=[];
function preload(){
img1="pillow.HEIC";
img2="tv.HEIC";
img3="rubixcube.HEIC";
img4="bottle.HEIC";
img5="tissuebox.HEIC";
  }
  
  
  function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}
function modelLoaded() {
    console.log("MOdel Loaded!")
    status = true;
    objectDetector.detect(img, gotResult);
}
function gotResult(error, results) {
    if (error) {
    console.log(error);
    }
    console.log(results);
    objects=results;
}

  function draw() {
    image(img, 0, 0, 640, 420);

       if (status != "") {
           for (let i = 0; i < objects.length; i++) {
               document.getElementById("status").innerHTML = "Status : Object Detected";

               fill("#FF0000");
               percent = floor(objects[i].confidence * 100);
               text(objects[i].label + " " + percent + "%", objects[i].x + 15, objects[i].y + 15);
               noFill();
               stroke("#FF0000");
               rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
           }
       }


   

  }  