
var ProcentAmountNumber = 0;
var tipAmount = 0;
var tipAmountPerPerson = 0;
let totalAmount = 0;

let billAmountTextarea;
let peopleAmountTextarea;
var billAmount = 0;
var peopleAmount = 0;

var OneProzent = 0;

let spanTip;
let spanTotal;



document.addEventListener('DOMContentLoaded', function () {
    reset();
    checkButtons();
});

function checkButtons() {
    const btns = document.querySelectorAll('.btn');

    btns.forEach(function (button) {
        button.addEventListener('click', function () {
            if(button.id != 7){
                if (ProcentAmountNumber != button.id) {
                    button.classList.add("btn-activ");
    
                    ProcentAmountNumber = button.id;
                    calcTip();
    
                    btns.forEach(function (button) {
                        if (ProcentAmountNumber != button.id) {
                            button.classList.remove("btn-activ");
                        }
                    });
                }
                else {
                    button.classList.add("btn-activ");
                }
            }
            else{
                reset();
            }
        });
    });
}


function getTipWithout() {
    switch (ProcentAmountNumber) {
        case "1": {
            OneProzent = billAmount / 100;
            tipAmount = OneProzent * 5;
            break;
        }
        case "2": {
            OneProzent = billAmount / 100;
            tipAmount = OneProzent * 10;
            break;
        }

        case "3": {
            OneProzent = billAmount / 100;
            tipAmount = OneProzent * 15;
            break;
        }

        case "4": {
            OneProzent = billAmount / 100;
            tipAmount = OneProzent * 20;
            break;
        }

        case "5": {
            OneProzent = billAmount / 100;
            tipAmount = OneProzent * 50;
            break;
        }

        case "6": {


            break;
        }

        default: {
            console.log("Invalid percentage amount.");
        }

    }
}

function getTipWith() {
    switch (ProcentAmountNumber) {
        case "1": {
            OneProzent = billAmount / 100;
            tipAmount = OneProzent * 5;
            tipAmountPerPerson = tipAmount / peopleAmount;
            break;
        }
        case "2": {
            OneProzent = billAmount / 100;
            tipAmount = OneProzent * 10;
            tipAmountPerPerson = tipAmount / peopleAmount;
            break;
        }

        case "3": {
            OneProzent = billAmount / 100;
            tipAmount = OneProzent * 15;
            tipAmountPerPerson = tipAmount / peopleAmount;
            break;
        }

        case "4": {
            OneProzent = billAmount / 100;
            tipAmount = OneProzent * 20;
            tipAmountPerPerson = tipAmount / peopleAmount;
            break;
        }

        case "5": {
            OneProzent = billAmount / 100;
            tipAmount = OneProzent * 50;
            tipAmountPerPerson = tipAmount / peopleAmount;
            break;
        }

        case "6": {

            break;
        }

        default: {
            console.log("Invalid percentage amount.");
        }

    }
}

function calcTip() {

    billAmountTextarea = document.getElementById("billText");
    billAmount = billAmountTextarea.value;

    peopleAmountTextarea = document.getElementById("poepleText");
    peopleAmount = peopleAmountTextarea.value;

    if (billAmount != 0) {
        if (peopleAmount != 0) {
            getTipWith();
            spanTip = document.getElementById("tipAmount").innerHTML = "$" + tipAmountPerPerson.toFixed(2);
        }
        else {
            getTipWithout();
            spanTip = document.getElementById("tipAmount").innerHTML = "$" + tipAmount.toFixed(2);
        }

        calcTotal();
    }
    else {
        console.log("No Bill Amount set!!");
    }

}

function calcTotal() {

    var sum = Number(billAmount) + Number(tipAmount);

    if (peopleAmount == 0) {
        spanTotal = document.getElementById("totalAmount").innerHTML = "$" + sum.toFixed(2);
    }
    else {
        sum = Number(sum) / Number(peopleAmount);
        spanTotal = document.getElementById("totalAmount").innerHTML = "$" + sum.toFixed(2);
    }

}

function reset() {

    tipAmount = 0;
    totalAmount = 0;


    spanTip = document.getElementById("tipAmount").innerHTML = "$" + tipAmount;
    spanTotal = document.getElementById("totalAmount").innerHTML = "$" + totalAmount;


}





