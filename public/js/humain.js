export default class Humain{
    constructor(nom, age){
        this.nom = nom;
        this.age = age
    }
}

let humain1 = new Humain('Humain 1', 50)
let humain2 = new Humain('Humain 2', 43)
let humain3 = new Humain('Humain 3', 23)

console.log(humain1);
console.log(humain2);
console.log(humain3);
