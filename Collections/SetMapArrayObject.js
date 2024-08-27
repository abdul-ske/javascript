/*Array*/
/*Array it can be accessed through index*/ 
let a=[1,2,3,4]
for(let x=0;x<4;x++)
{
    console.log(a[x])
}
/*Object*/
/*here only string is acceptable inthe key palce */
let o={
    name:"abdul",age:25,email:"srehman.com"
}
/*to access the object type*/
o.name
o.age
o.email

console.table([o.name,o.age,o.email])
/**Set**/
/*
-->it accepts any type of data inside a data
 -->it cannot be accessed through index
 -->so it is immutable(cannot be changed)
 -->But we can append at the end using .add() method*/
const myset=new Set([1,2,3,"abdul"])
myset.add(45)
//myset.get(0) is not possible
for(const x of myset)
{
    console.log(x)
}
/**********Map***********/
const myMap=new Map([["abdul","name"],[1,'roll'],[100,1]])
//we can add and change value accourding to the key
myMap.set(4,"adding")
//To access the map use .get(key)
console.log(myMap.get(4))
let str=new String("Abdul");
console.log(str);
console.log(str.toUpperCase())
console.log(str.toLowerCase())
console.log(str.charAt(2))
console.log(str.indexOf('A'))
const dup=str.substring(0,5)
//const dup1=str.slice(-1,-2)
//trim()
//replace('where','what')
//includes('substr') true or false
//split(seperator)
console.log(dup)
let x=Number("23b")
console.log("x ",x)
console.log(typeof(x))
let y=34
console.log("y type ",typeof y)
let str1=String(y)
console.log("str1 type",typeof str1)
console.log("str1 ",str1)
let str3=String(5+"123")
console.log(str3)