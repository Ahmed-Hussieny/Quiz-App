
export class QuizPage{
    constructor(quesstions){
        this.quetsions=quesstions;
        this.currentQuestion = 0;
        this.totalNumberOfQuestions = quesstions.length;
        this.score=0;
        document.getElementById('next').addEventListener('click',this.nextQuestion.bind(this))
        document.getElementById('tryBtn').addEventListener('click',this.finishTryAgain)
        this.showQuiz();
    }
    randomizer(answers){
        let current = answers.length , randomer;
        console.log(answers);
        while(current!=0){
            randomer =Math.floor(Math.random()*current);

            current--;
            //swap 
           [answers[current],answers[randomer]] = [answers[randomer],answers[current]]
        }
       
        console.log(answers);
    }
    showQuiz(){
        document.getElementById('currentQuestion').innerHTML =  this.currentQuestion+1;
        document.getElementById('totalNumberOfQuestions').innerHTML = this.totalNumberOfQuestions;
        document.getElementById('question').innerHTML = this.quetsions[this.currentQuestion].question;
        let answers=[this.quetsions[this.currentQuestion].correct_answer,...this.quetsions[this.currentQuestion].incorrect_answers];
        console.log(answers);
        this.randomizer(answers);
                let answersContainer = '';
        for(let i = 0 ; i<answers.length ; i++){
            // console.log(finalAnswers);
            answersContainer+=` <label class="form-check-label mb-2">
                                <input type="radio" class="form-check-input" name="answer" value="${answers[i]}">
                                     ${answers[i]}
                                </label>`
        }
        document.getElementById('rowAnswer').innerHTML = answersContainer;
    }
    nextQuestion(){
             if(Array.from(document.getElementsByName('answer')).find(e=>e.checked)!=undefined){
            $('#alert').hide(100);
            let correctAnswer = this.quetsions[this.currentQuestion].correct_answer;
            let userAnswer = Array.from(document.getElementsByName('answer')).find(e=>e.checked).value;
            // console.log(userAnswer);
            this.correctCheck(correctAnswer,userAnswer)
            this.currentQuestion++;
            if(this.currentQuestion<this.totalNumberOfQuestions){
                this.showQuiz();
            }else{
                // console.log('finished');
                $('#quiz-page').slideUp(100);
                $('#quiz-finish').slideDown(100);
                document.getElementById('score').innerHTML = this.score;
            }

        }else{
            $('#alert').show(100);
        }
    }
        correctCheck(coreectAnswer,userAnswer){
        if(coreectAnswer==userAnswer){
            $('#Correct').show(1000).hide(1000)
            this.score++;
        }else{
            $('#inCorrect').show(1000).hide(1000)
        }
    }

        finishTryAgain(){
        $('#quiz-finish').slideUp(100);
        $('#quiz-app').slideDown(100);

    }
    
}