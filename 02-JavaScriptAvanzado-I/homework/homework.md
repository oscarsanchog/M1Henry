# Homework JavaScript Avanzado I

## Scope & Hoisting

Determiná que será impreso en la consola, sin ejecutar el código.

> Investiga cuál es la diferencia entre declarar una variable con `var` y directamente asignarle un valor.

```javascript
x = 1;
var a = 5;
var b = 10;
var c = function (a, b, c) {
   var x = 10;     
   console.log(x);  10
   console.log(a);   8
   var f = function (a, b, c) {
      b = a; 
      console.log(b); 8
      b = c;
      var x = 5;
   };
   f(a, b, c);
   console.log(b); 9
};
c(8, 9, 10);
console.log(b); 10
console.log(x); 1
```

```javascript
console.log(bar); undefined
console.log(baz); // error
foo(); 'Hola!'
function foo() {
   console.log('Hola!');
}
var bar = 1;
baz = 2;
```

```javascript
var instructor = 'Tony';
if (true) {
   var instructor = 'Franco';
}
console.log(instructor); // Franco, porque var tiene scope global
```

```javascript
var instructor = 'Tony';
console.log(instructor); // Tony
(function () {
   if (true) {
      var instructor = 'Franco';
      console.log(instructor); // Franco
   }
})();
console.log(instructor); // Tony. lLa función no retorna nada, por lo que no cambia nada
```

```javascript
var instructor = 'Tony';
let pm = 'Franco';
if (true) {
   var instructor = 'The Flash';
   let pm = 'Reverse Flash';
   console.log(instructor); // The Flash
   console.log(pm); // Reverse Flash
}
console.log(instructor); // The flash
console.log(pm); // Franco
```

### Coerción de Datos

¿Cuál crees que será el resultado de la ejecución de estas operaciones?:

```javascript
6 / "3"// 2
"2" * "3"  // 6
4 + 5 + "px" // 9px
"$" + 4 + 5 // $45. Se debe a la precedencia de operadores.
"4" - 2 // 2
"4px" - 2 // NaN. Este sí es considerado un número igualmente.
7 / 0 // infinity. También es un dato numérico.
{}[0] // undefined. 
parseInt("09") // 9
5 && 2 // 2. Se queda con el último verdadero
2 && 5 //5
5 || 0 // 5 // se queda con el último verdadero. En este caso  el 5 es el único true.
0 || 5 // 5
[3]+[3]-[10] // 23. Primero concatena los arrays por el + (33), y luego los coerciona para restarlos (33-10)
3>2>1 // false. Es porque el 1 y el true son truthy values, por lo tanto true no es mayor que true
[] == ![] // true. Un array vacío es igual a que no exista el array.
```

> Si te quedó alguna duda repasá con [este artículo](http://javascript.info/tutorial/object-conversion).

### Hoisting

¿Cuál es el output o salida en consola luego de ejecutar este código? Explicar por qué:

```javascript
function test() {
   console.log(a); undefined
   console.log(foo()); 2 // se peude ejecutar antes de su   creación, porque es una función. Si estaría denntro de un var , daría undefined.

   var a = 1;
   function foo() {
      return 2;
   }
}

test();
```

Y el de este código? :

```javascript
var snack = 'Meow Mix';

function getFood(food) { // false
   if (food) {
      var snack = 'Friskies';
      return snack;
   }
   return snack;
}

getFood(false); // undefined
```

### This

¿Cuál es el output o salida en consola luego de ejecutar este código? Explicar por qué:

```javascript
var fullname = 'Juan Perez';
var obj = {
   fullname: 'Natalia Nerea',
   prop: {
      fullname: 'Aurelio De Rosa',
      getFullname: function () {
         return this.fullname;
      },
   },
};

console.log(obj.prop.getFullname()); // Aurelio de la rosa

var test = obj.prop.getFullname;

console.log(test()); // undefined
```

### Event loop

Considerando el siguiente código, ¿Cuál sería el orden en el que se muestra por consola? ¿Por qué?

```javascript
function printing() {
   console.log(1); // 1
   setTimeout(function () {
      console.log(2); // ...2
   }, 1000);
   setTimeout(function () {
      console.log(3); // .. 3
   }, 0);
   console.log(4); //4
}

printing(); // 1 4 3 2
```

</br >

---

## **✅ FEEDBACK**

### Usa este [**formulario**](https://docs.google.com/forms/d/e/1FAIpQLSe1MybH_Y-xcp1RP0jKPLndLdJYg8cwyHkSb9MwSrEjoxyzWg/viewform) para reportar tus observaciones de mejora o errores. Tu feedback es muy importante para seguir mejorando el modelo educativo.
