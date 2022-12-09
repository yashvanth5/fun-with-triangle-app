const areas = document.querySelectorAll(".area-input");
const areaBtn = document.querySelector ("#area-btn");
const outputElement = document.querySelector ("#outputEl");

function multiplyBaseAndHeight (base,height) {
    const multiplyOutput = base * height ;
    return multiplyOutput
}






function areaOfTraingle (){

    if (Number(areas[0].value) > 0 && Number(areas[1].value) > 0) {
        const multiplyOutput = multiplyBaseAndHeight (Number(areas[0].value) , Number (areas[1].value));
        const area = multiplyOutput/2;
        outputEl.innerText = "The area of the triangle is " + area + " cm²";
        outputEl.style.color = "green";
    }
    else {
       outputEl.innerText = "Please enter values of sides above zero!";
        outputEl.style.color = "red";
     }
    
    
  



}












areaBtn.addEventListener ("click", areaOfTraingle);