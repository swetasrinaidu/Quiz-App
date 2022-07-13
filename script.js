const questions=[
    {
    question:"1) console.log(NaN === NaN)",
    answers:[
    {
        text:"true",
    },
    {
        text:"false",
    },
    {
        text:"undefined",
    },
    {
        text:"Error",
    }],
    correct:"false"
 },
  {
  question:"2) [1,2,3,4,5].slice(2,4)",
  answers:[
    {
        text:"3,4",
    },
    {
        text:"2,3",
    },
    {
        text:"3,4,5",
    },
    {
        text:"2,3,4",
    }],
    correct:"3,4"
},
  {
  question:"3) Which object in js doesnt hava a prototype?",
  answers:[
    {
        text:"base object",
    },
    {
        text:"all objects have a prototype",
    },
    {
        text:"none of the objects have a prototype",
    },
    {
        text:"none of above",
    }],
    correct:"base object"
}
];

const startButton = document.getElementById('start-button');
const nextButton = document.getElementById('next-button');
const questionContainer = document.getElementById('container');
const questionElement = document.getElementById('question');
const answerElement = document.getElementById('answer');
const a_Element = document.getElementById('choicea');
const aElement = document.getElementById('choice-a');
const b_Element = document.getElementById('choiceb');
const bElement = document.getElementById('choice-b');
const c_Element = document.getElementById('choicec');
const cElement = document.getElementById('choice-c');
const d_Element = document.getElementById('choiced');
const dElement = document.getElementById('choice-d');
const submitElement = document.getElementById('submit');
const scoreButton = document.getElementById('score');


startQuiz();

function startQuiz(){
console.log("starting....")  
console.log(startButton)  
let quesNumber=0;
let score=0;
questionElement.innerText="Lets start our QUIZ"
aElement.classList.add('hide')
bElement.classList.add('hide')
cElement.classList.add('hide')
dElement.classList.add('hide')   
if(startButton!=null && startButton!=undefined)
        startButton.addEventListener('click',loadQuiz)  
if(nextButton!=null && nextButton!=undefined)
        nextButton.addEventListener('click',showQuestion);
    



function loadQuiz(){
    console.log("loading....")
    aElement.classList.remove('hide')
    bElement.classList.remove('hide')
    cElement.classList.remove('hide')
    dElement.classList.remove('hide')
    startButton.classList.add('hide')
    showQuestion();
 }

function showQuestion(){
   
    if(quesNumber>questions.length) endQuiz();
    console.log("question num",quesNumber+1)
    console.log("total",questions.length)
    questionElement.innerText=questions[quesNumber].question;
    console.log(questions[quesNumber])
    a_Element.innerText=questions[quesNumber].answers[0].text;
    b_Element.innerText=questions[quesNumber].answers[1].text;
    c_Element.innerText=questions[quesNumber].answers[2].text;
    d_Element.innerText=questions[quesNumber].answers[3].text;
    
    submitAnswer()
}
function submitAnswer(){   
    submitElement.addEventListener("click",()=>{
        const yourAnswer=getAnswer();
        if(yourAnswer==questions[quesNumber].correct){
         score++;
         console.log(score)
         scoreButton.innerText="Score"+":"+ score;
        }
    quesNumber++;
    })
}

function getAnswer(){
    if(aElement.checked) return(a_Element.innerText)
    else if(bElement.checked) return(b_Element.innerText)
    else if(cElement.checked) return(c_Element.innerText)
    return(d_Element.innerText);  
}

function endQuiz(){
    questionElement.innerText= "Your score is:" + score + " out of " + questions.length;
    alert("You have completed the quiz")
    answerElement.innerText=" "
    startButton.classList.remove('hide')
    startButton.addEventListener('click',startQuiz)  

}
}



