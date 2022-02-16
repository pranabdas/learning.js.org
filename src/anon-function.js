var a = 5/6; 
var b = 7/9; 

var theBiggest = function() {
    a > b ? result = a : result = b;
    return result; 
}

var theBiggest2 = function(x, y) {
    x > y ? result = x : result = y; 
    return result;
}

var theBiggest3 = (function(a, b) {
    a > b ? result = a : result = b;
    return result; 
})(3/4, 5/7)
