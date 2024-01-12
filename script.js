
function calcularFactorial(numero) {
    if (numero < 0) {
      return "El factorial no está definido para números negativos";
    }

    if (numero === 0 || numero === 1) {
      return 1;
    } else {

      return numero * calcularFactorial(numero - 1);
    }
  }

  do {
    let input = prompt("Ingrese un numero");
    numero = parseFloat(input);
  
    
    if (isNaN(numero)) {
      alert("Por favor, ingrese un número válido.");
    }
  } while (isNaN(numero));

  let factorial = numero * calcularFactorial(numero - 1);

document.write(`El Factorial del numero es ${factorial}`);
