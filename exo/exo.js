// let couleur = "truc";

// if (couleur === "rouge") {
//     console.log("Arrêtez vous !");
// }else if (couleur === "vert") {
//     console.log("Avancez !");
// }else if (couleur === "orange") {
//     console.log("Préparez vous à vous arrêter !");
// }else {
//     console.log("Mauvaise couleur !");
// };

// let tableau = ["*", "**", "***", "****", "*****"];

// for( let i = 0; i < tableau.length; i++){
//     console.log(tableau[i]);
// }

// let tableau = [];

// for( let i = 0; i < 5; i++){
//     tableau.push("*");
//     console.log(tableau[i]);
// }
// let tableau = [];

// for( let i = 0; i < 5; i++){
//     tableau.join("")
//     tableau.push("*");
//     console.log(nombre);
// }

// let tableau = [];

// for( let i = 0; i < 5; i++){
//     let nombre = tableau.join("")
//     tableau.push("*");
//     console.log(nombre);
// }

// let tableau = [];

// for( let i = 0; i < 5; i++){
//     tableau.push("*");
//     let nombre = tableau.join("")
//     console.log(nombre);
// }

// let etoile = "";

// for(let i = 0; i < 5; i++){
//     etoile = etoile + "*";
//     console.log(etoile);
// }

// let nombre = 0;

// while (nombre <= 100) {
//     if (nombre % 3 === 0 && nombre % 5 === 0 ){
//         console.log("FizzBuzz");
//     } else if (nombre % 3 === 0 ){
//         console.log("Fizz");
//     } else if (nombre % 5 === 0 ){
//         console.log("Buzz");
//     } else {
//         console.log(nombre);  
//     }
//     nombre++
// };

// Exercice 1
// function nom (prenom){
//     console.log("Bonjour ", prenom, "!")
// }
// nom("Michel");

// Exercice 2
// function addition(numbre1, nombre2) {
//     console.log(numbre1 + nombre2);
// }

// addition(1,2)

// Exercice 3
// function perte (cout, prixVente){
//     if (cout > prixVente){
//         console.log("Perte de ", (cout - prixVente))
//     } else {
//         console.log("Gain de ", (prixVente - cout));
//     }
// }

// perte(50,10)

// Exercice 4
// function comparateur(number1, number2, number3){
//     if (number1 > number2 && number1 > number3) {
//         console.log(number1);
//     } else if (number2 > number1 && number2 > number3) {
//         console.log(number2);
//     }else {
//         console.log(number3);
//     }
// }

// comparateur(8,5,3)

// Exercice 5
// function plusGrand(...nombres) {
//     let nombre = 0
//     for (let i = 0; i < nombres.length; i++) {
//         let number2 = nombres[i]
//         if (nombre > number2) {
//             nombre = nombre
//         } else {
//             nombre = number2
//         }
//     }  
//     console.log(nombre);
// }

// plusGrand(1,18,3,8,5,6,7)

// Exercice 6
// function moyenne(prenom, ...nombres) {
//     let numberTotal = 0
//     for (let i = 0; i < nombres.length; i++) {
//        let number = nombres[i]
//        numberTotal = numberTotal + number
//    }  
//    numberTotal = numberTotal / nombres.length
//    if (numberTotal >= 0 && numberTotal <= 4) {
//     console.log(prenom, numberTotal, "Catastrophique");
//    } else if (numberTotal >= 5 && numberTotal <= 10) {
//     console.log(prenom, numberTotal, "Insuffisant");
//    } else if (numberTotal >= 11 && numberTotal <= 14) {
//     console.log(prenom, numberTotal, "Passable");
//    } else if (numberTotal >= 15 && numberTotal <= 18) {
//     console.log(prenom, numberTotal, "Bien");
//    } else if (numberTotal >= 19 && numberTotal <= 20) {
//     console.log(prenom, numberTotal, "Trés bien");
//    } else {
//     console.log("Note non valide");
//    }
// }

// moyenne("Adaz", 20,20,20)

// Exercice 7
// function opération(x) {
//     console.log(eval(x));
// }

// opération(4 * 2)

// Exercice 8

// function etoile(etoiles) {
//     let etoile = "";

//     for( let i = 0; i < etoiles ; i++){
//         etoile = etoile + "*";
//         console.log(etoile);
//     }
//     for( let i = 0; i < etoiles ; i++){
//         etoile = etoile.replace("*","");
//         console.log(etoile);
//     }
// }

// etoile(5)

// let nom = prompt("Salut")
// function afficherBonjour(nom) {
//     if (nom !="moi") {
//         alert("je veux pas de toi " + nom)
//     } else{
//         alert("Bonjour " + nom)
//     }
// }

// afficherBonjour(nom)

// let cafe = prompt("voulez vous un café ?")
// function vouloirCafe(cafe) {
//     if (cafe === "oui") {
//         alert("Votre café.");
//     } else if (cafe === "non"){
//         alert("Ok");
//     } else {
//         alert("tu es chiant")
//         vouloirCafe(prompt("voulez vous un café ?"))
//     }
// }

// vouloirCafe()

// function vouloirCafe() {
//     let cafe;
//     do {
//         cafe = prompt("Voulez-vous un café ? (oui/non)");
//         if (cafe !== "oui" && cafe !== "non") {
//             alert("tu es chiant");
//         }
//     } while (cafe !== "oui" && cafe !== "non");
    
//     if (cafe === "oui") {
//         alert("Votre café.");
//     } else if (cafe === "non"){
//         alert("Ok");
//     }
// }

// vouloirCafe();


// let unNombre = prompt("Donne un numbre entre 10 et 20")
// function entre10et20(unNombre) {
//     if (unNombre > 20) {
//         alert("Moins");
//         entre10et20(prompt("Donne un numbre entre 10 et 20"))
//     } else if (unNombre < 10){
//         alert("Plus");
//         entre10et20(prompt("Donne un numbre entre 10 et 20"))
//     } else {
//         alert("Bravo")
//     }
// }

// entre10et20(unNombre)

// const moneyTable = [500, 200, 20, 10, 5, 2, 0.5, 0.02]

// function howMuch(moneyStrawing) {
//     let rest = moneyStrawing;
//     moneyTable.forEach(money => {
//         let times = Math.floor(rest / money);
//         rest -= (money * times)
//         if (money >= 5) {
//             console.log("Billet(s) de " + money + ": " + times.toFixed(0));            
//         } else {
//             console.log("Pièce(s) de " + money + ": " + times.toFixed(0)); 
//         }
//     })
// }

// howMuch(2437.57)

// function plusProcheDe0(...temperatures) {
//     let procheDe0 = [];
//     temperatures.forEach(temperature => {
//         if (typeof temperature != "number") {
//             console.log(temperature +  "n'est pas un nombre.");
//         }
//         if (Math.abs(temperature) < Math.abs(procheDe0)) {
//             procheDe0 = temperature;
//         }
//     })
//     console.log("Le plus proche à zéro est: " + procheDe0 );
// }

// plusProcheDe0(10, 30, 50, 40, 2, -5, -6, 1)
