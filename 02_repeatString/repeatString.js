const repeatString = function() {
    let result = "";

    for (let i = 0; i < Math.floor(Math.random() * 100 + 1); i++) {
       result += "hey";
    };
    return result;
};
// Do not edit below this line
module.exports = repeatString;
