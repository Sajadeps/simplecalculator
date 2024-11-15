//function to display content
function displayContent(content){
    result.value +=content
}
//clear input
function calcClear(){
    result.value =""
}
function calcDelete(){
    result.value = result.value.slice(0,-1);
}
function calcOutput(){
   result.value =eval(result.value)//eval is used in js for evaluation of the string
}