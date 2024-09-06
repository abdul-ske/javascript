// const p1=new Promise(function(resolve,reject)
// {
// //do any async task
// //DB calls,cryptocalls,network calls
// setTimeout(function(){
//     console.
//     log('async task is complete');
//     resolve()
// },1000)
// })
// //after create we have to consume
// p1.then(function(){
//     console.log("promise consumed");
// })
// console.log("********************************************");

// new Promise(function(resolve,reject)
// {
// //do any async task
// //DB calls,cryptocalls,network calls
// setTimeout(function(){
//     console.
//     log('async task is complete');
//     resolve({username:"midnyt code",email:"midnyt@gmail.com"})
// },1000)
// }).then(function(user){
//     console.log(user);
// })
const p1=new Promise(function(resolve,reject){
    let x=true;
    if(x)
    {
        resolve({username:"midnyt code",email:"midnyt@gmail.com"})
    }
    else{
        reject("error:something went wrong")
    }
})
p1.then(function(user)
{
    console.log(user)
    return user.username;

}).then(function(username){
    console.log(username);
}).catch(function(error){
    console.log(error)
})
