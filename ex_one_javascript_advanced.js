class Animal {
    constructor(nome) {
        this.nome = nome;
    }
    fazerSom() {
        console.log('Fazendo um som genérico');
    }
}

class Dog extends Animal {
    fazerSom() {
        console.log('Au au!');
    }
}

const myDog = new Dog('Rex');
myDog.fazerSom(); // Saída: Au au!