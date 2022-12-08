const quizForm = document.querySelector(".form-quiz");
const submitBtn = document.querySelector("#submit-btn");
const outputEl = document.querySelector("#output");

const correctAnswers = [ "90°" ,"right angled"];

function calculateScore () {
    let score = 0;
    index = 0;
    const formResults = new FormData (quizForm) ;
    for (let value  of formResults.values ()){
      if ( value === correctAnswers[index]){
     score = score + 1;
    }
      index = index + 1 ;
        }
       outputEl.innerText = " score is " + score ;


}















submitBtn.addEventListener ("click" , calculateScore ) ;