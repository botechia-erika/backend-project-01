import colors from 'colors';
const log = (colors.green(process.argv[2]))
const err = (colors.red('error 👿'))


const stars=(colors.yellow('*************************************************************'))

console.log(stars)
console.log('start labcommerce p1')
console.log(stars)

const arg2 = process.argv[2]
if(!arg2){
    console.log(err + " argumento nao fornecido ")
}else{


console.log(`${log}` + "🍌")
}

