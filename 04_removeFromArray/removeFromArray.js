const removeFromArray = function(array, ...args) {
    

    let newArray = array;
    for (let i = 0; i < newArray.length; i++) {
        for (let j = 0; j < args.length; j++) {
            if (newArray[i] === args[j]) {
                newArray.splice(i, 1);
            }
        }
    }
    return newArray;
};
// Do not edit below this line
module.exports = removeFromArray;
