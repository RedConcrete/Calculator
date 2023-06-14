
var buttonClicked = 0;
var tipAmount = 0;
var totalAmount = 0;


const tipAmountText = document.getElementById('tipAmount');
const totalAmountText = document.getElementById('totalAmount');


document.addEventListener('DOMContentLoaded', function () {
    

    runCalc();
    btn.forEach(function (button) {
        

        button.addEventListener('click', function () {
            
            if(buttonClicked != button.id){
                button.classList.add("btn-activ");
                
                buttonClicked = button.id;

            console.log(button.id);

                btn.forEach(function (button) {
                    if(buttonClicked != button.id){
                        button.classList.remove("btn-activ");
                    }
                });
            }
            else{
                button.classList.add("btn-activ");
            }
        });
        
    });
});

function runCalc(){
    console.log("test");
}


