const answerA = document.getElementById("answerA");
const answerB = document.getElementById("answerB");
const answerC = document.getElementById("answerC");
const answerD = document.getElementById("answerD");

let question = [
    {
        ques: "1 + 2 = ?",
        answerA: "0",
        answerB: "1",
        answerC: "3",
        answerD: "4",
        correct: "answerC"
    },

    {
        ques: "2 + 2 = ?",
        answerA: "0",
        answerB: "10",
        answerC: "7",
        answerD: "4",
        correct: "answerD"
    },

    {
        ques: "3 + 2 = ?",
        answerA: "10",
        answerB: "21",
        answerC: "5",
        answerD: "4",
        correct: "answerC"
    },
    {
        ques: "4 + 4 = ?",
        answerA: "10",
        answerB: "8",
        answerC: "5",
        answerD: "4",
        correct: "answerB"
    }
]
let a = 0;
let score = 0;

function quiz() {

    document.getElementById("question").innerText = question[a].ques;
    answerA.innerText = question[a].answerA;
    answerB.innerText = question[a].answerB;
    answerC.innerText = question[a].answerC;
    answerD.innerText = question[a].answerD;
}
quiz()


function check(answer) {

    if (answer == question[a].correct) {
        score++;
    }

    if (a < question.length - 1) {
        a++;
        quiz()
    }
    else {

        if (score == 4) {
            window.location.href = "chucmung.html"
        }
        else {
            if (confirm("Ban lam sai roi, lam lai nhe?")) {
                window.location.reload();
            }
            else {
                window.location.href = "index.html";
            }

        }
    }

}

function nextPage() {
    window.location.href = "question.html"
}




