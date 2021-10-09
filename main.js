function start() {
    navigator.mediaDevices.getUserMedia({
        audio: true
    });
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/gb_WxtNpy/model.json", modelReady);
}

function modelReady() {
    classifier.classify(gotResult);
}

function gotResult(error, result) {
    if (error) {
        console.error(error);
    } else {
        console.log(result);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;

        document.getElementById("result_label").innerHTML = "I can hear - " + result[0].label;
        document.getElementById("result_confidence").innerHTML = "Accuracy - " + (result[0].confidence * 100).toFixed(2) + "%";
        document.getElementById("result_label").style.color = "rgb(" + random_number_r + "," + random_number_g + "," + random_number_b + ")";
        document.getElementById("result_confidence").style.color = "rgb(" + random_number_r + "," + random_number_g + "," + random_number_b + ")";

        img1 = document.getElementById("cat.png");
        img2 = document.getElementById("cow.jpeg");
        img3 = document.getElementById("dog.jpeg");
        img4 = document.getElementById("roar.jpeg");
        img5 = document.getElementById("default_image.jpeg");

        if (result[0].label == "Cat") {
            img1.src = "cat.png";
        } else if (result[0].label == "Cow") {
            img2.src = "cow.jpeg";
        } else if (result[0].label == "Dog") {
            img3.src = "dog.jpeg";
        } else if (result[0].label == "Dinosaur") {
            img4.src = "roar.jpeg";
        } else {
            img5.src = "default_image.jpeg";
        }
    }
}