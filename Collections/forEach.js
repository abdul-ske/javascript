const a=[1,2,3,4,5]
//foreach normal function
// a.forEach(function (val){
//     val++
//     console.log(val)
// })
//forEach arrow function
// a.forEach((value)=>{
//     console.log(value)
// })
a.forEach(f1)//need to give only function reference do not execute
function f1(val)
{
    console.log(val)
}
const b=[
    {key1:"abdul",
    key4:"shaikabd"
    },
    {key1:"rehaman"},
    {key1:"shaik"}
]
b.forEach((item)=>{
    console.log(item.key1)
})
/** filter()**/
const x=[1,2,3,4,5,6,7,8,9,10]
const nu=x.filter((item1)=>item1>5)
    console.log(nu)
