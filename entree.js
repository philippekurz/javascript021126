// Entrée : récupérere une valeur fournie par un utilisateur ou un dispositif
// Une seule instruction : prompt

// Affiche une popup avec un message
alert("Message");

// Affiche un popup avec un message et un champ de saisie
prompt("Quel est votre nom ? ");

// Récupérer la valeurs saisie par l'utilisateur 
let nom = prompt("Quel est votre nom ? ");
console.log(nom);

// prompt retourne toujours un string
let nombre1 = prompt("Veuillez entre un nombre ");
console.log(typeof nombre1);

let nombre2 = Number(prompt("Veuillez entre un nombre "));
console.log(typeof nombre2);