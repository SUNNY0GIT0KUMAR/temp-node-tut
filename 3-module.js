//CommonJS, every file is module (by default)
//Module - Encapsulated Code (only share minimum)
const names = require(`./4-names`)
const sayHi = require(`./5-utils`)

sayHi(`Sunny`)
sayHi(names.john)
sayHi(names.peter)


//alteranate-flavour
const data=require('./6-Alteranate-flavour')
console.log(data);


//Mind-Grenade
require('./7-mind-grenade')