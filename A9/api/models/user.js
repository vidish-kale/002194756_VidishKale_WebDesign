const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcrypt')

const UserSchema = mongoose.Schema({
    fullName: {
        type: String,
        required: [true, 'fullName is required'],
        unique: [true, 'fullName already exists in the database'],
        validate: [name => validator.isAlpha(name, 'en-US', { ignore: ' ' }), 'Usernames must be alphanumeric'],
    },
    email: {
        type: String,
        require: [true, 'email address is required.'],
        unique: [true, 'That email address is already taken.'],
        lowercase: true,
        validate: [validator.isEmail, 'a valid email is required.']
    },
    password: {
        type: String,
        required: [true, 'password is required.'],
        validate: [pwd => {
            let minimum8 = pwd.length >= 8
            let hasUppercase = /[A-Z]/.test(pwd)
            let hasLowercase = /[a-z]/.test(pwd)
            let hasSpecial = /[#?!@$%^&*-]/.test(pwd)
            let hasNumber = /[0-9]/.test(pwd)
            console.log({ minimum8, hasUppercase, hasLowercase, hasSpecial, hasNumber })
            return minimum8 && hasLowercase && hasUppercase && hasSpecial && hasNumber
        }, 'Password must have minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character (#?!@$%^&*-)'],
    },
    created: {
        type: Date,
        default: Date.now
    }
})

UserSchema.pre('save', function (next) {
    this.password = bcrypt.hashSync(this.password, 12);
    next();
});

module.exports = mongoose.model('Users', UserSchema)