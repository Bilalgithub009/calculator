var display = document.getElementById("display");



function btnvlaue(num){

    display.value += num; 

}


function ans(){
var answer = eval(display.value);  
    display.value = answer;
}
function clearAll(){
    display.value = ""; 
}



function square(){
var squ = display.value * display.value;
display.value = squ;
}

