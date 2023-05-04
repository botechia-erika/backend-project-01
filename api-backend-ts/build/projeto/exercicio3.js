const CADASTRADO = 1;
const PUBLIC = 0;
var TipoUsuarios;
(function (TipoUsuarios) {
    TipoUsuarios[TipoUsuarios["Cadastrado"] = 1] = "Cadastrado";
    TipoUsuarios[TipoUsuarios["Public"] = 0] = "Public";
})(TipoUsuarios || (TipoUsuarios = {}));
const astrodev = { id: "id0", name: "Astrodev", email: "email@gmail.com", password: "astroDEV23", cadastrado: CADASTRADO };
console.log(astrodev);
//# sourceMappingURL=exercicio3.js.map