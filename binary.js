'use strict'
const decimalInput = document.getElementById('cont1');
const conver_btn = document.getElementById('conver');
const binary_output = document.getElementById('cont2');
conver_btn.addEventListener('click', () => {
  const decimal_value =parseFloat(cont1.value);
  if (! isNaN(decimal_value)){
    const binary_value = decimalToBinary(decimal_value);
    cont2.value = binary_value;
  }
  else {
    cont2.value = 'entrer un nombre decimal valide';
  }
});
//  la function/
function decimalToBinary(decimal){
 return decimal.toString(2);
}
binary(4);
