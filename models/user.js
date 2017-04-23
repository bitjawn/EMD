var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    bcrypt = require('bcrypt-nodejs');
    
var userSchema = new Schema({
    picture: {type: String, required: false},
    uname: {type: String, required: false},
    fname: {type: String, required: true},
    lname: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    admin: {type: Boolean, required: true}
});

userSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(5), null);
};

userSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
};

module.exports = mongoose.model('User', userSchema);