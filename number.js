if (Number.isInteger(42)) {
    console.log('42 is an integer');
}   else {
    console.log('42 is not an integer');
}

console.log(Number.MIN_VALUE); 
console.log(Number.MAX_VALUE);
console.log(Number.POSITIVE_INFINITY);
console.log(Number.NEGATIVE_INFINITY);

let aNum = 10 / "hello";
if (Number.isNaN(aNum)) { 
    console.log('aNum is NaN');
}   else {
    console.log('aNum is not NaN');
}

console.log((5/4).toFixed(1)); // "1.2"
console.log(Math.ceil(5/4)); // "2"
console.log(Math.floor(5/4)); // "1"