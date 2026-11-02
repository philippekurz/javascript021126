// On doit parfois executer un code différent selon un certaine condition
// Si a > b alors on affiche "Bonjour" sinon on affiche "Au revoir"

let a = 12;
let b = 14;

if (a > b)   
    {                         // Si a est plus grand que b, 
    console.log("Bonjour");   // On ecrit Bonjour, bloc 1
    alert("Bonjour");
    }
else                          // Sinon
    console.log("Au revoir"); // On écrit Au revoir, bloc 2

// IMPORTANT !! Si un bloc contient plus d'une instruction, il faut l'encadrer par {}

// Opérateurs de comparaison
// > plus grand que, < plus petit que, >= plus grand ou égal, <= plus petit ou egal, == ou ===

/* (bloc de commentaires)
5 === 5 => vrai
"5" === 5 => faux
"5" == 5 => vrai
*/