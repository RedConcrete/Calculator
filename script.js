
var ProcentAmountNumber = 0;
var tipAmount = 0;
var tipAmountPerPerson = 0;
let totalAmount = 0;

let billAmountTextarea;
let peopleAmountTextarea = null;
let customTextarea;

var billAmount = 0;
var peopleAmount = 0;
var customAmount = 0;

var OneProzent = 0;

let spanTip;
let spanTotal;

let customButton = null;

let isError = false;
let errorText;



document.addEventListener('DOMContentLoaded', function () {

    errorText = document.getElementById("error");
    reset();
    checkButtons();
    checkInputField();
});

function checkButtons() {
    const btns = document.querySelectorAll('.btn');
    customTextarea = document.getElementById("7");

    btns.forEach(function (button) {
        button.addEventListener('click', function () {
            if(button.id != 8){
                if(button.id == 6)
                {
                    customButton = button;
                    button.style.display = 'none';
                    customTextarea.style.display = 'flex';
                }

                if (ProcentAmountNumber != button.id) {
                    button.classList.add("btn-activ");
    
                    ProcentAmountNumber = button.id;
                    console.log (ProcentAmountNumber);
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

function checkInputField(){

    customTextarea.addEventListener('focus', function() {
        customAmount = customTextarea.value;
        calcTip();
    });

    customTextarea.addEventListener('input', function() {
        customAmount = customTextarea.value;
        console.log("test")
        calcTip();
    });

    customTextarea.addEventListener('focusout', function() {
        console.log(customAmount);
        if(customAmount == "" ||  customAmount == 0 ||  customAmount == null ){
            customButton.style.display = 'block';
            customTextarea.style.display = 'none';
        }
      });
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

        case "7": {
            OneProzent = billAmount / 100;
            tipAmount = OneProzent * customAmount;
            tipAmountPerPerson = tipAmount / peopleAmount;
            break;
        }

        default: {
            console.log("Invalid percentage amount.");
        }
    }

    console.log("ProcentAmountNumber " + ProcentAmountNumber);
}

function error(){

    errorText.style.display = "block";   
    
    
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
            calcTotal();
            errorText.style.display = "none"
            console.log("peopleAmount = "+ peopleAmount);
        }
        else {
            error();
        }
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


    spanTip = document.getElementById("tipAmount").innerHTML = "$" + 0.00;
    spanTotal = document.getElementById("totalAmount").innerHTML = "$" + 0.00;
    billAmountTextarea = document.getElementById("billText");
    peopleAmountTextarea = document.getElementById("poepleText");

    billAmountTextarea.value = 0;
    peopleAmountTextarea.value = 0;


    console.log("reset");


}





