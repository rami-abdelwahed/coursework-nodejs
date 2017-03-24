var add = (a, b) => a + b;

var square = (x, callback) => {
    setTimeout(() => {
        callback(x * x);
    }, 1000);
} 

var updateUser = (user, fullName) => {
    var nameParts =  fullName.split(' ');
    user.firstName = nameParts[0];
    user.lastName = nameParts[1];    
};

module.exports = {
    add,
    square,
    updateUser
};