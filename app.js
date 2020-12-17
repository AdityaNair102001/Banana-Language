var btntranslate= document.querySelector("#btn-translate");
var txtinput=document.querySelector("#txt-input");


function show() {
   
    console.log("button pressed");
    console.log("input",txtinput.value);
}

btntranslate.addEventListener("click",show);


