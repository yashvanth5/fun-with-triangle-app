const sides = document.querySelectorAll(".side-input");
const hypoBtn = document.querySelector ("#hypo-btn");
const outputElement = document.querySelector ("#outputEl");

function calculateSumOfSquare (a,b){
    const sumOfSquare = a*a + b*b ;
    return sumOfSquare;
}





function calculateHypotenuse (){
    if ( Number(sides[0].value) > 0 && Number(sides[1].value) > 0 ) {
    const sumOfSquare = calculateSumOfSquare(Number(sides[0].value) , Number (sides[1].value)); 
        const lengthOfHypotenuse = Math.sqrt(sumOfSquare);
        outputEl.innerText = "The length of hypotenuse is " + lengthOfHypotenuse;
        outputEl.style.color = "green";
     }
     else {
        outputEl.innerText = "Please enter values of sides above zero!";
        outputEl.style.color = "red";
     }
   


}






hypoBtn.addEventListener("click",calculateHypotenuse);
 
