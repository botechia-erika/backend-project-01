const num = process.argv[2]
if(!num){
    console.log('numero nao registrado')
}
else if(num %2 ===0 ){
    console.log( num + " É PAR")
    }
else if(num %2 ===1 ){
     console.log( num + " É ÍMPAR")
     }
else{
 console.log(num + 'nao e numero')
 }
