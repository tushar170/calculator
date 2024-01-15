let displayValue = '0';

function updateDisplay() {
    document.getElementById('result').value = displayValue;
}

function appendToDisplay(value) {
    if (displayValue === '0' && value !== '+' && value !== '-' && value !== '*' && value !== '/') {
        displayValue = value;
    } else {
        displayValue += value;
    }
    updateDisplay();
}

function clearDisplay() {
    displayValue = '0';
    updateDisplay();
}

function calculateResult() {
    try {
        displayValue = eval(displayValue).toString();
    } catch (error) {
        displayValue = 'Error';
    }
    updateDisplay();
}

updateDisplay();
