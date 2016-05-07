function fibIter(n){
    var a = 0, b = 1;
    console.log('i', 'a', 'b', 'result');
    var i = 1;
    for (; i < n; i++) {
        var result = a + b;
        console.log(i, a, b, result);
        a = b;      // next a is current b
        b = result; // next b is the result of this iteration
    }
    return result;
}
// console.log('f(7)='+fibIter(7));
module.exports = fibIter;
