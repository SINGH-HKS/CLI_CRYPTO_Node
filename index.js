#!/usr/bin/env node

const axios = require('axios')

  
const url=`https://api-pub.bitfinex.com/v2/ticker/t${process.argv.slice(2)[0]}`
console.log(process.argv)
axios({
    method:'GET',
    url :url,
    
}).then(res=>{
    const price=res.data[0]
    const message=`Price of ${process.argv.slice(2)[0]} is $ ${price}`
    console.log(message)
    textfile(message)
}).catch(err=>{
    const message='No such currency is found'
    console.log(message)
    textfile(message)
})
 
const fs = require('fs')

function textfile(message){
    const fileName = process.argv[2]
    fs.writeFileSync(`${process.cwd()}/${fileName}.txt`,`${message}`)
}


