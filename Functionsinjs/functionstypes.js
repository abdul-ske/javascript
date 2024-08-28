const user={
    username:"abdul",
    price:223,
    function1:function f1(username)
    {
        console.log(this.username);// this will point to the current context
        
    }
}
user.function1("rehaman");
//()=>{} syntax of arrow function
const add=(number)=>{
    return number
}
console.log(add(1))
//pure arrow without return
const add1=(num1,num2)=>(num1+num2)
const add2=()=>({username:"abdul"})
console.log(add1(1,2))
console.log(add2())
//IIFE:Immediatly invoked function expressions
//Normal function call 
const f1=function ()
{
    console.log("connected")
}
f1();//when u r executing iife one by one u have to place ; after calling 
//IIFE
(function chai(){
    console.log("invoke")
})();
 (()=>{console.log("invoked")})()