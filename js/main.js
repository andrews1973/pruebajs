/*
Ejercicio 1
Declara una función que acepte una palabra como parámetro y la devuelva con todos sus caracteres en mayúsculas y separados por espacios. Ejemplo: Para "Ana" devolverá "A N A".

pseudocodigo

1- declarar una fuction con un parametro que sera la palabra que queramos transformar
2- recorrer la palabra con algun bucle o funcion y separar cada letra
3- transformarla en mayuscula y añadir un espacio entre cada una
4- devolver con return
*/

// array.join(separador); ?
// split() ?
// toUpperCase()?

// supongamos que no conocemos las funciones split ni join: usamos for o con for of
console.log('EJERCICIO 1');

// con for 
function trasformarMayusculas (palabra){
    let palabraMayuscula = "";
    for (let i=0; i<palabra.length; i++){
        let letra = palabra[i]
        palabraMayuscula = palabraMayuscula + letra.toUpperCase() + " "
    }
    return `Transformamos ${palabra} en: ` + palabraMayuscula
}
console.log(trasformarMayusculas ('ana'));
console.log(trasformarMayusculas ('Maider'));

// con for of 

function trasformarMayusculafo (palabra){
    let palabraMayuscula = "";
    for (let letra of palabra){
        palabraMayuscula = palabraMayuscula + letra.toUpperCase() + " "
    }
    return `Transformamos ${palabra} en: ` + palabraMayuscula
}
console.log(trasformarMayusculafo ('hector'));
console.log(trasformarMayusculafo ('andres'));

// con map que nos devuelve un array, con foreAch seria parecido pero habria que crear un nuevo array e ir puseando

function trasformarMayusculafe (palabra){
    let arrayMayuscula = palabra.toUpperCase().split(''); // transforma a array mayuscula
    let nuevoArray = arrayMayuscula.map((elemento)=>{
        return elemento + " ";
    }) 
    
    return nuevoArray.join(""); // convertimos a string el array
} 

console.log(trasformarMayusculafe ('ana'));
console.log(trasformarMayusculafe ('hector'));

// con la funcion split y join lo mas sencillo 
// 1- transformar string a mayusculas, 2- transformar string a array, 3 transformar de nuevo a string con un espacio

function transformarMausculasj (palabra) {
    return palabra.toUpperCase().split("").join(" ");
}

console.log(transformarMausculasj ('ana'));
console.log(transformarMausculasj ('andres'));
console.log(); // separar el ejercicio


/*
Ejercicio 2
Declara una función que acepte un nombre como parámetro y devuelva el número de palabras que tiene el nombre. Ejemplo: Para "Antonio Alberto Jesús" devolverá 3.

1- declarar una fuction con un parametro que sera el string del que debemos contar las palabras
2- con la funcion split podemos converitir a array ese string
3- el tamaño del array, elementos que componen el array seria es el numero de palabras

*/
console.log('EJERCICIO 2');

function contarPalabras (string){
    let texto = string;
    const textoArray = texto.split(" ");
    //console.log(textoArray );
    return 'El número de palabras es: ' + textoArray.length;
}

console.log(contarPalabras ('Antonio Alberto Jesús'));
console.log(contarPalabras ('Lorem ipsum dolor sit amet, consectetur adipiscing elit'));
console.log(); // separar el ejercicio

/*
Ejercicio 3:
Diseña un algoritmo que cuente las veces que aparece una determinada letra en una frase.

1- declarar la funcion con parametros la letra a buscar y la frase donde tenemos que buscar
2 - establecer un contador que nos cuente cuantas veces aparce
3 - recorrer la palabra, el bucle for y for of recorren strig similar a como si fuera un array
4 - si aparece la letra aumentamos contador 
5 - devolvermos el contador

*/
console.log('EJERCICIO 3');

function contarLetra (frase, letra){
    let contador = 0;

    for (let i=0; i<frase.length; i++){
        
        if (frase[i] == letra){
            contador++
        }
        
    }
    return `el numero de ${letra} que aparecen en la frase ${frase} es : ${contador}`;
}

console.log(contarLetra ('casa', 'a'));
console.log(contarLetra ('casa esta pintada de blanco', 'a'));

// con for of

function contarLetrafo (string, letra){
    let contador = 0;
    for (let caracter of string){
        if (caracter == letra){
            contador++
        }
    }
        
    return `el numero de ${letra} que aparecen en la frase ${string} es : ${contador}`;
}

console.log(contarLetrafo ('coche', 'o'));
console.log(contarLetrafo ('el coche esta pintado de blanco', 'o'));
