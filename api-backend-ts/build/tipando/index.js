"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const frota_1 = require("./frota");
function buscarCarrosPorMarca(frota, marca) {
    if (marca === undefined) {
        return frota;
    }
    else {
        return frota.filter((Tcarro) => {
            return Tcarro.marca === marca;
        });
    }
}
const query = process.argv[3];
console.log(buscarCarrosPorMarca(frota_1.frota, query));
//# sourceMappingURL=index.js.map