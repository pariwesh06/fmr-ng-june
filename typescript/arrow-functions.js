var numbers = [4, 5, -1, 10];
// numbers.sort(function(a:number ,b:number ){//callback function
//   console.log(this);
//   return b-a;
// });
// numbers.sort((a:number ,b:number )=>{//callback function
//   console.log(this);
//   return b-a;
// });
var result = numbers.filter(function (element, index) {
    console.log(element, index);
    return element % 2 == 0;
});
console.log(numbers);
console.log(result);
