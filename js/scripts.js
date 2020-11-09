var breadTypes = ['Yupqa', `O'rtacha`, 'Qalin', 'Qolipli non'];
var sizes = [25, 30, 35];
var toppings = ['Pomidor', 'Tuzlangan bodring', `Kurka go'shti`, `Qo'ziqorin`, 'Zaytun', 'Qazi'];
var addl = ['Achchiq', 'Sosiskali'];

var elPizzaForm = document.querySelector('.js-pizza-form');
var elBreadSelect = elPizzaForm.querySelector('.js-bread-select');
var elSizeRadioWrapper = elPizzaForm.querySelector('.js-size-radio-wrapper');
var elToppingCheckboxWrapper = elPizzaForm.querySelector('.js-topping-checkbox-wrapper');
var elAddlIngredientWrapper = elPizzaForm.querySelector('.js-addl-ingredient-wrapper');

var elOrderState = document.querySelector('.order-state');
var elOrderBread = elOrderState.querySelector('.js-order-bread');
var elOlderSize = elOrderState.querySelector('.js-order-size');
var elOlderToppings = elOrderState.querySelector('.js-order-toppings');
var elOlderAddl = elOrderState.querySelector('.js-order-addl');

for (var i = 0; i < breadTypes.length; i++) {
  var elNewBreadOption = document.createElement('option');
  elNewBreadOption.textContent = breadTypes[i];

  elBreadSelect.appendChild(elNewBreadOption);
}

for (var i = 0; i < sizes.length; i++) {
  var elSizeLabel = document.createElement('label');
  var elSizeInput = document.createElement('input');
  var elSizeSpan = document.createElement('span');

  elSizeInput.type = 'radio';
  elSizeInput.name = 'size';
  elSizeInput.classList.add('size-radio', 'js-size-radio', 'ml-3');
  elSizeInput.value = sizes[i];

  elSizeSpan.textContent = `${sizes[i]} sm`;

  elSizeInput.addEventListener('change', function() {
    elOlderSize.textContent = this.value;
  });

  elSizeLabel.append(elSizeInput, elSizeSpan);
  elSizeRadioWrapper.appendChild(elSizeLabel);
}

for (var i = 0; i < toppings.length; i++) {
  var elToppingLabel = document.createElement('label');
  var elToppingInput = document.createElement('input');
  var elToppingSpan = document.createElement('span');

  elToppingInput.type = 'checkbox';
  elToppingInput.name = 'size';
  elToppingInput.classList.add('topping-checkbox', 'js-topping-checkbox', 'ml-3');
  elToppingInput.value = sizes[i];

  elToppingSpan.textContent = toppings[i];

  elToppingLabel.append(elToppingInput, elToppingSpan);
  elToppingCheckboxWrapper.appendChild(elToppingLabel);
}

for (var i = 0; i < addl.length; i++) {
  var elAddlLabel = document.createElement('label');
  var elAddlInput = document.createElement('input');
  var elAddlSpan = document.createElement('span');

  elAddlInput.type = 'checkbox';
  elAddlInput.name = 'size';
  elAddlInput.classList.add('addl-ingredient', 'js-addl-ingredient', 'ml-3');
  elAddlInput.value = addl[i];

  elAddlSpan.textContent = addl[i];

  elAddlLabel.append(elAddlInput, elAddlSpan);
  elAddlIngredientWrapper.appendChild(elAddlLabel);
}

var updateBreadType = function () {
  elOrderBread.textContent = elBreadSelect.value;
}

updateBreadType();
elBreadSelect.addEventListener('change', updateBreadType);
