import { countries } from "./../data/countries.js";

console.log([countries.length])

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

  const paisRandom = getRndInteger(0, 250)

const c1 = () =>{return(Math.floor(Math.random() * (countries.length) ));}




const showRandom = ()=>{return (countries[c1()])}

console.log(showRandom())