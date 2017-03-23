var add = (a, b) => a + b;

var updateUser = (user, fullName) => {
    var nameParts =  fullName.split(' ');
    user.firstName = nameParts[0];
    user.lastName = nameParts[1];    
};

module.exports = {
    add,
    updateUser
};