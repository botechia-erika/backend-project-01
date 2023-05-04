import {frota, TCarro} from "./frota"
//frota e array de carros e marca string
function buscarCarrosPorMarca(frota:TCarro[], marca?:string) {
  if (marca === undefined) {
    return frota
  }
else{
  return frota.filter(
    (Tcarro) => {
      return Tcarro.marca === marca
    }
  )
}
}
const query = process.argv[3]

/*console.log('*******FIAT********')
console.log(buscarCarrosPorMarca(frota, "Fiat"))
console.log('*******CHEVROLET********')
console.log(buscarCarrosPorMarca(frota, "Chevrolet"))
console.log('*******TOYOTA********')
console.log(buscarCarrosPorMarca(frota, 'Toyota'))
console.log('*******FORD********') */
//console.log(buscarCarrosPorMarca(frota, "Fiat"))
/*refatorando
tornar marca opcional com signo de interrogação
*/
//console.log('*****FROTA COMPLETA SEM MARCA REFATORA MARCA? ********')
//console.log(buscarCarrosPorMarca(frota))
console.log(buscarCarrosPorMarca(frota, query))
//retorna frota completa



//console.log('*******MARCA HYUNDAI NAO EXISTE = []********')
//Ate momento se marca nao existe devolve array vazio!
//console.log(buscarCarrosPorMarca(frota, "fiat"))
//producindo erro
//console.log(buscarCarrosPorMarca(frota,1))
//console.log(buscarCarrosPorMarca(frota, "Chevrolet"))

