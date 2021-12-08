function identify(){
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier= ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/YVgsmdx6G/model.jsonmodel.json", modelReady);
     

}

function modelReady(){
classifier.classify(gotResults);
}

function gotResults (error , results){
 if(error){
     console.error(error);
 
 }
 else{
     console.log(results);
 }
}