// var number = 12354987,
//     output = [],
//     sNumber = number.toString();

// for (var i = 0, len = sNumber.length; i < len; i += 1) {
//     for(var j = i;  j < )
//     output.push(+sNumber.charAt(i) +sNumber.charAt(i+1));
// }

// console.log(output);

function countPrimeStrings(s) {
    
    var digits = s.split('');
    var realDigits = digits.map(Number)
    
    function isPrime(num) {
        for(var i = 2; i < num; i++)
          if(num % i === 0) return false;
        return num > 1;
    }

    var numOfPrimeNumber = 0;
    for(var i = 0; i < realDigits.length; i++){
        if(isPrime(i)){
            numOfPrimeNumber += 1;
        }
    }

    return numOfPrimeNumber;


    // var groupDigits = [];
    // for(var i = 0; i < realDigits.length; i++){
    //     function factorial(num) {
    //         if (num < 0) return;
    //         if (num === realDigits.length) return ;
    //         groupDigits.push(num * factorial(num + 1));
    //     }
    //     console.log(factorial(6));
    //     // groupDigits.push(realDigits[i])
    //     // console.log(isPrime(Number(i)));
    // }
    // console.log(groupDigits);
}
console.log(countPrimeStrings('3172'));



// var n =  123456789;
// var digits = (""+n).split("");
// console.log(digits);