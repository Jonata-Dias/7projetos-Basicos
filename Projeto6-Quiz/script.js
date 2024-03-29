
//inicial data
let currentQuestion = 0;
let correctAnswers = 0;

showQuestion();

//events
document.querySelector('.scoreArea button').addEventListener('click', resetEvent)

//functions
function showQuestion(){
    if(questions[currentQuestion]){
        let q = questions[currentQuestion]
        
        let pctBar = Math.floor((currentQuestion / questions.length)* 100);
        document.querySelector('.progress--bar').style.width = `${pctBar}%`

        document.querySelector('.scoreArea').style.display = 'none';
        document.querySelector('.questionArea').style.display = 'block';

        document.querySelector('.question').innerHTML = q.question;

        let optionsHtml = '';
        for(let i in q.options) {
            optionsHtml += `<div data-op="${i}" class="option"><span>${parseInt(i)+1}</span>${q.options[i]}</div>`;
        }
        document.querySelector('.options').innerHTML = optionsHtml;

        document.querySelectorAll('.options .option').forEach(item =>{
            item.addEventListener('click', optionClickEvent)
        })
    } else{
        //acabaram as questoes
        finishQuiz()
    }
}

function optionClickEvent(e){
    let clickOption = parseInt(e.target.getAttribute("data-op"))
    
    if(questions[currentQuestion].answer === clickOption){
       correctAnswers ++
    } 

    currentQuestion++;
    showQuestion();
}

function finishQuiz(){
    let points = Math.floor((correctAnswers / questions.length) * 100);

    if(points <30){
        document.querySelector(".scoreText1").innerHTML = 'Tá ruim em?!';
        document.querySelector(".scorePct").style.color = '#f00'
    } else if(points >=30 && points < 70){
        document.querySelector(".scoreText1").innerHTML = 'Mouto Bom!';
        document.querySelector(".scorePct").style.color = '#ff0'
    } else if(points >= 70){
        document.querySelector(".scoreText1").innerHTML = 'Parabéns!';
        document.querySelector(".scorePct").style.color = '#00FF00'
    }


    document.querySelector('.scorePct').innerHTML = `Acertou ${points}%`;
    document.querySelector('.scoreText2').innerHTML= `Você respondeu ${questions.length} questões e acertou ${correctAnswers}.`

    document.querySelector('.scoreArea').style.display = 'block';
    document.querySelector('.questionArea').style.display = 'none';

    document.querySelector('.progress--bar').style.width = `100%`
}

function resetEvent(){
    correctAnswers = 0;
    currentQuestion = 0;
    showQuestion();
}