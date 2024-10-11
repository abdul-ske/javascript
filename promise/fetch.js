fetch('https://jsonplaceholder.typicode.com/po00sts/1').then(function f(response)
{
    if(!response.ok)
    {

        console.log(`${response.status}  ${response.statusText}`);
        throw new error('Network response was not ok ' + response.statusText)
    }
    else{
        console.log(`${response.status}  ${response.statusText}`);
    return(response.json())
    }
}).then(function f2(resp1){
    console.log(resp1); 
}).catch(function f3(error)
{
console.log(error);
})
