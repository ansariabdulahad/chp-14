let allBtn = document.querySelectorAll('button');
let allInput = document.querySelectorAll('input');
let resultEl = document.querySelector('.result');

// Calculation functionality.

allBtn[0].onclick = () => {
    let num1 = allInput[0].value;
    let num2 = allInput[2].value;
    let operator = allInput[1].value;

    switch (operator) {
        case '+': addition(num1, num2);
            break;
        case '-': subtraction(num1, num2);
            break;
        case '*': multiplication(num1, num2);
            break;
        case '%': remainder(num1, num2);
            break;
        default: resultEl.innerHTML = "Please choose correct operator :: + | - | * | %"
    }
}

const addition = (num1, num2) => resultEl.innerHTML = Number(num1) + Number(num2);

const subtraction = (num1, num2) => resultEl.innerHTML = num1 - num2;

const multiplication = (num1, num2) => resultEl.innerHTML = num1 * num2;

const remainder = (num1, num2) => resultEl.innerHTML = num1 % num2;

allBtn[1].onclick = () => {
    allInput[0].value = "";
    allInput[1].value = "";
    allInput[2].value = "";
    resultEl.innerHTML = "Your result ?";
}

// Date and Time Functionality coding.

let date = new Date();
let day = date.getDay();
let currentDate = date.getDate();
let month = date.getMonth();
let year = date.getFullYear();

// For Days
switch (day) {
    case 0: allBtn[2].innerHTML = "SUN";
        break;
    case 1: allBtn[2].innerHTML = "MON";
        break;
    case 2: allBtn[2].innerHTML = "TUES";
        break;
    case 3: allBtn[2].innerHTML = "WED";
        break;
    case 4: allBtn[2].innerHTML = "THURS";
        break;
    case 5: allBtn[2].innerHTML = "FRI";
        break;
    case 6: allBtn[2].innerHTML = "SAT";
        break;
}

// For Current Date
currentDate < 10 ? currentDate = "0" + currentDate : currentDate;
allBtn[3].innerHTML = currentDate;

// For Month 
switch (month) {
    case 0: allBtn[4].innerHTML = "JAN";
        break;
    case 1: allBtn[4].innerHTML = "FEB";
        break;
    case 2: allBtn[4].innerHTML = "MAR";
        break;
    case 3: allBtn[4].innerHTML = "APR";
        break;
    case 4: allBtn[4].innerHTML = "MAY";
        break;
    case 5: allBtn[4].innerHTML = "JUN";
        break;
    case 6: allBtn[4].innerHTML = "JUL";
        break;
    case 7: allBtn[4].innerHTML = "AUG";
        break;
    case 8: allBtn[4].innerHTML = "SEP";
        break;
    case 9: allBtn[4].innerHTML = "OCT";
        break;
    case 10: allBtn[4].innerHTML = "NOV";
        break;
    case 11: allBtn[4].innerHTML = "DEC";
        break;
}

// For Year
allBtn[5].innerHTML = year;

const dateFunction = () => {
    let date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();

    // For hour
    hour < 10 ? hour = "0" + hour : hour;

    // For Minute
    minute < 10 ? minute = "0" + minute : minute;

    // For second
    second < 10 ? second = "0" + second : second;

    // For AM and PM
    allBtn[9].innerHTML = hour > 12 ? "PM" : "AM";

    // Update the values after checking conditions
    allBtn[6].innerHTML = hour + " h";
    allBtn[7].innerHTML = minute + " m";
    allBtn[8].innerHTML = second + " s";

    allBtn[8].style.border = "1px solid rgb(251, 165, 136)";
    allBtn[8].style.boxShadow = "0px 0px 5px rgb(251, 188, 136)";
}

setInterval(() => {
    dateFunction();
}, 1000);
