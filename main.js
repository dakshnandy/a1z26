function encodeA1Z26() {
    let input = document.getElementById('inputText').value.toUpperCase();
    let output = '';
    for (let i = 0; i < input.length; i++) {
        let charCode = input.charCodeAt(i);
        if (charCode >= 65 && charCode <= 90) { // A-Z
            output += (charCode - 64) + ' ';
        } else if (input[i] === ' ') {
            output += '  ';
        } else {
            output += input[i] + ' ';
        }
    }
    document.getElementById('output').innerText = output.trim();
}

function decodeA1Z26() {
    let input = document.getElementById('input').value.split(' ');
    let output = '';
    for (let i = 0; i < input.length; i++) {
        let num = parseInt(input[i]);
        if (!isNaN(num) && num >= 1 && num <= 26) {
            output += String.fromCharCode(num + 64);
        } else if (input[i] === '') {
            output += ' ';
        } else {
            output += input[i];
        }
    }
    document.getElementById('outputText').innerText = output;
}

window.onload = function()
{
    const inputText = document.getElementById("inputText")
    inputText.addEventListener("input", function()
    {
        inputText.style.height = ("auto")
        inputText.style.height = inputText.scrollHeight + "px"
    })
}
