const setname = new Set([1,2,3,4]);
//console.log(typeof setname)
setname.add("1")

// for(let i=0;i<5;i++)
// {
//     console.log(setname[i])//not possible using index so updating is also not possible
// }
  for(x of setname)
  {
      console.log(x)
}
 /******************************************************************************************/
 //sets
 const fruits =new Map([["apple",500],[200,"mango"]])
 fruits.set(2,"heads")//adds new key value pair to the map if the key is already present
                      // then it updates value of that particular key
 console.log(fruits.get(2));