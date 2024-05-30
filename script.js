// Qs1: Verificar se um número é múltiplo de 5
function checkMultipleOf5() {
    let number = document.getElementById("numberInput").value;
    number = parseInt(number);

    let result = (number % 5 === 0) ? `${number} is a multiple of 5` : `${number} is not a multiple of 5`;
    document.getElementById("multipleOf5Result").innerText = result;
}

// Qs2: Atribuir notas aos alunos com base nas pontuações
function assignGrade() {
    let score = document.getElementById("scoreInput").value;
    score = parseInt(score);

    let grade;
    if (score >= 80 && score <= 100) {
        grade = "A";
    } else if (score >= 70 && score <= 79) {
        grade = "B";
    } else if (score >= 60 && score <= 69) {
        grade = "C";
    } else if (score >= 50 && score <= 59) {
        grade = "D";
    } else if (score >= 0 && score <= 49) {
        grade = "F";
    } else {
        grade = "Invalid score";
    }

    document.getElementById("gradeResult").innerText = `Grade: ${grade}`;
}

// Calculadora
function calculate() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let operator = document.getElementById("operatorSelect").value;

    let result;
    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
        default:
            result = "Error: Invalid operator";
    }

    document.getElementById("calcResult").innerText = `Result: ${result}`;
}

// FizzBuzz Challenge
function fizzBuzz() {
    let output = "";
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            output += "FizzBuzz<br>";
        } else if (i % 3 === 0) {
            output += "Fizz<br>";
        } else if (i % 5 === 0) {
            output += "Buzz<br>";
        } else {
            output += i + "<br>";
        }
    }
    document.getElementById("fizzBuzzResult").innerHTML = output;
}
