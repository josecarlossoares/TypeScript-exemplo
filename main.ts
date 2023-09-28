function gerarId (){
    return lista.length + 15
}
class Pessoa {
    id: number;
    nome: string;
    idade: number;
    genero: string;
    constructor(nome, idade, genero){
        this.nome = nome;
        this.idade = idade;
        this.genero = genero;

    };

}

// var cliente = new Pessoa('julia donato', 26, 'Femea')
// console.log(cliente)

class Funcionario extends Pessoa {
    cargo: string;
    constructor(nome, idade, genero, cargo){
        super(nome, idade, genero);
        this.cargo = cargo;
    } 

}

var lista: Array<Funcionario> = []

var gestor = new Funcionario('jose', 26, 'Macho', 'Gestor de projeto')
gestor.id = gerarId()
lista.push(gestor)
var tester = new Funcionario('Maria', 26, 'Femea', 'QA')
tester.id = gerarId()
lista.push(tester)
var dev = new Funcionario('joão', 26, 'Macho', 'Desenvolvedor')
dev.id = gerarId()
lista.push(dev)
var vendedor = new Funcionario('edu', 26, 'Macho', 'Vendedor')
vendedor.id = gerarId()
lista.push(vendedor)


for (let index = 0; index < lista.length; index++) {
    const element = lista[index];
    console.log(element.id)
}

// var titulo: string | number