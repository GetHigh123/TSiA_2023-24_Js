//Zadanie 1
let x = document.getElementById("myForm");
x.addEventListener("focus", myFocusFunction, true);
function myFocusFunction() {
  document.getElementById("myfocus").style.backgroundColor = "yellow";
}

//Zadanie 2

let y=document.getElementById("myp");
y.addEventListener("blur", myBlurFunction, true);

function myBlurFunction(){
    let text=document.getElementById("myInput").value;
    let wielkie = text.toUpperCase();
    document.getElementById("myInput").value=text.toUpperCase();
}

// zadanie 3

let selectColor = document.querySelector('#selectColors')
function changeColor() {
  let color = selectColor.value
  selectColor.style.color = color
}

//Zadanie 4

let textToChange = document.querySelector("#textToChange")
function largetext() {
    textToChange.style.FontSize = 'xx-large';
} 
