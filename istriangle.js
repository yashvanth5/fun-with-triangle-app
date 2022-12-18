const inputs = document.querySelectorAll("#angle-input");
const button = document.querySelector("#is-triangle-btn");
const outputEl = document.querySelector("#output");

function calculateSumOfAngle (angle1,angle2,angle3) {
    var sumOfAngle = angle1 + angle2 + angle3;
    return sumOfAngle;
}



function isTriangle (){
    var sumOfAngle = calculateSumOfAngle(Number(inputs[0].value) ,  Number ( inputs[1].value),  Number(inputs[2].value) );
    if(sumOfAngle === 180){
            outputEl.innerText = " amazing , the angles form a traingle";
            outputEl.style.color = "green";
       
        }

     else {
        outputEl.innerText = " oh shut , the angles dont form a triangle ";
        outputEl.style.color = "red";
    }
        }


button.addEventListener("click", isTriangle);