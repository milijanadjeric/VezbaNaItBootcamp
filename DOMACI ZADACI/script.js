
let string1 = 'neki prvi string'
let string2 = 'neki drugi string koji je i duzi string'
let string3 = 'neki treci string koji je dugacak'
let string4 = 'neki cetvrti'

let maxString
let minString
let allString

// 1. Proveriti koji je string najduzi i ispisati samo njega

if (string1.length > string2.length && string1.length > string3.length && string1.length > string4.length) {
    maxString = string1
} else if (string2.length > string1.length && string2.length > string3.length && string2.length > string4.length) {
    maxString = string2
} else if (string3.length > string1.length && string3.length > string2.length && string3.length > string4.length) {
    maxString = string3
}
  else {
    maxString = string4
}
console.log (maxString)

// 2. Ispisati najkraci string koji sadrzi rec string 

if (string4.length < string3.length && string4.length < string2.length && string4.length < string1.length && string4.includes('string')) {
    minString = string4
} else if (string3.length < string2.length && string3.length < string1.length && string3.length < string4.length && string3.includes('string')) {
    minString = string3
} else if (string2.length < string1.length && string2.length < string3.length && string2.length < string4.length && string2.includes('string')) {
    minString = string2
}
  else {  
    minString = string1
}
console.log(minString)


//3. sastaviti sve stringove bez prve reci "neki" osim ako string sadrzi deo recenice "string koji je", takve stringove izostaviti


if (!string2.includes('string koji je') && !string3.includes('string koji je')) {
    allString = string2.slice(5) + string3.slice(5)
}
else if (!string1.includes('string koji je') && !string4.includes('string koji je')) {
    allString = string1.slice(5) + string4.slice(5)
}
console.log (allString)


//  4. Na osnovu kolicine i cene artikla ispisati ukupnu cenu
//Kolicina je zadata u gramima
//cena je zadata po kilogramu


let cena = 1300
let kolicina = 50 / 1000
let ukupnaCena = cena * kolicina

console.log (ukupnaCena)


// Dopuniti 4. zadatak sa casa kolicinom novca, i ispisati racun (ako nema dovoljno novca ispisati poruku)

let novac = 50
let racun = novac - ukupnaCena

if (novac > ukupnaCena) {
    console.log (racun)
} else if (novac < ukupnaCena) {
    console.log ('nemate dovoljno novca')
}