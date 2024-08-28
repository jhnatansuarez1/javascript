let n = 10;

nextPrime:
for (let i = 2; i <= n; i++) { // por cada número i en el rango de 2 a n...

  for (let j = 2; j < i; j++) { // verificar si existe algún divisor entre 2 y i-1
    if (i % j == 0) continue nextPrime; // si hay un divisor, no es primo, pasar al siguiente i
  }

  alert(i); // si no se encontró divisor, es primo
}

let day = "miércoles";

switch(day) {
  case 'lunes':  // si day es 'lunes'
    console.log("Es lunes, empieza la semana.");
    break;

  case 'miércoles':  // si day es 'miércoles'
    console.log("Es miércoles, estamos a mitad de semana.");
    break;

  case 'viernes':  // si day es 'viernes'
    console.log("Es viernes, casi fin de semana.");
    break;

  default:  // si day no coincide con ningún caso anterior
    console.log("Es un día normal.");
    break;
}

function max(a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
}

// Ejemplo de uso:
console.log(max(5, 10)); // Devuelve 10
console.log(max(20, 15)); // Devuelve 20
function max(a, b) {
  return a > b ? a : b;
}

// Ejemplo de uso:
console.log(max(5, 10)); // Devuelve 10
console.log(max(20, 15)); // Devuelve 20

let greet = function() {
  console.log("¡Hola, bienvenido!");
};

// Llamada a la función
greet();  // Esto escribirá "¡Hola, bienvenido!" en la consola

let age = prompt("¿Cuál es tu edad?", 18);

let welcome = (age < 18) ?
  () => alert('¡Hola, joven!') :  // Si la edad es menor a 18
  () => alert("¡Saludos, adulto!");  // Si la edad es 18 o mayor

welcome();  // Llamada a la función para mostrar el mensaje

function sayHello() {
  console.log("¡Hola, mundo!");
}  // No se necesita punto y coma después de esta declaración de función

// Llamada a la función
sayHello();

for (let i = 0; i < 5; i++) {
  console.log("Número: " + i);
}  // No se necesita punto y coma después de este bucle `for`

function greetUser(name) {
  let greeting = `Hola, ${name}!`;

  debugger;  // <-- la ejecución del código se detendrá aquí si las herramientas de desarrollo están abiertas

  displayMessage(greeting);
}

function displayMessage(message) {
  console.log(message);
}

// Llamada a la función
greetUser("Carlos");

let  = prompt("Introduce un número:");

if (n < 0) {
  alert(`El número ${n} no es válido para esta operación.`);
} else {
  alert(`El número ${n} es válido.`);
}

function showPrimes(n) {
  for (let i = 2; i < n; i++) {
    if (isPrime(i)) {
      console.log(i); // Mostrar el número primo en la consola
    }
  }
}

function isPrime(n) {
  // Solo necesitamos verificar hasta la raíz cuadrada de n
  for (let i = 2, sqrt = Math.sqrt(n); i <= sqrt; i++) {
    if (n % i == 0) return false;  // Si n es divisible por i, no es primo
  }
  return true;  // Si no se encontró divisor, n es primo
}

// Llamada a la función para mostrar los números primos menores que 20
showPrimes(20);

let user = authenticateUser(); // Variable global 'user'

function authenticateUser() {
  return { name: "Carlos", role: "Admin" };
}

function anotherValue() {
  return { name: "Ana", role: "User" };
}

function render() {
  let user = anotherValue(); // Se declara otra variable 'user' en el ámbito local de la función
  
  // Simulando muchas líneas de código que hacen algo
  console.log("Procesando datos...");
  console.log("Más procesamiento...");

  // <-- Aquí el programador quiere trabajar con 'user' y...
  console.log(`Usuario actual dentro de la función: ${user.name} (${user.role})`);
  
  // Si el programador necesita trabajar con la variable 'user' global:
  console.log(`Usuario global: ${window.user.name} (${window.user.role})`);
}

// Llamada a la función render
render();

