import colors from 'colors';
const log1 = console.log(colors.green(process.argv[2]))
const start = console.log(colors.blue('log'))
const err = (colors.red('error 👿'))
const a = 1
const b = 2
const b1A = (a, b)=> {
    try {
        (a + b === 3) ? (start) : (err)
    } catch (err


        ) {
        const readError = (err) => JSON.stringify("valor: " + err.error + "\n")
        console.log(readError())
    }
}


console.log(b1A(a, b))

