var arrayInput = [];
var arrayName = [];
let sum = 0;
let total = 0;
let text = "";

function Enviar() {
  inputsValue = document.getElementById("gasto").value;
  inputsName = document.getElementById("nombre").value;
  arrayInput.push(inputsValue);
  arrayName.push(inputsName);

  for (let i = 0; i < arrayName.length; i++) {
    sum = parseFloat(arrayInput[i]);
    text += `<button class="gasto-persona" onclick:"Eliminar()"> ${arrayName[i]}: $${arrayInput[i]} </button>`;
    document.getElementById("Lista").innerHTML = text;
  }
  text = "";

  total += parseFloat(sum.toFixed(2));

  document.getElementById("Total").innerHTML = "Total: $" + total.toFixed(2);
  document.getElementById("Division").innerHTML =
    "A cada uno le toca aportar: $" + (total / arrayInput.length).toFixed(2);
}

function Borrar() {
  inputValue = document.getElementById("gasto");
  inputName = document.getElementById("nombre");
  inputName.value = "";
  inputValue.value = 0;
}
