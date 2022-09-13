function displayNum(n1){
    Calculator.text1.value = Calculator.text1.value + n1;
}

function cleanDisplay() {
    const inputText1 = document.getElementsByName('text1')[0];
    console.log(inputText1);
    if(inputText1) {
        inputText1.value = '';
    }
}