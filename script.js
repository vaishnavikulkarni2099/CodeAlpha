let display = document.getElementById('display');
let historyList = document.getElementById('history-list');

// Append value to input
function appendValue(value) {
    display.value += value;
}

// Clear the input
function clearDisplay() {
    display.value = '';
}

// Delete the last character
function deleteLast() {
    display.value = display.value.slice(0, -1);
}

// Calculate and show result
function calculateResult() {
    try {
        let result = eval(display.value);
        addHistory(display.value + " = " + result);
        display.value = result;
    } catch (error) {
        alert("Invalid Expression");
    }
}

// Add to history
function addHistory(entry) {
    let li = document.createElement('li');
    li.textContent = entry;
    historyList.appendChild(li);
}

// Toggle Dark/Light Mode
function toggleTheme() {
    document.body.classList.toggle('dark');
}
