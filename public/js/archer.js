import Guerrier from './guerrier.js'

class Archer extends Guerrier {
    constructor(nom, age, force, vie, fleche) {
        super(nom, age, force, vie)
        this.fleche = fleche
    }
}

let archer = new Archer('Elias', 23, 28, 200, 20)
console.log(archer);

