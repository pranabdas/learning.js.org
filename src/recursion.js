// note that recursion (calling function inside function) is slower than for 
// loops, however it could be more elegant. 

function power(base, exponent) {
   if (exponent == 0) {
     return 1;
   } else {
     return base * power(base, exponent - 1);
   }
}

console.log(power(3, 3))

