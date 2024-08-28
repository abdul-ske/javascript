let score="33"
let value=Number(score)//string to Number coversion
let score1=null
let value1=Number(score1)//null object to Number coversion
let value2="abc23"// if u try to print this after converting to Number this will give like 'Nan=Not a number'
let score2=Number(value2) 
let unDefined=undefined
let unDefined1=Number(unDefined)
let testBool=""//if u put empty like this and convert to bool then it will give false otherwise it will give true
let testBool1=Boolean(testBool)
let x=1
let y=2
let a=++x;let b=++y

console.log(`x:${a},y:${b}`)
//console.log(testBool1)
/*
1=>true;0=>false;""=>false;"q"=>true
 */
let x1=Number("23b")
console.log("x ",x)
console.log(typeof(x))
let y1=34
console.log("y type ",typeof y)
let str1=String(y)
console.log("str1 type",typeof str1)
console.log("str1 ",str1)
let str3=String(5+"123")
console.log(str3)
let dte=new Date()
console.log(dte)
console.log(String(dte))
console.log(dte)
console.log(Number(dte))
let bool=Boolean(0)
console.log(bool)