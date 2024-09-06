// const p1=new Promise(function f1(resolve,reject){
//     let x=true
//     if(!x)
//     {
//      resolve("in resolve")
//     }
//     else
//     {
//      reject("error:went wrong")
//     }
// })
// p1.then(function f1(x)
// {
//     console.log(x);
//     return x[0]
// }).then(function f2(x){
//     console.log(x)
// }).catch(function f3(f)
// {
// console.log(f)
// })
// // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const p1=new Promise(function(resolve,reject){
    setTimeout(function f2(){
        let x=true
        if(!x)
        {
            resolve({user:"midnyt",passcode:"1223"})
        }
        else{
            reject("not eligible")
        }
    },1000)
})
const result=(async  ()=> {
    try{
        const response=await p1
        console.log(response)   
        return response     
    }
    catch(error)
    {
        console.log(error);
        return error   
    } 
})()
setTimeout(function f1()
{
    console.log(result)
},5000)
