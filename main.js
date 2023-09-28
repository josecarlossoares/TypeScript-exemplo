var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
function gerarId() {
    return lista.length + 15;
}
var Pessoa = /** @class */ (function () {
    function Pessoa(nome, idade, genero) {
        this.nome = nome;
        this.idade = idade;
        this.genero = genero;
    }
    ;
    return Pessoa;
}());
// var cliente = new Pessoa('julia donato', 26, 'Femea')
// console.log(cliente)
var Funcionario = /** @class */ (function (_super) {
    __extends(Funcionario, _super);
    function Funcionario(nome, idade, genero, cargo) {
        var _this = _super.call(this, nome, idade, genero) || this;
        _this.cargo = cargo;
        return _this;
    }
    return Funcionario;
}(Pessoa));
var lista = [];
var gestor = new Funcionario('jose', 26, 'Macho', 'Gestor de projeto');
gestor.id = gerarId();
lista.push(gestor);
var tester = new Funcionario('Maria', 26, 'Femea', 'QA');
tester.id = gerarId();
lista.push(tester);
var dev = new Funcionario('joão', 26, 'Macho', 'Desenvolvedor');
dev.id = gerarId();
lista.push(dev);
var vendedor = new Funcionario('edu', 26, 'Macho', 'Vendedor');
vendedor.id = gerarId();
lista.push(vendedor);
for (var index = 0; index < lista.length; index++) {
    var element = lista[index];
    console.log(element.id);
}
// var titulo: string | number
