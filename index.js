document.title = 'Мое название документа'
console.log(document.title);
// Мое название документа
let buttonElement = document.getElementById("showText");
let inputElements = document.getElementsByTagName("input");
let paragraphElement = document.getElementById("paragraph");
let clickCallBack =  () => {
    if (inputElements[0].value) {

        console.log(inputElements[0].value);
    } else console.log(paragraphElement.innerHTML)
}
buttonElement.addEventListener("click", clickCallBack);