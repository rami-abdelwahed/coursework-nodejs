var add = (a, b) => a + b;

var asyncAdd = (a, b, callback) => {
    setTimeout(() => {
        callback(a + b);
    }, 1000);
}

var square = (a) => a * a; 

var asyncSquare = (x, callback) => {
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
    asyncAdd,
    square,
    asyncSquare,
    updateUser
};