const inputs = document.querySelectorAll('input'),
      btn = document.querySelectorAll('button')[0],
      result = document.querySelector('.answer');

function strangeAmerican(billAmount, taxAmount, tipAmount){
    const calculate = billAmount + billAmount * taxAmount + billAmount * tipAmount;
    result.innerHTML = 'Your total bill amount is: $' + calculate + '.';
};

btn.addEventListener('click', () =>{
    strangeAmerican(inputs[0].valueAsNumber, inputs[1].valueAsNumber, inputs[2].valueAsNumber);
});