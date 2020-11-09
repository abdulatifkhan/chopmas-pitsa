var breadTypes = ['Yupqa', `O'rtacha`, 'Qalin', 'Qolipli non'];
var sizes = [25, 30, 35];
var toppings = ['Pomidor', 'Tuzlangan bodring', `Kurka go'shti`, `Qo'ziqorin`, 'Zaytun', 'Qazi'];
var addl = ['Achchiq', 'Sosiskali'];

var elPizzaForm = document.querySelector('.js-pizza-form');
var elBreadSelect = elPizzaForm.querySelector('.js-bread-select');


for (var i = 0; i < breadTypes.length; i++) {
  var elNewBreadOption = document.createElement('option');
  elNewBreadOption.textContent = breadTypes[i];

  elBreadSelect.appendChild(elNewBreadOption);
}
