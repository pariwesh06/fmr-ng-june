const numbers = [4, 5, -1, 10];
// numbers.sort(function(a:number ,b:number ){//callback function
//   console.log(this);
//   return b-a;
// });
// numbers.sort((a:number ,b:number )=>{//callback function
//   console.log(this);
//   return b-a;
// });
// const result = numbers.filter(function (element, index) {
//   return element % 2 == 0;
// })
const result = numbers.filter( (element, index) => element % 2 == 0);

console.log(numbers);
console.log(result);