// Ver el valor de 'user' en el ámbito global
console.log(`Usuario global fuera de la función: ${user.name} (${user.role})`);

// Función que vamos a probar
function pow(base, exponent) {
  return base ** exponent;
}

// Descripción del grupo de pruebas para la función `pow`
describe("pow", function() {

  // Prueba: 2 elevado a la potencia de 3 es 8
  it("2 elevado a la potencia de 3 es 8", function() {
    assert.equal(pow(2, 3), 8);
  });

  // Prueba: 3 elevado a la potencia de 3 es 27
  it("3 elevado a la potencia de 3 es 27", function() {
    assert.equal(pow(3, 3), 27);
  });

  // Prueba: 4 elevado a la potencia de 2 es 16
  it("4 elevado a la potencia de 2 es 16", function() {
    assert.equal(pow(4, 2), 16);
  });

  // Prueba: 5 elevado a la potencia de 0 es 1
  it("5 elevado a la potencia de 0 es 1", function() {
    assert.equal(pow(5, 0), 1); // Cualquier número elevado a 0 es 1
  });

});

let width;

// Si `width` es `null` o `undefined`, se asigna el valor predeterminado de 200
width = width ?? 200;

console.log(width); // Resultado: 200

width = 150;
width = width ?? 200;

console.log(width); // Resultado: 150
let wid

// Transpilación: Si `width` no es `undefined` ni `null`, se usa su valor; de lo contrario, 200
width = (width !== undefined && width !== null) ? width : 200;

console.log(width); // Resultado: 200

width = 150;
width = (width !== undefined && width !== null) ? width : 200;

console.log(width); // Resultado: 150

function marry(man, woman) {
  // Asigna el hombre como esposo de la mujer
  woman.husband = man;

  // Asigna la mujer como esposa del hombre
  man.wife = woman;

  // Devuelve un nuevo objeto que representa a la familia
  return {
    father: man,
    mother: woman
  }
}

// Crear un objeto familia llamando a la función 'marry'
let family = marry({
  name: "John"
}, {
  name: "Ann"
});

// Imprimir el objeto familia
console.log(family);
console.log(family.father.name); // "John"
console.log(family.mother.name); // "Ann"
console.log(family.father.wife.name); // "Ann"
console.log(family.mother.husband.name); // "John"

let calculator = {
  // Método para sumar a y b
  sum() {
    return this.a + this.b;
  },

  // Método para multiplicar a y b
  mul() {
    return this.a * this.b;
  },

  // Método para leer los valores de a y b del usuario
  read() {
    this.a = +prompt('a?', 0); // Solicita el valor de a y lo convierte a número
    this.b = +prompt('b?', 0); // Solicita el valor de b y lo convierte a número
  }
};

calculator.read();           // Llama al método para leer los valores de a y b
alert( calculator.sum() );   // Muestra la suma de a y b
alert( calculator.mul() );   // Muestra el producto de a y b

function Calculator() {
  // Método para leer los valores de a y b del usuario
  this.read = function() {
    this.a = +prompt('a?', 0); // Solicita el valor de a y lo convierte a número
    this.b = +prompt('b?', 0); // Solicita el valor de b y lo convierte a número
  };

  // Método para sumar a y b
  this.sum = function() {
    return this.a + this.b;
  };

  // Método para multiplicar a y b
  this.mul = function() {
    return this.a * this.b;
  };
}

// Crear una nueva instancia de Calculator
let calculato

// Leer los valores de a y b
calculator.read();

// Mostrar la suma de a y b
alert("Sum=" + calculator.sum());

// Mostrar el producto de a y b
alert("Mul=" + calculator.mul());

let userAdmin = {
  // Método admin que muestra un mensaje de alerta
  admin() {
    alert("I am admin");
  }
};

let userGuest = {}; // Objeto vacío sin métodos

// Llamada segura al método admin en userAdmin
userAdmin.admin?.(); // Muestra "I am admin"

// Llamada segura al método admin en userGuest
userGuest.admin?.(); // No pasa nada ya que el método no existe

