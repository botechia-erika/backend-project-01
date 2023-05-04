const CADASTRADO = 1;
const PUBLIC = 0;
var Tipo;
(function (Tipo) {
    Tipo[Tipo["Cadastrado"] = 1] = "Cadastrado";
    Tipo[Tipo["Public"] = 0] = "Public";
})(Tipo || (Tipo = {}));
const cliente1 = { id: "id0", name: "Astrodev", email: "email@gmail.com", password: "astroDEV23", cadastrado: CADASTRADO };
const produto1 = {
    id: 'DAF-0921',
    marca: 'Toyota',
    modelo: 'Yaris',
    ano: 2019,
    preco: 90000,
    categoria: CADASTRADO,
    img: 'https://image.webmotors.com.br/_fotos/anunciousados/gigante/2023/202304/20230426/toyota-yaris-1.5-16v-flex-xls-connect-multidrive-wmimagem08562975315.jpg?s=fill&w=552&h=414&q=60'
};
const venda1 = {
    idCompraCliente: "cc1",
    cliente_idCliente: cliente1.id,
    produto_idProduto: produto1.id,
    discontoAplicado: 20,
    numeroParcelas: 2,
    valorParcela: (produto1.preco * 0.8) / 2,
    valorFinalCliente: produto1.preco * 0.8
};
console.log(cliente1);
console.log('******************');
console.log(produto1);
console.log('******************');
console.log(venda1);
//# sourceMappingURL=exercicio3.js.map