const display = document.getElementById('display');
const historyTable = document.getElementById('history-table');
let expression = '';

function displaynum(value){
    expression += value;
    display.value = expression;
}

function calculate(){
    try {
        const result = eval(expression);
        display.value = result;
        addToHistory(expression, result);
        expression = '';
    } catch (error) {
        display.value = 'Erro';
        expression = '';
    }
}

function addToHistory(expression) {
    const dateTime = new Date().toLocaleString(); // Obtém a data e hora atual
    const row = historyTable.insertRow(1);
    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);
    cell1.innerHTML = dateTime;
    cell2.innerHTML = expression;    
}



