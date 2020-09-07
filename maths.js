var answer;
var score = 0;
var backgroundImages = [];

function nextQuestion(calc) {
    if (calc == 'add'){
        const n1 = Math.floor(Math.random() * 50);
        document.getElementById('n1').innerHTML = n1;

        const n2 = Math.ceil(Math.random() * 50);
        document.getElementById('n2').innerHTML = n2;

        answer = n1 + n2;
    } else if (calc == 'sub') {
        const n1 = Math.floor(Math.random() * 100);
        const n2 = Math.ceil(Math.random() * 100);

        if (n1 > n2) {
            
            document.getElementById('n1').innerHTML = n1;
            document.getElementById('n2').innerHTML = n2;
            answer = n1 - n2;

        } else {

            document.getElementById('n1').innerHTML = n2;
            document.getElementById('n2').innerHTML = n1;
            answer = n2 - n1;

        }
    
    } else {
        const n1 = Math.floor(Math.random() * 10);
        document.getElementById('n1').innerHTML = n1;

        const n2 = Math.ceil(Math.random() * 10);
        document.getElementById('n2').innerHTML = n2;

        answer = n1 * n2;
    }
    
}


function checkAnswer() {
    const prediction = predictImage();

    console.log(prediction);

    var predictAnswer = 0;
    for (let i = 0; i < prediction.length; i++) {
        
        predictAnswer += (prediction[i]*(10**(prediction.length - i - 1)));
        console.log(`${prediction[i]}, ${predictAnswer}`);
        
    }


    if (predictAnswer == answer){
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
