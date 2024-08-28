 const mymap=new Map()
 mymap.set('key1',"abdul")
 mymap.set('key2',"Ram")
 mymap.set('key3',"rehman")
 mymap.set('key4',"shaik")
 //not iteratable
//  for (const [key,value] in mymap) {
//     console.log(mymap.key,"-->",mymap.value)
//  }
 
 for (const [item,value] of mymap) {//to retrive key and value seperately
  console.log(item,":--",value) 
  }
 //object is not iteratable using for of
// const arr=[1,2,3,4,5]
// for (const item of arr) {
//     console.log(item)
// }
/**object **/
// const myobject={
//     js:'javascript',
//     cpp:"c++",
//     c:"c"
// }
// for (const key in myobject) {
//     console.log(key,"-->",myobject[key])
// }

