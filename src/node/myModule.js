module.exports.square = function square(x) {
    return x**2; 
}; 

module.exports.addMult = (input1, input2) => {
    add = input1 + input2; 
    mult = input1 * input2; 
    return { add: add, mult: mult };
}; 
