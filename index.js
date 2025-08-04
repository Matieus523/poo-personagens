// Class mãe (Abstração)
class Personagens {
    constructor(nome){
        this.nome = nome;
    }

    atacar(){
        console.log(`${this.nome}está atacando.`);
    }
}

// Classa filhas (Herança)
class Guerreiro extends Personagens {
    atacar(){
        console.log(`${this.nome} ataca com espada!`);
    }
}

class Mago extends Personagens{
    atacar(){
        console.log(`${this.nome}lança um feitiço!`);
    }
}

class Assassino extends Personagens{
    atacar(){
        console.log(`${this.nome}coloca sino no forno!`);
    }
}

//polimorfismo
const personagens = [
    new Guerreiro("Arthur"),
    new Mago ("Merlin"),
    new Assassino("Ezio")
];

personagens.forEach(p => p.atacar());