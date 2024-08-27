/*Function can be defined in 2 ways*/
/*way 1
--> here function call can be possible before and after the definition*/
f1()
function f1()
{
    console.log("in f1")
}
f1();
/**************************************************************/
/*way 2
--> Here only after*/
//fun() it will throw error as fun is no defined
const fun=function f2()
{
    console.log("in f2")
}
fun();
/*funtion with return type*/
// here no need to specify return type 
function fr()
{
    return 2;
}
let x=fr();
//console.log(fr()) can directly print
console.log(x)