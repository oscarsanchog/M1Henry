'use strict';

// 1010 = 5

function BinarioADecimal(num) {
   let decimal = 0  // 
   let base = 1 //
   for (let i = num.length - 1; i >= 0; i--) {
      if (num[i] === '1') {
         decimal = decimal + base;
      }
      base = base * 2
   }
   return decimal
}

function BinarioADecimal2(num) {
   let suma = 0
   let array = num.split('') // para convertir de un string a un array
   let arrayReverse = array.reverse() // para dar vuelta ese reverse
   for (let i = 0; i < num.length; i++) { // para recorrer el array
      suma += arrayReverse[i] * 2 ** i // Esta es la fórmula
   }
   return suma
}

function BinarioADecimal3(num) {
   let suma = 0
   let array = num.split('') // para convertir de un string a un array

   for (let i = 0; i < num.length; i++) { // para recorrer el array
      suma += parseInt(array[i]) * Math.pow(2, array.length - 1 - i) // math.pow es para las potencias, recibe la base y luego la potencia.
   }
   return suma
}


// ---------------------


function DecimalABinario(num) {
   let binario = ''
   while (num > 0) {
      let resto = num % 2
      binario = resto + binario
      num = Math.floor(num / 2)
   }
   return binario !== '' ? binario : '0'
}

function DecimalABinario2(num) {
   let binario = []
   while (num >= 1) {
      let resto = Math.trunc(num % 2)
      num = num / 2
      binario.unshift(resto)
   }
return binario.join('')
}



module.exports = {
   BinarioADecimal,
   DecimalABinario,
};
