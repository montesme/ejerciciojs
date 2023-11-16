var miNombre = "Mario"; // Reemplaza "TuNombre" con tu primer nombre
console.log(miNombre);

//Ejercicio 2//
var miApellido = "Montes"; 
console.log(miApellido);

//Ejercicio 3//
var miEdad = "35";
console.log(miEdad);

//Ejercicio 4//
var miMascota = "Brandy";
console.log(miMascota);

//Ejercicio 5 //
var edadMascota = "8";
console.log(edadMascota);

//Ejercicio 6 //
let textoingresado = prompt ("ingrese un texto");
console.log(miNombre);
console.log(miApellido);
console.log(miEdad);
console.log(miMascota);
console.log(edadMascota);

//Ejercicio 7//

var resultado = miNombre + miApellido;
console.log(resultado);

//Ejercicio 8//

var miEdad = 35;
var edadMascota = 8;
var sumaEdades = miEdad + edadMascota;
console.log(+sumaEdades);
var restaEdades = miEdad - edadMascota;
console.log( restaEdades);
var productoEdades = miEdad * edadMascota;
console.log(productoEdades);
var divisionEdades = miEdad / edadMascota;
console.log(divisionEdades);

// ejercicio 9 //

var miNombre = prompt("Por favor ingresa tu nombre");
console.log( miNombre);

//Ejercicio 15//

var alumno = {
    nombre: "Mario",
    apellido: "Montes",
    edad: 35,
    nota: 8.5,
    matricula: "A12345"
  };
  console.table(alumno);
  console.log("Nombre: " + alumno.nombre);
  console.log("Apellido: " + alumno.apellido);
  console.log("Edad: " + alumno.edad);
  console.log("Nota: " + alumno.nota);
  console.log("Matrícula: " + alumno.matricula);

  //ejercicio 12//

  var mascota = {
    nombre: "Brandy",
    especie: "Perro",
    raza: "De la Calle :)",
    edad: 8,
    color: "beige"
  };
  
 
  console.table({ Mascota: mascota });
  

  console.log("Nombre de la mascota: " + mascota.nombre);
  console.log("Especie: " + mascota.especie);
  console.log("Raza: " + mascota.raza);
  console.log("Edad: " + mascota.edad + " años");
  console.log("Color: " + mascota.color);

  //Ejercicio 13//


var frutas = ["Manzana", "Frutilla", "Naranja", "Uva", "Pera"];

//  completo ()
console.log("Array de frutas completo:");
console.log(frutas);

// array por separado
console.log("Elementos del array por separado:");
frutas.forEach(function(fruta, indice) {
  console.log("Elemento " + (indice + 1) + ": " + fruta);
});


// Ejercicio 14 //

var números = [1, 5, 10, 15, 20];

// array completo 
console.log("Array de números completo:");
console.log(números);

// array por separado
console.log("Elementos del array por separado:");
números.forEach(function(numero, indice) {
  console.log("Elemento " + (indice + 1) + ": " + numero);
});

//Ejercicio 15 /

var familia = [
    {
      nombre: "Mario",
      edad: 35,
      parentesco: "Padre"
    },
    {
      nombre: "Yessica",
      edad: 27,
      parentesco: "Madre"
    },
    {
      nombre: "Ana Sofia",
      edad: 7,
      parentesco: "Hija"
    },
    {
      nombre: "Luna Isabella",
      edad: 4,
      parentesco: "Hija"
    },
    {
      nombre: "Mario Jose",
      edad: 70,
      parentesco: "Abuelo"
    }
  ];
  
 
  console.log("Array de familia completo:");
  console.log(familia);
  

  console.log("Elementos del array por separado:");
  familia.forEach(function(individuo, indice) {
    console.log("Elemento " + (indice + 1) + ":");
    console.log("Nombre: " + individuo.nombre);
    console.log("Edad: " + individuo.edad);
    console.log("Parentesco: " + individuo.parentesco);
    console.log("\n");
  });
  
  
  
  
  
  