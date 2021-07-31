
let string1 = 'neki prvi string'
let string2 = 'neki drugi string koji je i duzi string'
let string3 = 'neki treci string koji je dugacak'
let string4 = 'neki cetvrti'


// 1. Proveriti koji je string najduzi i ispisati samo njega

console.log (string1.length, string2.length, string3.length, string4.length)

let najduziString = string2
console.log (najduziString)



// 2. Ispisati najkraci string koji sadrzi rec string 

console.log (string1.includes("string"), string2.includes("string"), string3.includes("string"), string4.includes("string"))

let najkraciString = string1
console.log (najkraciString)


//3. sastaviti sve stringove bez prve reci "neki" osim ako string sadrzi deo recenice "string koji je", takve stringove izostaviti

console.log (string1.slice(5) + ' ' + string4.slice(5))



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