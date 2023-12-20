const Questions=[{
    ques : "What is markup language?",
    ans: [
        {text:"CSS",isCorrect:false},
        {text:"Javascript",isCorrect:false},
        {text:"HTML",isCorrect:true},
        {text:"Bootstrap",isCorrect:false}
    ]
},
{
    ques : "What is Scripting language?",
    ans: [
        {text:"CSS",isCorrect:false},
        {text:"Javascript",isCorrect:true},
        {text:"HTML",isCorrect:false},
        {text:"Bootstrap",isCorrect:false}
    ]
},
{
    ques : "What is Css use For?",
    ans: [
        {text:"Styling",isCorrect:true},
        {text:"logic development",isCorrect:false},
        {text:"backend",isCorrect:false},
        {text:"Fetching data",isCorrect:false}
    ]
},
{
    ques : "How among is database?",
    ans: [
        {text:"HTML",isCorrect:false},
        {text:"PHP",isCorrect:false},
        {text:"CSS",isCorrect:false},
        {text:"SQL",isCorrect:true}
    ]
}]

let currQuestion = 0;
let score = 0;

function showQuestion(){
    const question = document.getElementById("question");
    const opt = document.getElementById("options");

    question.textContent = Questions[currQuestion].ques;
    opt.innerHTML= "";

    for(let i=0;i<Questions[currQuestion].ans.length;i++){
        const choiceDiv = document.createElement("div");
        const choice = document.createElement("input");
        const choiceLabel = document.createElement("label");

        choice.type="radio";
        choice.name = "answer";
        choice.value = i;

        choiceLabel.textContent = Questions[currQuestion].ans[i].text;

        choiceDiv.appendChild(choice);
        choiceDiv.appendChild(choiceLabel);
        opt.appendChild(choiceDiv);
    }
}
//show all options in html page
showQuestion();

function loadScore(){
    const totalScore  = document.getElementById("score");
    totalScore.textContent = `Your score is ${score} out of ${Questions.length}`
}


function nextQuestion(){
    if(currQuestion < Questions.length - 1){
        currQuestion++;
        showQuestion();
    }else{
        document.getElementById("options").remove();
        document.getElementById('question').remove();
        document.getElementById('btn').remove();
        loadScore();
    }
}

function checkAns(){
    const selectAns = parseInt(document.querySelector('input[name="answer"]:checked').value);
    if(Questions[currQuestion].ans[selectAns].isCorrect){
        score++;
        console.log("correct");
        nextQuestion();
    }else{
        nextQuestion();
    }
}