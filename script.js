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

function addToHistory(expression, result) {
    const dateTime = new Date().toLocaleString(); // Obtém a data e hora atual
    const row = historyTable.insertRow(1);
    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);
    const cell3 = row.insertCell(2);
    const cell4 = row.insertCell(3);
    cell1.innerHTML = dateTime;
    cell2.innerHTML = expression;
    cell3.innerHTML = result;
    cell4.innerHTML = '<button onclick="replaceDisplay(\'' + expression + '\', ' + result + ')">Reproduzir</button>';
}

function replaceDisplay(newExpression, newResult) {
    display.value = newExpression;
    expression = newExpression;
}

document.addEventListener('DOMContentLoaded', function () {
    display.value = '';
});