let john = {
  name: "John", // Propiedad name con el valor "John"
  
  // Método sayHi que muestra un mensaje de alerta
  sayHi: function() {
    alert("Hi buddy!"); // Muestra "Hi buddy!"
  }
};

// Llamada al método sayHi
john.sayHi(); // Muestra la alerta "Hi buddy!"

function readNumber() {
  let num; // Declarar la variable num

  // Bucle que solicita un número hasta que se ingrese un valor válido
  do {
    num = prompt("Ingrese un número por favor:", 0); // Solicitar número
  } while (!isFinite(num)); // Continuar mientras el valor no sea finito

  // Si el usuario cancela o deja el campo en blanco, devolver null
  if (num === null || num === '') return null;

  return +num; // Convertir la entrada a número y devolverlo
}

// Mostrar el valor leído en un alert
alert(`Read: ${readNumber()}`);

let str = 'Astuto como un zorro, fuerte como un buey'; // Cadena en la que se buscará
let target = 'como'; // Palabra objetivo para buscar

let pos = 0; // Posición inicial de búsqueda
while (true) {
  // Buscar la palabra objetivo a partir de la posición pos
  let foundPos = str.indexOf(target, pos);

  // Si no se encuentra la palabra objetivo, salir del bucle
  if (foundPos == -1) break;

  // Mostrar una alerta con la posición de la palabra encontrada
  alert(`Encontrado en ${foundPos}`);

  // Continuar la búsqueda desde la siguiente posición
  pos = foundPos + 1;
}

function calculateSums(arr) {
  for (let start = 0; start < arr.length; start++) {
    let sum = 0;
    console.log(`Comenzando desde ${arr[start]}:`);

    for (let i = start; i < arr.length; i++) {
      sum += arr[i];
      console.log(sum);
    }

    console.log(); // Línea en blanco para separar los resultados
  }
}

// Ejemplo de uso:
let numbers = [-1, 2, 3, -9, 11];
calculateSums(numbers);

let calc = new Calculator();

console.log(calc.calculate("3 + 7")); // 10
console.log(calc.calculate("10 - 6")); // 4

// Agregar un nuevo método
calc.addMethod("*", (a, b) => a * b);
calc.addMethod("/", (a, b) => a / b);

console.log(calc.calculate("5 * 4")); // 20
console.log(calc.calculate("20 / 4")); // 5
function Calculator() {
  // Métodos predefinidos para operaciones básicas
  this.methods = {
    "-": (a, b) => a - b,
    "+": (a, b) => a + b
  };

  // Método para calcular la operación basada en una cadena de texto
  this.calculate = function(str) {
    let split = str.split(' '), // Dividir la cadena en [a, op, b]
      a = +split[0],           // Convertir a a número
      op = split[1],           // Obtener el operador
      b = +split[2];           // Convertir b a número

    // Verificar si el operador es válido y los números son correctos
    if (!this.methods[op] || isNaN(a) || isNaN(b)) {
      return NaN; // Retornar NaN si hay un problema
    }

    return this.methods[op](a, b); // Realizar la operación
  };

  // Método para agregar nuevos métodos al objeto methods
  this.addMethod = function(name, func) {
    this.methods[name] = func; // Agregar el nuevo método
  };
}

let range = {
  from: 1, // El inicio del rango
  to: 5    // El final del rango
};

// Implementar el iterador
range[Symbol.iterator] = function() {
  return {
    current: this.from, // La posición inicial
    last: this.to,     // La posición final

    // El método next es llamado en cada iteración
    next() {
      if (this.current <= this.last) {
        // Si el valor actual está dentro del rango, devolverlo y avanzar
        return { done: false, value: this.current++ };
      } else {
        // Si el valor actual está fuera del rango, terminar la iteración
        return { done: true };
      }
    }
  };
};

// Usar el iterador con un bucle for..of
for (let num of range) {
  alert(num); // 1, luego 2, 3, 4, 5
}

