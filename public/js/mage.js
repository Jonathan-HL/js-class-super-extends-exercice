import Humain from './humain.js'

class Mage extends Humain {
    constructor(nom, age, magie) {
        super(nom, age);
        this.magie = magie;
    }
}

let mage1 = new Mage('Mage 1', 23, 20)
let mage2 = new Mage('Mage 2', 29, 12)
let mage3 = new Mage('Mage 3', 23, 20)
let mage4 = new Mage('Mage 4', 29, 12)

console.log(mage1);
console.log(mage2);
console.log(mage3);
console.log(mage4);


