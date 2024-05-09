function appendToOutput(value) {
    document.getElementById("output").value += value;
}

function clearOutput() {
    document.getElementById("output").value = "";
}

function performOperation(operation) {
    var output = document.getElementById("output").value;
    if (output !== "") {
        if (output.charAt(output.length - 1) !== operation) {
            appendToOutput(operation);
        }
    }
}

function calculateResult() {
    var expression = document.getElementById("output").value;
    try {
        var result = eval(expression);
        document.getElementById("output").value = result;
    } catch (error) {
        document.getElementById("output").value = "Error";
    }
}
