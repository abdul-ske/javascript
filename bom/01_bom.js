// //only var variable become window property no let and const
// function f1()
// {
// for(let i=0;i<arguments.length;i++)
// {
//     console.log(arguments[i]);
    
// }
// }
// f1(1,2,3)
// 
function sum(...numbers) {
    console.log(numbers[0])
    return numbers.reduce((acc, num) => acc + num, 0);
  }
  
  console.log(sum(1, 2, 3, 4)); // Output: 10
  