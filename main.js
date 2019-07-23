//Fibonacci recursive standard function

function recFib(num){
  if(num < 0){
    	console.log("There is no negative number on the Fibonacci sequence");
  }
	if(num <= 1){
		return num;
	}
	return recFib (num - 2) + recFib (num - 1);
}
console.log(recFib(11));

//----------------------------------------------------------------------------

//Fibonacci with Memoization

//1
const memoFib = function() {
  let memo = {}
  return function fib(n) {
    if (n in memo) { return memo[n] }
    else { 
      if (n <= 1) { memo[n] = n } 
      else { memo[n] = fib(n - 1) + fib(n - 2) } 
      return memo[n]
    }
  }
  console.log(fib(11));
}

//2
function fib2(n) {
	let memoObj = {}
    if (n in memoObj) { return memoObj[n] }
    else { 
      if (n <= 1) { memoObj[n] = n } 
      else { memoObj[n] = fib2(n - 1) + fib2(n - 2) } 
      return memoObj[n]
    }
}
 console.log(fib2(7));

//----------------------------------------------------------------------------

//Factorial recursive standard function

function recursiveFac(n) {
  if (n === 0) { return 1 } 
  else { return n * recursiveFac(n - 1) }
}

//----------------------------------------------------------------------------

//Factorial with Memoization

function memoFacContent(string){
 return string;
}

function memoFac(n) {
	  let memo = {};
	  if (memo[n]) { return memo[n];} 
	  else { 
	    if (n === 0) { memo[n] = 1; } 
	    else { memo[n] = n * memoFac(n - 1); }
	    return memo[n]; 
	}
}

console.log(memoFacContent("The factorial number is ") + memoFac(6));


// Those functions were based on this tutorial https://medium.com/@reallygordon/implementing-memoization-in-javascript-5d140bb04166
