let distance = parseFloat(prompt("Quanto è distante in chilometri la tua destinazione?"));
let cost = distance*0.21;
let age = parseInt(prompt("Qual è la tua età?"));
let minor_discount = cost * 20 / 100;
let over_65_discount = cost * 40 / 100;

if (age < 18) {
    console.log((cost - minor_discount).toFixed(2));
} else if (age >= 64) {
    console.log((cost - over_65_discount).toFixed(2));
} else {
    console.log(cost.toFixed(2));
}
