// Les 5 opérations arithmétiques + - / * %(modulo, reste de la division entière)

let n1 = 12;
let n2 = 45;
let n3 = 2.3;

console.log(n1+n2);
console.log(n3-n2);
console.log(n1*n2);
console.log(n2/n3);
console.log(n2%n1);

console.log("n1 vaut " + n1);

// l'addition dans differents cas
// 12 + 12   =  24    // number + number = number
// "12" + 12 =  1212  // = "12" + "12" le number est converti en string + concaténation
// "5" * 6   =  30    // = 5 * 6 la string est convertie en number

// Concaténation = collage de 2 string
console.log("Bonjour" + " les amis");

// (Accessoire) Gabarit de chaîne (avec back tick)
console.log(`la valeur de n1 est ${n1}`);
console.log("la valeur de n1 est " + n1);

