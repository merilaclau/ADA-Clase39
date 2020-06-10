// TAREA PARAMETERS
 // 1
/***********************************************
 * 
 * Escribir una función que reciba como parámetro
 * un número e imprima ese número al revés.
 * array.reverse
 * 
 ***********************************************/

const reverseNumber = () => {
    let numString = prompt(`Ingresá un número de al menos dos cifras`);
    const numArray = numString.split("");
    numArray.reverse();
    let stringReverse = numArray.join("");
    alert(`El número al revés es ${stringReverse}`);
}

reverseNumber();



 //2
 /***********************************************
 * 
 * Escribir una función que reciba una palabra
 * e imprima sus letras ordenadas alfabéticamente.
 * Split y join + sort
 *  
 ***********************************************/

 const sortWord = () => {
     let word = prompt("Ingresá una palabra");
     const wordArray = word.split("");
     wordArray.sort();
     let sortedWord = wordArray.join("");
     alert(`La palabra reordenada es ${sortedWord}`)
 }

 sortWord();



// 3
 /***********************************************
 * 
 * Escribir una función que reciba una frase
 * e imprima la misma con la primera letra de 
 * cada palabra en mayúsculas.
 * Join y split
 *  
 ***********************************************/
// Solución 2: con charAt
const toUpperCase = () => {
    let phraseString = prompt("Ingresá una frase");
    const phraseArray = phraseString.split(" ");
    for (let i = 0; i < phraseArray.length; i++) {
        phraseArray[i] = phraseArray[i].charAt(0).toUpperCase() + (phraseArray[i].slice(1));
    }
    phraseString = phraseArray.join(" ");
    alert(`${phraseString}`)
}

toUpperCase();
 
// Solución 2: sin charAt
const toUpperCase = () => {
    let phraseString = prompt("Ingresá una frase");
    const phraseArray = phraseString.split(" ");
    for (let i = 0; i < phraseArray.length; i++) {
        phraseArray[i] = phraseArray[i][0].toUpperCase() + (phraseArray[i].slice(1));
    }
    phraseString = phraseArray.join(" ");
    alert(`${phraseString}`)
}

toUpperCase(); 



 //4
/***********************************************
 * 
 * Escribir una función que reciba una frase
 * e imprima la palabra mas larga de la misma
 * array.reduce
 *  
 ***********************************************/

// Solución 1: sin array.reduce
let charNum = 0;

const findLongestWord = () => {
    let phraseString = prompt("Ingresá una frase");
    const phraseArray = phraseString.split(" ");
    for (let i = 0; i < phraseArray.length; i++) {
        if (charNum < phraseArray[i].length) {
            charNum = phraseArray[i].length
        } 
    }
    for (let i = 0; i < phraseArray.length; i++) {
        if (charNum == phraseArray[i].length) {
            alert(`La palabra más larga de la frase es ${phraseArray[i]}`)
            i = phraseArray.length
        }
    }
}

findLongestWord();

// Solución 2: con array.reduce
const findLongestWord = () => {
    let phraseString = prompt("Ingresá una frase");
    const phraseArray = phraseString.split(" ");
    const longestWord = phraseArray.reduce((result, currentWord) => result = currentWord.length > result.length ? currentWord : result)
    alert(`La palabra más larga es ${longestWord}`)
}

findLongestWord();