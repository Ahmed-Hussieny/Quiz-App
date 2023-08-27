import { QuizPage } from "./quizPage.js";
// https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=general

export class QuizSettings{
    /*
    1-> inputs
    2-> fetch Data
    3-> quiz start
     */
    constructor(){
        $('#quiz-finish').slideUp(0);
        $('#quiz-page').slideUp(0);
        $('#alert1').hide(0);
        $('#inCorrect').hide(0);
        $('#Correct').hide(0);
        this.category = document.getElementById("category");
        // console.log(this.category)
        this.difficulty=document.getElementsByName("difficulty");
        // console.log(this.difficulty)
        this.numberOfQuestions=document.getElementById("numberOfQuestions");
        // document.getElementById("startBtn").addEventListener("click",this.startQuiz())    //kda hia btshawr 3ala el button nafso hw tb3tha httb3 el button
        // na 3ayzha tshawr 3ala el class nafso  f tar2ten
        // 1
        // document.getElementById("startBtn").addEventListener("click",()=>{this.startQuiz()})  // 3lashan el arrow function malhash el own this bta3ha
        // 2  hastakhdem bind(this)   btshil el this elly nta b3to w bt3ml this gdeda gaya mn el class

        // this.type=document.getElementsByName("Type");
        document.getElementById("startBtn").addEventListener("click",this.startQuiz.bind(this))        // mn gher arrow function
    }
  async  startQuiz(){
        let category = this.category.value;
        // let difficulty= this.difficulty.value;   msh htnfa3 3alshan hia rag3a f node list f ezzay h2olo node list .value 3alshan kda lazem ahwlha l array el awl
        // let difficulty= Array.from(this.difficulty); // 3ayz agib el 3onsor elly m3mlo checked  ha3mlha b (find) 3alatol
        let difficulty= Array.from(this.difficulty).find((e)=>e.checked).value; // kda tmam w fi hal tani
        // let difficulty=document.querySelector('[name="difficulty"]:checked') // hyrag3 awl haga shafha checked

        let numberOfQuestions =this.numberOfQuestions.value;
        // let type = Array.from(this.type).find((e)=>e.checked).value;
        const API = `https://opentdb.com/api.php?amount=${numberOfQuestions}&category=${category}&difficulty=${difficulty}`
        let questions=await this.feachData(API);
        if(questions.length>0){
            $('#alert1').hide(0);
            $('#quiz-app').slideUp(100);
            $('#quiz-page').slideDown(200);
            let Quiz = new QuizPage(questions); 
        }
        else{
                        $('#alert1').show(100);
                    }
        //mskthom 3alshan ageb el api 3alshan hab3to m3ah
    }

    async feachData(api){
        let res = await fetch(api);
        let Data = await res.json();
        return Data.results;

    }
}