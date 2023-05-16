import {loveData} from './../data/emojis.js'
const pEmojis = () =>{return(Math.floor(Math.random() * (loveData.length) ));}


const randomEmoji = ()=>{
return ` EMOJI SORTEADO  : ${(loveData[pEmojis()])}`
}

console.log(randomEmoji())