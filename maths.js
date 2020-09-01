var answer;
var score = 0;
var backgroundImages = [];

function nextQuestion() {
    const n1 = Math.floor(Math.random() * 5);
    document.getElementById('n1').innerHTML = n1;

    const n2 = Math.ceil(Math.random() * 5);
    document.getElementById('n2').innerHTML = n2;

    answer = n1 + n2;
}

function checkAnswer() {
    const prediction = predictImage();

    if (prediction == answer){
        score += 1;
        console.log(`Correct, score: ${score}`);
        if (score <= 6){
            backgroundImages.push(`url('images/background${score}.svg')`);
            document.body.style.backgroundImage = backgroundImages;
        } else {
            alert("Congrats kiddo!!");
            score = 0;
            backgroundImages = [];
            document.body.style.backgroundImage = backgroundImages;
        }
        nextQuestion();
    } else{
        if (score != 0 ){
            score -= 1;
            backgroundImages.pop();
            document.body.style.backgroundImage = backgroundImages;
        }
        console.log(`False, score: ${score}`);
        alert('Oops! Check your calculation and try writing the number neater next time');
    }
}
