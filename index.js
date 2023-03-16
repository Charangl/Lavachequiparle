const userInfo = require('./information');

var cowsay = require("cowsay");

console.log(cowsay.say({
    text : `Hi, my name is ${userInfo.name} from ${userInfo.campus} campus`,
    e : "oO",
    T : "U "
}));
