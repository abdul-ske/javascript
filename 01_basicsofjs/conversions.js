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