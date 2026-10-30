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
// map () ?

/*
    let palabraMayuscula = palabra.toUpperCase()
    let palabraArray = palabraMayuscula.split(" ")
    let palabraEspacios = palabraArray.map((letra)=>letra = letra.toUpperCase() + " ")
    .....
*/
// mas facil con for o con for of
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
console.log(trasformarMayusculafo ('ana'));
console.log(trasformarMayusculafo ('Maider'));

// con funcion split y join lo mas sencillo

function transformarMausculasj (palabra) {
    return palabra.toUpperCase().split('').join(' ');
}

console.log(transformarMausculasj ('ana'));
console.log(transformarMausculasj ('Maider'));

// habra un espacio tambien en la ultima palabra... podriamos detectar la ultima y decirle que ese caso sin espacio, algo asi...
// if (palabra[i] == palabra[length-1]) palabraMayuscula = palabraMayuscula + letra.toUpperCase()


/*
Ejercicio 2
Declara una función que acepte un nombre como parámetro y devuelva el número de palabras que tiene el nombre. Ejemplo: Para "Antonio Alberto Jesús" devolverá 3.


1- declarar una fuction con un parametro que sera el string del que debemos contar las palabras
2- recorrer ese string y contar el numero de espacios que tiene y podremos saber las palabras siempre que no haya espacio al final ni al principio. 
3 - para ello podriamos ignorar un espacio al principio y al final si es que lo hay con algun condicional...

se me acaba de ocurrir otra estrategia...:

1- igual, declaramos funcion...
2- con la funcion split podriamos converitir a array ese string
3- el tamaño del array, elementos que componen el array seria es el numero de palabras

*/

function contarPalabras (string){
    let texto = string;
    const textoArray = texto.split(" ");
    console.log(textoArray );
    return 'El número de palabras es: ' + textoArray.length;
}
console.log(contarPalabras ('Antonio Alberto Jesús'));

/*
Ejercicio 3:
Diseña un algoritmo que cuente las veces que aparece una determinada letra en una frase.

1- declarar la funcion con parametros la letra a buscar y la frase donde tenemos que buscar
2 - establecer un contador que nos cuente cuantas veces aparce
3 - recorrer la palabra, el bucle for y for of recorren strig similar a como si fuera un array
4 - si aparece la letra aumentamos contador 
5 - devolvermos el contador

*/

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

console.log(contarLetrafo ('casa', 'a'));
console.log(contarLetrafo ('casa esta pintada de blanco', 'a'));
